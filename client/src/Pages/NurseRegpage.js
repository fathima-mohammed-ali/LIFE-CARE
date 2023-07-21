import React from 'react'
import Head from '../Components/HomePage/Head'
import Nav from '../Components/Navbar/Nav'
import NurseRegTab from '../Components/admin/NurseRegTab'
import NavTwo from '../Components/Navbar/NavTwo'

export default function NurseRegpage() {
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
                   <NurseRegTab/> 
                </div>
    
            </div>
        </div>  
    </div>      
         
    </>

  )
}
