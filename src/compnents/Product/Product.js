import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, handleAddToCart }) => {
    const { name, seller, price, ratings, img } = product;
    return (
        <div className='product'>
            <img className='product-img' src={img} alt='product'></img>
            <div className='product-info'>
                <div className='product-name-and-price'>
                    <h6 className='product-name'>{name}</h6>
                    <p className='product-price'>Price : ${price}</p>
                </div>

                <div className='product-manufacturer-and-rating'>
                    <p className='manufacturer'><small>Manufacturer: {seller}</small></p>
                    <p className='rating'><small>Rating: {ratings}</small></p>
                </div>

            </div>

            <button onClick={() => { handleAddToCart(product) }} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div >
    );
};

export default Product;