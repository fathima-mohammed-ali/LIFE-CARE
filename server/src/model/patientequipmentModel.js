const mongoose= require ('mongoose')
const schema = mongoose.Schema
const patientequipmentSchema = new schema({
    patientID:{type:String},
    patientName:{type:String},
    dateTaken:{type:String},
    dateReturned:{type:String},
})
const patientequipmentModel=mongoose.model('patientequipment_tb',patientequipmentSchema)
module.exports =patientequipmentModel
