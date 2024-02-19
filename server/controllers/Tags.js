const Tag=require("../models/tags");
exports.createTag=async(req,res)=>{
    try{
const {name,description}=req.body;
if(!name||!description){
    return res.status(400).json({
        success:false,
        message:"all fields are required",
    })
}
const tagDetails=await Tag.create({
    name:name,
    description:description,
})
console.log(tagDetails);
 return res.status(200).json({
    success:true,
    messsage:"tag created successfully",
 })


    }catch(error){
return res.status(500).json({
    success:false,
    messsage:"there is some error in tag",
})


    }
}
exports.showAlltags=async(req,res)=>{
    try{
        const allTags=await Tag.find({},{name:true,description:true});
        return res.status(200).json({
            success:true,
            message:"all tags returned successfully",
            allTags,
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            messsage:error.message,
        })
        
        
            }
}