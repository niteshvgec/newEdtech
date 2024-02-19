import React from "react";
// import Swiper from "swiper";
// import SwiperSlide from "swiper/react";
import Course_Card from "./Course_Card";
// import { FreeMode, Pagination } from "swiper"
import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
import {Swiper, SwiperSlide} from "swiper/react"      
const CourseSlider=({Courses})=>{
    return(
<div>
{
    Courses?.length?(<Swiper>
        {
            Courses?.map((course,index)=>(
<SwiperSlide key={index}
  
  className="max-h-[30rem]">
    <Course_Card course={course} Height={"h-[250px]"}></Course_Card>
</SwiperSlide>
            )

            )
        }
    </Swiper>):(<div></div>)
}
</div>
    )
}
export default CourseSlider;