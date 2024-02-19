import React, { useEffect } from "react";
import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import IconBtn from "../common/IconBtn";
// import { UseDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/profileSlice";
import Button from "../components/Button";
import { FaEdit } from "react-icons/fa";
export default function MyProfile(){
  const dispatch=useDispatch();
    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate();
    useEffect(()=>{
      const Image1 = `https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName} ${user.lastName}`;
  
    // dispatch(setUser({ image: userImage }));
    },[])
return (
    <div className="flex justify-center text-center flex-col w-[100%]">


<h1 className="mb-14 text-4xl font-bold text-yellow-5 mr-80">
        MY PROFILE
      </h1>
<div className="text-white flex  items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 w-[80%] ml-12">
  <div className="flex">
  <img 
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            loading="lazy"
            className="aspect-square w-[78px] rounded-full object-cover"
          />
    <div className="flex flex-col">
<p className="font-bold text-lg mr-16">{user?.firstName +""+user?.lastName}</p>
<p className="text-richblack-300 ml-8">{user?.email}</p>
    </div>
  </div>

  <div>
 <Button active={true} linkto={"/dashboard/settings"}>
        <div className='flex items-center gap-3'>
Edit
<FaEdit />


        </div>

    </Button>
  </div>
</div>


<div className="text-white flex  items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 w-[80%] ml-12 mt-12">
  <div className="flex flex-col gap-y-10">
<p className="font-bold text-lg mr-12">About</p>
<p>{user?.additionalDetails?.about ?? "write something about yourself"}</p>
  </div>
  <div>
  <Button active={true} linkto={"/dashboard/settings"}>
        <div className='flex items-center gap-3'>
Edit
<FaEdit />


        </div>

    </Button>
  </div>
</div>
<div className="text-white flex flex-col  rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 w-[80%] ml-12 mt-12">
  <div className="flex justify-between">
<h1>Personal Details</h1>
<div>
<Button active={true} linkto={"/dashboard/settings"}>
        <div className='flex items-center gap-3'>
Edit
<FaEdit />


        </div>

    </Button>
    </div>
  </div>
  <div className=" grid grid-cols-2 mt-8 mr-80 gap-8 auto-cols-min">
<div className="">
<p  className="text-lg   text-richblack-300">First Name</p>
<p>{user?.firstName}</p>
</div>
<div className="" >
<p  className="text-lg   text-richblack-300">lastName</p>
<p>{user?.lastName}</p>
</div>
<div className="">
<p  className="text-lg   text-richblack-300">Gender</p>
      <p>{user?.additionalDetails?.gender}</p>
</div>
<div className="">
<p className="text-lg   text-richblack-300">Phone Number</p>
      <p>{user?.additionalDetails?.contactNumber}</p>
</div>
<div className="">
<p className="text-lg   text-richblack-300">D.O.B</p>
<p>{user?.additionalDetails?.dateOfBirth}</p>
</div>
<div className="">
<p className="text-lg   text-richblack-300">About</p>
<p>{user?.additionalDetails?.about ?? "write something about yourself"}</p>
</div>
  </div>
</div>
     { /* <div className="flex items-center justify-between rounded-md border-[1px] bg-richblack-800 p-8 px-12">
        <div className="flex items-center gap-x-4">
          <img 
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            loading="lazy"
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div>
            <p>{user?.firstName +""+user?.lastName} </p>
            <p>{user?.email} </p>
          </div>
          <IconBtn
          text="Edit"
          Onclick={()=>{
            navigate("/dashboard/settings")
          }}></IconBtn>
          </div>
<div>
  <div>
    <p>About</p>
    <IconBtn text="Edit" Onclick={()=>{
      navigate("/dashboard/settings")
    }}></IconBtn>
    
  </div>

  <p>{user?.additionalDetails?.about ?? "write something about yourself"}</p>
  
</div>
<div>
  <div>
    <p>Personal Details</p>
    <IconBtn text="Edit" 
    onClick={()=>{
      navigate("/dashboard/setting");
    }}></IconBtn>
  </div>
  <div>
    <div>
      <p>First Name</p>
      <p>{user?.firstName}</p>
    </div>
    <div>
      <p>lastName</p>
      <p>{user?.lastName}</p>
    </div>
    <div>
      <p>Gender</p>
      <p>{user?.profileDetails?.gender}</p>
    </div>
    <div>
      <p>Phone Number</p>
      <p>{user?.additionalDetails?.contactNumber}</p>
    </div>
    <div>
      <p>D.O.B</p>
      <p>{user?.additionalDetails?.dateOfBirth}</p>
    </div>
  </div>
</div>

          </div> */}
    </div>
)  
}