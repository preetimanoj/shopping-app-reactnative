import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,TextInput,Button } from 'react-native';

import { Product } from './/Product.js';
// import { getProducts, getProductCat,getProductSearch } from './ProductsService.js';
import { db } from "./Firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


const usersCollectionRef = collection(db, "products");




export function ProductsList ({navigation}) {

  const [products, setProducts] = useState();
  const [searchVal, setSearchVal] = useState("");
  
 

  const getProducts = async () => {
    const data = await getDocs(usersCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(products)
  };

  
  useEffect(() => {
    
    getProducts();
    // setProducts(getProductsDb());

  },[]);

  const sortCatogory = (cat) =>{
    if(cat == "all"){
      console.log("all")
      setProducts(getProducts());
    }else{
      var seachcat = products.filter((product) => (product.category == cat));
      setProducts(seachcat);
      // setProducts( getProductCat(cat));
    }
  }
  const searchProducts = () => {
    var seachpl = products.filter((product) => (product.name == searchVal));
    setProducts(seachpl);
   
  }

  
  return (
    <View>
     
    {/* <Text>Search bar</Text> */}
    {/* <SearchBar ref={search => this.search = search}/> */}
    <View style={styles.search}>
      <TextInput   style={styles.input}
        onChangeText={setSearchVal}
        value={searchVal} placeholder="Search.."/>
      <Button style={styles.btnstyle} title="Search" onPress={searchProducts}/>
    </View>
    
    <View style={styles.catogories}>
      <Text style={styles.catoText} onPress={()=>{sortCatogory("all")}}>All </Text>
      <Text style={styles.catoText} onPress={()=>{sortCatogory("electronics")}}>Electronics </Text>
      <Text style={styles.catoText} onPress={()=>{sortCatogory("grocery")}}>Grocery </Text>
      <Text style={styles.catoText} onPress={()=>{sortCatogory("clothes")}}>Clothes </Text>
      <Text style={styles.catoText} onPress={()=>{sortCatogory("decor")}}>Decor </Text>
    </View>
    {console.log("products ==> ", products)}
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id}
      data={products}
      renderItem={({item}) => 
      <Product name={item.name} price={item.price} image={item.img} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: item.id,
        });
      }}
      />}
    />

    </View>
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
    flexDirection: 'row',
  },
  search:{
    flexDirection: 'row',
    // justifyContent:'space-between',
    margin: 15,
    marginTop: 5,
    marginLeft:0,
    alignItems: 'center'
  },
  catoText:{
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 7,
    padding:10,
    // backgroundColor:'white',
    backgroundColor: '#f5e042',
    elevation: 10,
    shadowOpacity: 0.2,
    marginBottom: 15
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:'75%'
  },
  btnstyle:{
    // margin: 20,
    alignItems: 'center'
  }
});
