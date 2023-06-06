import { useState, useEffect , Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../componenets/Header";
import Footer from "../../componenets/Footer";
import  "./style.css";
import axios from "axios";

export default function Search(){
    
    const [result, setResult] = useState([]);

    function serachByName(e) {
        const value = e.target.value;
        axios.get("http://moviesapi.ir/api/v1/movies", { params: { q: value } }).then(function(response) {
            setResult(response.data.data);
        });
    }
    function renderFarm() {
        return result.map(function(movie) {
            const {id, poster, title, year} = movie;
            return (
                <li key={id}>
                    <Link to={`/SingleMovie/${id}`}>
                        <img src={poster} />
                        <div class="title-year">
                            <p>{title}</p>
                            <p class="year">{year}</p>
                        </div>
                    </Link>
                </li>
            )
        })
    }

    return(
        <Fragment>
            <Header />
             <div className="filterPart">
                <p>Film Name</p>
                <input id="filmName" type="text" onChange={serachByName}></input>                
             </div>
             <div className="SearchResult">
                <ul>
                 {renderFarm()}
                </ul>
             </div>
            <Footer />
        </Fragment>
    )
}