import {StyleSheet, View} from 'react-native';
import React from 'react';

const colorMap: Record<string, string> = {
  black: '#000',
  brown: '#8B4513',
  antique: '#D2B48C',
};

const ColorDots: React.FC<{colors: string[]}> = ({colors}) => {
  return (
    <View style={styles.colorContainer}>
      {colors.map(color => (
        <View
          key={color}
          style={[styles.colorDot, {backgroundColor: colorMap[color]}]}
        />
      ))}
    </View>
  );
};

export default ColorDots;

const styles = StyleSheet.create({
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
