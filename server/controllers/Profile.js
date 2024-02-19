const Profile=require("../models/Profile");
const User=require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader")
// const {uploadImageToCloudinar}=require("..utils")
const mongoose = require("mongoose")
const { convertSecondsToDuration } = require("../utils/secToDuration");
const Course = require("../models/Course");


exports.updateProfile=async(req,res)=>{
    try{

console.log("i  reached in update profile")
        const {dateOfBirth="",about="",contactNumber,gender}=req.body;
        const id=req.user.id;
        if(!contactNumber||!gender||!id){
            return res.status(400).json({
                success:false,
                message:"all fiels are required",
            })
        }
        if(!id){
            console.log("id not foundn from user")
        }else{
            console.log("is also found");
        }


        const userDetails=await User.findById({_id:id}); 
        const profileDetails=await Profile.findById(userDetails.additionalDetails);
        // const profileDetails=await Profile.findById({_id:profileId});

        profileDetails.dateOfBirth=dateOfBirth;
        profileDetails.about=about;

        profileDetails.gender=gender;

        profileDetails.contactNumber=contactNumber;

        await profileDetails.save();


        const updatedUserDetails = await User.findById(id).populate("additionalDetails").exec()
        return res.status(200).json({
            success:true,
            message:"profile deatails updated successfully",
            updatedUserDetails,
        })


    }catch(error){

        return res.status(500).json({
            success:false,
            message:"unable to create msg",
            error:error.message,
        
        })

    }
}
exports.updateDisplayPicture = async (req, res) => {
    try {
        console.log("hello i am in update DP")
      const displayPicture = req.files.displayPicture
      const userId = req.user.id
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
    //   console.log(image)
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }
// delete function
exports.deleteAccount=async(req,res)=>{
    try{
        console.log(req.user.id)
const id=req.user.id;

const userDetails=await User.findById({_id:id});
if(!userDetails){
    return res.status(404).json({
        success:false,
        message:"user not found",
    })
}
console.log("hello 1")
await Profile.findByIdAndDelete({_id:userDetails.additionalDetails});
console.log("hello 2")
await User.findByIdAndDelete({_id:id});
console.log("hello 3")
// .hw:unenroll user from user waht is crone job
return res.status(200).json({
    success:true,
    // message:error.message,
    message:"User Deleted Successfully",
})
    }catch(error){
return res.status(500).json({
    success:false,
error:error.message,
    message:"user cannot be deleted successfully",
})
    }
}
exports.getAllUserDetails=async(req,res)=>{
    try{
const id=req.user.id;
console.log(id);
const user2=await User.findById(id)
.populate("additionalDetails").exec();
console.log(user2);
return res.status(200).json({
    success:true,
    message:"your all userdetails",
    user2
})


    }catch(error){
        return res.status(500).json({
            success:false,
            error:error.message,
            message:"cannot get all details about this course",
        }) 
    }
}
exports.intructorDashboard=async(req,res)=>{
    try{

const courseDetails=await Course.find({instructor:req.user.id});
const  courseData =courseDetails.map((course)=>{
    const totalStudentEnrolled=course.studentsEnrolled.length;
    const totalAmountGenerated=totalStudentEnrolled*course.price;

    const courseDataWithStats={
        _id:course._id,
        courseName:course.courseName,
        courseDescription:course.courseDescription,
        totalStudentEnrolled,
        totalAmountGenerated,
    }
    return courseDataWithStats;
})

res.status(200).json({courses:courseData});

    }
    catch(error){
console.error(error);
res.status(500).json({message:"Internal Server Error"})
    }
}