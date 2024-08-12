import "./Product.css";


const Product = (props) => {

  const handleAddToCart = props.handleAddToCart;

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
