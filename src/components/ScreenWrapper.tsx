import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';

interface IScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper = ({children}: IScreenWrapperProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
});
