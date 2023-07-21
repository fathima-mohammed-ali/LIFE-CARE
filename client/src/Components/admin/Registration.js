import React from 'react'

                        import Card from '@mui/material/Card';
                        import CardContent from '@mui/material/CardContent';
                        import CardMedia from '@mui/material/CardMedia';
                        import Typography from '@mui/material/Typography';
                        import {Button, CardActionArea, CardActions} from '@mui/material';

export default function Registration() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-4'>
                        

                        
                        <Card sx={{ maxWidth: 245,marginTop:10,marginLeft:10}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image="https://novigenix.com/wp-content/uploads/2018/05/m%C3%A9decin-avatar.jpg"
                                    alt="Doctor"

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Doctor
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" href='/register/doctor'>
                                    Registration
                                </Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div className='col-lg-4 col-md-4 col-4'>
                        

                        
                        <Card sx={{ maxWidth: 245,marginTop:10,marginLeft:5,marginRight:5}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image="https://cdn0.iconfinder.com/data/icons/medical-services-2-1/256/Nurse-512.png"
                                    alt="Nurse"

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Nurse
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" href='register/nurse'>
                                    Registration
                                </Button>
                            </CardActions>
                        </Card>
                       


                    </div>

                    <div className='col-lg-4 col-md-4 col-4'>
                    <Card sx={{ maxWidth: 245,marginTop:10}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image="https://www.presentationtrainers.com/wp-content/uploads/2017/02/dark-orange-testimonials-for-ems-communications-300x300.png"
                                    alt="staff"

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                         Life-Care Staffs
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" href='register/staff'>
                                    Registration
                                </Button>
                            </CardActions>
                        </Card>
                       
                    </div>


                </div>
            </div>



        </>
    )
}
