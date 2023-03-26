import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,price,ratings,seller,id} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img className='img' src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}star</p>
            </div>
            <button onClick={()=> handleAddToCart(props.product)} className='btn-cart'>Add to cart </button>
        </div>
    );
};

export default Product;