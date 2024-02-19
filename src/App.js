import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ForgotPassword from "./pages/ForgotPassword"
import Login from './core/Login';
import Signup from './core/Signup';
import About from './core/About';
import { useState } from 'react';
import VerifyEmail from "./pages/VerifyEmail";
import Error from './pages/Error';
import EditCourse from './core/Dashboard/EditCourse/index.js';
// import Settings from './core/Dashboard/Settings';
// import VerifyEmail from "./pages/VerifyEmail"
// import {OpenRoutes} from "react-router-dom";
import UpdatePassword from './pages/UpdatePassword';
import MyProfile from './core/MyProfile';
import PrivateRoute from './Auth/PrivateRoute';
import Dashboard from './pages/Dashboard';
import EnrolledCourses from './core/Dashboard/EnrolledCourses';
import Cart from './core/Dashboard/Cart';
import Settings from './core/Dashboard/Settings/index.js';
import { ACCOUNT_TYPE } from './utils/constants.js';
import AddCourse from './core/Dashboard/AddCourse/index.js';
import { useSelector } from 'react-redux';
import MyCourses from './core/Dashboard/MyCourses.js';
import Catalog from './pages/Catalog.js';
import CourseDetails from './pages/CourseDetails.js';
import Contact from './core/Contact.js';
import History from './core/Dashboard/purchaseHistory.js';
import Instructor from './core/DemoInstructorPage.js';
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const {user}=useSelector((state)=>state.profile)
  return (
   <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
      <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
      <Route path='/courses/:courseId' element={<CourseDetails></CourseDetails>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path="/forgotpassword" element={<ForgotPassword></ForgotPassword>}></Route>
      <Route path="/update-password/:id" element={<UpdatePassword></UpdatePassword>}></Route>
      <Route path="/verify-email" element={<VerifyEmail></VerifyEmail>}></Route>
      <Route path='catalog/:catalogName' element={<Catalog></Catalog>}></Route>
      {/* <Route path='/dashboard/my-profile' element={<MyProfile></MyProfile>}></Route> */}
      <Route
      //  <Route path='/dashboard/my-profile' element={<MyProfile></MyProfile>}></Route>
    element={
      <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
     
    }>
 <Route path='/dashboard/my-profile' element={<MyProfile></MyProfile>}></Route>
 <Route path='/dashboard/purchase-history' element={<History></History>}></Route>
 <Route path='/dashboard/settings' element={<Settings></Settings>}></Route>
 <Route path='/dashboard/cart' element={<Cart></Cart>}></Route>
 <Route path='/dashboard/enrolled-courses' element={<EnrolledCourses></EnrolledCourses>}></Route>



<Route path='dashboard/instructor' element={<Instructor></Instructor>}></Route>
 <Route path="dashboard/add-course" element={<AddCourse />} />
 <Route path='dashboard/my-courses' element={<MyCourses></MyCourses>}/>
 <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
 {/* {
  user?.AccountType===ACCOUNT_TYPE.INSTRUCTOR &&(
    <>
    <Route path="dashboard/add-course" element={<AddCourse />} />
    </>
  )
  } */}
    </Route>
    <Route  path='*' element={<Error></Error>}></Route>
    </Routes>
 
   </div>
  );
}

export default App;
