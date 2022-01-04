/**
 * This is a rewrite of the firebase/firebaseui-web-react auth button
 * so that it supports Next.js's requirement that no css be imported
 * in the node_modules directory. Instead, you should use this component
 * and make sure that you add this import to your page file:
 * > import "<path to>/node_modules/firebaseui/dist/firebaseui.css";
 *
 * This rewrite was done by Zack Sheppard (@zackdotcomputer) in Feb 2021.
 * It is relicensed under Google's Apache 2 License below.
 */

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type firebase from "firebase";
import type { auth as authui } from "firebaseui";
import React from "react";

// Global ID for the element.
const ELEMENT_ID = "firebaseui_container";

// Promise that resolves unless the FirebaseUI instance is currently being deleted.
let firebaseUiDeletion = Promise.resolve();

interface Props {
  // The Firebase UI Web UI Config object.
  // See: https://github.com/firebase/firebaseui-web#configuration
  uiConfig: authui.Config;
  // The Firebase App auth instance to use.
  firebaseAuth: firebase.auth.Auth;
  // Callback that will be passed the FirebaseUi instance before it is
  // started. This allows access to certain configuration options such as
  // disableAutoSignIn().
  uiCallback?: (widget: authui.AuthUI) => void;

  className?: string;
}

interface State {
  firebaseUiWidget: authui.AuthUI | undefined;
  userSignedIn: boolean;
  unregisterAuthObserver: VoidFunction | undefined;
}

/**
 * React Component wrapper for the FirebaseUI Auth widget.
 */
export default class FirebaseAuth extends React.Component<Props, State> {
  initialState: {
    firebaseUiWidget: undefined;
    userSignedIn: false;
    unregisterAuthObserver: undefined;
  };

  /**
   * @inheritDoc
   */
  componentDidMount() {
    // Firebase UI only works on the Client. So we're loading the package in `componentDidMount`
    // So that this works when doing server-side rendering.
    const firebaseui = require("firebaseui");

    // Wait in case the firebase UI instance is being deleted.
    // This can happen if you unmount/remount the element quickly.
    return firebaseUiDeletion.then(() => {
      this.setState((oldState, props) => {
        // Get or Create a firebaseUI instance.
        const newWidge =
          firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.firebaseAuth);
        if (props.uiConfig.signInFlow === "popup") {
          newWidge.reset();
        }

        // We track the auth state to reset firebaseUi if the user signs out.
        const unregisterAuthObserver = this.props.firebaseAuth.onAuthStateChanged((user) => {
          if (!user && this.state.userSignedIn) {
            this.state.firebaseUiWidget?.reset();
          }
          this.setState({ userSignedIn: !!user });
        });

        // Trigger the callback if any was set.
        if (this.props.uiCallback) {
          this.props.uiCallback(newWidge);
        }

        // Render the firebaseUi Widget.
        newWidge.start("#" + ELEMENT_ID, this.props.uiConfig);

        // Return the new state
        return {
          firebaseUiWidget: newWidge,
          unregisterAuthObserver
        };
      });
    });
  }

  /**
   * @inheritDoc
   */
  componentWillUnmount() {
    firebaseUiDeletion = firebaseUiDeletion.then(() => {
      if (this.state.unregisterAuthObserver) {
        this.state.unregisterAuthObserver();
      }
      return this.state.firebaseUiWidget?.delete();
    });
    return firebaseUiDeletion;
  }

  /**
   * @inheritDoc
   */
  render() {
    return <div className={this.props.className} id={ELEMENT_ID} />;
  }
}
