import React from 'react'
import featureIcon1 from "../static/images/icon/feature_color1.png"
import featureIcon2 from "../static/images/icon/feature_color2.png"
import featureIcon3 from "../static/images/icon/feature_color3.png"
const Features = () => (
   <section id="tw-features" className="tw-featured">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
        <div className="features-box">
          <div className="features-icon d-table">
            <div className="features-icon-inner d-table-cell">
              <img src={featureIcon1} alt="feature-icon-1" />
            </div>
            {/* End Features icon inner */}
          </div>
          {/* End Features Icon */}
          <h3>Expert Repair Services</h3>
         <input type="checkbox" className="read-more-state" id="post-1" />
         <p className="read-more-wrap">Wireless Whiz is the one stop shop for all the smart phone user needs. Our team of trained technicians work diligently to provide expert<span className="read-more-target"> repairs and best solutions to your problems. We also provide professional repairing service for iPad and tablets of all the brands.</span></p>
         <label htmlFor="post-1" className="read-more-trigger" />

        </div>

        {/* End Single Features */}
      </div>
      {/* Col End */}
      <div className="col-lg-4 col-md-12  wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".4s">
        <div className="features-box">
          <div className="features-icon d-table">
            <div className="features-icon-inner d-table-cell">
              <img src={featureIcon2} alt="feature-icon-2" />
            </div>
            {/* End Features Icon inner */}
          </div>
          {/* End Features Icon */}
          <h3> Buying and Selling of New or Used Phones</h3>
          <input type="checkbox" className="read-more-state" id="post-2" />
         <p className="read-more-wrap">We believe in providing in and out services to our customers. We at Wireless Whiz also carry out buying<span className="read-more-target"> and selling of new or used cell phones.</span></p>
         <label htmlFor="post-2" className="read-more-trigger" />
        </div>
        {/* End Single Features */}
      </div>
      {/* end col */}
      <div className="col-lg-4 col-md-12  wow fadeInUp" data-wow-duration="1.9s" data-wow-delay=".6s">
        <div className="features-box">
          <div className="features-icon d-table">
            <div className="features-icon-inner d-table-cell">
              <img src={featureIcon3} alt="feature-icon-3" />
            </div>
            {/* End Features Icon inner */}
          </div>
          {/* End Features Icon */}
          <h3>Desktop and Laptop Repair Services</h3>
          <input type="checkbox" className="read-more-state" id="post-3" />
          <p className="read-more-wrap">Got a Glitch? Get a Fix. We at Wireless Whiz possess a team of skilful experts to handle your <span className="read-more-target">concerns regarding desktop or laptop technical issues.</span></p>
          <label htmlFor="post-3" className="read-more-trigger" />
        </div>
        {/* End Single Features */}
      </div>
      {/* End col */}
    </div>
    {/* End Row 2 */}
  </div>
  {/* End Container */}
</section>


)

export default Features