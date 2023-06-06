import { useState, useEffect , Fragment } from "react";
import { Link } from "react-router-dom";
import  "./style.css";


export default function NotFound(){
    
    return(
        <Fragment>
            <div className="notFound">
                <div>
                    <h1>Page Is Not Found</h1>
                </div> 
                <Link to="/" className="home">Home Page</Link> 
            </div>         
        </Fragment>
    );
}