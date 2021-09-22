import React from 'react';
import Helmet from 'react-helmet';

import { TSeo } from '@customTypes/components';

const SEO: React.FC<TSeo> = ({ title }) => {
  return <Helmet>{title && <title>{title}</title>}</Helmet>;
};

export default SEO;
