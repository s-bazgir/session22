import { useState, useEffect , Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../componenets/Header";
import Footer from "../../componenets/Footer";
import  "./style.css";
import axios from "axios";
import { FaPlay} from "react-icons/fa";

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
            const {id, poster, title, year, plot, country, genres, imdb_rating, writer, actors} = movie;
            return (
                    <li key={id}>
                        <div className="serachWrapper">
                            <Link to={`/SingleMovie/${id}`} className="filmSearchWrapper">
                                <img src={poster} />
                                <div className="title-year">
                                    <div className="year-rate">{year} - {imdb_rating}</div>
                                    <div className="bottom">
                                        <h3>{title}</h3>
                                        <div>{country} - {year}</div>
                                        <div class="playPart">
                                            <div className="playButton">
                                                <FaPlay className="faPlay" /> 
                                            </div>
                                            <div>WATCH</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
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
             <div>
                <ul className="searchResult">
                 {renderFarm()}
                </ul>
             </div>
            <Footer />
        </Fragment>
    )
}