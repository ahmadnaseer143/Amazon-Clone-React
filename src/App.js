import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Cart from "./Cart";
import Login from "./Login";
import React, { useEffect } from "react";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
import Payment from "./Payment";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Orders from "./Orders";

function App() {
  const [{},dispatch]=useStateValue();
  const stripePromise = loadStripe("pk_test_51Izy3ZSCK5aoLzPXKSUJYks26dOaC522apZtLjmsLaHccU4kSw8Ez6RA0Bi6O0Ylbm3zIrir8ITdjhGnsHnDBMcZ00erYP3yzo");

  useEffect(()=>{
    //will only run when app components loads
    auth.onAuthStateChanged(authUser=>{
      console.log("user", authUser);
      if(authUser){
        //user just logged in/user was logged in
        dispatch({
          type:"Set_User",
          user:authUser
        })

      }
      else{
        //user is logged out
        dispatch({
          type:"Set_User",
          user:null
        })
      }
    })
    //what this does is that once we attach this listener, it will always listen
  },[]);
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route exact path="/">
            <Header />
            <Home />
        </Route>
        <Route path="/cart">
          <Header />
          <Cart/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={stripePromise}>
            <Payment/>
          </Elements>
        </Route>
        <Route path="/orders">
          <Orders/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
