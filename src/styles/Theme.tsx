import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  interface PseudoClass {
    normal: string;
    disabled: string;
    hover: string;
    active: string;
  }

  interface ColorPalette {
    color: string;
    border: PseudoClass;
    background: PseudoClass;
    text: PseudoClass;
  }

  export interface Theme {
    boxShadow: string;
    colors: {
      primary: ColorPalette;
    };
  }
}

const LightTheme: Theme = {
  boxShadow: '#aaa',
  colors: {
    primary: {
      color: 'red',
      border: {
        normal: '#ff0038',
        hover: '#ff0038',
        active: '#db0030',
        disabled: '#fd7373',
      },
      background: {
        normal: '#ff0038',
        hover: '#ff0038',
        active: '#db0030',
        disabled: '#fd7373',
      },
      text: {
        normal: '#fff',
        hover: '#fff',
        active: '#fff',
        disabled: '#f3f3f3',
      },
    },
  },
};

export default LightTheme;
