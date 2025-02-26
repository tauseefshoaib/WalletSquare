import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import {Colors} from '../styles/theme';
import {useThemeColor} from '../hooks/useThemeColor';

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  const color: Colors = useThemeColor();
  return (
    <Stack.Navigator
      initialRouteName={'Settings'}
      screenOptions={{
        headerStyle: {
          backgroundColor: color.accentColor,
        },
        headerTintColor: color.text,
        headerTitleStyle: {
          color: color.text,
        },
      }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
