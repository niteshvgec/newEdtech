import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/authAPI";
const ForgotPassword=()=>{
const dispatch=useDispatch();
    const [emailSent,setEmailSent]=useState(false);
    const [email,setEmail]=useState("");
    const {loading}=useSelector((state)=>state.auth)
const handleOnSubmit=(e)=>{
e.preventDefault();
dispatch(getPasswordResetToken(email,setEmailSent))
}
    return (
       
<div>
<div className="text-white">
    <h1>
        {
            !emailSent?"Reset your Password":"check your Email"
        }
    </h1>

    <p>
        {
            !emailSent ?"not sent properly":`we have sent email to ${email}`
        }
    </p>


    <form onSubmit={handleOnSubmit} >
        {
            !emailSent && (
                <label>
                    <p>Email Address</p>
<input required 
type="email"
name="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder="Enter Your Email Address">
</input>
                </label>
            )
        }
        <button type="Submit">
            {
                !emailSent ?"Reset Password":"Resend Email"
            }
        </button>
    </form>
    <div>
        <Link to="/login">
        <p>back to login</p>
        </Link>
    </div>
</div>


</div>

    )
}
export default ForgotPassword;