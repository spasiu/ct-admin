import { ThemeOverride } from '@chakra-ui/react';

type GlobalStyles = Pick<ThemeOverride, 'styles'>;

export default {
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#FAFAFB',
      },
      p: {
        marginBottom: '1em',
      },
    },
  },
} as GlobalStyles;
