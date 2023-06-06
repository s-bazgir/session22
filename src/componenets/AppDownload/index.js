import { Fragment } from "react";
import { Link } from "react-router-dom";
import  "./style.css";
import { FaTwitter,FaInstagram,FaTelegram} from "react-icons/fa";



export default function AppDownload(){

  return(
    <Fragment>
        <div className="holder">
            <div className="about">
               <h3>About Us:</h3> This Website is for showing films and serials with reserving Copyright....
               <p>Download App</p>
            </div>
            <div>                
                <div className="downloadPart">
                    <div>
                        <img src="../../public/assets/images/googleplay.png" />
                        <div>
                            <p>Download From </p>
                            <h4>Google Play</h4>
                        </div>
                    </div>
                    <div>
                        <img src="../../public/assets/images/bazar.png" />
                        <div>
                            <p>Download From </p>
                            <h4>Bazar</h4>
                        </div>
                    </div>
                    <div>
                        <img src="../../public/assets/images/sibche.png" />
                        <div>
                            <p>Download From </p>
                            <h4>Sibche</h4>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )

}


