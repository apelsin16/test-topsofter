import React, { Component } from "react";
import Header from "./Header";
import List from './List';
import "./App.css";
import Modal from 'react-modal';
import products from "./products";
import CartList from './Cart-List';
// import ProductCard from './Product-Card';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

class App extends Component {
  state = {
    modalIsOpen: false,
    productIDsIntoCart: [],
    cart: [],
    count: null,
    products
  };

  openModal = () => {
    this.setState({modalIsOpen: true});
  }  

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  addProductId = ( id ) => {
    const idIntoCart = this.state.productIDsIntoCart.includes(id);
    if(!idIntoCart) {
      this.setState(prevState => ({
        productIDsIntoCart: [ id, ...prevState.productIDsIntoCart ]        
      }));
    }
    this.openModal();
    this.addProductToCart(id);
  };

  addProductToCart = id => {
      const idx = this.state.productIDsIntoCart.includes(id);
      this.state.products.products.map(item => {
        if(item.id === id && !idx ) {

          this.setState(prevState => ({
            cart: [
              {...item, count: 1},
               ...prevState.cart]
          }));
        }
      });
      this.incrementCount(id);
  };

  incrementCount = id => {
    this.state.cart.map((item, idx) => {
      if( item.id === id) {
        this.setState(prevState => ({
          cart: [
            ...prevState.cart.slice(0, idx),
            {...item, count: item.count + 1},
             ...prevState.cart.slice(idx + 1)]
        }));        
      }
    });
    this.getCount();
  };

  decrementCount = id => {
    this.state.cart.map((item, idx) => {
      if( item.id === id && item.count >= 1 ) {
        this.setState(prevState => ({
          cart: [
            ...prevState.cart.slice(0, idx),
            {...item, count: item.count - 1},
             ...prevState.cart.slice(idx + 1)]
        }));    
        this.getCount();    
      } else {
        this.setState(prevState => ({
          productIDsIntoCart: prevState.productIDsIntoCart.filter(item => { 
            return item !== id}),
          cart: prevState.cart.filter(item => { 
            return item.id !== id}),
        })); 
      }
    });
    
  };

  getCount = () => {
    
      this.setState(prevState => ({
      count: prevState.cart
        .map(item => item.count)
        .reduce((acc, cur) =>  acc + cur )
    }));
    
    
  };


  render() {
    return (
      <div className="App">
        <Header onOpenModal={this.openModal} count={this.state.count} />
        <div className="App-main">         
          <List products={this.state.products} onAddProductId={this.addProductId} />          
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 >Cart</h2>
          <CartList 
            products={this.state.cart} 
            onInc={this.incrementCount}
            onDec={this.decrementCount}  
          />
          <button className='Cart-button' onClick={this.closeModal}>close</button>
          
        </Modal>
      </div>
    );
  }
}

export default App;
