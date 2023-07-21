import React, { useState } from 'react'
import './Doctor.css'
import axios from 'axios'
import { Box, TextField, InputAdornment, Button } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import Textarea from '@mui/joy/Textarea';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
export default function CheckUp() {
    const [formData, setFormData] = useState({});
    const [showForm, setShowForm] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState({});
    const [PatientInfo, setPatientInfo] = useState({
        patientID: "",
    })

    const inputchange = (event) => {
        const { name, value } = event.target
        setPatientInfo({ ...PatientInfo, [name]: value })
       
       
    }
    const formValues=(event)=>{
        const { name, value } = event.target 
        setFormData({...formData,[name]:value}) 
        console.log(formData);
    }




    const validate = (values) => {
        var error = {}
        if (!values.patientID) {
            error.patientID = "invalid ID"
        }
        return error
    }
    const submit = (e) => {
        e.preventDefault();
        setFormErrors(validate(PatientInfo))
        setIsSubmit(true)
        if (Object.keys(formErrors).length === 0 && isSubmit) {

            axios.post("http://localhost:4000/patient/view-patient", PatientInfo)
                .then((response) => {
                    console.log(response);
                    setShowForm(response.data.details)
                })
        }
    }

    const formSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/patient/checkup-update", formData)
            .then((response) => {
                console.log(response);
            }).catch((err)=>{
                console.log(err);
            })
    }
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-12'>
                            <Box sx={{ marginTop: 3, marginLeft: 50, }}>
                                <TextField onChange={inputchange} id="outlined-basic" label="Patient ID" name='patientID' variant="outlined" />
                            </Box>
                            <Button onClick={submit} sx={{ marginTop: 1, marginLeft: 50, backgroundColor: 'green' }} variant="contained">Search</Button>

                            {showForm.patientID == undefined ?
                                "" :

                                <form className='form-border'
                                >
                                    <p id='form-labels'>Patient Name:{showForm.patientName}
                                    <br></br>Patient Age:{showForm.patientAge}</p>
                                    
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer sx={{ marginTop: 3, marginRight: 5 }} components={['DateField']}>
                                            <DateField onChange={formValues} name='date' sx={{ marginLeft: 17 }} label="Date" />
                                        </DemoContainer>
                                    </LocalizationProvider><br></br>
                                    <Box sx={{ marginLeft: 18 }}>
                                        <TextField
                                            id="input-with-icon-textfield"
                                            name='bloodpressure'
                                            label="Bp"
                                            onChange={formValues}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                        />
                                    </Box>
                                    <Box sx={{ marginLeft: 18, marginTop: 3 }} >
                                        <TextField
                                            id="input-with-icon-textfield"
                                            name='pulserate'
                                            label="Pulse Rate"
                                            onChange={formValues}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                        />
                                    </Box>

                                    <Box sx={{ marginLeft: 18, marginTop: 3 }}>
                                        <TextField
                                            id="input-with-icon-textfield"
                                            name='oxygen'
                                            label="Oxygen Level"
                                            onChange={formValues}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                        />
                                    </Box>

                                    <label className='labels'>Present Illness</label>
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
                                        onChange={formValues}
                                            name="presentIllness"
                                            placeholder="Type in here…"
                                            variant="outlined"
                                            color="primary"
                                        />
                                    </Box>

                                    <label className='labels'>Summary</label>
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
                                        onChange={formValues}
                                            name="summary"
                                            placeholder="Type in here…"
                                            variant="outlined"
                                            color="primary"
                                        />
                                    </Box>

                                    <label className='labels'>OverAll Condition</label>
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
                                        onChange={formValues}
                                            name="condition"
                                            placeholder="Type in here…"
                                            variant="outlined"
                                            color="primary"
                                        />
                                    </Box>

                                    <label className='labels'>Medicine</label>
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
                                        onChange={formValues}
                                            name="medicine"
                                            placeholder="Type in here…"
                                            variant="outlined"
                                            color="primary"
                                        />
                                    </Box>

                                    <Box sx={{ marginLeft: 18, marginTop: 3, marginBottom: 1 }}>
                                        <TextField
                                            id="input-with-icon-textfield"
                                            name='appoinment'
                                            label="Next Appoinment Date"
                                            onChange={formValues}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <FontAwesomeIcon icon={faCalendarCheck} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                        />
                                    </Box>

                                    <Button onClick={formSubmit} sx={{ marginTop: 1, marginLeft: 25, marginBottom: 1, backgroundColor: 'orange' }} variant="contained">Submit</Button>





                                </form>
                            }






                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
