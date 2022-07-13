import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function List({ route, navigation }) {
  const { list } = route.params;

  let categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Groceries" },
    { id: 3, name: "Toys" },
  ];

  let products = [
    {
      id: 1,
      category: "Electronics",
      name: "Headphones",
      image:
        "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo3-wireless/pdp/solo3-pdp-p02.png.large.1x.png",
    },
    {
      id: 2,
      name: "Groceries",
      name: "SweetHome Cupcake",
      image:
        "https://i.pinimg.com/originals/17/52/3b/17523b0b0c03787eb10b2ba3a24ceb33.jpg",
    },
    {
      id: 3,
      name: "Toys",
      name: "FastLane Toy Car",
      image:
        "https://www.ethanproductions.com/hotwheels-newDB/images/nocode20210727234127236.jpg",
    },
  ];

  
  function addtoCategory(type) {
    console.log("=====", type);
  }

  function editCategory(type) {
    console.log("=====", type);
  }
  function removeCategory(type) {
    console.log("=====", type);
  }




  function editProducts(type) {
    console.log("=====", type);
  }
  function addToProducts(type) {
    console.log("=====", type);
  }
  function removeProducts(type) {
    console.log("=====", type);
  }


  function addCustomer(type) {
    console.log("=====", type);
  }
  function editCustomer(type) {
    console.log("=====", type);
  }
  function removeCustomer(type) {
    console.log("=====", type);
  }


  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.name} />;

  if (list === "category") {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ marginTop: "10%", fontWeight: "bold", fontSize: 20 }}>
          CATEGORIES
        </Text>
        <FlatList
          data={categories}
          style={{ marginTop: "10%" }}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TextInput
                style={{ marginLeft: "2%", color: "white", fontWeight: "bold" }}
              >
                {item.name}
              </TextInput>
              <FontAwesome
                name="edit"
                size={20}
                style={{marginLeft:4}}
                color="#fff"
                onPress={() => {
                  editCategory(1);
                }}
              />
              <FontAwesome
                name="remove"
                size={20}
                style={{marginLeft:4}}
                color="#fff"
                onPress={() => {
                  removeCategory(1);
                }}
              />
            </View>
          )}
        />

        <View style={{ minWidth: "80%", width: "auto", marginBottom: "30%" }}>
          <Button
            onPress={() => {
              addtoCategory(1);
            }}
            title="Add Category"
          />
        </View>
      </View>
    );
  } else if (list === "products") {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ marginTop: "10%", fontWeight: "bold", fontSize: 20 }}>
          PRODUCTS
        </Text>
        <FlatList
          data={products}
          style={{ marginTop: "10%" }}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TextInput
                style={{ marginLeft: "2%", color: "white", fontWeight: "bold" }}
              >
                {item.name}{" "}
              </TextInput>
              <FontAwesome
                name="edit"
                size={20}
                color="#fff"
                onPress={() => {
                  editProducts(1);
                }}
              />
              <FontAwesome
                name="remove"
                size={20}
                style={{marginLeft:4}}
                color="#fff"
                onPress={() => {
                  removeProducts(1);
                }}
              />
            </View>
          )}
        />

        <View style={{ minWidth: "80%", width: "auto", marginBottom: "30%" }}>
          <Button
            onPress={() => {
              addToProducts(1);
            }}
            title="Add Product"
          />
        </View>
      </View>
    );
  } else {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ marginTop: "10%", fontWeight: "bold", fontSize: 20 }}>
          CUSTOMERS
        </Text>
        <FlatList
          data={products}
          style={{ marginTop: "10%" }}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TextInput
                style={{ marginLeft: "2%", color: "white", fontWeight: "bold" }}
              >
                {item.name}{" "}
              </TextInput>
              <FontAwesome
                name="edit"
                size={20}
                color="#fff"
                onPress={() => {
                  editCustomer(1);
                }}
              />
              <FontAwesome
                name="remove"
                size={20}
                style={{marginLeft:4}}
                color="#fff"
                onPress={() => {
                  removeCustomer(1);
                }}
              />
            </View>
          )}
        />

        <View style={{ minWidth: "80%", width: "auto", marginBottom: "30%" }}>
          <Button
            onPress={() => {
                addCustomer(1);
            }}
            title="Add Customer"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
  },
  buttonSt: {
    marginTop: 50,
    padding: 20,
  },
  item: {
    backgroundColor: "#3b7eeb",
    padding: 10,
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 32,
  },
});