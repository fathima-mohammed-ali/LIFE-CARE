const jwt= require('jsonwebtoken');
module.exports=(req,res,next)=>{
    try {
        
        const token= req.headers.authorization.split(" ")[1];
        const decodeToken =jwt.verify(token,"unknown");
        req.userData={loginID:decodeToken.loginid,username:decodeToken.doctorName,Dob:decodeToken.doctorDob,Mobile:decodeToken.doctorMobile}
        next();
        
    } catch (error) {
        res.status(401).json({message:"Auth failed!"});
        
    }
}