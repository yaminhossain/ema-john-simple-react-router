import { useEffect,useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        fetch('../../../public/fakeData/products.json')
        .then(data=>data.json())
        .then(product => setProduct(product));
    },[])
    const [cart,setCart] = useState([]);
    const handleAddToCart =(product)=>{
     
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {product.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)}
            </div>
            <div className="cart-container">
                <h1>Cart</h1>
                <p>Selected items: {cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;