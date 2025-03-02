import {StyleSheet, View} from 'react-native';
import React, {useMemo} from 'react';
import {FlashList} from '@shopify/flash-list';
import {WalletDataType, WalletItemType} from '../constants/walletData';
import CatalogueCard from './CatalogueCard';
import Text from './Text';

type ScreenProps = {
  catalogueList: WalletDataType;
  onAddWalletToCart: (item: WalletItemType) => void;
};

const CatalogueList: React.FC<ScreenProps> = ({
  catalogueList = [],
  onAddWalletToCart,
}) => {
  const renderList = ({item}: {item: WalletItemType}) => {
    return (
      <CatalogueCard
        walletData={item}
        onPressAddToCart={() => onAddWalletToCart(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      {catalogueList.length > 0 ? (
        <FlashList
          data={catalogueList}
          renderItem={renderList}
          keyExtractor={item => item?.id?.toString()}
          numColumns={2}
          estimatedItemSize={50}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.noDataFoundContainer}>
          <Text style={styles.noDataFoundText}>No Wallet Found!</Text>
        </View>
      )}
    </View>
  );
};

export default CatalogueList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noDataFoundContainer: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataFoundText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#666',
  },
});
