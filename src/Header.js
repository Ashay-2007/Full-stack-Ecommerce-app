import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            {/* logo on the left -> img */}
            <Link to="/">
                <img 
                    className="header__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt=""
                />
            </Link>
            
            {/* Search box */}
            {/* 3 links on the right */}
            {/* Basket icon */}
        </div>
    )
}

export default Header
