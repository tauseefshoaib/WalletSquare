import {StyleSheet, SafeAreaView, ViewStyle} from 'react-native';
import React from 'react';
import {useThemeColor} from '../hooks/useThemeColor';
import {Colors} from '../styles/theme';

interface IScreenWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const ScreenWrapper = ({children, style}: IScreenWrapperProps) => {
  const color: Colors = useThemeColor();
  const styles = getStyles(color);

  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default ScreenWrapper;

const getStyles = (color: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.background,
    },
  });
