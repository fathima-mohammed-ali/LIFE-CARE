const express = require('express')
const patient = express.Router()
const patientModel = require('../model/patientModel')
const checkupModel = require('../model/checkupModel')


patient.post('/view-patient', async (req, res) => {
    try {
        const id = req.body.patientID
        const findPatient = await patientModel.findOne({ patientID: id })
        if (findPatient) {
            return res.status(200).json({
                success: true,
                error: false,
                details: findPatient,
                message: "ID found"
            })
        }
        else {
            return res.status(404).json({
                success: true,
                error: false,
                message: "invalid ID"
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

patient.post("/checkup-update", async (req, res) => {
  try {
        const rounds ={
            patientID:req.body.patientID,
            date:req.body.date,
            bloodpressure:req.body.bloodpressure,
            pulserate:req.body.pulserate,
            oxygen:req.body.oxygen,
            presentIllness:req.body.presentIllness,
            summary:req.body.summary,
            condition:req.body.condition,
           medicine:req.body.medicine,
           appoinment:req.body.appoinment,

        }

        const checkupDetails = await checkupModel(rounds).save()
        if(checkupDetails){
            return res.status(200).json({
                success:true,
                error:false,
                message:'successfully submitted', 
                details: checkupDetails    
             })
        }
        else{
            return res.status(404).json({
                success:true,
                error:false,
                message:'submission failed'
            }) 
        }
    }
     
   catch (error) {
    return res.status(400).json({
        success:true,
        error:false,
        message:"something went wrong"
    })
  }


})

patient.post('/view-checkup-update',async(req,res)=>{
    try {
        const id = req.body.patientID
        console.log(id);
        const findPatient = await checkupModel.findOne({ patientID: id })
        if (findPatient) {
            return res.status(200).json({
                success: true,
                error: false,
                details: findPatient,
                message: "ID found"
            })
        }
        else {
            return res.status(404).json({
                success: true,
                error: false,
                message: "invalid ID"
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

   

patient.post('/updated-medicine', async (req, res) => {
    try {
        const addMedicine = {
            id: req.body._id,
            patientMedicine: req.body.patientMedicine,
        }
        const newMedicine= await patientModel.updateOne({ id: req.body._id }, { $set: addMedicine })
        console.log(newMedicine);
        if (newMedicine.modifiedCount == 1) {
            return res.status(200).json({
                success:true,
                error:false,
                message:"Medicine is updated"
            })

        }
    } catch (error) {
         return res.status(400).json({
            success:true,
            error:false,
            message:"something went wrong"
         })
    }
})




module.exports = patient