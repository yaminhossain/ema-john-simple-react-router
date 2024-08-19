import "./Cart.css";
const Cart = ({ cart,handleClearCart,children }) => {

  let totalPrice = 0;
  let shippingPrice = 0;
  let quantity = 0;
  
  for (const item of cart) {
     /*-------------------------------------
     This part before update 
     ------------------------------------------*/

    // if(item.quantity===0){
    //   item.quantity=1;
    // }
  
    //item.quantity = item.quantity || 1;

    /* -----------------------------------
     End of this part
     --------------------------------------- */

    quantity = quantity + item.quantity;
    totalPrice = totalPrice + item.price * item.quantity;
    shippingPrice = shippingPrice + item.shipping * item.quantity;
  }
  /* calculating tax by assuming 7% rate on total price */
  const tax = totalPrice * (7 / 100);

  const granTotalPrice = totalPrice + tax + shippingPrice;
  return (
    <div className="cart-container">
      <h1 className="cart-heading">Cart</h1>
      <p>Selected items: {quantity}</p>
      <p>Total price:$ {totalPrice}</p>
      <p>Total Shipping Charge:${shippingPrice}</p>
      <p>Tax:${tax.toFixed(2)} </p>
      <p>Grand Total:${granTotalPrice.toFixed(2)}</p>
      <button className="btn-clear" onClick={handleClearCart}>Clear Cart</button>
      {children}
    </div>
  );
};

export default Cart;
