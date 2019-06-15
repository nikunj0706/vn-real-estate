import React from "react"

import Layout from "../components/layout"
import Footer from "../components/footer"
import ContactUs from "../components/contact-us"
import Testimonial from "../components/testimonial"
import Statastics from "../components/statastics"
import Services from "../components/services"
import Features from "../components/features"
import Header from "../components/header"
import Banner from "../components/banner"
import ContactForm from "../components/contact-form"



const IndexPage = () => (
  <Layout>
    <Header />
    <Banner />
    <Features />
    <ContactForm />
    <Statastics />
    <Services />
   
   <Testimonial />
  <ContactUs />
  <Footer />
  </Layout>

  
  
)

export default IndexPage
