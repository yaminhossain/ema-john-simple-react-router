import "./Product.css";
// import addidasLogo from "../../images/Adidas-logo.webp"; 

const Product = (props) => {
  // console.log(props);
  const handleAddToCart = props.handleAddToCart;
  // console.log(handleAddToCart);
  const { img, name, price, seller, ratings } = props.product;
  return (
    <>
      <div className="product">
        <img src={img} alt="" />

        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating:{ratings} stars</p>
        </div>
        <button onClick={()=>handleAddToCart(props.product)} className="btn-cart">Add to cart</button>
      </div>
    </>
  );
};

export default Product;
