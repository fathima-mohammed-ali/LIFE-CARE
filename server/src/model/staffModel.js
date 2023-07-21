const mongoose= require('mongoose')
const schema= mongoose.Schema
const staffRegisterSchema = new schema({
    loginID:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    staffName:{type:String},
    gender:{type:String},
    staffDob:{type:String},
    staffMobile:{type:String},
    service:{type:String},
    image:{type:String}
})

const staffModel=mongoose.model('staffRegister_tb',staffRegisterSchema)
module.exports =staffModel