import { Fragment } from "react";
import { Link } from "react-router-dom";
import  "./style.css";

export default function Footer(){
    return (
        <Fragment>
          <div className="footerMenu">
            <ul className="bottomMenu">
                <li>
                    <ul className="optionMenu">                    
                      <li>
                        <Link to="/">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/">Social Media</Link>
                      </li>                    
                    </ul>
                </li>
                <li>
                    <ul className="socailMenu">
                      <li>
                      <Link to={`/???`}>
                        <i class="fa-solid fa-paper-plane"></i>
                      </Link>                    
                      </li>
                      <li>
                      <Link to={`/???`}>
                        <i class="fa-brands fa-instagram"></i>
                      </Link>                    
                      </li>
                      <li>
                      <Link to={`/???`}>
                        <i class="fa-brands fa-twitter"></i>
                      </Link>
                      </li>
                    </ul>
                </li>
            </ul>
          </div>        
        </Fragment>
    );
}