import paths from '@config/paths';

type TNavLink = {
  label: string;
  path: string;
};

export type TNavData = {
  primary: TNavLink[];
  settings: TNavLink[];
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
    {
      label: 'Settings',
      path: paths.settings.values,
    },
  ],
  settings: [
    {
      label: 'Values',
      path: paths.settings.values,
    },
    {
      label: 'Users',
      path: paths.settings.users,
    },
  ],
};

export default navigation;
