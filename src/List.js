import React,{ Component } from 'react';
import ProductCard from "./Product-Card";
import './List.css';

class List extends Component {
    
    render() {
        const { products: { products } } = this.props;
        return (
    <ul className='List'>
        {products.map( product => 
            <li className="List-Item" key={product.id} >
                <ProductCard product={product} {...this.props} />
            </li>)}
    </ul> 
    )} 
}

export default List;