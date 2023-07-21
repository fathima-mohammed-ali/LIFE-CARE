import React from 'react'
import { TextField, InputAdornment, Box, InputLabel, MenuItem, FormControl, Select, colors,Button } from '@mui/material';
import { AccountCircle,EditNote,Medication,Person } from '@mui/icons-material';
import { Female, Mail, Male, Phone,HomeWork,FiberPin,LocalHospital} from '@mui/icons-material';
import Textarea from '@mui/joy/Textarea';
import { useState } from 'react'
import './patientRegTab.css'
export default function PatientRegTab() {
    const [data, setdata] = React.useState('');
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-12'>
                            <h3 className='patient-regtable'>Patient Registration</h3>
                            <form className='patient-form'>
                            <Box id='boxes'>
                            <TextField id="outlined-basic" label="Patient ID" name='patientID' variant="outlined" />
                            </Box>
                               <Box id='boxes'>
                                     <TextField
                                        id="input-with-icon-textfield"
                                        name='patientName'
                                        label="Patient Name"
                                        // onChange={inputchange}
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
                                        // onChange={handleChange}
                                        label="Gender"
                                        name='gender'
                                    >

                                        <MenuItem value={Male}>Male</MenuItem>
                                        <MenuItem value={Female}>Female</MenuItem>
                                    </Select>
                                </FormControl><br></br>
                                <Box id='boxes'>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='patientAge'
                                        label="Age"
                                        // onChange={inputchange}
                                        variant="standard"
                                    />
                                </Box>
                                <Box id='boxes'>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='panchayat'
                                        label="Panchayat"
                                        // onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <HomeWork/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </Box>

                                <Box id='boxes'>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='wardNo'
                                        label="Ward no:"
                                        // onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <HomeWork/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </Box>
                                <Box id='boxes'>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='address'
                                        label="Address"
                                        // onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <HomeWork />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </Box>
                                <Box id='boxes'>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='pincode'
                                        label="Pincode"
                                        // onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FiberPin/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </Box>
                                <Box id='boxes'>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='patientNumber'
                                        label="Contact Number1"
                                        // onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <phone/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </Box>
                                <Box id='boxes'>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='patientSecondNumber'
                                        label="Contact Number2"
                                        // onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <phone/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </Box>

                                <h3 className='patient-head2'>Patient Disease Details </h3>
                                <label className='patient-head3'>Patient History</label>
                                <Box 
                                    sx={{
                                        py: 2,
                                        display: 'grid',
                                        gap: 2,
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    <Textarea
                                        name="patientHistory"
                                        
                                        placeholder="Type in here…"
                                        variant="outlined"
                                        color="primary"
                                    />
                                     </Box>
                                     <label className='patient-head3'>Disease Progression</label>
                                     <Box 
                                    sx={{
                                        py: 2,
                                        display: 'grid',
                                        gap: 2,
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    <Textarea
                                        name="diseaseProgress"
                                        
                                        placeholder="Type in here…"
                                        variant="outlined"
                                        color="primary"
                                    />
                                     </Box>
                                     <label className='patient-head3'>Present Case</label>
                                <Box 
                                    sx={{
                                        py: 2,
                                        display: 'grid',
                                        gap: 2,
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    <Textarea
                                        name="presentCase"
                    
                                        placeholder="Type in here…"
                                        variant="outlined"
                                        color="primary"
                                    />
                                    </Box>

                                    <label className='patient-head3'>Patient Medicine Details</label>
                                <Box 
                                    sx={{
                                        py: 2,
                                        display: 'grid',
                                        gap: 2,
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    <Textarea
                                        name="patientMedicine"
                                       
                                        placeholder="Type in here…"
                                        variant="outlined"
                                        color="primary"
                                    />
                                    </Box>


                                     <Box id='boxes'>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='consultant'
                                        label="Consultant"
                                        // onChange={inputchange}
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

                                <Box id='boxes'>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='hospital'
                                        label="Hospital"
                                        // onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LocalHospital />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </Box>

                                <Box id='boxes'>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        name='caretaker'
                                        label="Patient Caretaker"
                                        // onChange={inputchange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Person />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </Box>
                                <Button  sx={{ marginBottom: 3, backgroundColor: 'green' }} variant="contained">Submit & Continue</Button>


                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
