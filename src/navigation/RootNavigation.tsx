import React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomStack from './BottomStack';

const Stack = createNativeStackNavigator({
  initialRouteName: 'Root',
  screens: {
    Root: {
      screen: BottomStack,
      options: {
        headerShown: false,
      },
    },
  },
});

const StackNavigation = createStaticNavigation(Stack);

const RootNavigation = () => {
  return <StackNavigation />;
};

export default RootNavigation;
