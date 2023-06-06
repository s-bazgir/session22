import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  "./style.css";
import Header from "../../componenets/Header";
import Footer from "../../componenets/Footer";


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
        const {id, poster, title, year, plot, country, genres, imdb_votes, imdb_rating, writer, actors} = movie;
                
        return   (
            <Fragment>
                <div className="holder">
                    <div class="posterHolder">
                        <img src={poster}></img>
                    </div>
                    <h1>{movie.title}</h1>
                    <h3>{country} - {year}</h3>
                    <h3>{imdb_rating} - {imdb_votes}</h3>
                    <div className="watch">WATCH</div>
                </div>
                
            </Fragment>
        )
        } 
                                                        
    return(
        <Fragment>  
            <Header></Header>          
               {renderPage()} 
            <Footer></Footer>   
        </Fragment>
    )
}