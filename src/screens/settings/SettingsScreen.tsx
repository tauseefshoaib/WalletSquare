import {StyleSheet, View} from 'react-native';
import React from 'react';
import Tiles from '../../components/Tiles';
import {useNavigation} from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation<any>();
  const handleSettingTilePress = () => {
    navigation.navigate('Profile');
  };

  const handlethemeTilePress = () => {
    navigation.navigate('Theme');
  };

  return (
    <View style={styles.container}>
      <Tiles title={'Profile'} onPressTile={handleSettingTilePress} />
      <Tiles title={'Theme'} onPressTile={handlethemeTilePress} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
