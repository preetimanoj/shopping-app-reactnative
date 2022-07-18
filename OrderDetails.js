import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,TextInput,Button } from 'react-native';
import { db } from "./Firebase";
import {collection, getDocs,} from "firebase/firestore";

export function OrderDetails ({route, navigation}) {

    const { selOrder } = route.params;
    const [order, setOrder] = useState({});

    useEffect(() => {
        console.log("details page");
        setOrder(selOrder);
        console.log(order);

      });
  
      return(
        <View>
        
        <Text style={{ marginTop: "10%", fontWeight: "bold", fontSize: 20 }}>
          ORDER DETAILS
        </Text>
        <FlatList
          style={styles.itemsList}
          contentContainerStyle={styles.itemsListContainer}
          data={order}
          renderItem={({item}) => 
            <View style={styles.orderLine}>
                {/* <Text>Order Id: {item.id}</Text> */}
                <Text>Customer: {item.name} </Text>
                {/* <Text>Total Price: {item.totprice}</Text>
                <Text style={{ fontWeight: 'bold', }}> Order Status: {item.orderstat}</Text> */}
                {/* <View style={styles.cartLine}> */}
                {/* {console.log("item ==>", item.cart.length)} */}
                
                {/* </View> */}
                <Button title="Status"></Button>
            </View>
        }
          keyExtractor={(item) => item.id}
        //   ListFooterComponent={Totals}
        />
      </View>
      );


}

const styles = StyleSheet.create({
    itemsList: {
        backgroundColor: '#eeeeee',
      },
      itemsListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        marginHorizontal: 8,
      },orderLine:{
        paddingVertical: 30,
        paddingHorizontal: 20,
        margin: 10,
        backgroundColor: 'lightgrey'
      },
      cartLine: { 
        flexDirection: 'row',
      },
    });