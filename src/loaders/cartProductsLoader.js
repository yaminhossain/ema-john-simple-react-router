import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () =>{
    const loadedProducts = await fetch("../../../public/fakeData/products.json");
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    const savedCart = [];
    for (let id in storedCart) {
      //product is the array object which was loaded from JSON file.
      const addedProduct = products.find((pd) => pd.id === id);
      // addedProduct has only one object inside
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    return savedCart;
}
export default cartProductsLoader;