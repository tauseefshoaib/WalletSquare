import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from './Icon';

interface BadgeIconProps {
  name: string;
  size?: number;
  color?: string;
  count?: number;
}

const BadgeIcon: React.FC<BadgeIconProps> = ({
  name,
  size = 28,
  color = 'black',
  count = 0,
}) => {
  console.log('count==>', count);
  return (
    <View style={styles.iconContainer}>
      <Icon name={name} size={size} color={color} />
      {count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count > 9 ? '9+' : count}</Text>
        </View>
      )}
    </View>
  );
};

export default BadgeIcon;

const styles = StyleSheet.create({
  iconContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: -4,
    top: -4,
    backgroundColor: 'red',
    borderRadius: 10,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
