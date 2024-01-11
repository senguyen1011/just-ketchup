import { createGlobalStyle, keyframes } from 'styled-components';
import './index.css';
import './normalize.css';

type Color = 'gray' | 'accent' | 'success' | 'danger';
type AbsoluteColor = 'black' | 'white';
type ColorMap = {
  [key in Color]: {
    [key in
      | '1'
      | '2'
      | '3'
      | '4'
      | '5'
      | '6'
      | '7'
      | '8'
      | '9'
      | '10'
      | '11'
      | '12'
      | 'a1'
      | 'a2'
      | 'a3'
      | 'a4'
      | 'a5'
      | 'a6'
      | 'a7'
      | 'a8'
      | 'a9'
      | 'a10'
      | 'a11'
      | 'a12']: string;
  };
};

const lightColors: ColorMap = {
  gray: {
    '1': '#FDFCFD',
    '2': '#FAF9FB',
    '3': '#F2EFF3',
    '4': '#EAE7EC',
    '5': '#E3DFE6',
    '6': '#DBD8E0',
    '7': '#D0CDD7',
    '8': '#BCBAC7',
    '9': '#8E8C99',
    '10': '#84828E',
    '11': '#65636D',
    '12': '#211F26',
    'a1': '#55005503',
    'a2': '#2B005506',
    'a3': '#30004010',
    'a4': '#20003618',
    'a5': '#20003820',
    'a6': '#14003527',
    'a7': '#10003332',
    'a8': '#08003145',
    'a9': '#05001D73',
    'a10': '#0500197D',
    'a11': '#0400119C',
    'a12': '#020008E0',
  },
  accent: {
    '1': '#FFFCFC',
    '2': '#FFF7F7',
    '3': '#FEEBEC',
    '4': '#FFDBDC',
    '5': '#FFCDCE',
    '6': '#FDBDBE',
    '7': '#F4A9AA',
    '8': '#EB8E90',
    '9': '#E5484D',
    '10': '#DC3E42',
    '11': '#CE2C31',
    '12': '#641723',
    'a1': '#FF000003',
    'a2': '#FF000008',
    'a3': '#F3000D14',
    'a4': '#FF000824',
    'a5': '#FF000632',
    'a6': '#F8000442',
    'a7': '#DF000356',
    'a8': '#D2000571',
    'a9': '#DB0007B7',
    'a10': '#D10005C1',
    'a11': '#C40006D3',
    'a12': '#55000DE8',
  },
  success: {
    '1': '#FBFEFC',
    '2': '#F4FBF6',
    '3': '#E6F6EB',
    '4': '#D6F1DF',
    '5': '#C4E8D1',
    '6': '#ADDDC0',
    '7': '#8ECEAA',
    '8': '#5BB98B',
    '9': '#30A46C',
    '10': '#2B9A66',
    '11': '#218358',
    '12': '#193B2D',
    'a1': '#00C04004',
    'a2': '#00A32F0B',
    'a3': '#00A43319',
    'a4': '#00A83829',
    'a5': '#019C393B',
    'a6': '#00963C52',
    'a7': '#00914071',
    'a8': '#00924BA4',
    'a9': '#008F4ACF',
    'a10': '#008647D4',
    'a11': '#00713FDE',
    'a12': '#002616E6',
  },
  danger: {
    '1': '#FFFCFC',
    '2': '#FFF7F7',
    '3': '#FEEBEC',
    '4': '#FFDBDC',
    '5': '#FFCDCE',
    '6': '#FDBDBE',
    '7': '#F4A9AA',
    '8': '#EB8E90',
    '9': '#E5484D',
    '10': '#DC3E42',
    '11': '#CE2C31',
    '12': '#641723',
    'a1': '#FF000003',
    'a2': '#FF000008',
    'a3': '#F3000D14',
    'a4': '#FF000824',
    'a5': '#FF000632',
    'a6': '#F8000442',
    'a7': '#DF000356',
    'a8': '#D2000571',
    'a9': '#DB0007B7',
    'a10': '#D10005C1',
    'a11': '#C40006D3',
    'a12': '#55000DE8',
  },
};

