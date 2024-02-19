const express = require("express")
const router = express.Router()
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")
const {
  showAllCategories,
  createCategory,
  categoryPageDetails,
} = require("../controllers/Category")
const{createSection,updateSection,deleteSection}=require("../controllers/Section")
const {updateCourseProgress } = require("../controllers/courseProgress");

const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse,
} = require("../controllers/Course")
// const {
//   createCourse,
//   getAllCourses,
//   getCourseDetails,
//   getFullCourseDetails,
//   editCourse,
//   getInstructorCourses,
//   deleteCourse,
//   showAllCourses,
// } = require("../controllers/Course")

const {createSubSection,updateSubSection,deleteSubSection}=require("../controllers/Subsection");
// router.get("/showAllCategory",auth,showAllCategories)
router.post("/createCategory",auth,isAdmin,createCategory)
router.post("/createCourse",auth,isInstructor,createCourse)
router.post("/getFullCourseDetails", auth, getFullCourseDetails)


router.post("/getCategoryPageDetails", categoryPageDetails)

// router.get("/showAllCourses",auth,showAllCourses)
// router.delete("/deleteSection",auth,isInstructor,deleteSection)
// router.post("/createSection",createSection)
// router.update("/updateSection",updateSection)
// router.post("/updateSection", auth, isInstructor, updateSection)
// router.post("/updateSubSection",auth,isInstructor,updateSubSection)
// router.post("/createSubSection",createSubSection);
// router.delete("/deleteSubSection",auth,isInstructor,deleteSubSection)
// router.get("/getCourseDetails",auth,getCourseDetails)
router.get("/showAllCategories", showAllCategories)
router.delete("/deleteCourse", deleteCourse)   
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses)        

router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);

router.post("/editCourse", auth, isInstructor, editCourse)   
router.post("/addSection", auth, isInstructor, createSection)                            //Add a Section to a Course
router.post("/updateSection", auth, isInstructor, updateSection)                         // Update a Section
router.post("/deleteSection", auth, isInstructor, deleteSection)                         // Delete a Section
router.post("/updateSubSection", auth, isInstructor, updateSubSection)                   // Edit Sub Section
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection)
router.post("/addSubSection", auth, isInstructor, createSubSection)
router.get("/getAllCourses", getAllCourses)                                               // Get all Registered Courses
router.post("/getCourseDetails", getCourseDetails)    
//  router.post("/auth",auth)
//  router.post("/createCategory", auth, isAdmin, createCategory)
// router.get("/showAllCategories", showAllCategories)
// router.post("/getCategoryPageDetails", categoryPageDetails)




 module.exports=router;