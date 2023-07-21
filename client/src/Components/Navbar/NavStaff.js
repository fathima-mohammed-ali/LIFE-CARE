import React,{useEffect} from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function NavFive() {
    const token=localStorage.getItem("token")
    const navigate = useNavigate()
    const onlogout=()=>{
        localStorage.removeItem("token")
        navigate("/login")

    }
    useEffect(()=>{
        if(token==null){
            console.log(token);
            navigate("/login")   
        }
    })
    
    
  return (
    <>
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
                                        <a class="nav-link text-white tag" id='home' href="register/patient">Patient Registration </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white tag" id='home' href="/medical-equipment">Medical Equipments </a>
                                    </li>
                                    <li class="nav-item">
                                    <Button id='logoutstaff' onClick={onlogout}  sx={{color:'whitesmoke'}}><LogoutIcon/></Button>                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header> 
    
    
    
    </>
  )
}