const darkColors: ColorMap = {
  gray: {
    '1': '#121113',
    '2': '#1A191B',
    '3': '#232225',
    '4': '#2B292D',
    '5': '#323035',
    '6': '#3C393F',
    '7': '#49474E',
    '8': '#625F69',
    '9': '#6F6D78',
    '10': '#7C7A85',
    '11': '#B5B2BC',
    '12': '#EEEEF0',
    'a1': '#00000000',
    'a2': '#F5F4F609',
    'a3': '#EBEAF814',
    'a4': '#EEE5F81D',
    'a5': '#EFE6FE25',
    'a6': '#F1E6FD30',
    'a7': '#EEE9FF40',
    'a8': '#EEE7FF5D',
    'a9': '#EAE6FD6E',
    'a10': '#ECE9FD7C',
    'a11': '#F5F1FFB7',
    'a12': '#FDFDFFEF',
  },
  accent: {
    '1': '#191111',
    '2': '#201314',
    '3': '#3B1219',
    '4': '#500F1C',
    '5': '#611623',
    '6': '#72232D',
    '7': '#8C333A',
    '8': '#B54548',
    '9': '#E5484D',
    '10': '#EC5D5E',
    '11': '#FF9592',
    '12': '#FFD1D9',
    'a1': '#F4121209',
    'a2': '#F22F3E11',
    'a3': '#FF173F2D',
    'a4': '#FE0A3B44',
    'a5': '#FF204756',
    'a6': '#FF3E5668',
    'a7': '#FF536184',
    'a8': '#FF5D61B0',
    'a9': '#FE4E54E4',
    'a10': '#FF6465EB',
    'a11': '#FF9592',
    'a12': '#FFD1D9',
  },
  success: {
    '1': '#0E1512',
    '2': '#121B17',
    '3': '#132D21',
    '4': '#113B29',
    '5': '#174933',
    '6': '#20573E',
    '7': '#28684A',
    '8': '#2F7C57',
    '9': '#30A46C',
    '10': '#33B074',
    '11': '#3DD68C',
    '12': '#B1F1CB',
    'a1': '#00DE4505',
    'a2': '#29F99D0B',
    'a3': '#22FF991E',
    'a4': '#11FF992D',
    'a5': '#2BFFA23C',
    'a6': '#44FFAA4B',
    'a7': '#50FDAC5E',
    'a8': '#54FFAD73',
    'a9': '#44FFA49E',
    'a10': '#43FEA4AB',
    'a11': '#46FEA5D4',
    'a12': '#BBFFD7F0',
  },
  danger: {
    '1': '#191111',
    '2': '#201314',
    '3': '#3B1219',
    '4': '#500F1C',
    '5': '#611623',
    '6': '#72232D',
    '7': '#8C333A',
    '8': '#B54548',
    '9': '#E5484D',
    '10': '#EC5D5E',
    '11': '#FF9592',
    '12': '#FFD1D9',
    'a1': '#F4121209',
    'a2': '#F22F3E11',
    'a3': '#FF173F2D',
    'a4': '#FE0A3B44',
    'a5': '#FF204756',
    'a6': '#FF3E5668',
    'a7': '#FF536184',
    'a8': '#FF5D61B0',
    'a9': '#FE4E54E4',
    'a10': '#FF6465EB',
    'a11': '#FF9592',
    'a12': '#FFD1D9',
  },
};

