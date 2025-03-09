"use client"

import { data } from '@/data/data'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });

      const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).toLowerCase();

      setCurrentTime(`${formattedDate} ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='max-w-[450px] bg-black h-screen flex items-center justify-center'>
      <div className='w-full h-[580px] relative'>
        {/* Image */}
        <Image 
          src='/images/01.jpeg' 
          fill 
          alt='' 
          className='object-cover'
        />
        
        <div className='flex items-center gap-2 absolute bottom-[.7rem] w-[96%] h-[90px] p-[1rem] left-[.5rem] right-2'>
          {/* Left Image */}
          <div className='w-[25%] h-full relative'>
            <Image 
              src='/images/pic03.jpeg' 
              alt='s' 
              fill
              className='object-cover' 
            />
          </div>

          {/* Glassmorphic Transparent Overlay */}
          <div className='w-[75%] h-full rounded-sm font-[400] font-sans rounded-tr-[0px] leading-[15px] padding text-white bg-[rgba(0,0,0,0.55)] backdrop-filter'>
            <div style={{ paddingTop: '2px'}} className='flex items-center gap-1 absolute right-[0] top-[-1.09rem] font-[900] m-3 bg-[rgba(0,0,0,0.55)] backdrop-filter'>
              <Image 
                src='/images/gps.jpg' 
                alt='s' 
                height={15} 
                width={15} 
                className='object-contain pl-2 rounded-[2px]' 
                style={{ height: '15px', width: '15px'}}
              />
              <p className='text-[0.45rem]' style={{ paddingRight: '1px', fontWeight: '600'}}>GPS Map Camera</p>
            </div>
            <p className='text-[0.9rem]'>{data.location}</p>
            <span className='text-[0.7rem]'>{data.address}</span>
            <p className='text-[0.7rem]'>Lat {data.lat} Long {data.long}</p>
            <p className='uppercase text-[0.7rem]'>{currentTime} GMT +01:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;