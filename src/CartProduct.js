import React from 'react'
import {useStateValue} from "./StateProvider";
import "./cartproduct.css";
const CartProduct = () => {
    const [{ cart }, dispatch] = useStateValue();
    
    const removeItem=(id)=>{

        dispatch({
            type:"Remove-from-cart",
            id:id,
        })
    }
    return (
        <>
        {cart.map((item)=>{
            const { id, image, desc, price}=item;
            return(
                <div key={id} className="cart-product mt-4">
                    <img className="cart-product-image" src={image} alt="deleted"/>
                    <div>
                        <p>{desc}</p>
                        <div className="price mx-4">
                            <small>$</small>
                            <strong>{price}</strong>
                        </div>
                        <button className="btn removebtn btn-primary" onClick={()=> removeItem(id)}>Remove</button>
                    </div>
                </div>
            )
        })}
            
        </>
    )
}

export default CartProduct;
