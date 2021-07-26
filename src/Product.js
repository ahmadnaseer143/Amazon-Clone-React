import React from 'react'
import "./product.css";
import {useStateValue} from "./StateProvider";
const Product = ({id,image,desc,price,rating}) => {
    const [{cart},dispatch]=useStateValue();
    const addToCart=()=>{
        dispatch({
            type: "Add-to-cart",
            item:{
                id:id,
                image:image,
                desc:desc,
                price:price,
                rating:rating,
            }
        })
    }
    return (
        <div key={id} className="col-6 col-md-4 col-lg-3 column">
            <div className="card">
                <img className="card-img-top" src={image} alt="pic not available" />
                <div className="card-body">
                    <p className="card-text">{desc}</p>
                    <div className="rating">
                        {Array(rating).fill().map((_, i) => (
                            <p className="star">★</p>
                        ))}
                    </div>
                    <div className="mb-3">
                        <small>$</small>
                        <strong>{price}</strong>
                    </div>
                    <button className="btn btn-primary" onClick={addToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
