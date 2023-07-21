const express = require('express')
const app = express ()
const mongoose= require ('mongoose')
const bodyparser = require('body-parser')
const doctor = require('./src/router/RegisterRouter')
const login = require('./src/router/loginRouter')
const register = require('./src/router/RegisterRouter')
const patient = require('./src/router/PatientRegister')
const medicalequipment = require('./src/router/medicalequipment')



app.use(bodyparser())
// app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/register',register)
app.use('/login',login)
app.use('/patient',patient)
app.use('/medicalequipment',medicalequipment)

const MONGODB_URL = 'mongodb+srv://fathimama104:fathimama104@cluster0.gctkblr.mongodb.net/lifecare?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URL).then(()=>{
    app.listen(4000, () => {
        console.log('server is running on http://localhost:4000')
})

})
