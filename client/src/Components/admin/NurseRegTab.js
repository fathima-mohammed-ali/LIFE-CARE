import React from 'react'
import { TextField, InputAdornment, Box, InputLabel, MenuItem, FormControl, Select, colors } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import { Female, Mail, Male, Phone } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { Avatar, Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { useState } from 'react'
import './register.css'
import axios from 'axios'

const label = { inputProps: { 'aria-label': 'hello' } };

export default function NurseRegTab() {
    const [data, setdata] = useState('');
    const [input, setinput] = useState({})
    const [file, setfile] = useState('')


    const inputchange = (event) => {
        const { name, value } = event.target
        setinput({ ...input, [name]: value })
    }

    const [NurseInfo, setNurseInfo] = React.useState({
        NurseId: "",
        NurseName: "",
        gender: "",
        NurseDob: "",
        NurseMail: "",
        NurseMobile: "",
        NursePassword: "",
        NursePasswordConfirm: "",
    })

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState({});

    const validate = (values) => {
        var error = {}
        if (!values.NurseId) {
            error.NurseId = "enter your ID"
        }
        if (!values.NurseName) {
            error.NurseName = "enter your Name"
        }
        if (!values.gender) {
            error.gender = "choose your Gender"
        }
        if (!values.NurseDob) {
            error.NurseDob = "choose your DOB"
        }
        if (!values.NurseMail) {
            error.NurseMail = "enter your Mail"
        }
        if (!values.NurseMobile) {
            error.NurseMobile = "enter your Number"
        }
        if (!values. NursePassword) {
            error. NursePassword = "enter your Password"
        }
        if (!values.NursePasswordConfirm) {
            error.NursePasswordConfirm = "confirm your Password"
        }
        return error
    }

    if(file){
        const data=new FormData();
        const filename=file.name
        data.append("name",filename)
        data.append("file",file)
        axios.post("http://localhost:4000/register/upload",data).then((response)=>{
            console.log(response);
        })
    }
   
    const submit = (e) => {
        e.preventDefault();
        
        setFormErrors(validate(NurseInfo))
        console.log("formErrors", formErrors);
        setIsSubmit(true)
        if (Object.keys(formErrors).length === 0 && isSubmit) { 
           
            axios.post("http://localhost:4000/register/nurse",NurseInfo)
            .then((response)=>{
              console.log(response);
            })

        }
    }

    const handleChange = (event) => {
        setdata(event.target.value);



    };

    return (
        <>
            <section id='register-pg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-12'>



                            <h3 className='nurse-regtable'>Nurse Registration</h3>
                            <form method='post' action='' className='nurse-form'>

                                <span style={{ color: formErrors.NurseId ? 'red' : "" }}>{formErrors.NurseId}</span>
                               
                                <Box>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='NurseName'
                                        label="Enter Your Name"
                                        onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </Box>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={data}
                                        onChange={handleChange}
                                        label="Gender"
                                        name='gender'
                                    >

                                        <MenuItem value={Male}>Male</MenuItem>
                                        <MenuItem value={Female}>Female</MenuItem>
                                    </Select>
                                </FormControl><br></br>


                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DateField']}>
                                        <DateField name='NurseDob' sx={{ marginLeft: 17 }} label="Date Of Birth" />
                                    </DemoContainer>
                                </LocalizationProvider><br></br>

                                <Box>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='NurseMail'
                                        label="Enter Your Mail"
                                        onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Mail />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='NurseMobile'
                                        label="Enter Your Mobile"
                                        onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Phone />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='NursePassword'
                                        label="Enter Your Password"
                                        onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Lock />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='NursePasswordConfirm'
                                        label="Confirm Your Password"
                                        onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    < Lock />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </Box>

                                <label htmlFor="btn-upload">
                                    <input
                                        id="btn-upload"
                                        name="image"
                                        style={{ display: 'none' }}
                                        type="file"onChange={(e)=>{setinput({ ...input, image: e.target.files[0].name }); setfile(e.target.files[0]);}}
                                       />
                                    <Button
                                        className="btn-choose"
                                        variant="outlined"
                                        component="span" >
                                        Choose Files
                                    </Button>
                                </label>

                                <br></br> <p><Checkbox {...label} />I agree to <b>terms of use</b> and <b>privacy policy</b> </p>
                                <Button onClick={submit} sx={{ marginBottom: 3, backgroundColor: 'green' }} variant="contained">Submit & Continue</Button>
                            </form>
                        </div>
                    </div>
                </div >
            </section>

        </>
    )
}