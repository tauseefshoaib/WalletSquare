import {useColorScheme} from 'react-native';
import {THEME_COLORS} from '../styles/theme';
import {THEME} from '../constants/enums';
import useThemeStore from '../store/themeStore';

// Get theme color
export const useThemeColor = () => {
  const deviceTheme = useColorScheme() ?? THEME.LIGHT;
  const {theme} = useThemeStore();

  const currentTheme = theme ?? deviceTheme;

  return THEME_COLORS[currentTheme] || THEME_COLORS.light;
};
