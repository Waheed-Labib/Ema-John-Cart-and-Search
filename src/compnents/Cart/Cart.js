import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart }) => {
    const totalItems = cart.reduce((previous, current) => previous + current.quantity, 0);
    const totalPrice = cart.reduce((previous, current) => previous + current.price * current.quantity, 0);
    const ShippingTotal = cart.reduce((previous, current) => previous + current.shipping, 0);
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + ShippingTotal + tax;

    return (

        <div className='cart'>
            <h3>Order Summary</h3>
            <div className='cart-info'>
                <p>Items Selected : {totalItems}</p>
                <p>Total Price : ${totalPrice}</p>
                <p>Total Shipping Charge : ${ShippingTotal}</p>
                <p>Tax : ${tax}</p>
                <h6>Grand Total : ${grandTotal.toFixed(2)}</h6>
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