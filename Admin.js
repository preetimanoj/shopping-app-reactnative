import React, { useState } from 'react';
import { Button, View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { List } from "./List";

// const Stack = createNativeStackNavigator();
// students.sort((st) => return st.gpa - st.gpa) 
// const Stack = createNativeStackNavigator();

export function Admin({navigation}) {
  return ( <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

  <Button style={styles.buttonSt} onPress={() => {
          navigation.navigate('List', { "list": "category"});
        }} title="Categories"/>
  <Button style={styles.buttonSt} onPress={() => {
          navigation.navigate('List', { "list": "products"});
        }} title="Product"/>
  <Button style={styles.buttonSt} onPress={() => {
          navigation.navigate('List', { "list": "customers"});
        }} title="Customer"/>
  <Button style={styles.buttonSt} onPress={() => {
          navigation.navigate('List', { "list": "orders"});
        }} title="Orders"/>
</View>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      fontSize: 20
    },
    buttonSt: {
        marginTop: 50,
        padding: 20
    }
  });

