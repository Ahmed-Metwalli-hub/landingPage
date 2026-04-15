import React from 'react'
import { FaSnapchat } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";





const Footer = () => {
  return (
    <div className='container bg-dark text-light flex flex-column justify-content-center py-5'>
        <a className='btn btn-light px-4 my-2 py-2 flex justify-content-center align-items-center' href='#logo'><FaArrowUp /> To the top</a>
        <div className='my-2 fs-4 fw-normal flex justify-content-center align-items-center gap-1 '>
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaSnapchat />
            <FaTwitter />
            <FaLinkedin />
        </div>
        <p className='my-3 fw-light'>Powerded by <a href="#logo" className='text-light '>A.Metwalli</a></p>

      
    </div>
  )
}

export default Footer