const absoluteColors: {
  [key in AbsoluteColor]: {
    [key in
      | 'a1'
      | 'a2'
      | 'a3'
      | 'a4'
      | 'a5'
      | 'a6'
      | 'a7'
      | 'a8'
      | 'a9'
      | 'a10'
      | 'a11'
      | 'a12']: string;
  };
} = {
  black: {
    a1: 'rgba(0, 0, 0, 0.05)',
    a2: 'rgba(0, 0, 0, 0.1)',
    a3: 'rgba(0, 0, 0, 0.15)',
    a4: 'rgba(0, 0, 0, 0.2)',
    a5: 'rgba(0, 0, 0, 0.3)',
    a6: 'rgba(0, 0, 0, 0.4)',
    a7: 'rgba(0, 0, 0, 0.5)',
    a8: 'rgba(0, 0, 0, 0.6)',
    a9: 'rgba(0, 0, 0, 0.7)',
    a10: 'rgba(0, 0, 0, 0.8)',
    a11: 'rgba(0, 0, 0, 0.9)',
    a12: 'rgba(0, 0, 0, 0.95)',
  },
  white: {
    a1: 'rgba(255, 255, 255, 0.05)',
    a2: 'rgba(255, 255, 255, 0.1)',
    a3: 'rgba(255, 255, 255, 0.15)',
    a4: 'rgba(255, 255, 255, 0.2)',
    a5: 'rgba(255, 255, 255, 0.3)',
    a6: 'rgba(255, 255, 255, 0.4)',
    a7: 'rgba(255, 255, 255, 0.5)',
    a8: 'rgba(255, 255, 255, 0.6)',
    a9: 'rgba(255, 255, 255, 0.7)',
    a10: 'rgba(255, 255, 255, 0.8)',
    a11: 'rgba(255, 255, 255, 0.9)',
    a12: 'rgba(255, 255, 255, 0.95)',
  },
};

const lightShadows = {
  '1': `inset 0 0 0 1px ${lightColors['gray']['a5']}, inset 0 1.5px 2px 0 ${lightColors['gray']['a2']}, inset 0 1.5px 2px 0 ${absoluteColors['black']['a2']}`,
  '2': `0 0 0 1px ${lightColors['gray']['a3']}, 0 0 0 0.5px ${absoluteColors['black']['a1']}, 0 1px 1px 0 ${lightColors['gray']['a4']}, 0 2px 1px -1px ${absoluteColors['black']['a1']}, 0 1px 3px 0 ${absoluteColors['black']['a1']}`,
  '3': `0 0 0 1px ${lightColors['gray']['a3']}, 0 2px 3px -2px ${lightColors['gray']['a3']}, 0 3px 12px -4px ${absoluteColors['black']['a2']}, 0 4px 16px -8px ${absoluteColors['black']['a2']}`,
  '4': `0 0 0 1px ${lightColors['gray']['a3']}, 0 8px 40px ${absoluteColors['black']['a1']}, 0 12px 32px -16px ${lightColors['gray']['a3']}`,
  '5': `0 0 0 1px ${lightColors['gray']['a3']}, 0 12px 60px ${absoluteColors['black']['a3']}, 0 12px 32px -16px ${lightColors['gray']['a5']}`,
  '6': `0 0 0 1px ${lightColors['gray']['a3']}, 0 12px 60px ${absoluteColors['black']['a3']}, 0 16px 64px ${lightColors['gray']['a2']}, 0 16px 36px -20px ${lightColors['gray']['a7']}`,
};

const darkShadows = {
  '1': `inset 0 -1px 0 1px ${darkColors['gray']['a3']}, inset 0 0 0 1px ${darkColors['gray']['a3']}, inset 0 3px 4px 0 ${absoluteColors['black']['a5']}, inset 0 0 0 1px ${darkColors['gray']['a4']}`,
  '2': `0 0 0 1px ${darkColors['gray']['a6']}, 0 0 0 0.5px ${absoluteColors['black']['a3']}, 0 1px 1px 0 ${absoluteColors['black']['a6']}, 0 2px 1px -1px ${absoluteColors['black']['a6']}, 0 1px 3px 0 ${absoluteColors['black']['a8']}`,
  '3': `0 0 0 1px ${darkColors['gray']['a6']}, 0 2px 3px -2px ${absoluteColors['black']['a3']}, 0 3px 8px -2px ${absoluteColors['black']['a6']}, 0 4px 12px -4px ${absoluteColors['black']['a7']}`,
  '4': `0 0 0 1px ${darkColors['gray']['a6']}, 0 8px 40px ${absoluteColors['black']['a5']}, 0 12px 32px -16px ${absoluteColors['black']['a5']}`,
  '5': `0 0 0 1px ${darkColors['gray']['a6']}, 0 12px 60px ${absoluteColors['black']['a5']}, 0 12px 32px -16px ${absoluteColors['black']['a7']}`,
  '6': `0 0 0 1px ${darkColors['gray']['a6']}, 0 12px 60px ${absoluteColors['black']['a4']}, 0 16px 64px ${absoluteColors['black']['a6']}, 0 16px 36px -20px ${absoluteColors['black']['a11']}`,
};

