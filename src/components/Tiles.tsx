import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type ScreenProps = {
  title: string;
  onPressTile?: () => void;
};

const Tiles = ({title, onPressTile}: ScreenProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressTile}>
      <Text>{title}</Text>
      <Ionicons name={'chevron-forward-outline'} color={'black'} size={24} />
    </TouchableOpacity>
  );
};

export default Tiles;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'skyblue',
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
});
