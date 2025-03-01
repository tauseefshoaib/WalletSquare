import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ColorDots from './ColorDots';
import Text from './Text';
import Icon from './Icon';

interface CatalogueCardProps {
  name: string;
  image: string;
  price: number;
  colors?: string[];
  onAddToBilling?: () => void;
}

const CatalogueCard: React.FC<CatalogueCardProps> = ({
  name,
  price,
  image,
  colors = ['black', 'brown', 'antique'],
  onAddToBilling,
}) => {
  return (
    <View style={styles.card}>
      {/* Add to Cart Icon */}
      <TouchableOpacity style={styles.addToCart} onPress={onAddToBilling}>
        <Icon name="add-circle" size={22} color="white" />
      </TouchableOpacity>

      <Image source={{uri: image}} style={styles.img} />

      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="clip">
          {name}
        </Text>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>₹{price}</Text>
          <ColorDots colors={colors} />
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
  addToCart: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'green',
    borderRadius: 15,
    padding: 5,
    zIndex: 10,
  },
  img: {
    height: '70%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  details: {
    height: '30%',
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    flexShrink: 1,
    alignSelf: 'flex-start',
  },
  price: {
    fontSize: 12,
    fontWeight: '600',
    color: 'green',
    flexShrink: 1,
  },
});
