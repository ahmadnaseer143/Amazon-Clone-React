import React from 'react'
import "./cart.css";
import CartProduct from './CartProduct';
import Subtotal from './Subtotal';
import {useStateValue} from "./StateProvider";
import {getBoolean} from "./reducer";
import {getCartTotal} from "./reducer"

const Cart = () => {
    const [{ cart }, reducer] = useStateValue();
    return (
        <div className="cart-container">
            <div className="cart">
                <div className="left-part">
                    <div className="heading">
                        <h2 className="title">
                            Shopping Cart
                    </h2>
                        <h6 className="price">price</h6>
                    </div>
                    <CartProduct />
                    {<div className="price m-2">
                        <h6>Subtotal ({cart?.length} items):
                        <strong>   ${getCartTotal(cart)}</strong>
                        </h6>
                    </div>
                }
                </div>
                <div className="right-part">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Cart
