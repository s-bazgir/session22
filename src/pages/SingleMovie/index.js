import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  "./style.css";

export default function SingleMovie(){

    const {id}  = useParams();
    const [movie,setMovie] = useState([]);

    useEffect(function(){
                      getApi()
                  },[]);
                
    async function getApi(){
        try{
            const response= await axios.get(`https://moviesapi.ir/api/v1/movies/${id}`);
            setMovie(response.data);           
        }catch(e){
        }
    }     

    function renderPage(){
        
        return   (
            <Fragment>
                <h1>{movie.title}</h1>
            </Fragment>
        )
        } 
                                                        
    return(
        <Fragment>            
               {renderPage()} 
        </Fragment>
    )
}