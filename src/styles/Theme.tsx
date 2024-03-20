import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  interface PseudoClass {
    normal: string;
    disabled?: string;
    hover?: string;
    active?: string;
    focus?: string;
  }

  interface ColorPalette {
    color: PseudoClass;
    border: PseudoClass;
    background: PseudoClass;
  }

  interface PaletteCategory {
    button: ColorPalette;
    textfield: ColorPalette;
    card: ColorPalette;
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
          normal: '#ccc',
          focus: '#ff0038',
          disabled: '#bbb',
        },
        background: {
          normal: '#fff',
          disabled: '#eee',
        },
        color: {
          normal: '#000',
          disabled: '#6d6d6d',
        },
      },
      card: {
        border: {
          normal: '#ccc',
        },
        background: {
          normal: '#fff',
        },
        color: {
          normal: '#000',
          disabled: '#6d6d6d',
        },
      },
    },
  },
};

export default LightTheme;
