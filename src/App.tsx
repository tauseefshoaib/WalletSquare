import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from './navigation/RootNavigation';

export default function () {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'trasparent'}
        translucent={true}
      />
      <RootNavigation />
    </SafeAreaProvider>
  );
}
