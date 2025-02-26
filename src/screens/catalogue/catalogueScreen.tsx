import {StyleSheet, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../navigation/CustomHeader';
import {Colors} from '../../styles/theme';
import {useThemeColor} from '../../hooks/useThemeColor';
import CatalogueList from '../../components/CatalogueList';

const CatalogueScreen = () => {
  const navigation = useNavigation();
  const color: Colors = useThemeColor();
  const styles = getStyles(color);

  // useLayoutEffect(() => {
  //   const state = navigation?.getState();

  //   const screenName = state?.routes?.[state.index]?.name;

  //   navigation.setOptions({
  //     header: () => {
  //       return <CustomHeader title={screenName} />;
  //     },
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <CatalogueList />
    </View>
  );
};

export default CatalogueScreen;

const getStyles = (color: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.background,
    },
  });
