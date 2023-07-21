import React, { useState } from 'react'
import { TextField, InputAdornment, Box, InputLabel, MenuItem, FormControl, Select, colors, Button } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import { Female, Mail, Male, Phone } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import './register.css'
import axios from 'axios'


const label = { inputProps: { 'aria-label': 'hello' } };

export default function StaffRegTab() {

    const [data, setdata] = useState('');
    const [file, setfile] = useState('')
    const [staffInfo, setStaffInfo] = React.useState({
        staffName: "",
        gender: "",
        staffDob: "",
        email: "",
        staffMobile: "",
        service:"",
        password: "",
        password: "",
    })
    const inputchange = (event) => {
        const { name, value } = event.target
        setStaffInfo({ ...staffInfo, [name]: value })
    }

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState({});

    const validate = (values) => {
        let error = {}
        if (!values.staffrName) {
            error.staffrName = "enter your Name"
        }
        if (!values.gender) {
            error.gender = "choose your Gender"
        }
        if (!values.staffDob) {
            error.staffDob = "choose your DOB"
        }
        if (!values.email) {
            error.email = "enter your Mail"
        }
        if (!values.staffMobile) {
            error.staffMobile = "enter your Number"
        }
        if (!values.service) {
            error.service = "enter your Service Details"
        }
        if (!values.password) {
            error.password = "enter your Password"
        }
        if (!values.password) {
            error.password = "confirm your Password"
        }
        return error
    }
    if (file) {
        const data = new FormData();
        const filename = file.name
        data.append("name", filename)
        data.append("file", file)
        axios.post("http://localhost:4000/register/upload", data).then((response) => {
            console.log(response);
        })
    }

    const submit = (e) => {
        console.log("hi");
        e.preventDefault();
        setFormErrors(validate(staffInfo))
        console.log("formErrors", formErrors);
        setIsSubmit(true)
        console.log("hello");
        if (Object.keys(formErrors).length == 0 && isSubmit) {

            axios.post("http://localhost:4000/register/staff", staffInfo)
                .then((response) => {
                    console.log(response);
                })

        }
    }



    const handleChange = (event) => {
        setdata(event.target.value);

    };
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-12'>
                            <h3 className='doctor-regtable'>Life-Care Staff Registration</h3>
                            <div className='doctor-form'>

                                <span style={{ color: formErrors.staffName ? 'red' : "" }}>{formErrors.staffName}</span>
                                <Box id='name'>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='staffName'
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
                                        <DateField name='staffDob' sx={{ marginLeft: 17 }} label="Date Of Birth" />
                                    </DemoContainer>
                                </LocalizationProvider><br></br>

                                <Box>
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
                                        variant="standard"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='staffMobile'
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
                                <Box id='boxes'>
                                    <TextField id="outlined-basic" label="Service" name='service' variant="outlined" />
                                </Box>

                                <Box>
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
                                        variant="standard"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='password'
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
                                        type="file" onChange={(e) => { setStaffInfo({ ...staffInfo, image: e.target.files[0].name }); setfile(e.target.files[0]); }}
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
