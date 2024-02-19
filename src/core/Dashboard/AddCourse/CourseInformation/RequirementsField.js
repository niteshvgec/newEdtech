import React, { useEffect, useState } from "react";

const RequirementsField =({name,label,register,errors,setValue,getValues})=>{
    const [requirement,setRequirement]=useState("");
    const [requirementList,setRequirementList]=useState([]);
    useEffect(()=>{
        register(name,{
            requiured:true,
            validate:(value)=>value.length>0
        })
    },[])


    useEffect(()=>{
        setValue(name,requirementList)
    },[requirementList])
const handleAddRequirement=()=>{
    if(requirement){
        setRequirementList([...requirementList,requirement]);
        setRequirement("");
    }
}
const handleRemoveRequirement=(index)=>{
    const updatedRequirementList=[...requirementList];
    updatedRequirementList.splice(index,1);
    setRequirementList(updatedRequirementList);
}


    return(
<div>
    <label htmlFor={name} className="text-white">{label}<sup className="text-pink-200">*</sup></label>
    <div>
        <input type="text"
        id={name}
        value={requirement}
        onChange={(e)=>setRequirement(e.target.value)}
        className="w-full bg-richblack-700 rounded-md border-b-2 border-white text-white">
        </input>
        <buttton type="button"
        onClick={handleAddRequirement}
        className="font-semibold text-yellow-50 ">
Add
        </buttton>
    </div>
    {
        requirementList.length>0 && (
            <ul>
                {
                    requirementList.map((requirement,index)=>(
                        <li key={index} className="flex items-center text-richblack-5">
                            <span>{requirement}</span>
                            <button type="button"
                            onClick={()=>handleRemoveRequirement(index)}
                            className="text-xs text-pure-greys-300">
Clear
                            </button>
                        </li>
                    ))
                }
            </ul>
        )

    }

    {
        errors[name]&& (
            <span>
                {label} is required
            </span>
        )
    }
</div>
    )
}
export default RequirementsField;