import React from 'react'
import Navbar from "./Pages/Navigation/Nav" 
import HeroSection from "./Pages/Hero/Hero"
import ServiceSection from "./Pages/Services/Service"
import FooterSection from "./Pages/Footer/Footer"


const View = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <FooterSection/>
    </div>
  )
}

export default View