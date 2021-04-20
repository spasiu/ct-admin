import React from 'react';
import Helmet from 'react-helmet';

type TSEO = {
  title?: string;
};

const SEO: React.FC<TSEO> = ({ title }) => {
  return <Helmet>{title && <title>{title}</title>}</Helmet>;
};

export default SEO;
