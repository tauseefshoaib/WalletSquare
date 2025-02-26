import {StyleSheet} from 'react-native';
import React from 'react';
import Tiles from '../../components/Tiles';
import {useNavigation} from '@react-navigation/native';
import useThemeStore from '../../store/themeStore';
import {THEME} from '../../constants/enums';
import ScreenWrapper from '../../components/ScreenWrapper';

const SettingsScreen = () => {
  const navigation = useNavigation<any>();
  const {theme, toggleTheme} = useThemeStore();
  const isDarkTheme = theme === THEME.DARK;

  const handleSettingTilePress = () => {
    navigation.navigate('Profile');
  };

  return (
    <ScreenWrapper style={styles.container}>
      <Tiles
        leftIcon={'person'}
        title={'Profile'}
        onPressTile={handleSettingTilePress}
        showChevron
      />
      <Tiles
        leftIcon={'sunny'}
        title={'Dark Mode'}
        showSwitch
        switchValue={isDarkTheme}
        onSwitchChange={toggleTheme}
      />
    </ScreenWrapper>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
