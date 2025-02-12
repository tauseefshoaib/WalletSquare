import React from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import LottieView from 'lottie-react-native';

const LoaderScreen = () => {
  return (
    <Modal transparent animationType={'fade'} visible>
      <View style={styles.container}>
        <LottieView
          style={styles.animation}
          source={require('../assets/animations/loader.json')}
          autoPlay
          loop
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: '40%',
    height: '40%',
  },
});

export default LoaderScreen;
