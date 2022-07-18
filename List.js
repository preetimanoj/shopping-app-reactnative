import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { db } from "./Firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

const collectionRef = collection(db, "categories");
const customerCollectionRef = collection(db, "customers");

const productsCollectionRef = collection(db, "products");
const orderCollectionRef = collection(db, "orders");

export function List({ route, navigation }) {
  let [visible, setVisible] = useState(false);
  let [editPopupVisible, setEditPopupVisible] = useState(false);
  let [editCustomerPopupVisible, setEditCustomerPopupVisible] = useState(false);
  let [categoryRemovePopup, setCategoryRemovePopup] = useState(false);

  let [categoryAdd, setCategoryAdd] = useState("");
  let [categoryEdit, setCategoryEdit] = useState("");
  let [categoryOldEdit, setCategoryOldEdit] = useState("");
  let [customerOldEdit, setCustomerOldEdit] = useState("");

  let [customerEdit, setCustomerEdit] = useState("");

  let [categoryList, setCategoryList] = useState([]);
  let [customerList, setCustomerList] = useState([]);

  const { list } = route.params;
  const [products_, setProducts_] = useState();

  const [products, setProducts] = useState();

  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);
    var temp = data.docs.map(async (doc) => ({ ...doc.data(), id: doc.id }));
    setProducts(temp);
  };

  const getCategoryFromFirebase = async () => {
    const data = await getDocs(collectionRef);
    var temp = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setCategoryList(temp);
  };

  const getCustomersFromFirebase = async () => {
    const data = await getDocs(customerCollectionRef);
    var temp = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setCustomerList(temp);
  };

  useEffect(() => {
    getProducts();
    getCategoryFromFirebase();
    getCustomersFromFirebase();
  }, []);

  // const data = await getDocs(collectionRef);
  // setCategoryList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

  function addtoCategory(type) {
    setVisible(true);
  }

  function editCategory(type) {
    console.log("==type=", type);

    setCategoryOldEdit(type);
    setEditPopupVisible(true);
    console.log("===", categoryOldEdit);
  }

  function editCustomer(type) {
    setCustomerOldEdit(type);
    setEditCustomerPopupVisible(true);
  }

  function removeCategory(type) {
    setCategoryOldEdit(type);
    setCategoryRemovePopup(true);
  }

  function addToProducts(type) {
    navigation.navigate("AddProduct");
  }

  function addCategoryTextInp(inputCat) {
    setCategoryAdd(inputCat);
  }

  function editCategoryTextInp(inputCat) {
    setCategoryEdit(inputCat);
  }

  const navOrderDetails = (item) => {
    // navigation.navigate('Order');
    console.log("clicked!!")
    console.log(item);

  }
  const getCustomersFromFirebase = async () => {
    const data = await getDocs(customerCollectionRef);
    
    setCustomerList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  function editCustomerTextInp(inputCat) {
    setCustomerEdit(inputCat);
  }

  const addCategoryToFirebase = async () => {
    await addDoc(collectionRef, { name: categoryAdd });
    setVisible(false);
    getCategoryFromFirebase();
  };

  const getCartProducts = async () => {
    const data = await getDocs(orderCollectionRef);
    var temp = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setProducts_(temp);
    // console.log("order list == > ", temp)
  };
  useEffect(() => {
    console.log("*************")
    getCartProducts();
    // setTotal(getTotalPrice());
  },[]);

  const renderItem = ({ item }) => <Item title={item.name} />;
  const editCategoryFirebase = async () => {
    const datas = await getDocs(collectionRef);
    var temp = await datas.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    let filtered = await temp.filter((test) => test.name === categoryOldEdit);
    const update = doc(db, "categories", filtered[0].id);
    await updateDoc(update, {
      name: categoryEdit,
    });
    getCategoryFromFirebase();
    setEditPopupVisible(false);
  };

  const removeCategoryFirebase = async () => {
    const datas = await getDocs(collectionRef);
    var temp = await datas.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    let filtered = await temp.filter((test) => test.name === categoryOldEdit);
    await deleteDoc(doc(db, "categories", filtered[0].id));
    getCategoryFromFirebase();
    setCategoryRemovePopup(false);
  };

  const editCustomerFirebase = async () => {
    const datas = await getDocs(customerCollectionRef);
    var temp = await datas.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    let filtered = await temp.filter((test) => test.name === customerOldEdit);
    const update = doc(db, "customers", filtered[0].id);
    await updateDoc(update, {
      name: categoryEdit,
    });

    setEditCustomerPopupVisible(false);
  };

  if (list === "category") {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Dialog
          visible={visible}
          onTouchOutside={() => {
            setVisible(false);
          }}
        >
          <DialogContent style={{ width: 280 }}>
            <TextInput
              style={styles.InputText}
              value={categoryAdd}
              onChangeText={(category) => addCategoryTextInp(category)}
              placeholder="Add a category"
            />
            <Button
              onPress={() => {
                addCategoryToFirebase(categoryAdd);
              }}
              title="Add"
            />
          </DialogContent>
        </Dialog>

        {/* Edit popup */}
        <Dialog
          visible={editPopupVisible}
          onTouchOutside={() => {
            setEditPopupVisible(false);
          }}
        >
          <DialogContent style={{ width: 280 }}>
            <TextInput
              style={styles.InputText}
              value={categoryEdit}
              onChangeText={(category) => editCategoryTextInp(category)}
              placeholder="Edit category"
            />
            <Button
              onPress={(input) => {
                editCategoryFirebase(input);
              }}
              title="Edit"
            />
          </DialogContent>
        </Dialog>

        {/* Edit Customer */}

        <Dialog
          visible={editCustomerPopupVisible}
          onTouchOutside={() => {
            setEditCustomerPopupVisible(false);
          }}
        >
          <DialogContent style={{ width: 280 }}>
            <TextInput
              style={styles.InputText}
              value={categoryAdd}
              onChangeText={(category) => editCustomerTextInp(category)}
              placeholder="Edit Customer"
            />
            <Button
              onPress={(input) => {
                editCustomerFirebase(input);
              }}
              title="Edit"
            />
          </DialogContent>
        </Dialog>

        {/* Remove Category */}

        <Dialog
          visible={categoryRemovePopup}
          onTouchOutside={() => {
            setCategoryRemovePopup(false);
          }}
        >
          <DialogContent style={{ width: 300 }}>
            <Text style={{ marginBottom: 20, marginTop: 20 }}>
              Are you sure to remove the selected category?
            </Text>
            <Button
              onPress={() => {
                removeCategoryFirebase();
              }}
              title="Yes"
            />
          </DialogContent>
        </Dialog>

        <Text style={{ marginTop: "10%", fontWeight: "bold", fontSize: 20 }}>
          CATEGORIES
        </Text>
        <FlatList
          data={categoryList}
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
                style={{ marginLeft: 4 }}
                color="#fff"
                onPress={(inlut) => {
                  editCategory(item.name);
                }}
              />
              <FontAwesome
                name="remove"
                size={20}
                style={{ marginLeft: 4 }}
                color="#fff"
                onPress={() => {
                  removeCategory(item.name);
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
                style={{ marginLeft: 4 }}
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
  } else if (list === "orders") {
    return (
      // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        
        <Text style={{ marginTop: "10%", fontWeight: "bold", fontSize: 20 }}>
          ORDERS
        </Text>
        <FlatList
          style={styles.itemsList}
          contentContainerStyle={styles.itemsListContainer}
          data={products_}
          renderItem={({item}) => 
            <View style={styles.orderLine}>
                <Text>Order Id: {item.id}</Text>
                <Text>Customer: {item.customerName} </Text>
                <Text>Totla Price: {item.totprice}</Text>
                <Text style={{ fontWeight: 'bold', }}> Order Status: {item.orderstat}</Text>
                {/* <View style={styles.cartLine}> */}
                {/* {console.log("item ==>", item.cart.length)} */}
                
                {/* </View> */}
                <Button title="View" onPress={() => {
                  console.log(item.cart)
                  navigation.navigate('OrderDetails', {
                    selOrder: item.cart,
                  });
                }}></Button>
                <Button title="Status"></Button>
            </View>
            }
          keyExtractor={(item) => item.id}
        //   ListFooterComponent={Totals}
        />
      </View>
    );
  }else {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ marginTop: "10%", fontWeight: "bold", fontSize: 20 }}>
          CUSTOMERS
        </Text>
        <FlatList
          data={customerList}
          style={{ marginTop: "10%" }}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TextInput
                style={{ marginLeft: "2%", color: "white", fontWeight: "bold" }}
              >
                {item.email}{" "}
                {/* <FontAwesome
                  name="edit"
                  size={20}
                  style={{ marginLeft: 4 }}
                  color="#fff"
                  onPress={() => {
                    editCustomer();
                  }}
                /> */}
                <FontAwesome
                  name="remove"
                  size={20}
                  style={{ marginLeft: 4 }}
                  color="#fff"
                  onPress={() => {
                    removeCategory(1);
                  }}
                />
              </TextInput>
            </View>
          )}
        />
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
  InputText: {
    height: 120,
    width: "160%",
  },
  title: {
    fontSize: 32,
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  orderLine:{
    paddingVertical: 30,
    paddingHorizontal: 20,
    margin: 10,
    backgroundColor: 'lightgrey'
  },
  cartLine: { 
    flexDirection: 'row',
  }
});
