import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type BaseProps = {
  title: string;
  leftIcon: string;
};

// Enforce onPressTile when showChevron is true
type ChevronProps =
  | {showChevron?: false; onPressTile?: never}
  | {showChevron: true; onPressTile: () => void};

// Enforce switchValue and onSwitchChange when showSwitch is true
type SwitchProps =
  | {showSwitch?: false; switchValue?: never; onSwitchChange?: never}
  | {
      showSwitch: true;
      switchValue: boolean;
      onSwitchChange: (value: boolean) => void;
    };

type ScreenProps = BaseProps & ChevronProps & SwitchProps;

const Tiles = ({
  title,
  leftIcon,
  onPressTile,
  showChevron = false,
  showSwitch,
  switchValue,
  onSwitchChange,
}: ScreenProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPressTile}
      disabled={!onPressTile}>
      <View style={styles.iconTitleContainer}>
        <Ionicons
          name={leftIcon}
          color={'black'}
          size={22}
          style={styles.iconStyle}
        />
        <Text>{title}</Text>
      </View>

      {showChevron && (
        <Ionicons name={'chevron-forward-outline'} color={'black'} size={22} />
      )}
      {showSwitch && (
        <Switch value={switchValue} onValueChange={onSwitchChange} />
      )}
    </TouchableOpacity>
  );
};

export default Tiles;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'lightgrey',
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  iconTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  iconStyle: {
    marginRight: '5%',
  },
});
