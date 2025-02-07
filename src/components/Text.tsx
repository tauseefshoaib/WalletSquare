import {StyleSheet, Text as TextReact, TextProps} from 'react-native';
import React from 'react';

interface CustomTextProps extends TextProps {}

const Text: React.FC<CustomTextProps> = props => {
  return <TextReact style={styles.text} {...props} />;
};

export default Text;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
  },
});
