import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet,Image } from 'react-native';
import { db } from "./Firebase";
import {collection, getDocs,addDoc} from "firebase/firestore";


const orderCollectionRef = collection(db, "orders");

export function Order ({navigation}) {

  const [products, setProducts] = useState();

    const getCartProducts = async () => {
      const data = await getDocs(orderCollectionRef);
      var temp = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setProducts(temp);
    console.log("order list == > ", temp)
    };


    useEffect(() => {
      getCartProducts();
      // setTotal(getTotalPrice());
    },[]);


  
const navOrderDetails = (item) => {
    navigation.navigate('Order');

}


  function Totals() { 
    return (
      <View>
       <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>$ {ftotal}</Text>
          </View>
          <Text>All deliveries are currently COD</Text>
          <Button title='Confirm Order' onPress={addOrder}/>
       </View>
    );
  }
 

  
  return (
    <>
    
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={products}
      renderItem={({item}) => 
            <View style={styles.orderLine} onPress={()=>{navOrderDetails(item)}}>
            <Text>Order Id: {item.id}</Text>
            <Text>Customer: {item.customerName} </Text>
            <Text>Totla Price: {item.totprice}</Text>
            <Text style={{ fontWeight: 'bold', }}> Order Status: {item.orderstat}</Text>
            <View style={styles.cartLine}>
            {console.log("item ==>", item.cart.length)}
            
            </View>
    </View>
     

     }
      keyExtractor={(item) => item.id}
    //   ListFooterComponent={Totals}
    />





   
    
    </>
    
  );
}

const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' 
  },
  lineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  image:{
    height: 30,
    width: 30,
    marginRight: 15
  },
  orderLine:{
    paddingVertical: 30,
    paddingHorizontal: 20,
    margin: 10,
    backgroundColor: 'lightgrey'
  }
});
