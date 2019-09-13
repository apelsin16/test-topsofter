import React from 'react';
import './Header.css';
import Cart from "./Cart";

class Header extends React.Component {
  render() {
    return (
      <div className="Header-container">
        <div>
          <span className="Header-title">E-scooter Emporium</span>
          <img src="/assets/logo.png" className="Header-logo" alt="logo" />
        </div>
        <Cart {...this.props} />
      </div>
    );
  }
}

export default Header;
