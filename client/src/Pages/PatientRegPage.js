import React from 'react'
import PatientRegTab from '../Components/Patient/PatientRegTab'
import Head from '../Components/HomePage/Head'
import NavTwo from '../Components/Navbar/NavTwo'

export default function PatientRegPage() {
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
                   <PatientRegTab/> 
                </div>
    
            </div>
        </div>  
    </div>     
   
   
   </>
  )
}
