import React from 'react'
import image1 from "../static/images/about/about-img.jpg"
import image2 from "../static/images/about/repair1.jpg"
import image3 from "../static/images/about/acc2.jpg"
const Services = () => (
    
<section id="services" className="tw-inro-item">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-12 text-lg-right text-md-center wow fadeInLeft" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft'}}>
        <img src={image1} alt="repair-image-1" className="img-fluid" />
      </div>
      {/* End Col */}
      <div className="col-lg-6 ml-auto align-self-center col-md-12 wow fadeInRight" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight'}}>
        <h2 className="column-title light">Affordable Prices</h2>
        <p>We strive to provide hassle free service at fair prices starting at just $40.</p>
        <p>Our services include Mac book, iPhone as well as other brands screen repair, battery replacement, charging port replacement, water damage cleaning, and much more.</p>
        <p>Get a quote and book an appointment for free diagnosis.</p>
        {/* End Intro list */}
      </div>
      {/* End Col */}
    </div>
    <div className="row tw-inro-item">
      <div className="order-2 order-lg-1 col-lg-4 align-self-center col-md-12">
        <h2 className="column-title light">Quick and Unbeatable services</h2>
        <p>At Wireless Whiz, customer’s time is given utmost priority.</p>
        <p>Our team of expert technicians specialize in cell phone repairing with most repairs done within 30 mins.</p>
       <p>We understand the need of cell phone in today’s world and hence we provide the service of lending spare phones to our customers until we complete their repair.</p> 
      </div>
      {/* End Col */}
      <div className="order-1 order-lg-2 col-lg-7 offset-lg-1 col-md-12 text-lg-right">
        <img src={image2} alt="repair-image-2" className="img-fluid" />
      </div>
      {/* End Col */}
    </div>
    <div className="row tw-inro-item">
      <div className="col-lg-5 col-md-12 text-lg-right text-md-center wow fadeInLeft" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft'}}>
        <img src={image3} alt="repair-image-3" className="img-fluid" />
      </div>
      {/* End Col */}
      <div className="col-lg-6 ml-auto align-self-center col-md-12 wow fadeInRight" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight'}}>
        <h2 className="column-title light">Great Prices On Accessories too!</h2>
       <p>We at Wireless Whiz believe in staying connected to and updated with current trends.</p>
       <p>Get yourself trendy accessories of iPhone, iPad and other brands at reasonable price rate.</p>
       <p>We possess comprehensive collection of mobile case and covers and protective accessories for different variants of cell phones and iPad.</p>

        {/* End Intro list */}
      </div>
      {/* End Col */}
    </div>
  </div>
</section>


)

export default Services