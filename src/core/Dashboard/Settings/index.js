import React from "react";
import EditProfile from "./EditProfile";
import ChangeProfilePicture from "./ChangeProfilePicture";
import UpdatePassword from "./UpdatePassword ";



export default function Settings() {

    return (
      <>
        <h1 className="mb-14 text-3xl font-medium text-richblack-5"> Edit Profile </h1>
        <ChangeProfilePicture />            {/* Change Profile Picture */}
        <EditProfile />                     {/* Profile */}
        <UpdatePassword />                  {/* Password */}
        {/* <DeleteAccount />                    Delete Account */}
      </>
    
  )}