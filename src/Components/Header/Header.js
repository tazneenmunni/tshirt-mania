import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Welcome to Tshirt Mania!!!</h2>
            <nav>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/order-review">Order Review</CustomLink>
                <CustomLink to='/grandpa'>Grandpa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;