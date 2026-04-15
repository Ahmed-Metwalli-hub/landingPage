import  { useRef } from "react";
import './nav.css'
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";









function Nav(){
    const divRef = useRef(null);

    function openNav() {
        divRef.current.classList.toggle("open");

        
    }
    return(
        <nav>
            <a href="#logo">logo</a>
            <ul ref={divRef} className="ancors">
                <li>
                    <a href="#about">about</a>
                </li>
                <li>
                    <a href="#team"><FaUser /> team</a>
                </li>
                <li>
                    <a href="#work"><RiLayoutGrid2Fill /> work</a>
                </li>
                <li>
                    <a href="#pricing"><FaDollarSign /> pricing</a>
                </li>
                <li>
                    <a href="#contact"><IoMail /> contact</a>
                </li>
            </ul>
            <p className="menu" onClick={openNav}><IoMdMenu /></p>
        </nav>
    )
}
export default Nav