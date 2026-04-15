import "./SectionSeven.css"

const SectionSeven = () => {
  return (
    <>
    <div id="pricing"></div>
    <div className='container Section-seven pb-5'>
        
      <div className="head py-5 text-light ">
        <h2 className='fw-normal'>PRICING</h2>
        <p className='fs-5'>Choose a pricing plan that fits your needs.</p>

      </div>
        
        <div className="row pricing-con g-4">

          <div className="col-lg-4 col-sm-6 col-12">
              <div className='card bg-light rounded-0 p-0 m-0 p-0 pricing'>
                <div className='card-body text-center p-0 m-0 p-0 pricing-body'>
                  <h4 className='bg-dark px-3 py-4 text-light fw-normal'>Basic</h4>
                  <p>10GB Storage</p>
                  <p>10 Emails</p>
                  <p>10 Domains</p>
                  <p>Endless Support</p>
                  <p className='fs-4 flex flex-column text-center'>$10 <span className='text-center'>per month</span></p>
                  <button className='btn btn-dark my-2 mb-3 px-4 py-3 '>Sign up</button>
                  

                </div>
                  
              </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 pro-con">
              <div className='card bg-light rounded-0 p-0 m-0 p-0 pricing'>
                <div className='card-body text-center p-0 m-0 p-0 pricing-body'>
                  <h4 className='pro-title px-3 py-4 text-light fw-normal'>Pro</h4>
                  <p>25GB Storage</p>
                  <p>25 Emails</p>
                  <p>25 Domains</p>
                  <p>Endless Support</p>
                  <p className='fs-4 flex flex-column text-center'>$25 <span className='text-center'>per month</span></p>
                  <button className='btn btn-dark my-2 mb-3 px-4 py-3 '>Sign up</button>
                  

                </div>
                  
              </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
              <div className='card bg-light rounded-0 p-0 m-0 p-0 pricing'>
                <div className='card-body text-center p-0 m-0 p-0 pricing-body'>
                  <h4 className='bg-dark px-3 py-4 text-light fw-normal'>Premium</h4>
                  <p>50GB Storage</p>
                  <p>50 Emails</p>
                  <p>50 Domains</p>
                  <p>Endless Support</p>
                  <p className='fs-4 flex flex-column text-center'>$50 <span className='text-center fs-5'>per month</span></p>
                  <button className='btn btn-dark my-2 mb-3 px-4 py-3 '>Sign up</button>
                  

                </div>
                  
              </div>
          </div>
        </div>
      
    </div>
    </>
  )
}

export default SectionSeven
