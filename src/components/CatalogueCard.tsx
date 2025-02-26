import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface CatalogueCardProps {
  title: string;
}

const CatalogueCard: React.FC<CatalogueCardProps> = ({title}) => {
  return (
    <View style={styles.card}>
      <Text>{title}</Text>
    </View>
  );
};

export default CatalogueCard;

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: '90%',
    margin: '5%',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
