const express = require('express')
const loginModel = require('../model/loginModel')
const doctorModel = require('../model/doctorModel')
const register = express.Router()
var bcrypt = require('bcryptjs');
const nurseModel = require('../model/nurseModel');
const patientModel = require('../model/patientModel');
const multer= require('multer');
const staffModel = require('../model/staffModel');
const { default: mongoose } = require('mongoose');
const checkAuth = require('../middleware/check-auth');
const objectid = mongoose.Types.ObjectId

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/upload')
      },
      filename: function (req, file, cb) {
        cb(null, req.body.name)
      }
})

const upload = multer({ storage: storage })
register.post('/upload',upload.single('file'),async(req,res)=>{
    return res.status(200).json({
        message:"file upload"

    })
})
register.post('/doctor', async (req, res) => {
    try {
        const oldEmail = await loginModel.findOne({ email: req.body.email })
        if (oldEmail) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "Email already exist"
            })
        }
        const oldMobile = await doctorModel.findOne({ doctorMobile: req.body.doctorMobile })
        if (oldMobile) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "Mobile number already exist"
            })
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12)
        const login_doctor = {
            email: req.body.email,
            password: hashedPassword,
            role: "doctor"
        }
        const login = await loginModel(login_doctor).save()


        if (login) {
            const doctordetails = {
                loginID: login._id,
                doctorName: req.body.doctorName,
                gender: req.body.gender,
                doctorDob: req.body.doctorDob,
                doctorMobile: req.body.doctorMobile,
                // image:req.file.filename

            }

            const doctorview = await doctorModel(doctordetails).save()

            if (doctorview) {
                return res.status(200).json({
                    success: true,
                    error: false,
                    message: "registeration Completed"
                })
            }

        }

    } catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "something went wrong"
        })
    }

})

register.post('/nurse', async (req, res) => {
    try {
        
        const oldEmail = await loginModel.findOne({ email: req.body.email })

        if (oldEmail) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "Email already exist"
            })
        }
        

        const hashedPassword = await bcrypt.hash(req.body.password, 12)
        const login_nurse = {
            email: req.body.email,
            password: hashedPassword,
            role: "nurse"
        }
        const login = await loginModel(login_nurse).save()


        if (login) {
            const nursedetails = {
                loginID: login._id,
                NurseName: req.body.NurseName,
                gender: req.body.gender,
                NurseDob: req.body.NurseDob,
                NurseMobile: req.body.NurseMobile,
                // image:req.file.filename

            }

            const nurseview = await nurseModel(nursedetails).save()


            if (nurseview) {
                return res.status(200).json({
                    success: true,
                    error: false,
                    message: "registeration Completed"
                })
            }

        }

    } catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "something went wrong"
        })
    }

})

register.post('/staff',async(req,res)=>{
    try {
        const oldEmail = await loginModel.findOne({ email: req.body.email })

        if (oldEmail) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "Email already exist"
            })
        }
        

        const hashedPassword = await bcrypt.hash(req.body.password, 12)
        const login_staff = {
            email: req.body.email,
            password: hashedPassword,
            role: "staff"
        }
        const login = await loginModel(login_staff).save()


        if (login) {
            const staffdetails = {
                loginID: login._id,
                staffName: req.body.staffName,
                gender: req.body.gender,
                staffDob: req.body.staffDob,
                staffMobile: req.body.staffMobile,
                service:req.body.service,
                // image:req.file.filename

            }

            const staffview = await staffModel(staffdetails).save()


            if (staffview) {
                return res.status(200).json({
                    success: true,
                    error: false,
                    message: "registeration Completed"
                })
            }

        }

        
    } catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "something went wrong"
        })   
    }
})


