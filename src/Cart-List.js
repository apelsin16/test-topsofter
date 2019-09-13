import React from 'react';
import './Cart-List.css';
import CartListItem from "./Cart-List-Item";

const CartList = (props) => {

    

    return (
        <ul>
            {props.products.map(item => 
                <CartListItem item={item} {...props} />
            )}
        </ul>
    )
}

export default CartList;