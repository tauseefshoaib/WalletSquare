import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ColorDots from './ColorDots';
import Text from './Text';
import Icon from './Icon';
import {WalletItemType} from '../constants/walletData';
import useCartStore from '../store/cartStore';

interface CatalogueCardProps {
  walletData: WalletItemType;
  colors?: string[];
  onPressAddToCart: () => void;
}

const CatalogueCard: React.FC<CatalogueCardProps> = ({
  walletData,
  onPressAddToCart,
  colors = ['black', 'brown', 'antique'],
}) => {
  const {image, modelName: name, price} = walletData;

  return (
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.img} />

      <View style={styles.details}>
        {/* First row: Price (left) & Name (right) */}
        <View style={styles.topRow}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="clip">
            {name}
          </Text>
          <Text style={styles.price}>₹{price}</Text>
        </View>

        {/* Second row: Color dots (left) & Add to Cart (right) */}
        <View style={styles.bottomRow}>
          <ColorDots colors={colors} />
          <TouchableOpacity style={styles.addToCart} onPress={onPressAddToCart}>
            <Icon name="add-circle" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CatalogueCard;

const styles = StyleSheet.create({
  card: {
    height: 250,
    width: '90%',
    margin: '5%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'column',
    elevation: 35,
    shadowColor: '#1b1b1b',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  img: {
    height: '70%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  details: {
    height: '30%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: 'green',
  },
  addToCart: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 5,
  },
});
