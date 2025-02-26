import {View, StyleSheet, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title={'Close'}
        color={'red'}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
