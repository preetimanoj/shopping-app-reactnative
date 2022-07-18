import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet,Image } from 'react-native';
import { CartContext } from './CartContext';
import { db } from "./Firebase";
import {collection, getDocs,addDoc} from "firebase/firestore";

const usersCollectionRef = collection(db, "cart");
const orderCollectionRef = collection(db, "orders");

export function Cart ({navigation}) {

  // const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
  

  const [products, setProducts] = useState();
  const [ftotal,setFtotal] = useState(0);
  

    const getCartProducts = async () => {
      const data = await getDocs(usersCollectionRef);
      var temp = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setProducts(temp);
      var ntemp = temp.map(e=> e.price*e.quantity);
      var sum = ntemp.reduce(function(a, b) { return a + b; }, 0);
      setFtotal(sum)
      console.log("get cart prdts",temp);
    };


    useEffect(() => {
      getCartProducts();
      // setTotal(getTotalPrice());
    },[]);


    const addOrder = async () => {
      console.log("in add")
      let abc = await addDoc(orderCollectionRef,
        // { itemName: product.name, price:product.price, img:product.img, quantity:qty }
        {customerName : "Preeti", totprice: ftotal, orderstat: 'Recieved',cart:products }
        );
      
      
        navigation.navigate('Order');
      console.log(abc?.docs)
    };

    
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
     <>
    
     <View style={styles.cartLine}>
        <Image
          style={styles.image}
          source = {{
            uri: item.img,
          }}
        />
          <Text style={styles.lineLeft}>{item.name} x {item.quantity}</Text>
          <Text style={styles.lineRight}>$ {item.price * item.quantity}</Text>
         
       </View>
     </>

     }
      keyExtractor={(item) => item.id}
      ListFooterComponent={Totals}
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
  }
});
