import img1 from "../assets/team1.jpg"
import img2 from "../assets/team2.jpg"
import img3 from "../assets/team3.jpg"
import img4 from "../assets/team4.jpg"
import { MdEmail } from "react-icons/md";

const SectionThree = () => {
  return (
    <>
    <div id="team"></div>
    <div>
      <div className="head">
        <h2>THE TEAM</h2>
        <p>The ones who runs this company</p>

      </div>

      <div className="container my-5 ">
        
        <div className="row g-3">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-img">
                <img className="w-100" src={img1} alt="" />
              </div>
              <div className="card-body">
                <b className="fs-3">John Doe</b>
                <h6 className=" text-muted">CEO & Founder</h6>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <button className="btn btn-light w-100"><MdEmail /> contact</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-img">
                <img className="w-100" src={img2} alt="" />
              </div>
              <div className="card-body">
                <b className="fs-3">John Doe</b>
                <h6 className=" text-muted">CEO & Founder</h6>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <button className="btn btn-light w-100"><MdEmail /> contact</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-img">
                <img className="w-100" src={img3} alt="" />
              </div>
              <div className="card-body">
                <b className="fs-3">John Doe</b>
                <h6 className=" text-muted">CEO & Founder</h6>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <button className="btn btn-light w-100"><MdEmail /> contact</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-img">
                <img className="w-100" src={img4} alt="" />
              </div>
              <div className="card-body">
                <b className="fs-3">John Doe</b>
                <h6 className=" text-muted">CEO & Founder</h6>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <button className="btn btn-light w-100"><MdEmail /> contact</button>
              </div>
            </div>
          </div>
        </div>
          
        
      </div>
    </div>

    </>
  )
}

export default SectionThree
