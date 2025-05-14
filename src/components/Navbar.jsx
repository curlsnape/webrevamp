import React from "react";
import img from '../assets/ac.webp'
function Navbar() {
  return (
    <div className="w-full px-32 z-[999] bg-white flex items-center justify-between fixed shadow-md h-16 ">
      <div className="logo w-40 ">
        <img className="w-full h-full object-cover" src={img} alt="" /> 
      </div>
      <div className="links flex gap-5">
       {["home","learning","business","careers","services","contact"].map((item,index)=>{
        return <h4 className="font-semibold cursor-pointer uppercase text-sm">{item}</h4>
       })}
      </div>
    </div>
  );
}

export default Navbar;
