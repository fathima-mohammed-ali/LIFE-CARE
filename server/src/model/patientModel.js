const mongoose= require('mongoose')
const schema= mongoose.Schema
const patientRegisterSchema = new schema({
    patientID:{type:String},
    patientName:{type:String},
    gender:{type:String},
    patientAge:{type:String},
    panchayat:{type:String},
    wardNo:{type:String},
    address:{type:String},
    pincode:{type:String},
    patientNumber:{type:String},
    patientSecondNumber:{type:String},
    patientHistory:{type:String},
    diseaseProgress:{type:String},
    presentCase:{type:String},
    patientMedicine:{type:String},
    consultant:{type:String},
    hospital:{type:String},
    caretaker:{type:String},
    
})

const patientModel=mongoose.model('patientRegister_tb',patientRegisterSchema)
module.exports =patientModel