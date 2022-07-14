const CART = [
    {
        id: 100,
        name: 'ReactProX Headset',
        price: 350,
        image: require('./assets/products/headset-100.jpg'),
        qty: 1,
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'FastLane Toy Car',
        price: 600,
        image: require('./assets/products/car-101.jpg'),
        qty: 1,
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'SweetHome Cupcake',
        price: 200,
        image: require('./assets/products/cake-102.jpg'),
        qty: 1,
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
];

export function getCart() {
    return CART;
}

export function getCart(id) {
    return CART.find((product) => (product.id == id));
}

// export function getProductCat(cat) {
//     return PRODUCTS.filter((product) => (product.category == cat));
// }

export function getProductSearch(val) {
    return CART.filter((product) => (product.name == val));
}