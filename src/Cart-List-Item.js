import React from 'react';

const CartListItem = (props) => {
    const handleInc = () => {
        props.onInc(props.item.id);
    };

    const handleDec = () => {
        props.onDec(props.item.id);
    };

    return (
        <li className='item' key={props.item.id}>
            <button className='button' onClick={handleDec}>-</button>
            {props.item.name}
            <button className='button' onClick={handleInc}>+</button>
            <span>{props.item.count}</span>
        </li>
    )
}

export default CartListItem;