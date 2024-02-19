const User=require("../models/User");
const OTP=require("../models/OTP");
const otpGenerator=require("otp-generator");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const Profile=require("../models/Profile")
const mailSender=require("../utils/mailSender");
require("dotenv").config();
exports.sendOTP=async(req,res)=>{
    try{
        const {email}=req.body;
        const checkUserPresent=await User.findOne({email});
        if(checkUserPresent){
            return res.status,(401).json({
                success:false,
                message:"user already exist",
    
            })
        }
const otp=otpGenerator.generate(6,{
    upperCaseAlphabets: false, 
    specialChars: false,
    lowerCaseAlphabets:false
})
console.log("your otp ",otp);
const result=await OTP.findOne({otp:otp});
while(result){
    otp=otpGenerator(6,{
        upperCaseAlphabet:false,
        lowerCaseAlphabet:false,
        specialChars:false,
    })
    result=await OTP.findOne({otp:otp});
}
const otpPayload={email,otp};
const otpBody=await OTP.create(otpPayload);

console.log(otpBody);
res.status(200).json({
    success:true,
    message:'otp sent successfully',
    otp,
})




    }catch(error){
console.log(error);
return res.status(500).json({
    success:false,
    message:error .message,
})


    }

  
}
exports.signup=async(req,res)=>{
    try{
const {firstName,lastName,email,password,confirmPassword,accountType,contactNumber,otp,}=req.body;

if(!firstName||!lastName||!email||!password||!confirmPassword||!otp){
    return res.status(403).json({
        success:false,
        message:"fill all fields"
    })
}
if(password!==confirmPassword){
    return res.status(400).json({
success:false,
message:"password and confirm password",
    })
}
const existingUser=await User.findOne({email});
if(existingUser){
    return res.status(400).json({
        success:false,
        message:"user is already registered"
    })
}
const recentOtp=await OTP.find({email}).sort({createdAt:-1}).limit(1);

console.log(recentOtp);
// if(recentOtp.length==0){
//     return res.status(400).json({
// success:false,
// message:"otp found"
//     })
// }
//else if(otp!==recentOtp.otp){
//     return res.status(400).json({
//         success:false,
//         message:"Invalid OTP",
//     });
// }




const hashedPassword=await bcrypt.hash(password,10);
const profileDetails=await Profile.create({
    gender:null,
    dateOfBirth:null,
    about:null,
    contactNumber:null,
})

const user=await User.create({
    firstName,lastName,email,contactNumber,password:hashedPassword,accountType,additionalDetails:profileDetails._id,
    image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`


})
return res.status(200).json({
    success:true,
    user,
    message:'user is registered successfully', 
    
})


    }
    catch(error){
console.log(error);
return res.status(500).json({
    success:false,
    message:error.message,
})
    }
}
exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;

if(!email||!password){
    return res.status(400).json({
        success:false,
        message:"you email and password",
    })
}
const user = await User.findOne({email}).populate("additionalDetails"); 
console.log(password);
// console.log(user.password);
        // const user=await User.findOne({email});
        if(!user){
return res.status(400).json({
    success:false,
    message:"you entered the wrong email"
})
        }
        console.log(user.password);
        // const user=await User.findOne({password});
        // console.log(user);
        // if(!user){
        //     return res.status(400).json({
        //         success:false,
        //         message:"you entered the wrong password"
        //     })
        // }
        if(await bcrypt.compare(password,user.password)){
            console.log("succced untill here1")

            const payload={
                email:user.email,
                id:user._id,
                accountType:user.accountType,
            }
            console.log("succced untill here2")
const token=jwt.sign(payload,process.env.JWT_SECRET,{
    expiresIn:"2h",
});

user.token=token;
// user.password=undefined;
const options={
    expires:new Date(Date.now()+3*24*60*60*1000)
}
res.cookie("token",token,options).status(200).json({
    success:true,
    token,
    user,
    message:"logged in successfully",
})

        }else{
            return res.status(401).json({
                success:false,
                message:'password in incorrect',
            })
        }
     

       
    }catch(error){
console.log(error);
return res.status(500).json({
    success:false,
    message:"login failure ,pls try again",
})
    }
}


// exports.changePassword=async(req,res)=>{


// try{
//     console.log("hello i am in changepassword1")
//     // console.log("your all values",newPassword);

//         const {oldPassword,newPassword,confirmPassword}=req.body;
   
   
//     console.log("hello i am in changepassword2")
//     console.log("your all values",newPassword);

//     const userDetails = await User.findById(req.user.id)
//     console.log("hello i am in changepassword3")
//     const isPasswordMatch = await bcrypt.compare(oldPassword, userDetails.password );   
//     if(!isPasswordMatch){
//         console.log("password match error")
//     }
//     console.log("hello i am in changepassword4")
//     // const newuser=await User.findOne({email});
//     // if(!newuser){
//     //     return res.status(400).json({
//     //         success:false,
//     //         message:"invalid email",
//     //     })
//     // }
//     // const user=await User.findOne({password});
    
//     // if(!user){
//     //     return res.status(400).json({
//     //         success:false,
//     //         message:"wrong old password",
//     //     })
//     // }
//     if(newPassword!==confirmPassword){
//         return res.status(400).json({
//             success:false,
//             message:"wrong confirm password",
//         })
//     }
//     const encryptedPassword = await bcrypt.hash(newPassword, 10);   
//     const updatedUserDetails=await User.findByIdAndUpdate(req.user.id,{password:encryptedPassword},{new:true});
    
//     console.log("you reached here");
//     return res.status(200).json({
//         success:true,
//         message:'password successfully', 
        
//     })
    
  
// // try {                                                          // Send notification email , here passwordUpdated is template of email which is send to user;
// //     const emailResponse = await mailSender(updatedUserDetails.email, passwordUpdated(updatedUserDetails.email, `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`));
// //     console.log("Email sent successfully:", emailResponse.response);
// //    } 
// // catch(error) {
// //     return res.status(500).json({
// //         success: false,
// //         message: "Error occurred while sending email",
// //         error: error.message,
// //     });
// // }

// // return res.status(200).json({ success: true, message: "Password updated successfully" });       

// }
// catch(error){
//     res.status(400).json({
//         success:false,
//         message:"password change failure",
//         error:error.message
//     })
// }
   
// }
exports.changePassword = async (req, res) => {
    try {
      // Get user data from req.user
      const userDetails = await User.findById(req.user.id)
  
      // Get old password, new password, and confirm new password from req.body
      const { oldPassword, newPassword } = req.body
  
      // Validate old password
      const isPasswordMatch = await bcrypt.compare(
        oldPassword,
        userDetails.password
      )
      if (!isPasswordMatch) {
        // If old password does not match, return a 401 (Unauthorized) error
        return res
          .status(401)
          .json({ success: false, message: "The password is incorrect" })
      }
  
      // Update password
      const encryptedPassword = await bcrypt.hash(newPassword, 10)
      const updatedUserDetails = await User.findByIdAndUpdate(
        req.user.id,
        { password: encryptedPassword },
        { new: true }
      )
  
      // Send notification email
    //   try {
    //     const emailResponse = await mailSender(
    //       updatedUserDetails.email,
    //       "Password for your account has been updated",
    //       passwordUpdated(
    //         updatedUserDetails.email,
    //         `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
    //       )
    //     )
    //     console.log("Email sent successfully:", emailResponse.response)
    //   } catch (error) {
    //     // If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
    //     console.error("Error occurred while sending email:", error)
    //     return res.status(500).json({
    //       success: false,
    //       message: "Error occurred while sending email",
    //       error: error.message,
    //     })
    //   }
  
      // Return success response
      return res
        .status(200)
        .json({ success: true, message: "Password updated successfully" })
    } catch (error) {
      // If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
      console.error("Error occurred while updating password:", error)
      return res.status(500).json({
        success: false,
        message: "Error occurred while updating password",
        error: error.message,
      })
    }
  }

