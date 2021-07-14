import paths from '@config/paths';

type TNavLink = {
  label: string;
  path: string;
};

export type TNavData = {
  primary: TNavLink[];
};

const navigation: TNavData = {
  primary: [
    {
      label: 'Home',
      path: paths.home,
    },
    {
      label: 'Products',
      path: paths.products,
    },
    {
      label: 'Events',
      path: paths.events,
    },
    {
      label: 'Hits',
      path: paths.hits,
    },
  ],
};

export default navigation;
