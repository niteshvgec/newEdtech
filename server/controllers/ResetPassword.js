const User=require("../models/User");
const mailSender=require("../utils/mailSender");
const bcrypt=require("bcrypt")
const crypto=require("crypto");
exports.resetPasswordToken=async(req,res)=>{
    try{
        const {email}=req.body;
        const user=await User.findOne({email});
        console.log(email)
        if(!user){
            return res.json({
                success:false,
                message:'your Email is not registered with  us '
            })
        }
        const token=crypto.randomUUID();
        const updatedDetails=await User.findOneAndUpdate({email:email},{
            token:token,
            restPasswordToken:Date.now()+5*60*1000,
        },{new:true});
        const  url=`http://localhost:3000/update-password/${token}`
        await mailSender(email,"password Reset Link",`password Reset Link: ${url}`);
        return res.json({
            success:true,
            message:'email sent successfully ,pls check',
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'something went wrong in reset pwd and mail',
        })
    }
   
}
exports.resetPassword=async(req,res)=>{
    try{
    const {password,confirmPassword,token}=req.body;
    if(password!=confirmPassword){
        return res.json({
            success:false,
            message:"pwd not matching"
        })
    }
    const userDetails=await User.findOne({token:token});
    if(!userDetails){
        return res.json({
            success:false,
            message:"token is invalid",
        })
    }
    // if(!userDetails.ressetPasswordExpires<Date.now()){
    //     return res.json({
    //         success:false,
    //         message:"token is expired,pls generate token",
    //     })
    // }
    const hashedPassword=await bcrypt.hash(password,10);
    await User.findOneAndUpdate({token:token},{password:hashedPassword},{new:true},);
    return res.status(200).json({
        success:true,
        message:'password reset successfully'
    })
}catch(error){
    console.log(error);
        return res.status(500).json({
            success:false,
            message:'something went wrong in reset pwd and mail',
        })
}
}