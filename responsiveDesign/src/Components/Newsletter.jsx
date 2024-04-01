import React from 'react'

export default function Newsletter() {
  return (
    <div className='w-full bg-[#2699fb] p-4'>
        <div className='mx-auto max-w-[1240px] md:flex justify-between py-12'>
            <div className=''>
                <h1 className='text-4xl font-bold text-white'>Want to learn latest skills</h1>
                <span className='text-white '>Sign up to our latest newsletter and stay update</span>
                </div>
            <div className='mt-10 md:mt-0'>
                <input type="text" placeholder='Search' className='ml-4 drop-shadow-lg text-sm  px-5 py-2.5 rounded mb-3 mr-3 md:mr-3' />
                <button className='bg-black text-white text-sm  px-5 py-2.5 rounded'>Submit</button>
                <br />
                <p className='ml-4 text-white'>we care about the protection of your data. Read our <a href="#" className='text-black underline'>Privacy Policy</a></p>
            </div>
        </div>
      
    </div>
  )
}
