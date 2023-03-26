import React from 'react';
import './Product.css'

const Product = (props) => {

    const {img,name,price,ratings,seller} = props.product;

    return (
        <div className='product'>
            <img className='img' src={img} alt="" />
        </div>
    );
};

export default Product;