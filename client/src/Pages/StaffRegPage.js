import React from 'react'
import Head from '../Components/HomePage/Head'
import NavTwo from '../Components/Navbar/NavTwo'
import StaffRegTab from '../Components/admin/StaffRegTab'

export default function StaffRegPage() {
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
                   <StaffRegTab/> 
                </div>
    
            </div>
        </div>  
    </div>      
    </>
  )
}
