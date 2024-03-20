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
    color?: PseudoClass;
    border?: PseudoClass;
    background?: PseudoClass;
  }

  interface PaletteCategory {
    button: ColorPalette;
    textfield: ColorPalette;
    card: ColorPalette;
    text: ColorPalette;
  }

  interface Size {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  }

  export interface Theme {
    boxShadow: string;
    fontSize: Size;
    fontWeight: Size;
    breakPoints: Size;
    colors: {
      primary: PaletteCategory;
      secondary: PaletteCategory;
    };
  }
}

const LightTheme: Theme = {
  boxShadow: '#ddd',
  fontSize: {
    sm: '0.75rem',
    md: '1.0rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '1.75rem',
  },
  fontWeight: {
    sm: '300',
    md: '400',
    lg: '600',
    xl: '700',
    xxl: '800',
  },
  breakPoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
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
        },
      },
      text: {
        color: {
          normal: '#000',
        },
      },
    },

    secondary: {
      button: {
        border: {
          normal: '#525252',
          hover: '#ff0038',
          active: '#db0030',
          disabled: '#fd7373',
        },
        background: {
          normal: '#ffffff',
          hover: '#ffffff',
          active: '#f3f3f3',
          disabled: '#fd7373',
        },
        color: {
          normal: '#000000',
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
        },
      },
      text: {
        color: {
          normal: '#000',
        },
      },
    },
  },
};

export default LightTheme;
