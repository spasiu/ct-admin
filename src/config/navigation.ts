import paths from '@config/paths';

type TNavLink = {
  label: string;
  path: string;
};

export type TNavData = {
  primary: TNavLink[];
  products: TNavLink[];
};

const navigation: TNavData = {
  primary: [
    {
      label: 'Home',
      path: paths.home,
    },
    {
      label: 'Products & SKUs',
      path: paths.skus,
    },
    {
      label: 'Events & Breaks',
      path: paths.events,
    },
    {
      label: 'Hits',
      path: paths.hits,
    },
  ],
  products: [
    {
      label: 'SKUs',
      path: paths.skus,
    },
    {
      label: 'Products',
      path: paths.products,
    },
  ],
};

export default navigation;
