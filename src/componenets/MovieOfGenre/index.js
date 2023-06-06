import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import { useParams , Link} from "react-router-dom";
import  "./style.css";

export default function MovieOfGenre(props){

    const [movies,setMovies] = useState([]);

    useEffect(function(){
                      getApi()
                  },[]);
                
    async function getApi(){
        try{
            const response= await axios.get(`https://moviesapi.ir/api/v1/genres/${props.genreId}/movies`);
            setMovies(response.data.data);           
        }catch(e){
        }
    }     

    function renderFarm(){
                
        return movies.map(function(film){
                            const {id , poster , title} = film;
                            return(
                                    <li key={id}>
                                        <Link to={`/SingleMovie/${id}`} className="singleMovie">
                                            <img src={poster} />
                                            <h4>{title}</h4>
                                        </Link>    
                                    </li>
                                   )
                                 }
                            )                       
                    } 
                                                        
    return(
        <Fragment>
            <ul className="filmList">
               {renderFarm()} 
            </ul>
        </Fragment>
    )
}