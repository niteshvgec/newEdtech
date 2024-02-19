import { apiConnector } from "./apiconnector"
import { toast } from "react-hot-toast";
// import { resetPasswordToken } from "../../../controllers/ResetPassword";}
import { endpoints } from "./apis"
import { setToken } from "../slices/authSlice";
import { setUser } from "../slices/profileSlice"
import { useNavigate } from "react-router-dom";
import { FcLockLandscape } from "react-icons/fc";
// import RESETPASSTOKEN_API from "./apis"
const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESETPASSTOKEN_API,
    RESETPASSWORD_API,
  } = endpoints
  export function sendOtp(email,navigate){
return async(dispatch)=>{
    const toastId = toast.loading("Loading...")
    // dispatch(setLoading(true))
try{

const response=await apiConnector("POST",  SENDOTP_API,{
    email,
    checkUserPresent:true
})
console.log("SENDOTP API RESPONSE............", response)

console.log(response.data.success)
if (!response.data.success) {
    throw new Error(response.data.message)
  }
  toast.success("OTP Sent Successfully")
  navigate("/verify-email")

}catch(error){
    console.log("SENDOTP API ERROR............", error)
    toast.error("Could Not Send OTP")
}

toast.dismiss(toastId)
}
  }
  export function signUp(  accountType,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    otp,
    navigate){
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...")
        try{

            const response = await apiConnector("POST", SIGNUP_API, {
                accountType,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                otp,
              })
              if (!response.data.success) {
                throw new Error(response.data.message)
              }
              toast.success("Signup Successful")
              navigate("/login")

        }catch(error){

            console.log("SIGNUP API ERROR............", error)
            toast.error("Signup Failed")
            navigate("/signup")

        }
        toast.dismiss(toastId)
    }
  }
  export function login(email,password,navigate){
   
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...")
try{
    const response=await apiConnector("POST", LOGIN_API,{
        email,
        password
    })
    if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("loggedin Successful")
    //   navigate("/login")

    toast.dismiss(toastId)
    dispatch(setToken(response.data.token))
    const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
        // dispatch(setUser({image:userImage}))
        dispatch(setUser({ ...response.data.user,image:userImage}))
        // localStorage.setItem('user',JSON.stringify(response.data.userImage));
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.user))
        console.log("your response",response.data.user);
        navigate("/dashboard/my-profile")

}catch(error){
    console.log("LOgin API ERROR............", error)
    toast.error("loggedin Failed")
}
toast.dismiss(toastId)
    }
  }
  export function logout(navigate){
    return (dispatch)=>{
        dispatch(setToken(null));
        dispatch(setUser(null));
        // dispatch(resetCart());
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.success("Logged Out");
        navigate("/");
    }
  }
export function getPasswordResetToken(email,setEmailSent){
    return async()=>{
        try{

const response=await apiConnector("POST",RESETPASSTOKEN_API,{email,})
console.log("Reset password token",response)
if(!response.data.success){
    throw new Error(response.data.message);
}
toast.success("reset email sent");
setEmailSent(true);
        }catch(error){

console.log("Rest password failed")

        }
    }
}
export function resetPassword(password,confirmPassword,token){
   return async ()=>{
    try{
const response=await apiConnector("POST",RESETPASSWORD_API,{password,confirmPassword,token})
console.log("Reset Password...",response)
if(!response.data.success){
    throw new Error(response.data.message)
}
toast.success("password has been reset successfully")
        
    }catch(error){
        console.log("Reset password token",error)
        toast.error("unable to reset password");
    }
   }
}