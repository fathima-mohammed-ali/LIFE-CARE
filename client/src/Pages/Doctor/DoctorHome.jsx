import React from 'react'
import Head from '../../Components/HomePage/Head'
import NavFour from '../../Components/Navbar/NavDoctor'
import Doctor from '../../Components/doctor/Doctor'
import ProfileSideBar from '../../Components/ProfileSideBar'


export default function DoctorHome() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-12'>
                <Head/>
                <NavFour/>
            </div>
            <div className='col-lg-12 col-md-12 col-12'>
                <Doctor/>
                <ProfileSideBar/>
            </div>
        </div>
    </div>
    
    </>
  )
}
