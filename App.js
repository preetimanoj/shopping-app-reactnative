import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductsList } from './ProductsList.js';
import { ProductDetails } from './ProductDetails.js';
import { Cart } from './Cart.js';
import { Admin } from './Admin.js';
import { List } from './List.js';
import Login from './Login.js';
import { AddProduct } from './AddProduct.js';
import { Order } from './OrderStatus.js';
// import { Register } from './Register';

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

        <Stack.Screen name='Products' component={ProductsList}
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () =>
              <>
                <Text onPress={() => {
                  navigation.navigate('Cart');
                }}> Cart</Text>
                <Text onPress={() => {
                  navigation.navigate('Admin');
                }}> Admin</Text>
                <Text onPress={() => {
                  navigation.navigate('Order');
                }}> Order</Text></>
            //  <CartIcon navigation={navigation}/>,
          })} />
        <Stack.Screen name='ProductDetails' component={ProductDetails}
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <Text onPress={() => {
              navigation.navigate('Cart');
            }}> Cart</Text>
            //  <CartIcon navigation={navigation}/>,
          })} />
        <Stack.Screen name='AddProduct' component={AddProduct}
          options={({ navigation }) => ({
            title: 'Add product',
            headerTitleStyle: styles.headerTitle,
            //  <CartIcon navigation={navigation}/>,
          })} />
        <Stack.Screen name='Cart' component={Cart}
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <Text> Cart</Text>
            //  <CartIcon navigation={navigation}/>,
          })} />
        <Stack.Screen name='Admin' component={Admin} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Order" component={Order} />
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
