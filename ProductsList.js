import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Product } from './/Product.js';
import { getProducts } from './ProductsService.js';

export function ProductsList ({navigation}) {

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(getProducts());
  });
  
  return (
    <>
    <Text>Search bar</Text>
    <View style={styles.catogories}>
      <Text style={styles.catoText}>Electronics </Text>
      <Text>Electronics </Text>
      <Text>Electronics </Text>
      <Text>Electronics </Text>
    </View>
    <Text>Categories </Text>
    <FlatList
      style={styles.productsList}
      // contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
    </>
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
