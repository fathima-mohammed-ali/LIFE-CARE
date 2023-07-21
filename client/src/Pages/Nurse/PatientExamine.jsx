import React from 'react'
import Head from '../../Components/HomePage/Head'
import NavThree from '../../Components/Navbar/NavNurse'
import PatientCheck from '../../Components/Nurse/PatientCheck'

export default function PatientExamine() {
  return (
    <>
     <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-12'>
                    <Head />
                    <NavThree />
                </div>
                <div className='col-lg-12 col-md-12 col-12'>
                    <PatientCheck/>
                </div>
            </div>
        </div>
    </>
  )
}
