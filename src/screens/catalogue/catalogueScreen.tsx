import {StyleSheet, View} from 'react-native';
import React, {useCallback, useLayoutEffect, useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../navigation/CustomHeader';
import {Colors} from '../../styles/theme';
import {useThemeColor} from '../../hooks/useThemeColor';
import CatalogueList from '../../components/CatalogueList';
import SearchBox from '../../components/SearchBox';
import Icon from '../../components/Icon';
import {walletData, WalletItemType} from '../../constants/walletData';
import BadgeIcon from '../../components/BadgeIcon';
import useCartStore from '../../store/cartStore';

const CatalogueScreen = () => {
  const navigation = useNavigation();
  const color: Colors = useThemeColor();
  const styles = getStyles(color);

  const {cart, addWalletToCart} = useCartStore();

  console.log('cart===>', cart);

  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(walletData);

  useLayoutEffect(() => {
    const state = navigation?.getState();

    const screenName = state?.routes?.[state.index]?.name;

    navigation.setOptions({
      header: () => {
        return (
          <CustomHeader
            title={screenName}
            icon={
              <BadgeIcon
                name={'wallet-outline'}
                size={28}
                color={'black'}
                count={cart?.length}
              />
            }
          />
        );
      },
    });
  }, [cart]);

  const onClearFilter = useCallback(() => {
    setSearchText('');
    setFilteredData(walletData);
  }, []);

  const onChangeText = useCallback(
    (text: string) => {
      if (text === '') {
        onClearFilter();
      } else {
        const filteredList = walletData.filter(item =>
          item.modelName.toLowerCase().includes(text.toLowerCase()),
        );
        setFilteredData(filteredList);
        setSearchText(text);
      }
    },
    [onClearFilter],
  );

  const handleFilterPress = () => {};
  const handleAddWalletToCart = (item: WalletItemType) => {
    const updatedItem = {...item, isAddedInCart: true};
    addWalletToCart(updatedItem);
    setFilteredData(prevData =>
      prevData.map(wallet => (wallet.id === item.id ? updatedItem : wallet)),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <SearchBox
          placeholder="Search"
          filterText={searchText}
          onChangeText={onChangeText}
          onCancelSearch={() => setSearchText('')}
        />
        <Icon
          name="funnel"
          size={24}
          color="#666"
          onPressIcon={handleFilterPress}
        />
      </View>

      <CatalogueList
        catalogueList={filteredData}
        onAddWalletToCart={handleAddWalletToCart}
      />
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
    topBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: 10,
    },
  });
