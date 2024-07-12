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

    return (
        <div className='shop-container'>
            <div className="product-container">
                {product.map(product => <Product key={product.id} product={product}></Product>)}
            </div>
            <div className="cart-container">
                <p>Cart</p>
            </div>
            
        </div>
    );
};

export default Shop;