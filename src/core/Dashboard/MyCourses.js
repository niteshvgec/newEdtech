import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { IoMdAdd } from "react-icons/io";
import CourseTable from "./InstructorCourses/CourseTable";
import { fetchInstructorCourses } from "../../services/courseDetailsAPI";
const MyCourses=()=>{

    const {token}=useSelector((state)=>state.auth);
const navigate=useNavigate();

const [courses,setCourses]=useState([]);
useEffect(()=>{
    const fetchCourses=async()=>{
        const result =await fetchInstructorCourses(token);
        if(result){
            setCourses(result);
        }
    }
    fetchCourses();
},[])
    return (
        <div>
        <div>
<h1>My Courses</h1>
<IconBtn
text="Add Course"
onclick={()=>navigate("/dashboard/add-course")}
><IoMdAdd></IoMdAdd></IconBtn>
        </div>

        {
            courses && <CourseTable courses={courses} setCourses={setCourses}></CourseTable>
        }
        </div>
        
    )
}
export default MyCourses;