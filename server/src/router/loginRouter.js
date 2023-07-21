const express= require ('express')
const loginModel = require('../model/loginModel')
const doctorModel = require('../model/doctorModel')
var bcrypt = require('bcryptjs');
const nurseModel = require('../model/nurseModel');
const login= express.Router()
const jwt= require('jsonwebtoken');
const staffModel = require('../model/staffModel');
login.post('/login', async(req,res)=>{
    try {
      const { email, password } = req.body   
      console.log("body",req.body.email);
              if (email && password) {              
                  const oldEmail = await loginModel.findOne({ email })  
                  if (!oldEmail) return res.status(400).json({ success: false, error: true, message: "the email is not exist" })
                  const isPasswordCorrect = await bcrypt.compare(password, oldEmail.password) 
                  console.log(oldEmail);             
                  if (!isPasswordCorrect) return res.status(400).json({ success: false, error: true, message: "Incorrect Password" })   
                  if(oldEmail.role=="doctor")
                  {
                     const doctorData = await doctorModel.findOne({ loginID: oldEmail._id }) 
                     const token= jwt.sign({role:oldEmail.role, loginid: oldEmail._id, doctorId:doctorData._id, doctorName: doctorData.doctorName},
                        "unknown",{expiresIn:"1h"} )       
                     return res.status(200).json({ success: true, error: false,token:token,role:oldEmail.role, loginid: oldEmail._id, doctorId:doctorData._id, doctorName: doctorData.doctorName })
                  }
                  if(oldEmail.role=="nurse")
                  {
                     const nurseData = await nurseModel.findOne({ loginID: oldEmail._id })   
                     const token= jwt.sign({role:oldEmail.role, loginid: oldEmail._id, nurseId:nurseData._id, nurseName: nurseData.NurseName},
                       "unknown",{expiresIn:"1h"} )   
                     return res.status(200).json({ success: true, error: false,token:token,role:oldEmail.role, loginid: oldEmail._id, nurseId:nurseData._id, nurseName: nurseData.NurseName })
                  }
                  if(oldEmail.role=="staff")
                  {
                     const staffData = await staffModel.findOne({ loginID: oldEmail._id }) 
                     const token= jwt.sign({role:oldEmail.role, loginid: oldEmail._id, staffId:staffData._id, staffName: staffData.staffName},
                        "unknown",{expiresIn:"1h"} )        
                     return res.status(200).json({ success: true, error: false,token:token,role:oldEmail.role, loginid: oldEmail._id, staffId:staffData._id, staffName: staffData.staffName })
                  }
                 
                 
              }
              else{
                  return res.status(404).json({ success: false, error: true, message: "all fields are required" }) // after checking through yhe table login model if the email entered not found it will a show a error.
      
              }
        
               
               }
               
               catch (error) {
                  return res.status(400).json({
                     success: true,
                     error: false,
                     message: "something went wrong"
                 })
              }
           })


module.exports = login