import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider } from '@mui/material'
import { Lock, Mail, Person } from '@mui/icons-material'
import './ProfileSideBar.css'
export default function ProfileSideBar() {
    return (
        <section>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-12'>
                        <Box sx={{
                            width: '50%', maxWidth: 300, bgcolor: 'background.paper', position: 'relative',
                            overflow: 'auto',
                            maxHeight: 200,
                            '& ul': { padding: 0 }
                        }}>
                            <nav aria-label="main mailbox folders">
                                <List >
                                    <h5 id='settings'>Settings</h5>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Person />
                                            </ListItemIcon>
                                            <ListItemText primary="Edit Profile" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Mail />
                                            </ListItemIcon>
                                            <ListItemText primary="Change Email Address" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Lock />
                                            </ListItemIcon>
                                            <ListItemText primary="Change Password" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                            <Divider />
                            <nav aria-label="secondary mailbox folders">
                                <List>
                                    <h5 id='about-us'>About Us</h5>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="FAQS" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton component="a" href="#simple-list">
                                            <ListItemText primary="Terms And Condition" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Privacy Policy" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                        </Box>
                    </div>
                </div>
            </div>
        </section>

    )
}
