import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Table, Th,Tr,Tbody,Td,Thead } from "react-super-responsive-table";
import { COURSE_STATUS } from "../../../utils/constants";
import ConfirmationModal from "../../../common/ConfirmationModal";
// import { deleteCourse } from "../../../../server/controllers/Course";
// import { fetchInstructorCourses } from "../../../services/courseDetailsAPI"; 
import { deleteCourse } from "../../../services/courseDetailsAPI";
import { fetchCourseDetails } from "../../../services/courseDetailsAPI";
import { fetchInstructorCourses } from "../../../services/courseDetailsAPI";
import { setCourse } from "../../../slices/courseSlice";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Navigate, useNavigate } from "react-router-dom";
// import react-super-responsive-table/dist/SuperResponsiveTableStyle.css
// import { fetchInstructorCourses } from "../../../services/courseDetailsAPI";
export default function CourseTable({courses,setCourses}){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {token}=useSelector((state)=>state.auth);
    const [loading,setLoading]=useState(false);
    const [confirmationModal,setConfirmationModal]=useState(null);

    const handleCourseDelete=async(courseId)=>{


        setLoading(true);
       await deleteCourse({courseId:courseId},token);
    //    if(delete1){
    //     toast.success("your course is deleted")
    //    }
        const result=await fetchInstructorCourses(token);
        if(result){
            setCourse(result);
        }

        setConfirmationModal(null);
        setLoading(false);
    }



    return (
        <div>
<Table>
<Thead className="text-white">
    <Tr>
        <Th>
            Courses
        </Th>
        <Th>
            Duration
        </Th>
        <Th>
            Price
        </Th>
        <Th>
            Actions
        </Th>
    </Tr>
</Thead>
<Tbody className="text-white">
{
    courses.length ===0 ?(<Tr>
        <Td>No Courses Found</Td>
    </Tr>):(
        courses?.map((course)=>(
            <Tr key={course._id}>
<Td>
    <img 
    src={course?.thumbnail}
    className="h-[150px] w-[220px] rounded-lg object-cover" >
    </img>
    <div  className="flex flex-col ">
        <p>{course.courseName}</p>
        <p>{course.courseDescription}</p>
        <p>Created:</p>
        {
            course.status === COURSE_STATUS.DRAFT ? (<p className="text-pink-50">Drafted</p>):(<p className="text-yellow-50">Published</p>)
        }

    </div>
</Td>
<Td>
    2hr 30min
</Td>
<Td>
    ${course.price}
</Td>
<Td>
    <button disabled={loading}
    onClick={()=>{
        navigate(`/dashboard/edit-course/${course._id}`)
    }}>
<CiEdit />
    </button>
    <button disabled={loading}
    onClick={()=>{
        setConfirmationModal({
            text1:"Do you want to delete this course",
            text2:"All the data related to this course will be deleted",
            btn1Text:"Delete",
            btn2Text:"Cancel",
            btn1Handler:!loading ? ()=>handleCourseDelete(course._id):()=>{},
            btn2Handler:!loading ? ()=>setConfirmationModal(null):()=>{},
        })
    }}>
<MdDeleteForever color="green" />
    </button>
</Td>
            </Tr>
        ))
    )
}
</Tbody>
</Table>
{confirmationModal && <ConfirmationModal modalData={confirmationModal}></ConfirmationModal>}
        </div>
    )
}