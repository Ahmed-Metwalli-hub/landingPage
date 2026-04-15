import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import img from "../assets/map.jpg"
import { FaPhoneAlt } from "react-icons/fa";




const Section8 = () => {
  return (
    <>
    <div id="contact"></div>
    <div className='container'>
      <div className="head py-5  ">
        <h2 className='fw-normal fs-4'>CONTACT</h2>
        <p className='fs-5'>Lets get in touch. Send us a message:</p>
      </div>
      <div>
        <h3 className='fs-4 fw-normal flex my-4 gap-4'> <FaPhoneAlt /> <span className='fs-5 fw-normal'> Phone: +00 151515</span></h3>
        <h3 className='fs-4 fw-normal flex my-4 gap-4'> <MdEmail /> <span className='fs-5 fw-normal'> Email: mail@mail.com</span></h3>
        <h3 className='fs-4 fw-normal flex my-4 gap-4'> <FaLocationDot /> <span className='fs-5 fw-normal'> Chicago, US</span></h3>
      </div>
      <div className="my-5">
        <input type="text" className='form-control my-2 py-2'placeholder='Name' />
        <input type="email" className='form-control my-2 py-2'placeholder='Email' />
        <input type="text" className='form-control my-2 py-2'placeholder='Subject' />
        <input type="text" className='form-control my-2 py-2'placeholder='Message' />
        <button className='btn btn-dark flex my-2 py-2'><BiLogoTelegram /> SEND MESSAGE</button>
      </div>
      <div className="card-img w-100 mb-5"><img className='w-100' src={img} alt="" /></div>
    </div>
    </>
  )
}

export default Section8
