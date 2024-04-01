import React, { useState } from 'react';
// import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
    
    const [nav, setNav] = useState(false);
  return (
    <>
    <div className="bg-[#262626] p-4">
      <div className="flex justify-between items-center max-w-[1240px] mx-auto py-[10px]">
        <div className="text-3xl font-bold text-gray-400">
          Rishav
        </div>
        {
            nav ?
            <AiOutlineClose onClick={()=> setNav(!nav)} className="text-white text-2xl" />
            :
            <AiOutlineMenu onClick={()=> setNav(!nav)} className=" text-white text-2xl  md:hidden"/>
        }
        
        
        <ul className="hidden md:flex gap-10 text-white">
          <li><a href="#">Home</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* resposive menu */}
        <ul className={`duration-700 md:hidden space-y-5 text-white fixed bg-black w-full top-[88px] h-screen ${nav?'left-[0%]':'left-[-100%]'} `}>
          <li className="text-center"><a href="#">Home</a></li>
          
          <li className="text-center"><a href="#">Company</a></li>
          
          <li className="text-center"><a href="#">About</a></li>
          
          <li className="text-center"><a href="#">Contact</a></li>
        </ul>
      </div>
      
    </div>

  </>
  )
}
