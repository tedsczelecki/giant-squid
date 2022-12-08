import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  primary: {
    50: '#DEDAFF',
    100: '#D3CBFF',
    200: '#CBBCFF',
    300: '#C5AEFD',
    400: '#C0A0FB',
    500: '#bd93f9',
    600: '#9670D5',
    700: '#7051AB',
    800: '#4C3781',
    900: '#2D2157',
  },
};

export default extendTheme({ config, colors });
