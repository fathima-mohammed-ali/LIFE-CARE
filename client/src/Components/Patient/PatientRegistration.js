import React from 'react'

export default function PatientRegistration() {
  return (
    <>
    <section>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-12'>
                <Card sx={{ maxWidth: 245,marginTop:10}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image="https://www.presentationtrainers.com/wp-content/uploads/2017/02/dark-orange-testimonials-for-ems-communications-300x300.png"
                                    alt="patient"

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Patient
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" href='register/patient'>
                                    Registration
                                </Button>
                            </CardActions>
                        </Card>
                       
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}
