import React from "react";
import Template from "../Auth/Template";
import  signupImg from "../../src/assests/signup.webp";
const Signup=(props)=>{
    let setIsLoggedIn=props.setIsLoggedIn
    return(
        <Template title="welcome Back"
        desc1="Build skills for today ,tomorrow, and beyond."
       desc2="Education to future-proof your career" 
       image={signupImg}
       formtype="signup"
       setIsLoggedIn={setIsLoggedIn}  >

        </Template>
    )
}
export default Signup;