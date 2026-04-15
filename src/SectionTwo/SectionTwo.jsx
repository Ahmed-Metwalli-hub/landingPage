import './sectiontwo.css'
import { RiGridFill } from "react-icons/ri";
import img from "../assets/phone_buildings.jpg"


function SectionTwo(){
    return(
        
        
                <div  className=" container SectionTwo mt-5 py-5 d-flex align-items-center">
                    <div className="row g-3">
                        <div className="col-lg-6 col-sm-12">
                            <div className=" ">
                                <b className="h3 py-4">We know design.</b>
                                <p className="w-50 line-hight-2 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore.</p>
                                <button className="btn btn-dark flex ">
                                <span><RiGridFill /></span>  <span>View Our Work </span>

                                </button>

                            </div>
                            
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <div className=" w-100 ">
                                <img className="w-100" src={img} alt="phone_building" />
                            </div>
                        </div>
                    </div>

                </div>
            
            

        
    )
}
export default SectionTwo