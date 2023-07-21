import React from 'react'
import { Button } from '@mui/material';
import './About.css'
export default function About() {
  return (
    <>
    <section id='about-pg'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-6'>
                    <h1 class='text-left mt-5' id='about-head'>About Us</h1>
                    <h4 class='text-left' id='about-head5' >What We Do</h4>
                    <p id='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                    <Button variant="contained">Learn More</Button>


                </div>
                <div className='col-lg-6 col-md-6 col-6'>
                    <img src='https://th.bing.com/th/id/R.16bf20874f8444fb7fbd36f0fc694c86?rik=4HWV%2b5rECdPjVA&riu=http%3a%2f%2fblog.wcei.net%2fwp-content%2fuploads%2f2015%2f08%2fPalliative-Care.jpg&ehk=kZi3yWkAkdzGTtrDUJsqqqyCTz584hgYB6huUVKi2hk%3d&risl=&pid=ImgRaw&r=0' id='image'></img>
                </div>
            </div>
        </div>

    </section>
    
    
    
    </>
  )
}
