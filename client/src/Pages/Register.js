import React from 'react'
import Head from '../Components/HomePage/Head'
import Registration from '../Components/admin/Registration'
import NavTwo from '../Components/Navbar/NavTwo'



export default function Register() {
  return (
    <>
     <div className='homeContainer'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-12' >
                    <Head/>
                    <NavTwo/>
                  
                    
                </div>
                <div className='col-lg-12 col-md-12 col-12'>
                    <Registration/>
                </div>
            </div> 
        </div>
     </div>          
     
    
    
    </>
  )
}
