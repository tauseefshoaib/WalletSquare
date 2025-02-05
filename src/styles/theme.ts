export type Colors = {
  background: string;
  text: string;
};

export type ThemeColor = {
  light: Colors;
  dark: Colors;
};

export const THEME_COLORS: ThemeColor = {
  light: {
    background: '#FFFFFF',
    text: 'black',
  },
  dark: {
    background: '#111417',
    text: 'white',
  },
};