register.get('/view-doctor-profile',checkAuth,  async (req, res) => {
    try {
        const id = req.userData.loginID
        const profile = await doctorModel.aggregate([
            {
              '$lookup': {
                'from': 'login_tbs', 
                'localField': 'loginID', 
                'foreignField': '_id', 
                'as': 'login'
              }
            },
            {
                '$unwind': '$login'
            },
            {
                '$match':{
                    'loginID':new objectid(id)
                }
            },
            {
                '$group':{
                    '_id':'$_id',
                    'doctorName':{'$first':'$doctorName'},
                    'doctorDob':{'$first':'$doctorDob'},
                    'doctorMobile':{'$first':'$doctorMobile'},
                    'email':{'$first':'$login.email'},
                }
            }

          ])
        if (profile) {
            return res.status(200).json({
                success: true,
                error: false,
                details: profile
            })
        }else{
            return res.status(400).json({
                success: true,
                error: false,
                message: "No data found"
            }) 
        }
        
    } catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "something went wrong"
        })  
    }
}) 
register.get('/view-nurse-profile',checkAuth, async (req,res)=>{
try {
    const id=req.userData.loginID
    const nurseProfile = await nurseModel.aggregate ([
          {
                      '$lookup': {
                        'from': 'login_tbs', 
                        'localField': 'loginID', 
                        'foreignField': '_id', 
                        'as': 'login'
                      }
                    
                  
            
          },
          {
             '$unwind':'$login'
        
        },
        {
            '$match':{
                'loginID':new objectid(id)
            }
        },
        {
            '$group':{
                '_id':'$_id',
                'NurseName':{'$first':'$NurseName'},
                'NurseDob':{'$first':'$NurseDob'},
                'NurseMobile':{'$first':'$NurseMobile'},
                'email':{'$first':'$login.email'},  
            }
        }
         



    ])
    if (nurseProfile) {
        return res.status(200).json({
            success: true,
            error: false,
            details: nurseProfile
        })
    }else{
        return res.status(400).json({
            success: true,
            error: false,
            message: "No data found"
        }) 
    }

} catch (error) {
    return res.status(400).json({
        success: true,
        error: false,
        message: "something went wrong"
    })     
}
}) 

register.get('/view-staff-profile',checkAuth,async(req,res)=>{
try {
    const id=req.userData.loginID
    console.log(id);
    const staffProfile= await staffModel.aggregate([
        {
            
                
                  '$lookup': {
                    'from': 'login_tbs', 
                    'localField': 'loginID', 
                    'foreignField': '_id', 
                    'as': 'login'
                  }
                
              
        },
        {
            '$unwind':'$login'
        },
        {
            '$match':{
                'loginID':new objectid(id)
            }
        },
        {
            '$group':{
                '_id':'$_id',
                'staffName':{'$first':'$staffName'},
                'staffDob':{'$first':'$staffDob'},
                'staffMobile':{'$first':'$staffMobile'},
                'service':{'$first':'$service'},  
                'email':{'$first':'$login.email'},
                
            }
        }
    ])
    if(staffProfile){
        return res.status(200).json({
            success: true,
            error: false,
            details: staffProfile
        })  
    }
    else{
        return res.status(400).json({
            success: true,
            error: false,
            message: "No data found"
        }) 
    }
    
} catch (error) {
    return res.status(400).json({
        success: true,
        error: false,
        message: "something went wrong"
    })  
        
}
})

register.post('/patient', async (req, res) => {
    try {
        
        const patientdetails = {
            patientID:req.body.patientID,
            patientName:req.body.patientName,
            gender:req.body.gender,
            patientAge:req.body.patientAge,
            panchayat:req.body.panchayat,
            wardNo:req.body.wardNo,
            address:req.body.address,
            pincode:req.body.pincode,
            patientNumber:req.body.patientNumber,            
            patientSecondNumber:req.body.patientSecondNumber,            
            patientHistory:req.body.patientHistory,            
            diseaseProgress:req.body.diseaseProgress,
            presentCase:req.body.presentCase,
            patientMedicine:req.body.patientMedicine,
            consultant:req.body.consultant,
            hospital:req.body.hospital,
            caretaker:req.body.caretaker,


        }
        
        const patientview = await patientModel(patientdetails).save()
        if (patientview) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "registeration Completed"
            })
        }
        
    } catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "something went wrong"
        })  
    }
}) 


module.exports = register