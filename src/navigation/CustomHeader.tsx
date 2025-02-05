import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FONT_SIZES} from '../styles/commonStyles';
import {useThemeColor} from '../hooks/useThemeColor';
import {Colors} from '../styles/theme';

interface IHeaderProps {
  title?: string;
  icon?: any;
  onIconPress?: () => void;
}

const CustomHeader = ({title, icon, onIconPress}: IHeaderProps) => {
  const color: Colors = useThemeColor();
  const styles = getStyles(color);
  return (
    <View style={styles.headerContainer}>
      {title && <Text style={styles.title}>{title}</Text>}
      {icon && (
        <TouchableOpacity onPress={onIconPress} style={styles.iconContainer}>
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const getStyles = (color: Colors) =>
  StyleSheet.create({
    safeArea: {
      flex: 0,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: color.background,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      minHeight: '15%',
    },
    title: {
      fontSize: FONT_SIZES.massive,
      fontWeight: 'bold',
      color: color.text,
    },
    iconContainer: {
      marginLeft: 8,
    },
  });

export default CustomHeader;