const fontSizes = {
  '1': '1.5rem',
  '2': '1.25rem',
  '3': '1.125rem',
  '4': '1rem',
  '5': '0.875rem',
  '6': '0.75rem',
};
type FontSize = keyof typeof fontSizes;

const headingSizes = {
  'display': '4.5rem',
  '1': '3rem',
  '2': '2.25rem',
  '3': '1.875rem',
  '4': '1.25rem',
  '5': '1rem',
  '6': '0.875rem',
};
type HeadingSize = keyof typeof headingSizes;

const displaySizes = {
  '1': '4.5rem',
  '2': '3.75rem',
};

const spaces = {
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.5rem',
  '6': '2rem',
  '7': '2.5rem',
  '8': '3rem',
  '9': '4rem',
  '10': '5rem',
  '11': '6rem',
  '12': '8rem',
};
type Space = keyof typeof spaces;

const radii = {
  '0': '0',
  '1': '4px',
  '2': '6px',
  '3': '8px',
  '4': '10px',
  '5': '12px',
  '6': '16px',
  'full': '999px',
};

const breakpoints = {
  xl: '1640px',
  lg: '1280px',
  md: '1024px',
  sm: '768px',
  xs: '520px',
};

const durations = {
  '1': 0.05,
  '2': 0.1,
  '3': 0.15,
  '4': 0.2,
  '5': 0.3,
  '6': 0.4,
  '7': 0.5,
};

