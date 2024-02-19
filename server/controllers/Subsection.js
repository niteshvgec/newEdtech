 const SubSection=require("../models/SubSection");
 const Section=require("../models/Section");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const { findByIdAndUpdate } = require("../models/Profile");

exports.createSubSection = async (req, res) => {
    try {
      const { sectionId, title, description } = req.body                 // Extract necessary information from the request body
      const video = req.files.video
       
      if(!sectionId || !title || !description || !video){               // Check if all necessary fields are provided
        return res.status(404).json({ success: false, message: "All Fields are Required" })  
      }
     
      // Upload the video file to Cloudinary
      const uploadDetails = await uploadImageToCloudinary(video,  process.env.FOLDER_NAME )
    
      // Create a new sub-section with the necessary information in DB;
      const SubSectionDetails = await SubSection.create({
        title: title,
        timeDuration: `${uploadDetails.duration}`,
        description: description,
        videoUrl: uploadDetails.secure_url,
      })
  
      // Update the corresponding section with the newly created sub-section
      const updatedSection = await Section.findByIdAndUpdate({ _id: sectionId },  {$push: { subSection: SubSectionDetails._id }}, {new: true}).populate("subSection")

      return res.status(200).json({ success: true, data: updatedSection })             // Return the updated section in the response
    }
     catch (error){                                                   // Handle any errors that may occur during the process
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }
  

  exports.updateSubSection = async (req, res) => {
    try {
      const { sectionId,subSectionId, title, description } = req.body
      const subSection = await SubSection.findById(subSectionId)
  
      if(!subSection){
        return res.status(404).json({success: false,  message: "SubSection not found", })
      }
  
      if(title !== undefined){
        subSection.title = title
      }
  
      if(description !== undefined){
        subSection.description = description
      }

      if(req.files && req.files.video !== undefined){
        const video = req.files.video
        const uploadDetails = await uploadImageToCloudinary( video, process.env.FOLDER_NAME )
        subSection.videoUrl = uploadDetails.secure_url
        subSection.timeDuration = `${uploadDetails.duration}`
      }
  
      await subSection.save()
      const updatedSection = await Section.findById(sectionId).populate("subSection")

      return res.json({
        success: true,
        data:updatedSection,
        message: "Section updated successfully",
      })
    }
     catch(error){
      return res.status(500).json({
        success: false,
        message: "An error occurred while updating the section",
      })
    }
  }
  

  exports.deleteSubSection = async (req, res) => {
    try {
      const { subSectionId, sectionId } = req.body
      await Section.findByIdAndUpdate( { _id: sectionId },  {$pull: {subSection: subSectionId,},} )
      
      const subSection = await SubSection.findByIdAndDelete({ _id: subSectionId })
  
      if(!subSection){
        return res.status(404).json({ success: false, message: "SubSection not found" })
      }

      const updatedSection = await Section.findById(sectionId).populate("subSection")
  
      return res.json({
        success: true,
        data:updatedSection,
        message: "SubSection deleted successfully",
      })
    }
     catch(error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "An error occurred while deleting the SubSection",
      })
    }
  }







//  exports.createSubSection=async(req,res)=>{
//     try{

//         const {sectionId,title,timeDuration,description}=req.body;
//         const video = req.files.video
//         if(!sectionId||!title||!timeDuration||!description){
//             return res.status(400).json({
//                 success:false,
//                 message:"missing Properties"
//         })
//     }

//     const uploadDetails=await uploadImageToCloudinary(video,process.env.FOLDER_NAME);
//     const subSectionDetails=await SubSection.create({
//         title:title,
//         timeDuration:timeDuration,
//         description:description,
//         videoUrl:uploadDetails.secure_url,

//     })

//     const  updatedSection=await Section.findByIdAndUpdate({_id:sectionId},{$push :{subSection:subSectionDetails._id}},{new:true})
//     .populate("subSection")


//     return res.status(200).json({
//         success:true,
//         message:"sub section Created Successfully",
//         updatedSection,
//     })
// }
//     catch(error){

//  return res.status(500).json({
//             success:false,
//             message:"unable to create msg",
//             error:error.message,
        
//         })
//     }
//  }
//  exports.updateSubSection=async(req,res)=>{
// try{
//     const {subSectionId,title,timeDuration,description}=req.body;

//     if(!subSectionId||!title||!timeDuration||!description){
//         return res.status(400).json({
//             success:false,
//             message:"missing Properties"
//     })
// }
// const subSectionDetails=await SubSection.create({
//     title:title,
//     timeDuration:timeDuration,
//     description:description,
//     // videoUrl:subSectionDetails.secure_url,

// })

// const  updatedSection=await Section.findByIdAndUpdate({_id:subSectionId},{$push :{subSection:subSectionDetails._id}},{new:true})
// .populate("subSection")


// return res.status(200).json({
//     success:true,
//     message:"sub section Created Successfully",
//     updatedSection,
// })
// }
// catch(error){

// return res.status(500).json({
//         success:false,
//         message:"unable to create msg",
//         error:error.message,
    
//     })
// }



//  }
//  exports.deleteSubSection=async(req,res)=>{
//     try{
//     const {subSectionId}=req.body;
// console.log(subSectionId)

//   const delete1=await SubSection.findByIdAndDelete(subSectionId);
// if(!delete1){
//     return res.status(400).json({
//         success:false,
//         message:"subsection id is not given"
//     })
// }

// return res.status(200).json({
//     success:true,
//     message:"Section Deleted successfully"
// })

//     }catch(error){
//         return res.status(500).json({
//             success:false,
//             message:"unable to create msg",
//             error:error.message,
        
//         })
//     }
//  }
// //  update section id  and delete section id