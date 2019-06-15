import React from 'react'
import place from "../static/images/icon/place1.png"

const ContactUs = () => (
 <section id="contact" className="main-container">
  <div className="container">
    <div className="row">
      <div className="col text-center">
        <div className="section-heading">
          <h2>
            <small>Contact us</small>
            Our Contact <span>Details</span>
          </h2>
          <span className="animate-border tw-mt-20 tw-mb-40 ml-auto mr-auto" />
        </div>
        {/* End Heading */}
      </div>
      {/* End Col */}
    </div>
    {/* End Title Row */}
    <div className="row">
      <div className="col-md-4">
        <div className="tw-contact-box">
          <div className="contact-heading">
            <img src={place} alt="place" className="img-fluid" />
            <h3>Contact Us</h3>
          </div>
          {/* End Content Heading */}
          <div className="contact-info-box-content">
            <i className="fa fa-map-marker" />
            <p>1-1024 Upper Wentworth St, Hamilton, ON L9A 4V9</p>
            <i className="fa fa-phone" />
            <p><a href="tel:289 799-1986"> (289) 799-1986</a></p>
            <i className="fa fa-envelope" />
            <p><a href="mailto:info@wirelesswhiz.ca">info@wirelesswhiz.ca</a></p>
          </div>
          {/* End content info box */}
        </div>
        {/* End Contact Box */}
      </div>
      {/* End Col */}
      <div className="col-md-8">
        <div id="map">
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.6532894847314!2d-79.86770168500938!3d43.216760888561055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9a5a826291a1%3A0x996c433221649a97!2sWireless+Whiz+-+Cell+Phone+Repair!5e0!3m2!1sen!2sin!4v1559744043730!5m2!1sen!2sin" style={{border: 0, width: '100%'}} allowFullScreen />
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Row */}
    {/* End Row */}
  </div>
  {/* Container End */}
</section>

)

export default ContactUs