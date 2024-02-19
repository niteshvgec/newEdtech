import React from "react";
import HighLightText from "../components/HighLightText";
import banner1 from "../assests/aboutus1.webp";
import banner2 from "../assests/aboutus2.webp";
import banner3 from "../assests/aboutus3.webp";
import fundingstory from "../assests/FoundingStory.png"
// import HighLightText2 from "../components/HighLightText2";
import LearningGrid from "../components/LearningGrid";
import ContactFormSection from "../components/ContactFormSection";
import Footer from "../common/Footer";
import Quote from "../components/Quote";
import StatsComponenet from "../components/Stats";

const About = () => {
    return (
      <div>
        <section className="bg-richblack-700">
          <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
            <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
              Driving Innovation in Online Education for a
              <HighLightText text={"Brighter Future"} />
              <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
                CodePlay is at the forefront of driving innovation in online
                education. We're passionate about creating a brighter future by
                offering cutting-edge courses, leveraging emerging technologies,
                and nurturing a vibrant learning community.
              </p>
            </header>
            <div className="sm:h-[70px] lg:h-[150px]"></div>
            <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
              <img src={banner1} alt="" />
              <img src={banner2} alt="" />
              <img src={banner3} alt="" />
            </div>
          </div>
        </section>
  
        <section className="border-b border-richblack-700">
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
            <div className="h-[100px] "></div>
            <Quote />
          </div>
        </section>
  
        <section>
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
            <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
              <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                  Our Founding Story
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                  Our e-learning platform was born out of a shared vision and
                  passion for transforming education. It all began with a group of
                  educators, technologists, and lifelong learners who recognized
                  the need for accessible, flexible, and high-quality learning
                  opportunities in a rapidly evolving digital world.
                </p>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                  As experienced educators ourselves, we witnessed firsthand the
                  limitations and challenges of traditional education systems. We
                  believed that education should not be confined to the walls of a
                  classroom or restricted by geographical boundaries. We
                  envisioned a platform that could bridge these gaps and empower
                  individuals from all walks of life to unlock their full
                  potential.
                </p>
              </div>
  
              <div>
                <img
                  src={fundingstory}
                  alt=""
                  className="shadow-[0_0_20px_0] shadow-[#FC6767]"
                />
              </div>
            </div>
            <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
              <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                  Our Vision
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                  With this vision in mind, we set out on a journey to create an
                  e-learning platform that would revolutionize the way people
                  learn. Our team of dedicated experts worked tirelessly to
                  develop a robust and intuitive platform that combines
                  cutting-edge technology with engaging content, fostering a
                  dynamic and interactive learning experience.
                </p>
              </div>
              <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <StatsComponenet />
        <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
          <LearningGrid />
          <ContactFormSection />
        </section>
  
        {/* <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"> */}
          {/* Reviws from Other Learner */}
          {/* <h1 className="text-center text-4xl font-semibold mt-8">
            Reviews from other learners
          </h1> */}
          {/* <ReviewSlider /> */}
        {/* </div> */}
        <div className="h-8">

        </div>
        <Footer />
      </div>
    )
  }
  
  export default About









// const About=()=>{
//     const data=[
//         {
//             number:"50K",
//             object:"Active Student"
//         },
//         {
//             number:"50+",
//             object:"Mentor"
//         },
//         {
//             number:"200+",
//             object:"Courses"
//         },
//         {
//             number:"50+",
//             object:"Awards"
//         }
//     ]
//     return (
//         <div className="text-white flex flex-col justify-center mx-auto">
// <div className="w-[100%] h-[400px]   flex flex-col items-center">
//     <p>Driving Innovation in Online Education for a</p>
//     <br>
//     </br>
//     <HighLightText text={"Brighter Future"}></HighLightText>
//     <p>CodePlay is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.

//     </p>


// </div>
// <div className="flex  lg:flex-row gap-5 justify-center sm:flex-col">
// <img src={banner1} alt="img1"></img>
// <img src={banner2} alt="img2"></img>
// <img src={banner3} alt="img3"></img>
// </div>
// <div className="mx-auto">
//     <span>We are passionate about revolutionizing the way we learn. Our innovative platform </span>
//     <HighLightText text={"combines technology"}></HighLightText>
// <HighLightText2 text={"expertise"}></HighLightText2>
// <span>, and community to create an</span>
// <HighLightText2 text={"unparalleled educational experience."}></HighLightText2>
// </div>
// <div className="flex mx-auto ml-48 ">
//     <div className="w-[40%]">
//     <HighLightText2 text={"Our Founding Story"}></HighLightText2>
//     <p>
//     Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.

//     </p>
//     <p className="mt-5">
// As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
//  </p>
//     </div>
//   <div className="w-[30%] justify-center items-center ml-20   ">
  
//     <img src={fundingstory} alt="story" className="shadow-[0_0_20px_0] shadow-[#FC6767]"></img>
    
  
//   </div>
// </div>
// <div className="flex mt-10 mx-auto ml-48 ">
//     <div className="w-[40%]">
// <HighLightText2 text={"Our Vision"}></HighLightText2>
// <p>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.

// </p>
//     </div>
//     <div className="w-[34%] ml-20">
// <HighLightText text={"Our Mission"}></HighLightText>
// <p>Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.

// </p>
//     </div>
// </div>
// <div className="flex flex-row gap-12 mx-auto bg-richblack-700 w-[100%] items-center justify-center mb-10 h-[130px] mt-10">
//     {
//         data.map((imp,index)=>(
            
//             <div key={index}>
//                <p className="font-bold text-xl">{imp.number}</p> 
//                <p className="text-richblack-200">{imp.object}</p>
//                 </div>
//         ))
//     }
// </div>
// <section>
//     <LearningGrid></LearningGrid>
// </section>
// <section className="mx-auto">
//     <ContactFormSection></ContactFormSection>
// </section>



// <Footer></Footer>
//         </div>
//     )
// }
// export default About;