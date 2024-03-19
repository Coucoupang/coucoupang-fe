import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  interface PseudoClass {
    normal: string;
    disabled: string;
    hover: string;
    active: string;
  }

  interface ColorPalette {
    color: PseudoClass;
    border: PseudoClass;
    background: PseudoClass;
  }

  interface PaletteCategory {
    button: ColorPalette;
    textfield: ColorPalette;
  }

  export interface Theme {
    boxShadow: string;
    colors: {
      primary: PaletteCategory;
    };
  }
}

const LightTheme: Theme = {
  boxShadow: '#aaa',
  colors: {
    primary: {
      button: {
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
        color: {
          normal: '#fff',
          hover: '#fff',
          active: '#fff',
          disabled: '#f3f3f3',
        },
      },
      textfield: {
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
        color: {
          normal: '#000',
          hover: '#000',
          active: '#000',
          disabled: '#474747',
        },
      },
    },
  },
};

export default LightTheme;
