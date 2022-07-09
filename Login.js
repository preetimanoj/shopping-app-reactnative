import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';
 
export function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.InputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.InputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
    <View style={styles.extra}>
        <TouchableOpacity onPress={() =>{navigation.navigate('Register');}}>
        <Text style={styles.forgot_button}>Register   </Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.forgot_button}>   Forgot Password?</Text>
      </TouchableOpacity>
    </View>
 
      <TouchableOpacity style={styles.loginBtn} onPress={() =>{navigation.navigate('Products');}}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    alignItems: "center",
  },
 
  InputText: {
    flex: 1,
    padding: 14,
    borderRadius: 30,
    border: '1px solid #000',
    height: 50,
    marginBottom: 20,
    width: "160%",
    
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#fec02e",
  },
  extra: {
    flexDirection: 'row',
  }
});