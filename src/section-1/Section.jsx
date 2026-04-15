import './section.css'
import { FaLaptop } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { SiGoogleearthengine } from "react-icons/si";






function Section(){
    return(
            <>
            <div id="about"></div>
        <div  className="container mb-5">
                <div className="head">
                    <h2>ABOUT THE COMPANY</h2>
                    <p>Key features of our company</p>
                </div>

            <div className="row g-2">
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card text-center border-0">
                        <b className="card-img my-4 mb-0  fw-bolder fs-1">{<FaLaptop />}</b>
                        <p className="fs-5 fw-normal my-3">Responsive</p>
                        <span className=" fw-normal mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, nam? Aliquam nisi inventore </span>
                    </div>

                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card text-center border-0">
                        <b className="card-img mt-4 mb-0 fw-bolder fs-1">{<FaHeart />}</b>
                        <p className="fs-5 fw-normal my-3">Passion</p>
                        <span className=" fw-normal mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, nam? Aliquam nisi inventore </span>
                    </div>

                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card text-center border-0">
                        <b className="card-img my-4 mb-0 fw-bolder fs-1">{<IoDiamondOutline />}</b>
                        <p className="fs-5 fw-normal my-3">Design</p>
                        <span className=" fw-normal mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, nam? Aliquam nisi inventore </span>
                    </div>

                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card text-center border-0">
                        <b className="card-img my-4 mb-0 fw-bolder fs-1">{<SiGoogleearthengine />}</b>
                        <p className="fs-5 fw-normal my-3">Support</p>
                        <span className=" fw-normal mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, nam? Aliquam nisi inventore </span>
                    </div>

                </div>
            </div>
                
            
        </div>
            </>
    )

}


export default Section