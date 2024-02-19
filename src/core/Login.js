import React from "react";
import Template from "../Auth/Template";
import loginImg from "../../src/assests/login.webp"

const Login=(props)=>{
    let setIsLoggedIn=props.setIsLoggedIn
    return (
        <Template title="welcome Back"
        desc1="Build skills for today ,tomorrow, and beyond."
       desc2="Education to future-proof your career" 
       image={loginImg}
       formtype="login"
       setIsLoggedIn={setIsLoggedIn}>

        </Template>
    )
}
export default Login;