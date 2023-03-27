import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav className='nav'>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage  Inventory</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;