import React from 'react';
import Helmet from 'react-helmet';

type SEOType = {
  title?: string;
};

const SEO: React.FC = ({ title }: SEOType) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default SEO;
