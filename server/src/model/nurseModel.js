const mongoose= require('mongoose')
const schema= mongoose.Schema
const nurseRegisterSchema = new schema({
    loginID:{type:mongoose.Types.ObjectId,ref:"login_tb"},
        NurseName:{type:String},
        gender:{type:String},
        NurseDob:{type:String},
        NurseMobile:{type:String},
        image:{type:String}
       
})
const nurseModel=mongoose.model('nurseRegister_tb',nurseRegisterSchema)
module.exports =nurseModel
