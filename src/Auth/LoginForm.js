import React, { useState } from "react";
// import {AioutlineEye,AioutlineEyeInvisible} from "react-icons/ai";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import {toast}from "react-hot-toast";
import { Link } from "react-router-dom";
// import Login from "../core/Login";
import { login } from "../services/authAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm=({setIsLoggedIn})=>{
    const navigate = useNavigate()
    // const navigate=useNavigate();
    const dispatch=useDispatch();
    const [formData,setFormData]=useState({
        email:"",password:""
    })
    const [showPassword,setShowPassword]=useState(false);
//     const changeHandler=(event)=>{
// setFormData((prevData)=>(
//     {
//         ...prevData,
//         [event.target.name]:event.target.value
//     }
// )

// )
//     }
    const changeHandler = (e) => {
        console.log("heloo bhai ")
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
      }
    function submitHandler(event){
        event.preventDefault();
       dispatch(login(formData.email,formData.password,navigate))
        // toast.success("logged in");
           setFormData({
        email:"",
        password:""
    })
    }
    //  setFormData({
    //     email:"",
    //     password:""
    // })
    return (
        <form onSubmit={submitHandler}>
            <label  className="w-full mt-6">
                <p  className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Email Address<sup className="text-pink-200">*</sup>
                </p>
                <input required
                type="email" 
                name="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="enter email id" className=" text-white h-[50px] border-b-2 border-white rounded-md  bg-richblack-700 w-full">
                    </input>
            </label>
            <label className="relative">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 ">
                    Password <sup className="text-pink-200">*</sup>
                </p>
                <input required
                type={showPassword ?("text"):("password")}
                name="password"
                value={formData.password}
                 onChange={changeHandler} 
                 placeholder="enter password" className=" form-style text-white h-[50px] border-b-2 border-white rounded-md  bg-richblack-700 w-full ">


                </input>
                <span onClick={()=>setShowPassword((prev)=>!prev)} className="absolute right-3 top-[60px] z-[10] cursor-pointer mt-2" >
                    {showPassword ?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                </span>
                <Link to="#">
<p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
    Forgot Password
</p>
                </Link>
            </label>
            <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900 form-style w-full mb-6"
      >
        Sign In
      </button>
        </form>
    )
}
export default LoginForm;