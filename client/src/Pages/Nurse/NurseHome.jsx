import React from 'react'
import Head from '../../Components/HomePage/Head'
import Nurse from '../../Components/Nurse/Nurse'
import NavNurse from '../../Components/Navbar/NavNurse'
import ProfileSideBar from '../../Components/ProfileSideBar'
export default function NurseHome() {
    return (
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-12'>
                    <Head />
                    <NavNurse />
                </div>
                <div className='col-lg-12 col-md-12 col-12'>
                    <Nurse/>
                    <ProfileSideBar/>
                </div>
            </div>
        </div>
        </>
    )
}
