const mongoose= require('mongoose')
const schema= mongoose.Schema
const doctorRegisterSchema = new schema({
    loginID:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    doctorName:{type:String},
    gender:{type:String},
    doctorDob:{type:String},
    doctorMobile:{type:String},
    image:{type:String}
})

const doctorModel=mongoose.model('doctorRegister_tb',doctorRegisterSchema)
module.exports =doctorModel