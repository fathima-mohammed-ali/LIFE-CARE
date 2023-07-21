import React from 'react'
import Head from '../Components/HomePage/Head'
import Nav from '../Components/Navbar/Nav'
import HomeSection from '../Components/HomePage/HomeSection'
import About from '../Components/HomePage/About'
import Services from '../Components/HomePage/Services'
import HealthCare from '../Components/HomePage/HealthCare'
import Contact from '../Components/HomePage/Contact'
import './Home.css'

export default function Home() {
  return (
    
    <>
    <div className='homeContainer'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-12' style={{position:"fixed"}} >
                    <Head/>
                    <Nav/>
                    
                </div>
                <div className='col-lg-12 col-md-12 col-12' style={{marginTop:"150px"}}>
                <HomeSection/>
                </div>
                <div className=' col-lg-12 col-md-12 col-12'>
                    <About/>
                </div>
                <div className=' col-lg-12 col-md-12 col-12'>
                    <Services/>
                </div>
                <div className=' col-lg-12 col-md-12 col-12'>
                    <HealthCare/>
                </div>
                <div className=' col-lg-12 col-md-12 col-12'>
                    <Contact/>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}