const baseTheme = {
  space: spaces,
  radius: radii,
  breakpoint: breakpoints,
  fontSize: fontSizes,
  headingSize: headingSizes,
  displaySize: displaySizes,
  duration: durations,
};
const themes = {
  light: {
    ...baseTheme,
    theme: 'light',
    color: {
      ...lightColors,
      bodyBackground: lightColors['gray']['1'],
      bodyGradient: lightColors['accent']['5'],
      cardBackground: lightColors['gray']['a2'],
      inputBackground: lightColors['gray']['a2'],
      buttonBackground: lightColors['gray']['5'],
      buttonBackgroundSecondary: lightColors['gray']['6'],
      text: lightColors['gray']['12'],
      textSecondary: lightColors['gray']['11'],
      textAccent: lightColors['accent']['9'],

      gray: {
        ...lightColors['gray'],
        buttonBackground: lightColors['gray']['12'],
        buttonBackgroundSecondary: lightColors['gray']['11'],
        buttonText: lightColors['gray']['12'],
        buttonTextSecondary: lightColors['gray']['1'],
        border: lightColors['gray']['6'],
        borderSecondary: lightColors['gray']['7'],
        focusRing: lightColors['gray']['8'],
      },

      accent: {
        ...lightColors['accent'],
        buttonBackground: lightColors['accent']['9'],
        buttonBackgroundSecondary: lightColors['accent']['10'],
        buttonText: lightColors['accent']['9'],
        buttonTextSecondary: lightColors['accent']['1'],
        border: lightColors['accent']['6'],
        borderSecondary: lightColors['accent']['7'],
        focusRing: lightColors['accent']['8'],
      },

      success: {
        ...lightColors['success'],
        buttonBackground: lightColors['success']['9'],
        buttonBackgroundSecondary: lightColors['success']['10'],
        buttonText: lightColors['success']['9'],
        buttonTextSecondary: lightColors['success']['1'],
        border: lightColors['success']['6'],
        borderSecondary: lightColors['success']['7'],
        focusRing: lightColors['success']['8'],
      },

      danger: {
        ...lightColors['danger'],
        buttonBackground: lightColors['danger']['9'],
        buttonBackgroundSecondary: lightColors['danger']['10'],
        buttonText: lightColors['danger']['9'],
        buttonTextSecondary: lightColors['danger']['1'],
        border: lightColors['danger']['6'],
        borderSecondary: lightColors['danger']['7'],
        focusRing: lightColors['danger']['8'],
      },
    },
    shadow: lightShadows,
  },
  dark: {
    ...baseTheme,
    theme: 'dark',
    color: {
      ...darkColors,
      bodyBackground: darkColors['gray']['1'],
      bodyGradient: darkColors['accent']['4'],
      cardBackground: darkColors['gray']['a2'],
      inputBackground: darkColors['gray']['a2'],
      buttonBackground: darkColors['gray']['a5'],
      buttonBackgroundSecondary: darkColors['gray']['6'],
      text: darkColors['gray']['12'],
      textSecondary: darkColors['gray']['11'],
      textAccent: darkColors['accent']['9'],

      gray: {
        ...darkColors['gray'],
        buttonBackground: darkColors['gray']['12'],
        buttonBackgroundSecondary: darkColors['gray']['11'],
        buttonText: darkColors['gray']['12'],
        buttonTextSecondary: darkColors['gray']['1'],
        border: darkColors['gray']['6'],
        borderSecondary: darkColors['gray']['7'],
        focusRing: darkColors['gray']['8'],
      },

      accent: {
        ...darkColors['accent'],
        buttonBackground: darkColors['accent']['9'],
        buttonBackgroundSecondary: darkColors['accent']['10'],
        buttonText: darkColors['gray']['12'],
        buttonTextSecondary: darkColors['gray']['12'],
        border: darkColors['accent']['6'],
        borderSecondary: darkColors['accent']['7'],
        focusRing: darkColors['accent']['8'],
      },

      success: {
        ...darkColors['success'],
        buttonBackground: darkColors['success']['9'],
        buttonBackgroundSecondary: darkColors['success']['10'],
        buttonText: darkColors['success']['9'],
        buttonTextSecondary: darkColors['success']['1'],
        border: darkColors['success']['6'],
        borderSecondary: darkColors['success']['7'],
        focusRing: darkColors['success']['8'],
      },

      danger: {
        ...darkColors['danger'],
        buttonBackground: darkColors['danger']['9'],
        buttonBackgroundSecondary: darkColors['danger']['10'],
        buttonText: darkColors['danger']['9'],
        buttonTextSecondary: darkColors['danger']['1'],
        border: darkColors['danger']['6'],
        borderSecondary: darkColors['danger']['7'],
        focusRing: darkColors['danger']['8'],
      },
    },
    shadow: darkShadows,
  },
};
type ThemeColor = keyof typeof themes.light.color;

const bodyGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
    --navbar-height: 5.5rem;
  }

  html {
    font-size: ${props => props.theme.fontSize['4']};
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;

    background-color: ${props => props.theme.color['bodyBackground']};
    background: linear-gradient(-45deg, ${props =>
      `${props.theme.color['bodyBackground']}, ${props.theme.color['bodyGradient']}`});
    background-size: 250% 250%;
    background-repeat: no-repeat;
    animation: ${bodyGradient} 15s ease infinite;

    color: ${props => props.theme.color['text']};
  }

  #root {
    position: relative;
  }

  h1, h2, h3, h4, h5, h6, p, a, label {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Fira Code', monospace;
    font-weight: 500;
  }

  h1 {
    font-size: ${props => props.theme.headingSize['1']};
  }
  h2 {
    font-size: ${props => props.theme.headingSize['2']};
  }
  h3 {
    font-size: ${props => props.theme.headingSize['3']};
  }
  h4 {
    font-size: ${props => props.theme.headingSize['4']};
  }
  h5 {
    font-size: ${props => props.theme.headingSize['5']};
  }
  h6 {
    font-size: ${props => props.theme.headingSize['6']};
  }
`;

export type { Color, Space, FontSize, HeadingSize, ThemeColor };
export { themes, GlobalStyle };
