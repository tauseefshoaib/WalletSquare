import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useThemeColor} from '../hooks/useThemeColor';
import {Colors} from '../styles/theme';

type RouteName = 'Catalogue' | 'Billing' | 'Add' | 'SettingsStack';

const CustomTabBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  const color: Colors = useThemeColor();
  const styles = getStyles(color);

  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const IconName: Record<RouteName, [string, string]> = {
          Catalogue: ['wallet', 'wallet-outline'],
          Add: ['add-circle', 'add-circle-outline'],
          Billing: ['receipt', 'receipt-outline'],
          SettingsStack: ['settings', 'settings-outline'],
        };

        const icon = isFocused
          ? IconName[route.name as RouteName][0]
          : IconName[route.name as RouteName][1];

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}>
            <Ionicons
              name={icon}
              color={isFocused ? color.focusedIcon : color.icon}
              size={36}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const getStyles = (color: Colors) =>
  StyleSheet.create({
    tabBarContainer: {
      backgroundColor: color.accentColor,
      flexDirection: 'row',
      justifyContent: 'space-around',
      position: 'absolute',
      bottom: '3%',
      minHeight: '8%',
      marginHorizontal: '5%',
      borderRadius: 30,
      elevation: 35,
      shadowColor: '#1b1b1b',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    tabButton: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  });
