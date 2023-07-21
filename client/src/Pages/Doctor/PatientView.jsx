import React from 'react'
import Head from '../../Components/HomePage/Head'
import NavTwo from '../../Components/Navbar/NavTwo'
import ViewPatient from '../../Components/ViewPatient'

export default function PatientView() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-12'>
                <Head/>
                <NavTwo/>
            </div>
            <div className='col-lg-12 col-md-12 col-12'>
                <ViewPatient/>

            </div>
        </div>
    </div>
    
    </>
  )
}

