import React, { useEffect, useState, useContext } from 'react';
import {
    Text,
    Image,
    View,
    ScrollView,
    SafeAreaView,
    Button,
    StyleSheet,
    TextInput,
} from 'react-native';
import { db } from "./Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore"


export function AddProduct({ route, navigation }) {

    const [imagesrc, setImagesrc] = useState(require("./assets/uploadimg.png"))
    const [imageurl, setimgurl] = useState("./assets/uploadimg.png");
    const [productName, setproductName] = useState("Add new name");
    const [description, setDescription] = useState("Add new description");
    const [price, setPrice] = useState("0");
    const productsCollectionRef = collection(db, "products");


    const addProductToFirebase = async () => {
        let abc = await addDoc(productsCollectionRef, { name: productName, description: description, price: price, img: imageurl });
        console.log("add profuct firebase");
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Image
                    style={styles.image}
                    source={imagesrc}

                />
                <View style={styles.infoContainer}>
                    <TextInput style={styles.name} placeholder="Add a product name" onChangeText={(text) => { setproductName(text) }} />
                    <TextInput style={styles.price} placeholder="$ product price" onChangeText={(text) => { setPrice(text) }} />
                    <TextInput style={styles.description} placeholder="Add a description" onChangeText={(text) => { setDescription(text) }} />
                    <TextInput style={styles.description} placeholder="Paste image url" onChangeText={(text) => { setimgurl(text) }} />


                    <Button style={styles.cart} onPress={addProductToFirebase} title="Save Product" />
                </View>
            </ScrollView>
        </SafeAreaView >
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
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    catogories: {
        flexDirection: 'row',
    },
    catoText: {
        fontSize: 22,
        marginHorizontal: 5,
        // backgroundColor:'grey',
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontWeight: 'bold',
    },
    cart: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#f5e042',
        height: 50,
        alignItems: 'center',
        width: '100%',
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
