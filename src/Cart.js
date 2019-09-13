import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div>
            <button className='Cart-button' onClick={props.onOpenModal}>
                <i className="material-icons">shopping_cart</i>
                <span>{props.count}</span>
            </button>
        </div>
    )
}

export default Cart;
