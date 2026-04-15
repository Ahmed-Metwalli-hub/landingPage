import img1 from "../assets/tech_mic.jpg"
import img2 from "../assets/tech_camera.jpg"
import img3 from "../assets/tech_phone.jpg"
import img4 from "../assets/tech_sound.jpg"
import img5 from "../assets/tech_drone.jpg"
import img6 from "../assets/tech_tablet.jpg"
import img7 from "../assets/tech_tableturner.jpg"
import img8 from "../assets/tech_typewriter.jpg"
import "./sectionFive.css"

const SectionFive = () => {
  return (
    <>
    <div id="work" className='my-5 work'>`</div>
    <div>
        <div className="head">
            <h2>OUR WORK</h2>
            <p>What we've done for people</p>
        </div>
        <div className="container my-5">
            <div className="row g-2">
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="tech card-img w-100">
                        <img  className='w-100' src={img1} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="tech w-100 card-img">
                        <img className='w-100' src={img2} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="tech w-100 card-img">
                        <img className='w-100'  src={img3} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="tech w-100 card-img">
                        <img className='w-100' src={img4} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="tech w-100 card-img">
                        <img className='w-100' src={img5} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="tech w-100 card-img">
                        <img className='w-100' src={img6} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="tech w-100 card-img">
                        <img className='w-100'  src={img7} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="tech w-100 card-img">
                        <img className='w-100' src={img8} alt="" />
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default SectionFive
