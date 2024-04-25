import { Theme } from '@emotion/react';

export interface Style {
  border?: {
    normal?: string;
    hover?: string;
    active?: string;
    disabled?: string;
    focus?: string;
  };
  background?: {
    normal?: string;
    hover?: string;
    active?: string;
    disabled?: string;
    focus?: string;
  };
  color?: {
    normal?: string;
    hover?: string;
    active?: string;
    disabled?: string;
    focus?: string;
  };
  ripple?: string;
}

export type ThemeName = 'light';

declare module '@emotion/react' {
  interface Size {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  }

  export interface Theme {
    name: ThemeName;
    fontSize: Size;
    fontWeight: Size;
    breakPoint: Size;
  }
}

const LightTheme: Theme = {
  name: 'light',
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
  breakPoint: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  // colors: {
  // button: {
  //   primary: {
  //     border: {
  //       normal: '#ff3e3e',
  //       hover: '#ff3e3e',
  //       active: '#db0030',
  //       disabled: '#fd7373',
  //     },
  //     background: {
  //       normal: '#ff3e3e',
  //       hover: '#ff3e3e',
  //       active: '#db0030',
  //       disabled: '#fd7373',
  //     },
  //     color: {
  //       normal: '#fff',
  //       hover: '#fff',
  //       active: '#fff',
  //       disabled: '#f3f3f3',
  //     },
  //     ripple: '#ffffff54',
  //   },
  //   secondary: {
  //     border: {
  //       normal: '#525252',
  //       hover: '#ff3e3e',
  //       active: '#db0030',
  //       disabled: '#fd7373',
  //     },
  //     background: {
  //       normal: '#ffffff',
  //       hover: '#ffffff',
  //       active: '#f3f3f3',
  //       disabled: '#fd7373',
  //     },
  //     color: {
  //       normal: '#000000',
  //       hover: '#fff',
  //       active: '#fff',
  //       disabled: '#f3f3f3',
  //     },
  //     ripple: '#83838352',
  //   },
  //   light :{
  //     border: {
  //       normal: 'transparent',
  //       hover: 'transparent',
  //       active: 'transparent',
  //       disabled: 'transparent',
  //     },
  //     background: {
  //       normal: '#f7f9fd',
  //       hover: '#eff1f5',
  //       active: '#eff1f5',
  //       disabled: '#eee',
  //     },
  //     color: {
  //       normal: '#000000',
  //       hover: '#fff',
  //       active: '#fff',
  //       disabled: '#8f8f8f',
  //     },
  //     ripple: '#ffffff54',
  //   }
  // },
  //   textfield: {
  //     primary: {
  //     border: {
  //       normal: '#ccc',
  //       focus: '#ff0038',
  //       disabled: '#bbb',
  //     },
  //     background: {
  //       normal: '#fff',
  //       disabled: '#eee',
  //     },
  //     color: {
  //       normal: '#000',
  //       disabled: '#6d6d6d',
  //     },
  //   },
  //   card: {
  //     border: {
  //       normal: '#ccc',
  //     },
  //     background: {
  //       normal: '#fff',
  //       hover: '#f7fbff',
  //     },
  //     color: {
  //       normal: '#000',
  //     },
  //     boxShadow: {
  //       hover: '#ddd',
  //     },
  //   },
  //   text: {
  //     color: {
  //       normal: '#000',
  //     },
  //   },

  // },

  // secondary: {
  //   button: {
  //     border: {
  //       normal: '#525252',
  //       hover: '#ff3e3e',
  //       active: '#db0030',
  //       disabled: '#fd7373',
  //     },
  //     background: {
  //       normal: '#ffffff',
  //       hover: '#ffffff',
  //       active: '#f3f3f3',
  //       disabled: '#fd7373',
  //     },
  //     color: {
  //       normal: '#000000',
  //       hover: '#fff',
  //       active: '#fff',
  //       disabled: '#f3f3f3',
  //     },
  //     ripple: '#83838352',
  //   },
  //   textfield: {
  //     border: {
  //       normal: '#ccc',
  //       focus: '#ff3e3e',
  //       disabled: '#bbb',
  //     },
  //     background: {
  //       normal: '#fff',
  //       disabled: '#eee',
  //     },
  //     color: {
  //       normal: '#000',
  //       disabled: '#6d6d6d',
  //     },
  //   },
  //   card: {
  //     border: {
  //       normal: '#ccc',
  //     },
  //     background: {
  //       normal: '#fff',
  //     },
  //     color: {
  //       normal: '#000',
  //     },
  //     boxShadow: {
  //       hover: '#ddd',
  //     },
  //   },
  //   text: {
  //     color: {
  //       normal: '#000',
  //     },
  //   },
  // },

  // light: {
  //   button: {

  //   },
  //   textfield: {
  //     border: {
  //       normal: '#ccc',
  //       focus: '#ff3e3e',
  //       disabled: '#bbb',
  //     },
  //     background: {
  //       normal: '#fff',
  //       disabled: '#eee',
  //     },
  //     color: {
  //       normal: '#000',
  //       disabled: '#6d6d6d',
  //     },
  //   },
  //   card: {
  //     border: {
  //       normal: '#ccc',
  //     },
  //     background: {
  //       normal: '#fff',
  //     },
  //     color: {
  //       normal: '#000',
  //     },
  //     boxShadow: {
  //       hover: '#ddd',
  //     },
  //   },
  //   text: {
  //     color: {
  //       normal: '#000',
  //     },
  //   },
  // },
  // },
};

export default LightTheme;
