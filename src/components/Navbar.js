import React, { useEffect, useState } from "react";
import logo from "../../src/TimeLineLogo/Logo-Full-Light.png"
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../impdata/navbar-links";
import { useDispatch, useSelector } from "react-redux";
// import {AiOutlineShoppingCart} from "react-icons/ai";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import {categories} from "../../src/services/apis";
import { apiConnector } from "../../src/services/apiconnector";
import { BsChevronDown } from "react-icons/bs";
import { FaBeer } from 'react-icons/fa';
import { FcFullBattery } from "react-icons/fc";
// import { FaShoppingCart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { logout } from "../services/authAPI";
import { useNavigate } from "react-router-dom";
import Cart from "../core/Dashboard/Cart";
import ProfileDropdown from "../core/Dashboard/ProfileDropDown";
import { RxDropdownMenu } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
const Navbar=()=>{

const {cart}=useSelector((state)=>state.cart);
const {token}=useSelector((state)=>state.auth);
const {user}=useSelector((state)=>state.profile);
const {totalItems}=useSelector((state)=>state.cart);
const {location}=useLocation();
const dispatch=useDispatch();
const navigate=useNavigate();
const [dropYes,setDropYes]=useState(false);
const [subLinks, setSubLinks] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {
  ;(async () => {
    setLoading(true)
    try {
      const res = await apiConnector("GET", categories.CATEGORIES_API)
      setSubLinks(res.data.data)
    } catch(error) {
      console.log("Could not fetch Categories.", error)
    }
    setLoading(false)
  })()
}, [])



const matchRoute=(route)=>{
   
    return matchPath({path:route}, location1.pathname);
}
const location1=useLocation();

   
    return (
        <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
            <div className="flex w-11/12 max-w-maxContent items-center justify-between relative">
                <Link to="/">
<img src={logo} width={160} height={42} loading='lazy'></img>
                </Link>


<nav>
    <ul className="flex flex-row gap-4 text-white ">
        {
            NavbarLinks.map((link,index)=>(
              <li key={index}>
            {
                link.title==="Catalog"?(
                <div className=" relative flex items-center gap-2 group">
                    <p>
                        {link.title}
                        {/* <BsChevronDown></BsChevronDown> */}

                    </p>
                   
<BsChevronDown></BsChevronDown>
<div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0
 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
<div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5">
</div>
{loading ? (<p className="text-center"> Loading... </p> ) : subLinks?.length ? ( 

<> 
    { subLinks?.filter( (subLink) => subLink?.courses?.length > 0)?.map((subLink, i) => (
                                                                  <Link to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`} className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"  key={i} >
                                                                      <p>{subLink.name}</p>
                                                                  </Link>
                                                            ))
    }
</>
):( <p className="text-center">No Courses Found</p> )
}                            



</div>


                </div>):(<Link to={link?.path}><p className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                        }`} >
                    {link.title}</p></Link>)
                
  }
  </li>
            ))
        }
    </ul>
</nav>







<div className="flex gap-x-4 items-center">
    {

user && user?.accountType!=="Instructor" && (
    <Link to="/dashboard/cart" className="relative">
<div className="    text-black relative">
    <span className="  absolute top-[0.05rem] right-4  text-caribbeangreen-100  aspect-square rounded-full ">{cart.length}</span>
    <FaShoppingCart color="yellow" size="24" className=" absolute top-[0.15rem] right-3 bottom-2 mr-4 mb-3"></FaShoppingCart>

</div>
  
    {
        totalItems>0 && (
            <span>
                {totalItems}
            </span>
        )
    }
    </Link>
)

    }
    {


 token===null&&<Link to="/login" >

    <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
        login
    </button>
    </Link>


    }

   
   
   
   {token !== null && <ProfileDropdown />}




 
    
  {

 (
   token===null && <Link to="/signup">

    <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
        signup
    </button>
    </Link>
    )

    }
   


</div>

            </div>

        </div>
    )
}
export default Navbar;