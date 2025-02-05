import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../navigation/CustomHeader';
import ScreenWrapper from '../../components/ScreenWrapper';
import {Colors} from '../../styles/theme';
import {useThemeColor} from '../../hooks/useThemeColor';
import useThemeStore from '../../store/themeStore';
import {THEME} from '../../constants/enums';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {theme, toggleTheme} = useThemeStore();
  const color: Colors = useThemeColor();
  const styles = getStyles(color);

  useLayoutEffect(() => {
    const state = navigation?.getState();

    const screenName = state?.routes?.[state.index]?.name;

    navigation.setOptions({
      header: () => {
        return <CustomHeader title={screenName} />;
      },
    });
  }, []);

  const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;

  return (
    <View style={styles.container}>
      {/* <ScreenWrapper style={styles.container}> */}
      <Text style={styles.text}>
        Current Theme: {theme ?? 'System Default'}
      </Text>
      <Button title="Toggle Theme" onPress={() => toggleTheme(newTheme)} />
      {/* </ScreenWrapper> */}
    </View>
  );
};

export default HomeScreen;

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
    },
  });
