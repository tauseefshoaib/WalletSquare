import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens
import HomeScreen from '../screens/home/HomeScreen';
import AddScreen from '../screens/add/AddScreen';
import EditScreen from '../screens/edit/EditScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

//icons
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
  // headerShown: false,
};

const Tab = createBottomTabNavigator();

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
  <AddIcon color={color} size={size + 10} />
);

const BottomStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'brown',
        tabBarInactiveTintColor: 'grey',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'white',
          borderRadius: 30,
          maxHeight: 70,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 25,
          marginHorizontal: 20,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
        name="Edit"
        component={EditScreen}
        options={{
          ...tabScreenOptions,
          tabBarIcon: Edit,
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

export default BottomStack;
