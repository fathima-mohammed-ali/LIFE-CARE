import React, { useState } from 'react'
import { TextField, InputAdornment, Box,Button } from '@mui/material';
import {Mail , Lock } from '@mui/icons-material';
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const navigate = useNavigate()
    const [loginInfo, setLoginInfo] = React.useState({    
        email: "",
        password: "",
       
    })
    const inputchange = (event) => {
        const { name, value } = event.target
        setLoginInfo({ ...loginInfo, [name]: value })
    }

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState({});
    
    const validate = (values) => {
        var error = {}
        if (!values.email) {
            error.email = "enter your Mail"
        }
        if (!values.password) {
            error.Password = "enter your Password"
        }
    return error
    }

    const submit = (e) => {
       
        e.preventDefault();
        setFormErrors(validate(loginInfo))
        console.log("formErrors", formErrors);
        setIsSubmit(true)
        if (Object.keys(formErrors).length === 0 && isSubmit) {

            axios.post("http://localhost:4000/login/login",loginInfo)
            .then((response)=>{
              console.log(response);
              if(response.data.role=='nurse'){
                localStorage.setItem('token',response.data.token)
                navigate('/nurse-home')
              }
              if(response.data.role=='doctor'){
                localStorage.setItem('token',response.data.token)
                navigate('/doctor-home')
              }
              if(response.data.role=='staff'){
                localStorage.setItem('token',response.data.token)
                navigate('/staff-home')
              }
            }).catch((error)=>{
                
                toast.error(error.response.data.message, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    type:"info",
                    theme: "colored",
                    });
                   
            })

        }
    }
    return (
        <>
            <section>
                <div className='container'>
                    <ToastContainer/>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-12'>
                            <h3 className='Login-table'>Login</h3>
                            <form className='Login-form'>
                                <Box id='mail-box'>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='email'
                                        label="Enter Your Mail"
                                        onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Mail />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined"
                                    />
                                </Box>

                                <Box id='password-box'>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='password'
                                        label="Enter Your Password"
                                        onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Lock />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined"
                                    />
                                </Box>

                                <Button onClick={submit} sx={{ marginBottom: 3, backgroundColor: 'green' }} variant="contained">Sign In</Button>
                            </form>

                            <h4 className='login-signin'>You need to register to Sign In</h4>
                            <a className='register-link' href='/view-register'><h6 className='register-pg'>Registration</h6></a>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
