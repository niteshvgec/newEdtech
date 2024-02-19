import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setCourse } from "../../../../slices/courseSlice";
import {RxCross2} from "react-icons/rx"
import Upload from "../../Upload";
import IconBtn from "../../../../common/IconBtn";
import { updateSubSection } from "../../../../services/courseDetailsAPI";
import { createSubSection } from "../../../../services/courseDetailsAPI";

import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// import Upload from "../../Upload";


export default function SubSectionModal({modalData, setModalData, add = false, view = false, edit = false,}) {
 
    const {register,  handleSubmit,  setValue, formState: { errors },  getValues, } = useForm()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const { token } = useSelector((state) => state.auth)
    const { course } = useSelector((state) => state.course)
  
    useEffect(() => {
      if(view || edit){
        setValue("lectureTitle", modalData.title)
        setValue("lectureDesc", modalData.description)
        setValue("lectureVideo", modalData.videoUrl)
      }
    }, [])
  
    //detect whether form is updated or not
    const isFormUpdated = () => {
      const currentValues = getValues()
      if (
        currentValues.lectureTitle !== modalData.title ||
        currentValues.lectureDesc !== modalData.description ||
        currentValues.lectureVideo !== modalData.videoUrl
      ) {
        return true
      }
      return false
    }
  
    // handle the editing of subsection
    const handleEditSubsection = async () => {
      const currentValues = getValues()
      const formData = new FormData()
      formData.append("sectionId", modalData.sectionId)
      formData.append("subSectionId", modalData._id)
      if(currentValues.lectureTitle !== modalData.title) {
        formData.append("title", currentValues.lectureTitle)
      }
      if(currentValues.lectureDesc !== modalData.description) {
        formData.append("description", currentValues.lectureDesc)
      }
      if(currentValues.lectureVideo !== modalData.videoUrl) {
        formData.append("video", currentValues.lectureVideo)
      }
      setLoading(true)
      const result = await updateSubSection(formData, token)
      if(result) {
        // update the structure of course
        const updatedCourseContent = course.courseContent.map((section) =>  section._id === modalData.sectionId ? result : section )
        const updatedCourse = { ...course, courseContent: updatedCourseContent }
        dispatch(setCourse(updatedCourse))
      }
      setModalData(null)
      setLoading(false)
    }
  
    const onSubmit = async (data) => {
      
      if(view) return
      if(edit){
        if(!isFormUpdated()) {
          toast.error("No changes made to the form")
        } else {
          handleEditSubsection()
        }
        return
      }
  
      const formData = new FormData()
      formData.append("sectionId", modalData)
      formData.append("title", data.lectureTitle)
      formData.append("description", data.lectureDesc)
      formData.append("video", data.lectureVideo)
      setLoading(true)
      const result = await createSubSection(formData, token)
      if(result) {                                         // update the structure of course
        const updatedCourseContent = course.courseContent.map((section) => section._id === modalData ? result : section )
        const updatedCourse = { ...course, courseContent: updatedCourseContent }
        dispatch(setCourse(updatedCourse))
      }
      setModalData(null)
      setLoading(false)
    }
  
  
    return (
      <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800">
       
         {/* Modal Header */}
          <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
            <p className="text-xl font-semibold text-richblack-5">
              {view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lecture
            </p>
            <button onClick={() => (!loading ? setModalData(null) : {})}>
              <RxCross2 className="text-2xl text-richblack-5" />
            </button>
          </div>
         
          {/* Modal Form */}
          <form onSubmit={handleSubmit(onSubmit)}  className="space-y-8 px-8 py-10" >
                                                                                                                {/* Lecture Video Upload */}
            <Upload name="lectureVideo"  label="Lecture Video" register={register} setValue={setValue} errors={errors} video={true} viewData={view ? modalData.videoUrl : null}  editData={edit ? modalData.videoUrl : null}  />            
          
            <div className="flex flex-col space-y-2">                                                           {/* Lecture Title */}
              <label className="text-sm text-richblack-5" htmlFor="lectureTitle">
                Lecture Title {!view && <sup className="text-pink-200">*</sup>}
              </label>
              <input disabled={view || loading} id = "lectureTitle" placeholder = "Enter Lecture Title"  {...register("lectureTitle", { required: true })}  className="form-style w-full border-b-2 border-white rounded-md  bg-richblack-700" />
              {errors.lectureTitle && (<span className="ml-2 text-xs tracking-wide text-pink-200"> Lecture title is required </span> )}
            </div>
          
            {/* Lecture Description */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-richblack-5" htmlFor="lectureDesc">
                Lecture Description{" "}
                {!view && <sup className="text-pink-200">*</sup>}
              </label>
              <textarea disabled={view || loading}  id="lectureDesc"  placeholder="Enter Lecture Description" {...register("lectureDesc", { required: true })}  className="form-style resize-x-none min-h-[130px] w-full border-b-2 border-white rounded-md  bg-richblack-700"  />
              {errors.lectureDesc && (<span className="ml-2 text-xs tracking-wide text-pink-200">  Lecture Description is required </span> )}
            </div>
         
            {!view && (
              <div className="flex justify-end">
                <IconBtn disabled={loading}  text={loading ? "Loading.." : edit ? "Save Changes" : "Save"} />
              </div>
            )}
  
          </form>
       
        </div>
      </div>
    
  
  )}
//  const SubSectionModal=({modalData,setModalData,add=false,
// view=false,
// edit=false,})=>{
//     const {
//         register,handleSubmit,setValue,formState:{errors},getValues,

//     }=userForm();
//     const[loading,setLoading]=useState(false);
//     const{course}=useSelector((state)=>state.course);
//     const {token}=useSelector((state)=>state.auth);

//     useEffect(()=>{
//         if(view ||edit){
//             setValue("LectureTitle",modalData.title);
//             setValue("LectureDesc",modalData.description);
//             setValue("LectureVideo",modalData.videoUrl);
//         }
//     },[]);
//     const isFormUpdated=()=>{
//         const currentValues=getValues();
//         if(currentValues.lectureTitle!==modalData.title
//              ||currentValues.LectureDesc!== modalData.description
//               ||currentValues.lectureVideo!==modalData.videoUrl){
// return true;
//         }
//         else{
//             return false;
//         }
//     }
//     const handleEditSubSection=async()=>{

//         const currentValues=getValues();
//         const formData =new FormData();
//         formData.append("sectionId",modalData.sectionId);
//         formData.append("subsectionId",modalData._id);
//         if(currentValues.lectureTitle!==modalData.title){
//             formData.append("title",currentValues.lecturesTitle);
//         }
//         if(currentValues.lectureDesc!==modalData.description){
//             formData.append("title",currentValues.lecturesTitle);
//         }
//         if(currentValues.lectureVideo!==modalData.videoUrl){
//             formData.append("title",currentValues.lecturesTitle);
//         }
//         setLoading(true);
//         const result= await updateSubSection(formData,token);
//         if(result){
//             dispatch(setCourse(result));
//         }
//         setModalData(null);
//         setLoading(false);
        
//     }
//     const onSubmit =async(data)=>{
//         if(view){
//             return;
//         }
//         if(edit){
//             if(!isFormUpdated){
//                 toast.error("No changes made to the form")
//             }else{
//                 handleEditSubSection();
//             }
//             return;
//         }
//         const formData=new formData();
//         formData.append("sectionId",modalData);
//         formData.append("title",data.lectureTitle);
//         formData.append("description",data.lectureDesc);
//         formData.append("video",data.lectureVideo);
//         setLoading(true);
//         const result=await createSubSection(formData,token);
//         if(result){
//             dispatch(setCourse(result));

//         }
// setModalData(null);
// setLoading(false);

//     }
//     return(
//         <div>

// <div>
//     <div>
//         <p>{view && "viewing"}{add && "Adding"} {edit && "Editing"}Lecture</p>
//         <button onAbort={()=>(!loading ? setModalData(null):{})}><RxCross1></RxCross1></button>
//     </div>
// <form onSubmit={handleSubmit(onSubmit)}>
// <Upload
// name="LectureVideo"
// label="Lecture Video"
// register={register}
// setValue={setValue}
// errors={errors}
// video={true}
// viewData={view ?modalData.videoUrl:null}
// editData={edit ?modalData.videoUrl:null}></Upload>

// <div>
//     <label>Lecture Title</label>
//     <input id="LectureTitle"
//     placeholder="Enter Lecture" 
//     {...register("LectureTitle",{required:true})} className="w-full"></input>
//     {
//         errors.lectureTitle &&(
//             <span>Lecture Title is required</span>
//         )
//     }
// </div>
// <div>
//     <label>Lectue Description</label>
//     <textarea id="LectureDesc"
//     placeholder="Enter Lecture Description"{
//         ...register("lectureDesc",{required:true})
//     } className="w-full min-h-[130px]">

//     </textarea>
//     {
//         errors.lectureDesc && (<span>Lecture Description is required</span>)
    
        
//     }
// </div>
// {
//     !view && (
//         <div>
//             <IconBtn text={loading ?"Loading...":edit?"save Changes":"save"}></IconBtn>
//         </div>
//     )
// }

// </form>


// </div>

//         </div>
//     )
//  }
//  export default SubSectionModal;