import React from 'react';
import {FaArrowRight} from "react-icons/fa";
import { Link } from 'react-router-dom';
import HighLightText from "../components/HighLightText";
import Button from '../components/Button';
import banner from "../assests/banner.mp4";
import CodeBlock from '../components/CodeBlock';
import TimeLineSection from '../components/TimeLineSection';
import LearningLanguage from '../components/LearningLanguage';
import InstuctorSection from '../components/InstructorSection';
import ExploreMore from '../components/ExploreMore';
import Footer from '../common/Footer';

function Home() {
    return (
      <div>
        {/* Section 1 */}
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
          {/* Become a Instructor Button */}
          <Link to={"/signup"}>
            <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
              <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                <p>Become an Instructor</p>
                <FaArrowRight />
              </div>
            </div>
          </Link>
  
          {/* Heading */}
          <div className="text-center text-4xl font-semibold">
            Empower Your Future with
            <HighLightText text={"Coding Skills"} />
          </div>
  
          {/* Sub Heading */}
          <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </div>
  
          {/* CTA Buttons */}
          <div className="mt-8 flex flex-row gap-7">
            <Button active={true} linkto={"/signup"}>
              Learn More
            </Button>
            <Button active={false} linkto={"/login"}>
              Book a Demo
            </Button>
          </div>
  
          {/* Video */}
          <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
            <video
              className="shadow-[20px_20px_rgba(255,255,255)]"
              muted
              loop
              autoPlay
            >
              <source src={banner} type="video/mp4" />
            </video>
          </div>
  
          {/* Code Section 1  */}
          <div>
            <CodeBlock
              position={"lg:flex-row"}
              heading={
                <div className="text-4xl font-semibold">
                  Unlock your
                  <HighLightText text={"coding potential"} /> with our online
                  courses.
                </div>
              }
              subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }
              ctabtn1={{
                btnText: "Try it Yourself",
                link: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              codeColor={"text-yellow-25"}
              codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
              backgroundGradient={<div className="codeblock1 absolute"></div>}
            />
          </div>
  
          {/* Code Section 2 */}
          <div>
            <CodeBlock
              position={"lg:flex-row-reverse"}
              heading={
                <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                  Start
                  <HighLightText text={"coding in seconds"} />
                </div>
              }
              subheading={
                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
              }
              ctabtn1={{
                btnText: "Continue Lesson",
                link: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              codeColor={"text-yellow-25"}
              codeblock={`import React from "react";\n import Button from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
              backgroundGradient={<div className="codeblock2 absolute"></div>}
            />
          </div>
  
          {/* Explore Section */}
          <ExploreMore />
        </div>
  
        {/* Section 2 */}
        <div className="bg-pure-greys-5 text-richblack-700">
          <div className="homepage_bg h-[320px]">
            {/* Explore Full Catagory Section */}
            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
              <div className="lg:h-[150px]"></div>
              <div className="flex flex-row gap-7 text-white lg:mt-8">
                <Button active={true} linkto={"/signup"}>
                  <div className="flex items-center gap-2">
                    Explore Full Catalog
                    <FaArrowRight />
                  </div>
                </Button>
                <Button active={false} linkto={"/login"}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
  
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
            {/* Job that is in Demand - Section 1 */}
            <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
              <div className="text-4xl font-semibold lg:w-[45%] ">
                Get the skills you need for a{" "}
                <HighLightText text={"job that is in demand."} />
              </div>
              <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                <div className="text-[16px]">
                  The moder CodePlay is the dictates its own terms. Today, to
                  be a competitive specialist requires more than professional
                  skills.
                </div>
                <Button active={true} linkto={"/signup"}>
                  <div className="">Learn More</div>
                </Button>
              </div>
            </div>
  
            {/* Timeline Section - Section 2 */}
            <TimeLineSection />
  
            {/* Learning Language Section - Section 3 */}
            <LearningLanguage />
          </div>
        </div>
  
        {/* Section 3 */}
        {/* <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"> */}
          {/* Become a instructor section */}
          {/* <InstructorSection /> */}
  
          {/* Reviws from Other Learner */}
          {/* <h1 className="text-center text-4xl font-semibold mt-8">
            Reviews from other learners
          </h1> */}
          {/* <ReviewSlider /> */}
        {/* </div> */}
  
        {/* Footer */}
        <Footer />
      </div>
    )
  }
  
  export default Home










// const Home =()=>{
//     return (
//         <div>
//             <div className='relative mx-auto flex flex-col w-11/12  max-w-maxContent items-center text-white justify-between'>
//                 <Link to={"/signup"}>
//                     <div className=' group mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95
//                     w-fit'>
//                         <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
//                             <p>Become an Instructor</p>
//                             <FaArrowRight></FaArrowRight>

//                         </div>
//                     </div>
                
                
                
//                 </Link>
//                 <div className='text-center text-4xl font-semibold mt-7 text-white'>
//                     Empower Your Future with
//                     <HighLightText text={"Coding Skills"}/>
//                 </div>
//                 <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
//                 With our online coding courses, you can learn at your own pace, from
//           anywhere in the world, and get access to a wealth of resources,
//           including hands-on projects, quizzes, and personalized feedback from
//           instructors.
//                 </div>
//                 <div className='flex flex-row gap-7 mt-8'>
//                     <Button active={true}linkto={"/signup"}>
// Learn More
//                     </Button>

//                     <Button active={false}linkto={"/login"}>
// Book a Demo
//                     </Button>
//                 </div>
//                 <div className='shadow-blue-200 mx-3 my-12'>
// <video
// muted
// loop
// autoPlay

// >
//     <source src={banner} type='video/mp4'></source>

// </video>
//                 </div>
//             </div>
//             <div>
//                 <CodeBlock position={"lg:flex-row"}
//                 heading={
//                     <div className='text-4xl font-semibold text-white'>
//                         Unload Your 
//                         <HighLightText text={"coding potential"}/>
//                         with our online courses
//                     </div>
//                 } subheading={ "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
//                     ctabtn1={{
//                         btnText:"try it yourself",
//                         linkto:"/singup",
//                         active:true,
//                     }}
//                     ctabtn2={{
//                         btnText:"learn ",
//                         linkto:"/login",
//                         active:false,
//                     }} 
//                     codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                   
//                    codeColor={"text-yellow-25"}
                   
//                    >

//                 </CodeBlock>
//             </div>
//             <div className='mx-auto'>
//                 <CodeBlock position={"lg:flex-row-reverse"}
//                 heading={
//                     <div className='text-4xl font-semibold text-white'>
//                         Unload Your 
//                         <HighLightText text={"coding potential"}/>
//                         with our online courses
//                     </div>
//                 } subheading={ "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
//                     ctabtn1={{
//                         btnText:"try it yourself",
//                         linkto:"/singup",
//                         active:true,
//                     }}
//                     ctabtn2={{
//                         btnText:"learn ",
//                         linkto:"/login",
//                         active:false,
//                     }} 
//                     codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                   
//                    codeColor={"text-yellow-25"}
                   
//                    >

//                 </CodeBlock>

//                 <ExploreMore></ExploreMore>
//             </div>
//             <div className='bg-pure-greys-5 text-richblack-700'>
//                 <div className='homepage_bg h-[333px]'>
//                     <div className='w-11/12 max-w-maxContent flex  flex-col items-center gap-5 mx-auto'>
// <div className='h-[150px]'></div>
// <div className='flex flex-row gap-7 text-white'>
//     <Button active={true} linkto={"/signup"}>
//         <div className='flex items-center gap-3'>
// Explore Full catalog
// <FaArrowRight></FaArrowRight>
//         </div>

//     </Button>
//     <Button active={false} linkto={"/signup"}>
//         <div>
// Learn more
//         </div>
//     </Button>

// </div>
//                     </div>

//                 </div>
//                 <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

// <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
// <div className='text-4xl font-semibold w-[45%]'>
// Get the skills you need for about<HighLightText text={"job that is in demand"}></HighLightText>

// </div>
// <div className='text-white flex flex-row font-bold'>hello guys</div>
// <div className='flex flex-col gap-10 w-[40%] items-start'>
//     <div className='text-[16px]'>
//     The modern CodePlay is the dictates its own terms. Today, to
//                 be a competitive specialist requires more than professional
//                 skills.
//     </div>
//     <Button active={true} linkto={"/signup"}>
//         <div>
//             Learn More
//         </div>
        
//     </Button>

// </div>

// </div>
// <TimeLineSection></TimeLineSection>
//                 <LearningLanguage></LearningLanguage>
//                 </div>

              
//             </div>


//             <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>
// <InstuctorSection></InstuctorSection>
// <h1 className="text-center text-4xl font-semibold mt-8">
//           Reviews from other learners
//         </h1>
//             </div>
//             <Footer />
//         </div>
//     )
// }
// export default Home;