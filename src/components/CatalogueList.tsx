import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {walletData, WalletItemType} from '../constants/walletData';
import CatalogueCard from './CatalogueCard';

const CatalogueList: React.FC = () => {
  const renderList = ({item}: {item: WalletItemType}) => {
    return <CatalogueCard title={item.modelName} />;
  };

  return (
    <View style={styles.container}>
      <FlashList
        data={walletData}
        renderItem={renderList}
        keyExtractor={item => item?.id?.toString()}
        numColumns={2}
        estimatedItemSize={50}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CatalogueList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
