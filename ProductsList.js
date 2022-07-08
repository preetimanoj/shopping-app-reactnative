import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,Button } from 'react-native';
// import { Button } from 'react-native-web';

import { Product } from './/Product.js';
import { getProducts, getProductCat } from './ProductsService.js';

export function ProductsList ({navigation}) {

  const [products, setProducts] = useState(getProducts());
  const [abc, efg] = useState([])
  

  function renderProduct({item: product}) {
    return (
      <>
      {console.log("=====rerendered===")}
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
      </>
      
    );
  }
  
  
  // console.log("================", products)
  useEffect(() => {
    setProducts(getProducts());
    console.log("producs",products);
  },[]);

  const sortCatogory = async (cat) =>{
    if(cat == "all"){
      setProducts(getProducts());
    }else{
      setProducts( getProductCat(cat));
    }
    console.log("producs",products);
    efg()
    ;
  }

  
  return (
    <>
     {console.log("=====main===")}
    <Text>Search bar</Text>
    <View style={styles.catogories}>
      <Text style={styles.catoText} onPress={()=>{sortCatogory("all")}}>All </Text>
      <Text style={styles.catoText} onPress={()=>{sortCatogory("electronics")}}>Electronics </Text>
      <Text style={styles.catoText} onPress={()=>{sortCatogory("grocery")}}>Grocery </Text>
      <Text style={styles.catoText} onPress={()=>{sortCatogory("clothes")}}>Clothes </Text>
      <Text style={styles.catoText} onPress={()=>{sortCatogory("decor")}}>Decor </Text>
    </View>
    {/* <Text>Categories </Text> */}
    <FlatList
      style={styles.productsList}
      // contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={({item}) => 
      <Product name={item.name} price={item.price} image={item.image} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />}
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
  catogories:{
    flexDirection: 'row'
  },
  catoText:{
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 7,
    marginVertical: 15,
    padding:10,
    // backgroundColor:'white',
    backgroundColor: '#f5e042',
  
    elevation: 10,
    shadowOpacity: 0.2,
  }
});
