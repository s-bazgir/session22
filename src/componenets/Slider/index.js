// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./style.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/swiper-bundle.min.css';


export default function Slider(){

  const [movies , setMovies] = useState([]);
  // const [randomIndex , setRandomIndex] = useState([]);

  useEffect(function(){                 
                      getApi();
                  },[]); 

  async function getApi(){
                  try{
                  const response = await axios.get("https://moviesapi.ir/api/v1/movies");
                  setMovies(response.data.data);
                  // console.log("77777777777777");
                  // console.log(movies);

                  // const indexs=1;
                  // for(var i=1; i<=3; i++){                  
                  //   indexs = indexs+1                   
                  // }
                  // setRandomIndex(indexs);
                  // console.log("fffffffffffffff");
                  // console.log(indexs);
                  }catch(e){                  
                  }
                  }

    function timeLoop() {
      return movies.map(function(movie) {
          const {id, poster} = movie;
          return (
              <SwiperSlide>
                <li key={id}>
                    <Link to={`/SingleMovie/${id}`}>
                        <img src={poster} />
                    </Link>
                </li>
              </SwiperSlide>
          )
      })
    }

  return (
    <div className="slide-movies-list">
      <div className="container">
        <ul className="swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={5}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          >
            {timeLoop()}
          </Swiper>
        </ul>
      </div>
    </div>
  );
};
