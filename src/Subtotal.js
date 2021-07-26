import React from 'react'
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";
import {useStateValue} from "./StateProvider";
import { getCartTotal } from './reducer';
import {useHistory} from "react-router-dom";
const Subtotal = () => {
    const history=useHistory();
    const [{ cart }, reducer] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>Subtotal ({cart?.length} items): <strong>{value}</strong></p>
                    <small className="input-gift">
                        <input type="checkbox" />This order contains a gift
                    </small>
                </>
            )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e=>history.push("/payment")} className="button">Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
