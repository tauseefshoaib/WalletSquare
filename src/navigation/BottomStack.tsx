import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CatalogueScreen from '../screens/catalogue/CatalogueScreen';
import BillingScreen from '../screens/billing/BillingScreen';
import AddScreen from '../screens/add/AddScreen';

import CustomTabBar from './TabBar';
import SettingsStack from './SettingsStack';
import {Colors} from '../styles/theme';
import {useThemeColor} from '../hooks/useThemeColor';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const color: Colors = useThemeColor();
  // const styles = getStyles(color);
  return (
    <Tab.Navigator
      initialRouteName="Catalogue"
      screenOptions={{
        headerStyle: {
          backgroundColor: color.accentColor,
        },
        headerTintColor: color.text,
        headerTitleStyle: {
          color: color.text,
        },
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Catalogue" component={CatalogueScreen} />
      {/* <Tab.Screen name="Add" component={AddScreen} /> */}
      <Tab.Screen name="Billing" component={BillingScreen} />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
