const express =require('express')
const medicalModel = require('../model/medicalModel')
const patientequipmentModel = require('../model/patientequipmentModel')
const medicalequipment = express.Router()

medicalequipment.post('/table', async(req,res)=>{
    try {
        const medtable ={
            name:req.body.name,
            manufacturer:req.body.manufacturer,
            description:req.body.description,
            availability:req.body.availability,
            service:req.body.service,
        } 
        const savetable= await medicalModel(medtable).save()
        if (savetable) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "data's added successfully"
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
medicalequipment.post('/patient-equipment',async(req,res)=>{
    try {
        const patientInNeed={
            patientID:req.body.patientID,
            patientName:req.body.patientName,
            dateTaken:req.body.dateTaken,
            dateReturned:req.body.dateReturned,
        }
        const patienttablesave= await patientequipmentModel(patientInNeed).save()
        if (patienttablesave) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "data's added successfully"
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
medicalequipment.post('/addtable',async(req,res)=>{
    try {
        const addtable={
            name:req.body.name,
            manufacturer:req.body.manufacturer,
            description:req.body.description,
            availability:req.body.availability,
            service:req.body.service,  
        }
        const saveNewtable = await medicalModel(addtable).save()
        if(saveNewtable){
            return res.status(200).json({
                success:true,
                error:false,
                message:"new table added"
            })
        }
        else{
            return res.status(400).json({
                success:true,
                error:false,
                message:"table is cancelled"
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
module.exports = medicalequipment