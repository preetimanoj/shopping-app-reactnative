import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet
  } from 'react-native';

import { getProduct } from './ProductsService.js';
// import { CartContext } from './CartContext';?

export function ProductDetails({route,navigation}) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  const [qty,setQty] = useState(0);
  
  // const { addItemToCart } = useContext(CartContext);
  
  useEffect(() => {
    setProduct(getProduct(productId));
  });
  
  // function onAddToCart() {
  //   addItemToCart(product.id);
  // }
  
  const changeQty = (change) =>{
    if(change == "add"){
      setQty(qty+1);
    }else if(change == "sub" && qty>0){
      setQty(qty-1);
    }
  }



  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={product.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.catogories}>
            <Text style={styles.catoText}>Quantity: </Text>
            <Text style={styles.catoText} onPress={()=>{changeQty("sub")}}>- </Text>
            <Text style={styles.catoText}>{qty}</Text>
            <Text style={styles.catoText} onPress={()=>{changeQty("add")}}>+ </Text>
          </View>
    
      
            <Text style={styles.cart} onPress={()=>{navigation.navigate('Cart');}}>Add to cart </Text>
            <Text style={styles.cart} onPress={()=>{navigation.navigate('Cart');}}>Go to cart </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  catogories:{
    flexDirection: 'row',
  },
  catoText:{
    fontSize: 22,
    marginHorizontal:5,
    // backgroundColor:'grey',
    paddingHorizontal:10,
    paddingVertical:10,
    fontWeight: 'bold',
  },
  cart:{
    paddingVertical: 10,
    paddingHorizontal:30,
    backgroundColor:'#f5e042',
    height:50,
    alignItems:'center',
    width:'100%',
    fontSize: 22,
    marginVertical: 10,
    // borderWidth:'2',
    borderRadius: 25,
  
    fontWeight: 'bold',
    elevation: 1,
    shadowOpacity: 0.2,
    // color:'white'
  }
});
