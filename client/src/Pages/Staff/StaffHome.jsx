import React from 'react'
import Head from '../../Components/HomePage/Head'
import NavStaff from '../../Components/Navbar/NavStaff'
import Staff from '../../Components/Staff/Staff'
import ProfileSideBar from '../../Components/ProfileSideBar'

export default function StaffHome() {
  return (
   <>
    <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-12'>
                    <Head />
                    <NavStaff />
                </div>
                <div className='col-lg-12 col-md-12 col-12'>
                    <Staff/>
                    <ProfileSideBar/>
                </div>
            </div>
        </div>
   
   
   </>
  )
}
