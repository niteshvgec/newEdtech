import React from "react";
import HighLightText from "./HighLightText";
import Button from "./Button";
const LearningGrid =()=>{
    const LearningGridArray = [
        {
          order: -1,
          heading: "World-Class Learning for",
          highliteText: "Anyone, Anywhere",
          description:
            "CodePlay partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
          BtnText: "Learn More",
          BtnLink: "/",
        },
        {
          order: 1,
          heading: "Curriculum Based on Industry Needs",
          description:
            "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
        },
        {
          order: 2,
          heading: "Our Learning Methods",
          description:
            "CodePlay partners with more than 275+ leading universities and companies to bring",
        },
        {
          order: 3,
          heading: "Certification",
          description:
            "CodePlay partners with more than 275+ leading universities and companies to bring",
        },
        {
          order: 4,
          heading: `Rating "Auto-grading"`,
          description:
            "CodePlay partners with more than 275+ leading universities and companies to bring",
        },
        {
          order: 5,
          heading: "Ready to Work",
          description:
            "CodePlay partners with more than 275+ leading universities and companies to bring",
        },
      ];
      
//     return (
//         <div className="grid mx-auto grid-col-1 lg:grid-cols-4 mb-10 pb-5 w-11/12 lg:w-fit">
// {
//    LearningGridArray.map((card,index)=>(
//     <div key={index} className={`${index===0 &&"lg:col-span-2"} ${
//         card.order %2===1? "bg-richblack-700" :"bg-richblack-800"
//     } ${card.order ===3 && "lg:col-start-2"}`}
        
//     >
//         {
//             card.order <0 ?(<div className="bg-richblack-900"> <div className="text-4xl font-bold">
                
//                 {card.heading}
//                 <HighLightText text={card.highliteText}></HighLightText>
                
//                  </div>
//                  <p className="text-richblack-200 mt-4 bg-richblack-900">
//                     {card.description}
//                  </p>
//                  <div className="w-fit mt-4 bg-richblack-900">
//                 <Button active={true} linkto={card.BtnLink} >
//                     {card.BtnText}</Button> 
// </div>
//                 </div>):(<div className="h-[300px] flex flex-col items-center mt-10">
//                     <h1 className="font-bold ">{card.heading}</h1>
//                     <div className="w-[60%]">

//                     <p className="mt-5 text-richblack-500 py-10">{card.description}</p>

//                       </div>
                   
//                      </div>)
//         }
//         </div>
//    )
  
      
    
//    )
// }
// </div>
       
//     )

return (
  <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
    {LearningGridArray.map((card, i) => {
      return (
        <div
          key={i}
          className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
            card.order % 2 === 1
              ? "bg-richblack-700 h-[294px]"
              : card.order % 2 === 0
              ? "bg-richblack-800 h-[294px]"
              : "bg-transparent"
          } ${card.order === 3 && "xl:col-start-2"}  `}
        >
          {card.order < 0 ? (
            <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
              <div className="text-4xl font-semibold ">
                {card.heading}
                <HighLightText text={card.highliteText} />
              </div>
              <p className="text-richblack-300 font-medium">
                {card.description}
              </p>

              <div className="w-fit mt-2">
                <Button active={true} linkto={card.BtnLink}>
                  {card.BtnText}
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-8 flex flex-col gap-8">
              <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

              <p className="text-richblack-300 font-medium">
                {card.description}
              </p>
            </div>
          )}
        </div>
      );
    })}
  </div>
);






}
export default LearningGrid;