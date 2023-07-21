import React from 'react'
import Button from '@mui/material/Button';
import { LocalPhone, Mail, AccessTime,MonitorHeart } from '@mui/icons-material/';
import './Head.css'


export default function Head() {
    return (
        <>
            <header id='head'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-12' id='headerpart'>
                            <table>
                                <tr>
                                    <td colSpan={10}><a href='/' id='lifecare-link'><h1 className='life-care'>Life<MonitorHeart id='monitor-heart'/>Care</h1></a></td>
                                    <td><Button className='btn' sx={{backgroundColor:'cornflowerblue',color:'white',marginLeft:10,marginTop:3,}} variant='contained' >
                                        <LocalPhone/>
                                    </Button>
                                    </td><td><h4 className='number'>8000123456</h4></td>
                                    <td> <Button className='btn' sx={{backgroundColor:'cornflowerblue',color:'white',marginLeft:5,marginTop:3,}} variant='contained'>
                                        <Mail />
                                        </Button></td>
                                        <td><h4 className='email'>info@lifecare.com</h4></td>
                                    <td><Button className='btn' sx={{backgroundColor:'cornflowerblue',color:'white',marginLeft:5,marginTop:3,}} variant='contained'>
                                         <AccessTime/>
                                    </Button></td>
                                    <td><h4 className='time'>Daily:9:00am-5:00pm </h4></td>
                                </tr>






                            </table>

                        </div>
                    </div>
                </div>
            </header>



        </>
    )
}
