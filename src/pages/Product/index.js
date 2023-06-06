// import { useState, useEffect , Fragment } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";


// export default function Product(){
    
//     const {code} = useParams();
    
//     const [movie,setMovie]=useState([]);
//     useEffect(() => { getApi() } ,[]);
//     function getApi(){
//         axios.get("https://moviesapi.ir/api/v1/movies").then(function(response){
//             setMovie(response.data.data)
//         }
//         );
//     }
//     function renderFarm(){
//         return movie.map((mv)=>{
//             const {poster ,title } = mv;
//             return (
//             <li>
//               <img src={poster}/>
//               <h2>{title}</h2>
//             </li>  
//             )         
//         });
//     }
//     return(
//         <Fragment>
//             <p>محصول {code} </p>  
//             <ul>{renderFarm}</ul>   
//         </Fragment>
//     );
// }