import React from 'react'
import { FaTwitterSquare,FaFacebookSquare,FaInstagramSquare,FaGithubSquare  } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className='bg-[#2699fb] w-full p-4'>
    <div className='max-w-[1240px] m-auto lg:grid grid-cols-3  gap-5 '>
        <div className=' space-y-5 mb-10'>
            <h1 className='text-4xl font-bold text-black'>Rishav</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptas nesciunt optio, repudiandae est neque reprehenderit iure nam alias, molestias autem ab, ipsam vel quis a rerum quaerat obcaecati esse!</p>
            <div className='flex gap-6 md:w-[75%]'>
            <FaTwitterSquare size={30} color="white" />
            <FaFacebookSquare size={30} color='white' />
            <FaInstagramSquare size={30} color='white' />
            <FaGithubSquare  size={30} color='white' />
            </div>

        </div>

        <div className='lg:col-span-2 flex justify-around'>
        <div className='text-center md:text-left text-white'>
            <h1 className='font-bold text-black'>Solutions</h1>
            <ul className='space-y-4 mt-4'>
                <li>Analytics</li>
                <li>Marketing</li>
                <li>Commerce</li>
                <li>Insights</li>
            </ul>
        </div>
        <div className='text-center md:text-left text-white'>
            <h1 className='font-bold text-black'>Support</h1>
            <ul className='space-y-4 mt-4'>
                <li>Analytics</li>
                <li>Marketing</li>
                <li>Commerce</li>
                <li>Insights</li>
            </ul>
        </div>
        <div className='text-center md:text-left text-white'>
            <h1 className='font-bold text-black'>Company</h1>
            <ul className='space-y-4 mt-4'>
                <li>Analytics</li>
                <li>Marketing</li>
                <li>Commerce</li>
                <li>Insights</li>
            </ul>
        </div>
        <div className='text-center md:text-left text-white'>
          <h1 className='font-bold text-black'>Legal</h1>
          <ul className='space-y-4 mt-4'>
            <li>Claim</li>
            <li>Private Policy</li>
            <li>Terms</li>
          </ul>
        </div>
    </div>
    </div>
    </footer>


  )
}
