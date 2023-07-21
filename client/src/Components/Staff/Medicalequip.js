import React,{useState} from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import axios from 'axios'
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



// function createData(medicalequipment, totalavailability, quality, service, price) {
//     return {
//         medicalequipment,
//         totalavailability,
//         quality,
//         service,
//         price,
//         history: [
//             {
//                 date: '2020-01-05',
//                 PatientID: '11091700',
//                 taken: 3,
//             },
//             {
//                 date: '2020-01-02',
//                 PatientID: 'Anonymous',
//                 taken: 1,
//             },
//         ],
//     };
// }

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.medicalequipment}
                </TableCell>
                <TableCell align="right">{row.totalavailability}</TableCell>
                <TableCell align="right">{row.quality}</TableCell>
                <TableCell align="right">{row.service}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Patient ID</TableCell>
                                        <TableCell>Patient Name</TableCell>
                                        <TableCell align="right">Date Taken</TableCell>
                                        <TableCell align="right">Date Returned</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.PatientID}</TableCell>
                                            <TableCell align="right">{historyRow.taken}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.taken * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        totalavailability: PropTypes.number.isRequired,
        quality: PropTypes.number.isRequired,
        service: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                taken: PropTypes.number.isRequired,
                PatientID: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        medicalequipment: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

// const rows = [
//     createData('Oxygen Concentrator', 159, 6.0, 24, 4.0, 3.99),
//     createData('Oxygen Cylinder', 237, 9.0, 37, 4.3, 4.99),
//     createData('Air Bed', 262, 16.0, 24, 6.0, 3.79),
//     createData('Wheel Chair', 305, 3.7, 67, 4.3, 2.5),
//     createData('Oximeter', 356, 16.0, 49, 3.9, 1.5),
// ];


export default function Medicalequip() {
    const [isopen,setIsopen]= useState(true)
    const [open,setOpen]= useState({})
    const[tableData,setTableData]= useState({
        name:"",
        manufacturer:"",
        description:"",
        availability:"",
        service:"",

    })
    const handleClose = () => setOpen(false);
    const modalclose=()=> setIsopen(false);
    const submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/medicalequipment/addtable",tableData)
        .then((response) => {
            console.log(response);
            const details = response.data.details;
            setTableData(details)
             setOpen(true);
             

        })

    }
   
    // const Additem = (e)=>{
    //     e.preventDefault()
    //         axios.post("http://localhost:4000/medicalequipment/table",)
    //             .then((response) => {
    //                 console.log(response);
    //                 const details = response.data.details;
                    
    
    //             })
    
        
    
       
return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell><Button onClick={submit}><AddIcon/></Button></TableCell>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell align="right"><b>Manufacturer</b></TableCell>
                            <TableCell align="right"><b>Description</b></TableCell>
                            <TableCell align="right"><b>Availabilty</b></TableCell>
                            <TableCell align="right"><b>Service</b></TableCell>
                            <TableCell align="right"><Button><DeleteIcon/></Button></TableCell>
                            
                            <TableCell>{tableData.name}</TableCell>
                            <TableCell>{tableData.manufacturer}</TableCell>
                            <TableCell>{tableData.description}</TableCell>
                            <TableCell>{tableData.availability}</TableCell>
                            <TableCell>{tableData.service}</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Button onClick={modalclose} sx={{marginLeft:38,marginBottom:2}}><CloseIcon/></Button>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Medical Equipment Details
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <TextField sx={{marginBottom:2}} label='Name' name='name'></TextField>
                                        <TextField sx={{marginBottom:2}} label='Manufacturer' name='manufacturer'></TextField>
                                        <TextField sx={{marginBottom:2}} label='Description' name=' description'></TextField>
                                        <TextField sx={{marginBottom:2}} label='Availability' name= 'availability'></TextField>
                                        <TextField sx={{marginBottom:2}} label='Service' name= 'service'></TextField>
                                        <Button id='modal-btn' sx={{background:'coral',color:'white',margin:2}}>Submit</Button>

                                           

                                    </Typography>


                                </Box>
                            </Modal>
        </>
    )
                                     
                    }
