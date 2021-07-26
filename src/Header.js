import React from 'react';
import Amazon from "./amazon-logo-white.png";
import "./header.css";
import {BsSearch} from "react-icons/bs";
import {  FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';
const Header = () => {
    const [{cart,user}, dispatch]=useStateValue();

    const handleAuthentication=()=>{
        if(user){
            //if user exists then signout
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img src={Amazon} alt="LOGO" />
            </Link>
            <div className="header-search">
                <input type="text" className="header-search-input" />
                <BsSearch className="header-search-icon"/>
            </div>
            <div className="header-nav">
                <Link className="link" to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header-option">
                        {<span className="header-option-line-one">
                            Hello {!user?"Guest" : user.email}
                        </span>}
                    <span className="header-option-line-two">
                            {user?"Sign-Out":"Sign-In"}
                    </span>
                    </div>
                </Link>
                {/* <FaSignInAlt className="icon"/> */}
                <div className="header-option">
                    <Link to="/orders" className="link">
                        <span className="header-option-line-one">
                            Return
                        </span>
                        <span className="header-option-line-two">
                            Orders
                        </span>
                    </Link>
                </div>
                <div className="header-option">
                    <span className="header-option-line-one">
                        Your
                    </span>
                    <span className="header-option-line-two">
                        Prime
                    </span>
                </div>
                <Link to="/cart" className="link">
                    <div className="header-option-basket">
                        <FaShoppingCart className="icon" />
                        <span className="header-option-line-two header-basket-count">{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
