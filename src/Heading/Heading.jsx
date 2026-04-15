import React from "react";
import './heading.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




function Heading(){
    return(
        <>
        <div id="logo"></div>
        <div className="all">

                <div className="container">

                    <div className="heading">
                        <div>
                            <h1>Start something that matters</h1>
                            <p>Stop wasting valuable time with projects that just isn't you.</p>
                            <button>learn more and start today</button>
                        </div>
                        <div>
                        <FaFacebookSquare />
                        <FaInstagramSquare />
                        <FaSnapchat />
                        <FaTwitter />
                        <FaLinkedin />
                        


                            
                        </div>

                    </div>
                </div>
        </div>
        </>
    )
}
export default Heading