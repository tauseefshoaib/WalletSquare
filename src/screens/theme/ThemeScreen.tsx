import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/theme';
import {useThemeColor} from '../../hooks/useThemeColor';
import useThemeStore from '../../store/themeStore';
import {THEME} from '../../constants/enums';
import {FONT_FAMILY} from '../../styles/commonStyles';

const ThemeScreen = () => {
  const {theme, toggleTheme} = useThemeStore();
  const color: Colors = useThemeColor();
  const styles = getStyles(color);

  const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Current Theme: {theme ?? 'System Default'}
      </Text>
      <Button title="Toggle Theme" onPress={() => toggleTheme(newTheme)} />
    </View>
  );
};

export default ThemeScreen;

const getStyles = (color: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.background,
    },
    text: {
      color: color.text,
      fontFamily: FONT_FAMILY.poppinsBold,
    },
  });
