import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {FONT_SIZES} from '../styles/commonStyles';

interface IHeaderProps {
  title?: string;
  icon?: any;
  onIconPress?: () => void;
}

const CustomHeader = ({title, icon, onIconPress}: IHeaderProps) => {
  return (
    // <SafeAreaView style={styles.safeArea}>
    <View style={styles.headerContainer}>
      {title && <Text style={styles.title}>{title}</Text>}
      {icon && (
        <TouchableOpacity onPress={onIconPress} style={styles.iconContainer}>
          {icon}
        </TouchableOpacity>
      )}
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    minHeight: '15%',
  },
  title: {
    fontSize: FONT_SIZES.massive,
    fontWeight: 'bold',
    color: '#333',
  },
  iconContainer: {
    marginLeft: 8,
  },
});

export default CustomHeader;
