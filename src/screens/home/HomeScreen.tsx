import {Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../navigation/CustomHeader';
import ScreenWrapper from '../../components/ScreenWrapper';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const state = navigation?.getState();

    const screenName = state?.routes?.[state.index]?.name;

    navigation.setOptions({
      header: () => {
        return <CustomHeader title={screenName} />;
      },
    });
  }, []);

  return (
    <ScreenWrapper>
      <Text>HomeScreen</Text>
    </ScreenWrapper>
  );
};

export default HomeScreen;
