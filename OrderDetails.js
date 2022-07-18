import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,TextInput,Button, Image } from 'react-native';
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { RadioButton } from 'react-native-paper';
import { db } from "./Firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export function OrderDetails ({route, navigation}) {

    const collectionRef = collection(db, "orders");

    const { selOrder } = route.params;
    const { selOrderItems } = route.params;
    const [order, setOrder] = useState({});
    let [orderEdit, setOrderEdit] = useState("");
    let [visible, setVisible] = useState(false);
    const [checked, setChecked] = React.useState('Apple'); //initial choice
    // console.log("***********",selOrder);
    // console.log("----------------------",selOrderItems);


    const data = [
        { value: 'Placed' },
        { value: 'Shipped' },
        { value: 'Out for Delivery' },
        { value: 'Delivered' },
      ];

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
          data={order.cart}
          renderItem={({item}) => 
            <View style={styles.orderLine}>
                <Text>Order Id: {item.id}</Text> 
                <Text>Product: {item.name} </Text>
                <Image
                    style={styles.thumb}
                    source={{
                    uri: item.img, 
                    }}
                />
                <Text>Total Price: {item.price}</Text>
                <Text>Total Price: {item.quantity}</Text>
                {/* <View style={styles.cartLine}> */}
                {/* {console.log("item ==>", item.cart.length)} */}
                
                {/* </View> */}
                {/* <View style={{flexDirection: 'row',justifyContent: "space-evenly"}}>
                    <Button title="Status" onPress={() => {
                    activateRadioB();
                    }}></Button>
                    <Button title="Delete" onPress={() => {
                    activateRadioB();
                    }}>

                    </Button>

              </View> */}
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
      thumb: {
        height: 260,
        // borderTopLeftRadius: 16,
        // borderTopRightRadius: 16,
        width: '100%',
      },
    });