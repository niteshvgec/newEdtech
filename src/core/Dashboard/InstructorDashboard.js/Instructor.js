import React, { useEffect } from "react";
import { setLoading } from "../../../slices/authSlice";
import { useSelector } from "react-redux";
import { fetchInstructorCourses } from "../../../services/courseDetailsAPI";

const Instructor=()=>{
    const {token}=useSelector((state)=>state.auth)

    
    useEffect(()=>{
        const getCourseDataWithStats=async()=>{
            setLoading(true);
            const instructorApiData=await getInstructorData(token);
            const result=await fetchInstructorCourses(token);
            console.log(instructorApiData);
            if(instructorApiData.length){
                setInstructorData(instructorApiData);

                if(result){
                    setCourses
                }
            }
        }
    })
}