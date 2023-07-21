import React from 'react'
import {Gite,ContactEmergency,MedicalServices} from '@mui/icons-material/';
import IconButton from '@mui/material/IconButton';
import './Services.css'
export default function Services() {
    return (
        <>
            <section class='service-img' id='service-pg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-4' >
                            <div class="card" >
                                <Gite id='giteicon'/>
                                <div class="card-body">
                                    <h5 class="card-title text-center">Daily CheckUp</h5>
                                    <p class="card-text text-center">Daily Home Visit CheckUp by Medical Staff is available and give patient the care that needed.</p>
                                </div>
                            </div>


                        </div>

                        <div className='col-lg-4 col-md-4 col-4' >
                            <div class="card" >
                                <ContactEmergency id='contacticon'/>
                                <div class="card-body">
                                    <h5 class="card-title text-center">Contact Emergency</h5>
                                    <p class="card-text mb-4">Availbale 24 hrs You Can Contact incase of Emergency the staff will reach to you soon.</p>
                                </div>
                            </div>


                        </div>

                        <div className='col-lg-4 col-md-4 col-4' >
                            <div class="card" >
                                <MedicalServices id='medicalservices'/>
                                <div class="card-body">
                                    <h5 class="card-title text-center">Hospital Equipments</h5>
                                    <p class="card-text mb-4">Contact for Hospital Equipments if necessary every thing is availbale under Life Care.</p>
                                </div>
                            </div>


                        </div>











                    </div>
                </div>


            </section>


        </>
    )
}
