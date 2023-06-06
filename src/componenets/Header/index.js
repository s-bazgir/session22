import { Fragment } from "react";
import {Link}  from "react-router-dom";
import  "./style.css";

export default function Header(){
  
    return (
       <Fragment>        
        <div className="headerMenu">
          <div className="container">
            <ul className="topMenu">
                <li>
                    <ul className="filmMenu">
                      <li>
                        <img src="../../public/assets/images/icon.png" />
                      </li>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/">Movies</Link>
                      </li>
                      <li>
                        <Link to="/">Geners</Link>
                      </li>
                      <li>
                        <Link to="/Search">Search</Link>
                      </li>
                    </ul>
                </li>
                <li>
                    <ul className="accountMenu">
                      <li></li>
                      <li>
                        <Link to="/SignIn" className="signIn">Enter / Register</Link>                      
                      </li>
                    </ul>
                </li>
            </ul>
          </div>
        </div>
       </Fragment>
    )
}