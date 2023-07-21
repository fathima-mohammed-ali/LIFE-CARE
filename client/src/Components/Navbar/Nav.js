import React from 'react'
import './Nav.css'
export default function Nav() {
    return (
        <header class='bg-primary nav-head'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-12'>
                        <nav class="navbar navbar-expand-sm bg-primary navbar-light">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link text-white tag" id='home' href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white tag " id='about' href="#about-pg">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white tag" id='services' href="#service-pg">Services</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle text-white tag" href="#health-dept" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Health & Community Service Workers
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#doctor-section">Doctors</a></li>
                                            <li><a class="dropdown-item" href="#nurse-section">Nurses</a></li>
                                            <li><a class="dropdown-item" href="#otherstaff-section">Other Service Staffs</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white tag" id='contact' href="#contact-pg">Contact</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white tag" id='services' href="/login">Login</a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        
    )
}
