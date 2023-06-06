
import { useState, useEffect , Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../componenets/Header";
import Footer from "../../componenets/Footer";
import  "./style.css";
import axios from "axios"; 

export default function Register(){

    function register(){
        try{
            const userName= document.getElementById("userName");            
            const email= document.getElementById("Email");
            const password= document.getElementById("Password");
           
            const response =  axios.post("https://moviesapi.ir/api/v1/register",
            {email: email,
             name: userName,
             password: password
            });   
            console.log(response);        
        }catch(e){
           
        }
    }

    return(
        <Fragment>
            <Header />
              <div className="register-div">
                <h1>Register</h1>
                <div className="fieldGroup">
                    <p>User Name: </p>
                    <input id="userName"></input>
                </div>
                <div className="fieldGroup">
                    <p>Email Address: </p>
                    <input id="Email"></input>
                </div>
                <div className="fieldGroup">
                    <p>Password: </p>
                    <input id="Password"></input>
                </div>
                <div className="fieldGroup">
                    <p>Repeat Password: </p>
                    <input id="r-Password"></input>
                </div>
                <br></br>
                <button id="register-btn" onClick={register}>Register</button>
                <br/>
                <Link to="/">
                    <button id="homePage-btn" >Home Page</button>
                </Link>
              </div>
            <Footer />
        </Fragment>
    )
}