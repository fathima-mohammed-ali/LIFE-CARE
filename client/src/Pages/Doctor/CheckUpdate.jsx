import React from 'react'
import NavTwo from '../../Components/Navbar/NavTwo'
import Head from '../../Components/HomePage/Head'
import CheckUp from '../../Components/doctor/CheckUp'

export default function CheckUpdate() {
  return (
    <>
<div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-12'>
                <Head/>
                <NavTwo/>
            </div>
            <div className='col-lg-12 col-md-12 col-12'>
                <CheckUp/>
            </div>
        </div>
    </div>

    </>
  )
}
