import React from 'react'
import Head from '../../Components/HomePage/Head'
import NavTwo from '../../Components/Navbar/NavTwo'
import Medicalequip from '../../Components/Staff/Medicalequip'

export default function MedicalPage() {
  return (
   <>
   <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-12'>
                    <Head />
                    <NavTwo />
                </div>
                <div className='col-lg-12 col-md-12 col-12'>
                   <Medicalequip/>
                </div>
            </div>
        </div>
   </>
  )
}
