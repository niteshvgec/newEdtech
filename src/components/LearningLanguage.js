import React from "react";
import HighLightText from "./HighLightText";
import Know_your_progress from "../../src/Images/Know_your_progress.png";
import Compare_with_others from "../../src/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../src/Images/Plan_your_lessons.png";
import Button from "./Button";
const LearningLanguage=()=>{
return(
    <div className="mt-[130px] mb-32">
        <div className="flex flex-col w-11/12 items-center">
            <div className="text-4xl font-semibold text-center my-10">
                <p>Your swiss Knife for <HighLightText text={"Learning any language"}></HighLightText></p>
            </div>
            <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
            Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule
              and more.
            </div>
            <div>
                <div className="flex flex-row items-center justify-center mt-5">

<img src={Know_your_progress} alt="progress" className=" object-contain -mr-32"></img>
<img src={Compare_with_others}  alt="compare"  className="object-contain "></img>
<img src={Plan_your_lessons} alt="lessons" className="object-contain -ml-36" ></img>
                </div>
            </div>
            <div>
                <Button active={true} linkto={"/signup"}>
<div>
    Learn more
</div>
                </Button>
            </div>

        </div>
    </div>
)


}
export default LearningLanguage;