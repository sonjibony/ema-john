import React from 'react';
import './Product.css';
const Product = (props) => {
    const {handleAddToCart} =props;
    const {name,img,seller,price,ratings} = props.product;
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
           <h4>{name}</h4>
           <p>Seller: {seller}</p>
           <p>Price: ${price}</p>
           <p>Ratings: {ratings}</p>
           </div>
           <button onClick={ () => props.handleAddToCart (props.product)} className='btn-cart'>
            <p>Add to Cart</p>
           </button>
        </div>
    );
};

export default Product;