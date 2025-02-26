import {create} from 'zustand';
import {THEME} from '../constants/enums';

export type ThemeType = THEME.LIGHT | THEME.DARK;

interface ThemeStore {
  theme: ThemeType | null;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>(set => ({
  theme: null, // Default Theme
  toggleTheme: () =>
    set(state => ({
      theme: state.theme === THEME.DARK ? THEME.LIGHT : THEME.DARK,
    })),
}));

export default useThemeStore;
