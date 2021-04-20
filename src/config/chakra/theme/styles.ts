import { ThemeOverride } from '@chakra-ui/react';

import colors from './colors';

type GlobalStyles = Pick<ThemeOverride, 'styles'>;

export default {
  styles: {
    global: {
      'html, body': {
        backgroundColor: colors.background,
      },
      p: {
        marginBottom: '1em',
      },
    },
  },
} as GlobalStyles;
