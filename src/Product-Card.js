import React, { Component } from 'react';
import './Product-Card.css';


export default class ProductCard extends Component {

    onAddId = () => {
        this.props.onAddProductId(this.props.product.id);
    }

    render() {
        let { product: { name, image, price }} = this.props;
        return (            
            <article className='Product-Card'>
                <img className='Product-Card-img' src={image} alt={name} />
                <p className='Product-Card-name'>{name}</p>
                <p className='Product-Card-price'> 
                    {price = new Intl.NumberFormat('uk-UA', {currency: 'UAH', style: 'currency'}).format(price)}
                </p>
                <button className='Cart-button' onClick={this.onAddId}>Add to Cart</button>
            </article>
        );
    }
}
