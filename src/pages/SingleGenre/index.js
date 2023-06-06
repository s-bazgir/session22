import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import { useParams , Link } from "react-router-dom";
import  "./style.css";
import Header from "../../componenets/Header";
import Footer from "../../componenets/Footer";


export default function SingleGenre(){

    const {id}  = useParams();
    const [movies,setMovies] = useState([]);

    useEffect(function(){        
                      getApi()
                  },[]);
                
    async function getApi(){
        try{
           
            const response= await axios.get(`https://moviesapi.ir/api/v1/genres/${id}/movies`);           
            setMovies(response.data.data);           
        }catch(e){
        }
    }     

    function renderPage(){    
        console.log(movies.length);
                 return movies.map(function(film){
                            const {id , poster , title} = film;
                            return(
                                    <li key={id} >
                                        <Link to={`/SingleMovie/${id}`} >
                                            <img src={poster} />
                                            <h4 className="filmDetail">{title}</h4>
                                        </Link>    
                                    </li>
                                   )
                                 }
                            )    
        } 
                                                        
    return(
        <Fragment> 
            <Header />  
                <ul className="filmList">         
                    {renderPage()} 
                </ul> 
            <Footer />  
        </Fragment>
    )
}