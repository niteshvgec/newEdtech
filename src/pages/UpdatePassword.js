import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link } from "react-router-dom";
import { resetPassword } from "../services/authAPI";
const UpdatePassword=()=>{
    const [formData,setFormData]=useState({
        password:"",
        confirmPassword:"",
    })
    const dispatch=useDispatch();
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const location=useLocation();
    const handleOnChange=(e)=>{
        setFormData((prevData)=>(
{
    ...prevData,
    [e.target.name]:e.target.value,
}
        )

        )
    }
    const {password,confirmPassword}=formData
    const  handleOnSubmit=(e)=>{
        e.preventDefault();
        const token=location.pathname.split("/").at[-1];
        dispatch(resetPassword(password,confirmPassword,token))
    }
    return (
        <div>
            <div className="text-white">
            <h1 className="text-white">Choose new Password</h1>
            <p className="text-white">Almost done. Enter your new password and you are all set</p>
            </div>
            <form onSubmit={handleOnSubmit}>
                <label>
                    <p className="text-white">
                        New password
                    </p>
                    <input required
                    type={showPassword ?"text":"password"}
                    name="password"
                    value={formData.password}
                    onChange={handleOnChange}
                    placeholder="Password">

                    </input>
                    
<span onClick={()=>setShowPassword((prev)=>!prev)}>
    {
        showPassword ?<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> :<AiOutlineEye fontSize={24} fill="#AFB2BF"/>
    }
</span>
                    
                </label>
                <label>
                    <p className="text-white">
                    confirm Newpassword
                    </p>
                    <input required
                    type={showConfirmPassword ?"text":"password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleOnChange} placeholder="Confirm Password">

                    </input>
                    
<span onClick={()=>setShowConfirmPassword((prev)=>!prev)
    }>
    {
        showConfirmPassword ?<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> :<AiOutlineEye fontSize={24} fill="#AFB2BF" />
    }
</span>
                    
                </label>
                <button type="submit" className="text-white">
                    Reset Password
                </button>

            </form>
            <div>
        <Link to="/login">
        <p className="text-white">back to login</p>
        </Link>
    </div>
        </div>
    )
}
export default UpdatePassword;