import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <div className='cart-info'>
                <p>Items Selected : {cart.length}</p>
                <p>Total Price : $</p>
                <p>Total Shipping Charge : $</p>
                <p>Tax : $</p>
                <h6>Grand Total :$</h6>
            </div>

            <button className='cart-btn clear-cart-btn'>
                <p>Clear Cart</p>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>

            <button className='cart-btn review-order-btn'>
                <p>Review Order</p>
                <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Cart;