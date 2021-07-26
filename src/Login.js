import React,{useState} from 'react'
import {Link,useHistory} from "react-router-dom";
import {auth} from "./firebase";

import "./login.css";
const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history=useHistory();
    //what this does is this allows us to programatically change the url

    const signin=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            history.push("/")
        })
        .catch(error=>alert(error.message));
    }

    const signup=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            //succesfully created user with email and password
            //will return auth object where we can find email and apssword
            console.log(auth);
            if(auth){
                history.push("/");
            }
        })
        .catch(error=>alert(error.message));

    }
    return (
        <div className="login">
            <Link className="amazon-image" to="/">
                <img src="https://api.freelogodesign.org/assets/blog/img/20180911090509731amazon_logo_RGB.jpg" alt="LOGO" />
            </Link>
            <div className="signin">
                <h2>Sign-In</h2>
                <form className="form">
                    <h6>Email or Phone number</h6>
                    <input type="email" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} />
                    <h6>Password</h6>
                    <input type="password" value={password} onChange={(e) => {
                        setPassword(e.target.value) }} /> 
                    <button onClick={signin}>Continue</button>
                    <p>By continuing, you agree to Amazon's <Link className="link-signin" to="/">Conditions of Use</Link> and <Link className="link-signin" to="/">Privacy Notice.</Link></p>
                </form>
                <div className="help">
                    <button onClick={()=>{setShow(!show)}}>Need help?</button>
                    {show && 
                    <>
                        <Link className="link-signin help-link" to="/">Forgot your Password</Link>
                        <Link className="link-signin help-link" to="/">Other issues with Sign-In</Link>
                    </>
                    }
                </div>
            </div>
            <div className="new-to-amazon">
                <p>New to Amazon?</p>
                <button onClick={signup}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
