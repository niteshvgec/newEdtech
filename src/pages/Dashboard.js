import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../core/Dashboard/Sidebar";
const Dashboard=()=>{
    const {loading:authLoading}=useSelector((state)=>state.auth);
    const {loading:profileLoading}=useSelector((state)=>state.profile);
    const {user}=useSelector((state)=> state.profile)

    return(
        <div className="relative flex w-[3000px] min-h-[calc(100vh-3.5rem)]">
<Sidebar>

</Sidebar>
<div className=" w-[1500px] h-[calc(100vh-3.5rem)] overflow-auto">
    <div className="mx-auto w-11/12 max-w-[1000px] py-10 ml-52">
<Outlet></Outlet>
    </div>
</div>

        </div>
    )
}
export default Dashboard;