const mongoose =require ('mongoose')
const schema = mongoose.Schema
const medicalequipmentSchema = new schema ({
    name:{type:String},
    manufacturer:{type:String},
    description:{type:String},
    availability:{type:String},
    service:{type:String},
})

const medicalModel= mongoose.model('medicalequipments_tb',medicalequipmentSchema)
module.exports = medicalModel
