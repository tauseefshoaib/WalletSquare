import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({onFinish}: {onFinish: () => void}) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [onFinish]);

  return (
    <LottieView
      style={styles.animation}
      source={require('../assets/animations/splash.json')}
      autoPlay
      onAnimationFinish={onFinish}
    />
  );
};

const styles = StyleSheet.create({
  animation: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
