
import { useState, useEffect , Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../componenets/Header";
import Footer from "../../componenets/Footer";
import  "./style.css";
import axios from "axios";

export default function Enter(){

    function signIn(){
        try{
            const userName= document.getElementById("userName");            
            const password= document.getElementById("Password");
            const response =  axios.post("https://moviesapi.ir/oauth/token",
            {grant_type: password,
             username: userName,
             password: password
            });   
            console.log(response);        
        }catch(e){           
        }
    }

    return(
        <Fragment>
            <Header />
              <div className="enter-div">
                <h1>Sign In</h1>
                <div className="fieldGroup">
                    <div>User Name: </div>
                    <input id="userName"></input>
                </div>
                <div className="fieldGroup">
                    <div>Password: </div>
                    <input id="Password"></input>
                </div>         
                <div class="line"></div>       
                <button id="enter-btn" onClick={signIn}>Sign In</button>                
                <Link to="/Register">
                    <button id="register-btn" >Register</button>
                </Link>
              </div>
            <Footer />
        </Fragment>
    )
}