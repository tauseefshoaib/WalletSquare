import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomStack from './BottomStack';
import SplashScreen from '../components/SplashScreen';

const RootNavigation = () => {
  const [isNavigationReady, setIsNavigationReady] = useState(false);

  return !isNavigationReady ? (
    <SplashScreen onFinish={() => setIsNavigationReady(true)} />
  ) : (
    <NavigationContainer onReady={() => setIsNavigationReady(true)}>
      <BottomStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
