import { db } from "./Firebase";
import React, {useEffect, useState} from 'react';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


const usersCollectionRef = collection(db, "products");


const PRODUCTS = [
    {
        id: 100,
        name: 'ReactProX Headset',
        price: 350,
        image:'https://reactnative.dev/img/tiny_logo.png',
        // image: require('https://www.google.com/search?q=headset+image&sxsrf=ALiCzsbqPXy0KunkY3HX6kiSggg3Iuteug:1657753597935&tbm=isch&source=iu&ictx=1&vet=1&fir=gsCGxq3lpLsMWM%252Ch5tqX_QHG5wDXM%252C_%253BB_GCSA_WfRP2fM%252C6ybyAGJoHvlktM%252C_%253BJPOk01HmZx-32M%252CpAEZaJXZlD-9jM%252C_%253B7VxhoGTlQYyolM%252CKgRSSZhWY12CRM%252C_%253B3-xY1ayV8GzawM%252CseEbfE4NGkP_0M%252C_%253BVGj7RF0Q6tYZ6M%252C-wyP6cFsRWXx7M%252C_%253B9iYSSyOmZqigYM%252CbwBtw5NdgaERPM%252C_%253BhHVNOMYfMCE-cM%252Ch5tqX_QHG5wDXM%252C_%253BYj2H60koQEXtuM%252CpAEZaJXZlD-9jM%252C_%253BXV7JTAF21yxDSM%252Cs8HN346z5T0UkM%252C_%253B6uHw3XQnox3MBM%252CqWfKzDJWycuZNM%252C_%253BHP-Sz-DPqfjGBM%252Cj2ciy4qnPCkaIM%252C_%253B6L-kr8CCx91KTM%252C3w9To8T3nD7VZM%252C_%253BS_2sU7FTyZ2eYM%252Ch5tqX_QHG5wDXM%252C_%253B8aAVadaaqFWbBM%252CuNqCHqO-GYaB_M%252C_&usg=AI4_-kTzOgcDf6_egejhNE1-EmkKgEx3iQ&sa=X&ved=2ahUKEwjgytGy_fb4AhXPIjQIHS7WBF0Q9QF6BAgEEAE#imgrc=gsCGxq3lpLsMWM'),
        category:'electronics',
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'FastLane Toy Car',
        price: 600,
        image: require('./assets/products/car-101.jpg'),
        category:'electronics',
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'SweetHome Cupcake',
        price: 200,
        image: require('./assets/products/cake-102.jpg'),
        category:'grocery',
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
];





export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

export function getProductCat(cat) {
    return PRODUCTS.filter((product) => (product.category == cat));
}

export function getProductSearch(val) {
    return PRODUCTS.filter((product) => (product.name == val));
}