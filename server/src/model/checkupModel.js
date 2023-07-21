const mongoose= require('mongoose')
const schema= mongoose.Schema
const checkupSchema = new schema({
    patientID:{type:String},
    date:{type:String},
    bloodpressure:{type:String},
    pulserate:{type:String},
    oxygen:{type:String},
    presentIllness:{type:String},
    summary:{type:String},
    condition:{type:String},
   medicine:{type:String},
   appoinment:{type:String},

})

const checkupModel=mongoose.model('checkup_tb',checkupSchema)
module.exports =checkupModel