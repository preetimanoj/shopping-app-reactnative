import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductsList } from './ProductsList.js';
import { ProductDetails } from './ProductDetails.js';
import { Cart } from './Cart.js';
import { Login } from './Login';
import { Register } from './Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Login' component={Login} 
      options={({ navigation }) => ({
        title: 'Login',
        headerTitleStyle: styles.headerTitle,
      })} />
      <Stack.Screen name='Register' component={Register} 
      options={({ navigation }) => ({
        title: 'Login',
        headerTitleStyle: styles.headerTitle,
      })} />
      <Stack.Screen name='Products' component={ProductsList} 
      options={({ navigation }) => ({
        title: 'Products',
        headerTitleStyle: styles.headerTitle,
        headerRight: () =>
        <Text  onPress={() => {
          navigation.navigate('Cart');
        }}> Cart</Text>
        //  <CartIcon navigation={navigation}/>,
      })}/>
      <Stack.Screen name='ProductDetails' component={ProductDetails} 
      options={({ navigation }) => ({
        title: 'Product details',
        headerTitleStyle: styles.headerTitle,
        headerRight: () =>  <Text  onPress={() => {
          navigation.navigate('Cart');
        }}> Cart</Text>
        //  <CartIcon navigation={navigation}/>,
      })} />
     <Stack.Screen name='Cart' component={Cart} 
      options={({ navigation }) => ({
        title: 'My cart',
        headerTitleStyle: styles.headerTitle,
        headerRight: () =>  <Text> Cart</Text>
        //  <CartIcon navigation={navigation}/>,
      })} />
    </Stack.Navigator>
    
  </NavigationContainer>
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
  }
});
