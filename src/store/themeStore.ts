import {create} from 'zustand';
import {THEME} from '../constants/enums';

export type ThemeType = THEME.LIGHT | THEME.DARK;

interface ThemeStore {
  theme: ThemeType | null;
  toggleTheme: (theme: ThemeType) => void;
}

const useThemeStore = create<ThemeStore>(set => ({
  theme: null, // Default Theme
  toggleTheme: theme => set({theme}),
}));

export default useThemeStore;
