import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

import Login from "../../src/core/Login";
import Signup from "../../src/core/Signup";
const Template=({title,desc1,desc2,image,formtype,setIsLoggedIn})=>{
    return (
        <div className="flex flex-row mx-auto mt-16">
            <div className="text-white">

            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">{title}</h1>
                <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
                    <span className="text-richblack-100">{desc1}</span>
                    
                    <span className="font-edu-sa font-bold italic text-blue-100">
                        {desc2}
                    </span>
                </p>
                {
                    formtype ==="signup"?(<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
                }

                <div className="flex flex-row items-center justify-center">
                    <div className="h-1 w-40 bg-white"></div>
                    <p>OR</p>
                    <div className="h-1 w-40 bg-white"></div>
                </div>
                <button className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900 form-style w-full mb-6">
                    <p>sign up with google</p>
                </button>
            </div>
<div>

</div>
<div>
   <img src={image} className="ml-12"></img>
</div>

        </div>
    )
        

    
}
export default Template;