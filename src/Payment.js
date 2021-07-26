import React, {useEffect, useState} from 'react'
import CartProduct from "./CartProduct";
import {useStateValue} from "./StateProvider";
import "./payment.css"
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import {getCartTotal} from "./reducer";
import {useHistory} from "react-router-dom";
import axios from "./axios";
import {db} from "./firebase";
function Payment() {

    const [{ cart, user}, dispatch] = useStateValue();
    const stripe=useStripe();
    const elements=useElements();

    const [error, setError]=useState(null);
    const [disable, setDisable] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState();
    const [clientSecret, setClientSecret] = useState(true);

    const history=useHistory();

    useEffect(()=>{
        //generating the special stripe secret which will allow us to charge a customer
        const getClientSecret= async ()=>{
            const response= await axios({
                method: "post",
                url: `/payments/create?total=${getCartTotal(cart)*100}`
            });
            setClientSecret(response.data.clientSecret);
            //for the back end
        }
        getClientSecret();

        //whenever the cart changes this will run

    }, [cart]);

    console.log("person", user);
    const handleSubmit=async(event)=>{
        //all the fancy stuff goes here
        //stripe stuff
        event.preventDefault();
        setProcessing(true);
        //i have a payment send it to you, can i have the client secret? then i can use to run the card no
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //payment=payment confirmation

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "Empty_Cart"
            })
            history.replace("/orders");
        })

    }

    const handleChange=(event)=>{
        //listen fo r changes in card Element
        //display errors as the customer types
        setDisable(event.empty);
        setError(event.error?event.error.message :"");

    }
    return (
        <div className="payment">
            <div className="header-payment">
                <h2>Checkout (0 items)</h2>
            </div>

            <div className="payment-section">
                <div className="payment-title">
                <h4>Delivery Address</h4>
                </div>
                <div className="payment-address">
                    <h6>{user?.email}</h6>
                    <h6>123 bla blah blah</h6>
                    <h6>Blah blah blah</h6>
                </div>
            </div>


            <div className="payment-section">
            <div className="payment-title">
                <h4>Review items and Delivery</h4>
                </div>
                <div className="payment-item">
                    <CartProduct />
                </div>
            </div>


            <div className="payment-section">
                <div className="payment-title">
                    <h4>Payment Method</h4>
                </div>
                <div className="payment-details">
                    {/* Stripe functions will be used here*/}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>

                        <div className="payment -price-container">
                            <div>
                                <CurrencyFormat renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                                <button disabled={processing || disable || succeeded}>
                                    <span>{processing? <p>Processing</p>: "Buy Now"}</span>
                                </button>
                            </div>
                                    {/* Error*/}
                                    {error && <div>{error}</div>}
                        </div>
                    </form>
                </div>
                
            </div>
            
        </div>
    )
}

export default Payment
