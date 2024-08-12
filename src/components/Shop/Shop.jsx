import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("../../../public/fakeData/products.json")
      .then((data) => data.json())
      .then((product) => setProduct(product));
  }, []);
  const [cart, setCart] = useState([]);
  // console.log("cart",cart);

  const handleAddToCart = (product) => {
  // console.log("product",product);
  /*-------------------------------------
     This part before update 
     ------------------------------------------*/
    //  const newCart = [...cart,product];
    //  setCart(newCart);
     /* -----------------------------------
     End of this part
     --------------------------------------- */
    let newCart = [];
    // console.log("new cart",newCart);
    const exists = cart.find(pd=>product.id === pd.id);
    if(!exists){
      product.quantity =1;
      newCart = [...cart,product];
      
    }
    else{ 
      product.quantity = product.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining,product];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (let id in storedCart) {
      //product is the array object which was loaded from JSON file.
      const addedProduct = product.find((pd) => pd.id === id);
      // addedProduct has only one object inside
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }

    setCart(savedCart);
    // console.log(savedCart);
  }, [product]);

  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
