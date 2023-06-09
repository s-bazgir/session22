import { Fragment } from "react";
import  "./style.css";
import Header from "../../componenets/Header";
import GenresFilm from "../../componenets/GenresFilm";
import Slider from "../../componenets/Slider";
import Footer from "../../componenets/Footer";
import AppDownload from "../../componenets/AppDownload";

export default function HomePage(){
    return (
      <Fragment>
        <Header />
        <Slider />
        <main>
          <GenresFilm />
        </main>
        <AppDownload />
        <Footer />
      </Fragment>
    )
}