import React, { useEffect, useState } from "react";
import { data } from "./constant";



const ImageSlider = () =>{

    const [activeImageIndex,setActiveImages]=useState(0)

    const handlePreviousClick=()=>{
       setActiveImages(!activeImageIndex ? data.length-1 :activeImageIndex-1)
    }

    const handleNextClick=()=>{
       
       
        setActiveImages((activeImageIndex + 1)% data.length);
    }

    useEffect(()=>{
       const timer= setTimeout(()=>{
            handleNextClick();
        },5000);
        return ()=>{
            clearTimeout(timer);
        }
    },[activeImageIndex])
    
    
   
return(
    <>
    <div className="flex justify-center align-middle mt-5">
        <h1 className="uppercase  from-neutral-900">wallpapers corosol</h1>
            </div>
        <div className="flex justify-center"> 
            
       

           {data.map((url,i)=>

<img class="" src={url} 
            className={"w-96 h-96 object-fit mt-5 border rounded " + 
            (activeImageIndex===i? "block" : "hidden")
        }alt="wallpapers">

            </img>           )}
        </div>
<div class="flex justify-center  gap-44 mt-10">

            <button class=" btn  bg-transparent bg-blue-400 border border-blue-500 rounded py-2 px-4 hover:bg-blue-700 hover:text-white font-bold" onClick={handlePreviousClick}>Previous</button>

            <button class="btn  bg-transparent bg-blue-400 border border-blue-500 rounded py-2 px-4 hover:bg-blue-700 hover:text-white  font-bold" type="button" onClick={handleNextClick} className="" >Next</button>
</div>
 
            
            
                </>
    )
}

export default ImageSlider;
