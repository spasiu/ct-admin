import React from 'react';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';

import { useSearchEventsLazyQuery } from '@generated/graphql';

import {
  TAutocompleteBreaksEventsProps,
  TAutocompleteBreaksEventsSearchResult,
} from '@customTypes/components';

const Autocomplete: React.FC<TAutocompleteBreaksEventsProps> = ({
  defaultValue,
  callback,
  isInvalid,
}) => {
  const [getEventResults, { loading, data }] = useSearchEventsLazyQuery();

  const handleSearch = (query: string) => {
    getEventResults({
      variables: { input: `%${query}%` },
    });
  };

  return (
    <AsyncTypeahead
      filterBy={() => {
        return true;
      }}
      id={`autocomplete-input-events`}
      onChange={(selected: TAutocompleteBreaksEventsSearchResult[]) => {
        if (selected.length > 0) {
          callback(selected[0].id);
        }
      }}
      defaultInputValue={defaultValue ? defaultValue : undefined}
      isLoading={loading}
      labelKey="title"
      minLength={1}
      onSearch={handleSearch}
      options={data?.Events ? data?.Events : []}
      placeholder="Search..."
      renderMenuItemChildren={(
        option: TAutocompleteBreaksEventsSearchResult,
        props,
      ) => <Highlighter search={props.text || ''}>{option.title}</Highlighter>}
      isInvalid={isInvalid}
      useCache={false}
    />
  );
};

export default Autocomplete;
