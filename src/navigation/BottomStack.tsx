import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import Catalogue from '../screens/catalogue/catalogueScreen';
import AddScreen from '../screens/add/AddScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

// Icons
import HomeIcon from '../assets/svg/HomeIcon';
import SettingsIcon from '../assets/svg/SettingsIcon';
import EditIcon from '../assets/svg/EditIcon';
import AddIcon from '../assets/svg/AddIcon';
import {useThemeColor} from '../hooks/useThemeColor';
import {Colors} from '../styles/theme';

type IconProps = {
  color: string;
  size: number;
};

const tabScreenOptions = {
  tabBarShowLabel: false,
};

const Home = ({color, size}: IconProps) => (
  <HomeIcon color={color} size={size + 10} />
);
const Settings = ({color, size}: IconProps) => (
  <SettingsIcon color={color} size={size + 10} />
);
const Edit = ({color, size}: IconProps) => (
  <EditIcon color={color} size={size + 10} />
);
const Add = ({color, size}: IconProps) => (
  <AddIcon color={color} size={size + 15} />
);

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const color: Colors = useThemeColor();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'brown',
        tabBarInactiveTintColor: 'grey',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: color.background,
          borderRadius: 30,
          bottom: '5%',
          height: '8%',
          marginHorizontal: '8%',
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 3,
        },
      }}>
      <Tab.Screen
        name="Catalogue"
        component={Catalogue}
        options={{
          ...tabScreenOptions,
          tabBarIcon: Home,
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          ...tabScreenOptions,
          tabBarIcon: Add,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          ...tabScreenOptions,
          tabBarIcon: Settings,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
