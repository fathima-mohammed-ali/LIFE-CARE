import React, { useState, useEffect } from 'react'
import { Avatar, Typography } from '@mui/material'
import axios from 'axios'
import './Nurse.css'
export default function Nurse() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem('token')
  console.log(user);
  useEffect(() => {
    axios.get("http://localhost:4000/register/view-nurse-profile", {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
      .then((response) => {
        console.log('hi');
        console.log(response)
        const userData = response.data.details[0];
        setUser(userData);
      })
  }, [])
  return (
    <>
      <section className='top-section' >
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-12' >
              <div>
                <Avatar sx={{ marginLeft: 75, marginTop: 10, width: 100, height: 100, borderStyle: 'solid', borderWidth: 5, backgroundColor: 'cornflowerblue' }}></Avatar>
                <Typography variant="h6" align='center'>{user.NurseName}</Typography>
                <Typography variant="h6" align='center'>{user.NurseDob}</Typography>
                <Typography variant="h6" align='center'>{user.NurseMobile}</Typography>

              </div>









            </div>
          </div>
        </div>
      </section>
    </>
  )
}
