import React, { useState, useEffect } from 'react'
import { Box, Button, TextField, } from '@mui/material';
import axios from 'axios'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ViewPatient() {
        const [data, setData] = useState([]); // State variable to store the retrieved data
        const [open, setOpen] = React.useState(false);
        const [formErrors, setFormErrors] = useState({});
        const [isSubmit, setIsSubmit] = useState({});
        const [PatientInfo, setPatientInfo] = useState({
            patientID: "",
        })

        const handleClose = () => setOpen(false);        

        const inputchange = (event) => {
            const { name, value } = event.target
            setPatientInfo({ ...PatientInfo, [name]: value })
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
                        const details=response.data.details;
                        setData(details)
                        setOpen(true);

                    })

            }
        }



        return (
            <>
                <section>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-12'>
                                <Box sx={{ marginLeft: 50, marginTop: 3 }}>
                                    <TextField onChange={inputchange} label="Enter Patient ID" name='patientID' variant="outlined" />
                                </Box>

                                <Button onClick={submit} sx={{ marginLeft: 50, marginTop: 2, backgroundColor: 'green' }} variant="contained" data-toggle="modal" data-target="#exampleModalLong">Search</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Text in a modal
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            <ul>
                                            
                                                <li> Name:{data.patientName}</li>
                                                <li> Gender:{data.gender}</li>
                                                <li> Age:{data.patientAge}</li>
                                                <li> History:{data.patientHistory}</li>
                                                <li> Disease Progression:{data.diseaseProgress}</li>
                                                <li> Present Illness:{data.presentCase}</li>
                                                <li> Patient Medicine:{data.patientMedicine}</li>
                                               <li>Consultant:{data.consultant}</li>
                                               <li>Hospital:{data.hospital}</li>
                                               <li>Caretaker:{data.caretaker}</li>
                                               </ul>
                                               
                                        </Typography>
                                        
                                        
                                    </Box>
                                </Modal>

                            </div>
                           
                        </div>
                    </div>

                </section>

            </>
        )
    
}
