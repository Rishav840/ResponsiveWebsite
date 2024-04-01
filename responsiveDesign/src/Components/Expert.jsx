import React from 'react'
import laptop from '../assets/images/laptop.png';
export default function Expert() {
  return (
    <div className='max-w-[1240px] mx-auto md:grid md:grid-cols-2 p-4'>
        <div className=' col-span-1 md:w-[80%]'>
            <img src={laptop} className='w-80 m-auto' alt="" />
        </div>
        <div className='p-2 col-span-1 space-y-2 flex flex-col justify-center '>
            <h1 className='font-bold text-[#00df9a]'>Learn from me</h1>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum mollitia ipsam soluta esse quidem ipsum voluptate ducimus, magni et eius facere iusto est cupiditate sit obcaecati ipsa, quod harum nostrum.</p>
            <button className=' w-[20%] md:w-[30%] text-sm md:text-base bg-black text-white px-5 py-2.5 font-bold rounded'>Get </button>
        </div>
        
        
    </div>
  )
}
