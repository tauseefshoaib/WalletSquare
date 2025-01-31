import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from '../screens/home/HomeScreen';
import AddScreen from '../screens/add/AddScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

// Icons
import HomeIcon from '../assets/svg/HomeIcon';
import SettingsIcon from '../assets/svg/SettingsIcon';
import EditIcon from '../assets/svg/EditIcon';
import AddIcon from '../assets/svg/AddIcon';

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

const BottomStack = createBottomTabNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    tabBarActiveTintColor: 'brown',
    tabBarInactiveTintColor: 'grey',
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 30,
      bottom: '5%',
      height: '8%',
      width: '80%',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        ...tabScreenOptions,
        tabBarIcon: Home,
      },
    },
    Add: {
      screen: AddScreen,
      options: {
        ...tabScreenOptions,
        tabBarIcon: Add,
      },
    },
    Settings: {
      screen: SettingsScreen,
      options: {
        ...tabScreenOptions,
        tabBarIcon: Settings,
      },
    },
  },
});

export default BottomStack;
