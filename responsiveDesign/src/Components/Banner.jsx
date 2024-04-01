import React from "react";


export default function Banner() {
  return (
    <div className="bg-[#2699fb] w-full py-[100px] ">
      <div className="max-w-[1240px] mx-auto text-center font-bold">
        <div className="text-xl md:text-3xl">Learn with us</div>
        <h2 className="text-white text-[30px] md:text-[60px]">Grow with us</h2>
        <p className="text-[25px] md:text-[50px]">
            Learn
        </p>
        <button className='bg-black text-white px-3 py-0.5 text-[10px] md:text-sm  md:px-5 md:py-2.5 rounded'>Get started</button>
      </div>
    </div>
  );
}
