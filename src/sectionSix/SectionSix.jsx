import "./SectionSix.css"
import { FaCamera } from "react-icons/fa";
import { IoMdTv } from "react-icons/io";
import { HiPhoto } from "react-icons/hi2";




const SectionSix = () => {
  return (
    <div className='container mt-5 bg-light'>
        <div className="row g-3">
            <div className="col-lg-6 col-sm-12">
                <div className='card-body mt-5 w-75'>
                    <b className=' mt-5 fs-2 fw-normal'>Our Skills.</b>
                    <p className='my-3 lh-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore.
                    </p>
                    <p className='my-3 lh-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore.</p>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12">
                <div className='card-body my-5 after '>
                    <b className=' mt-5 fs-4 fw-normal'><FaCamera /> Photography</b>
                    <p className='my-3 text-center text-light flex '>
                    </p>
                    <b className=' mt-5 fs-4 fw-normal'> <IoMdTv /> Web Design</b>
                    <p className='my-3 text-center text-light flex'>
                    </p>
                    <b className=' mt-5 fs-4 fw-normal'><HiPhoto /> Photoshop</b>
                    <p className='my-3 text-center text-light flex '>
                    </p>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SectionSix
