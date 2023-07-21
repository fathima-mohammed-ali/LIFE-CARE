import React from 'react'
import { MonitorHeart, LocationOn, Send, Phone, Email, FacebookOutlined, YouTube, Twitter } from '@mui/icons-material/';
import './Contact.css'
export default function Contact() {
  return (
    <>

      <section id='contact-pg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-4'>
              <a href='/'id='lifecare-link'><h1 className='Contact-lifecare'>Life<MonitorHeart id='monitor-heart' />Care</h1></a>
              <p id='Contact-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='col-lg-4 col-md-4 col-4'>
              <h3 className='Contact-contact'><span>| </span>Contact Us</h3>
              <h5 class='Contact-info'><LocationOn id='locationicon' />PO 123,ABC Block</h5>
              <h5 class='Contact-info'><Send id='sendicon' />lifecare@gmail.com</h5>
              <h5 class='Contact-info'><Phone id='phoneicon' />89076543</h5>
            </div>

            <div className='col-lg-4 col-md-4 col-4'>
              <h3 className='Contact-contact'><span>| </span>FeedBack</h3>
              <p id='Contact-para'>Send us your valuable Feedback about our Service.Can mention any issues that is related to our Service we take action accordingly.</p>
              <h5 className='Contact-info'><Email id='mailicon' />lifecarefeedback@gmail.com</h5>
            </div>


          </div>
        </div>
      </section>

      <footer class='bg-primary'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-12'>
              <table>
                <tr>
                  <td id='footer-para'>Get healthy news, tip and solutions to your problems from our experts.</td>
                  
                  <td><FacebookOutlined id='fbicon'/></td>
                  <td><Twitter id='twittericon'/></td>
                  <td><YouTube id='youtubeicon'/></td>
                </tr>
              </table>
            </div>
          </div>

        </div>
      </footer>



    </>
  )
}
