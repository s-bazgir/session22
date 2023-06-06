import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import MovieOfGenre from "../MovieOfGenre";
import { useParams , Link} from "react-router-dom";
import  "./style.css";

export default function GenresFilm(){

    const [loading , setloading] = useState(false);
    const [genres , setGenres] = useState([]);

    useEffect(function(){
                        getApi();
                    },[]); 

    async function getApi(){
        try{
            setloading(true)
            const response = await axios.get("https://moviesapi.ir/api/v1/genres");
            setGenres(response.data);
            setloading(false);
        }catch(e){
            setloading(false);
        }
    }
                        
    function renderFarm(){
        return genres.map(function(genre){
            const { id ,name } = genre;            
            return(
                <li key = {id} >  
                   <Link to={`/Genre/${id}`}  className="genreGroup">                                    
                     <h5>{name}</h5>  
                   </Link>
                    <MovieOfGenre genreId={id}/>          
                </li>
            )
        })
    }
    
    return(
        <Fragment>
            <ul>
             {renderFarm()}
            </ul>
        </Fragment>
    )
}