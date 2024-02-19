import React from "react";
import Instructor from "../../src/Images/Instructor.png";
import HighLightText from "./HighLightText";
import Button from "./Button";
import {FaArrowRight} from "react-icons/fa";
const InstuctorSection=()=>{
    return(
        <div className="mt-[130px] mb-32">
<div className="flex flex-row gap-20 item-center">
<div className="w-[50%]">
    <img src={Instructor} className="shadow-white">
    
    </img>

</div>
<div className="w-[50%] flex flex-col gap-10">
<div className="text-4xl font-semibold w-[50%] ">
    Become an
<HighLightText text={"Instructor"}></HighLightText>
</div>
<p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
Instructors from around the world teach millions of students on
              CodePlay. We provide the tools and skills to teach what you
              love.
</p>
<div className="w-fit ">
<Button active={true} linkto={"/signup"} >
    <div className=" items-center flex flex-row gap-3">
    Start Teaching Today
<FaArrowRight></FaArrowRight>
    </div>

</Button>

</div>

</div>


</div>
        </div>
    )
}
export default InstuctorSection;