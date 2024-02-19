const express=require("express");
const router=express.Router();
const{auth}=require("../middlewares/auth");
const{deleteAccount,updateProfile, updateDisplayPicture,getAllUserDetails}=require("../controllers/Profile")
// const{updateProfile}=("../controllers/Profile");
router.delete("/deleteProfile", auth, deleteAccount)
// const{updateProfile}=("../controllers/Profile");
router.put("/updateProfile",auth,updateProfile)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
router.put("/getAllUserDetails",auth,getAllUserDetails)
module.exports=router