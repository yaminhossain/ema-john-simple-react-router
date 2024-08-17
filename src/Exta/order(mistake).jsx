import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Orders.css"
import Product from "../Product/Product";
import ReviewItem from "../ReviewItem/ReviewItem"
import { useState } from "react";
import {removeFromDb} from "../../utilities/fakedb"
const Orders = () => {
    const savedCart = useLoaderData();
    console.log(savedCart);
    const[cart,setCart] = useState(savedCart);
   
    const handleRemoveFromCart = (id) =>{
      const remaining = cart.filter(product => product.id !== id);
      setCart(remaining);
      removeFromDb(id);
    }
  return (
    <div>
      <div className="shop-container">
        <div className="review-container">
           {
            //My mistake was in here savedCart will be only cart
            savedCart.map(product=><ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
           }
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
