"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import style from "./app.module.css"

export default function Page() {

  const[mousePosition, setMousePosition] =useState({x:0, y:0})



  useEffect(() =>{ 
      const updateMousePosition = (e) => {
          setMousePosition({ x: e.clientX, y: e.clientY })
      }

      document.addEventListener('mousemove', updateMousePosition)

      return () => {
          document.removeEventListener('mousemove', updateMousePosition )
      }

  }, [])

  const calculateAngle = () => {
    if (typeof document !== 'undefined') {
        const eyeCenterX = document.documentElement.clientWidth / 2; // Assuming eyes are centered horizontally
        const eyeCenterY = document.documentElement.clientHeight / 2; // Assuming eyes are centered vertically

        const dx = mousePosition.x - eyeCenterX;
        const dy = mousePosition.y - eyeCenterY;
        const angleRad = Math.atan2(dy, dx);
        const angleDeg = (angleRad * 180) / Math.PI;

        return angleDeg;
    }
    return 0; // Default angle if document is not defined
};

  const getEyeTransform = () => {
      const angle = calculateAngle();
      return `rotate(${angle}deg)`;
    };


  return (

    <main className='md:bg-[#2C7A85] bg-[#2C7A85]'>
        <section className=' mx-4 md:max-w-7xl md:mx-auto '>

              <div className='md:w-full md:h-screen  md:flex md:flex-col  md:items-center  h-screen w-full flex flex-col items-center '>

              <div className=' md:bg-doggo md:bg-no-repeat md:bg-cover md:w-[193px] md:h-[81px] md:mt-9 bg-doggo bg-no-repeat bg-cover w-[193px] h-[81px] mt-[116px]'></div>

              <div className='md:mt-[116px]'>
                  {/* full head container starts here  */}
                  <div className='md:w-[6.75rem] md:h-[6.125rem] md:bg-gradient-to-br from-[#CC9B61] to-[#D69E5B] md:rounded-md md:flex md:flex-col md:justify-center md:items-center md:relative'>

                      {/* eyes starts here */}
                      <div className='md:pt-4'>
                          
                          {/* container covering both eyes starts */}
                          <div className='md:w-full md:h-6 md:flex md:justify-center md:gap-5 md:overflow-hidden md:relative' >

                              {/* First eye starts here  */}
                              
                          <div className=' md:w-6 md:h-6 md:bg-black md:rounded-full md:relative '>

                              {/* First pupil_1 white starts */}
                                  <div className=' md:w-fit  md:h-fit md:absolute'                                     style={{
                                              left: '50%',
                                              top: '50%',
                                              transform: `translate(-50%, -50%) ${getEyeTransform()}`, // Apply eye rotation
                                          }} >
                                      <div className='md:w-fit md:h-fit   md:flex md:gap-1 md:rounded-full '>
                                          <div className='md:w-1  md:h-1 md:rounded-full md:bg-white'></div>

                                          <div className='md:w-[0.563rem]  md:h-[0.563rem] md:bg-white md:rounded-full border border-[#2C7A85]'></div>
                                      </div>
                                  </div>
                          </div>
                              {/* First eye starts here */}


                          {/* second eye starts */}
                          <div className=' md:w-6 md:h-6 md:bg-black md:rounded-full md:relative '>

                              {/* second pupil_1 white starts */}
                                  <div className='md:w-fit  md:h-fit md:absolute'                                     style={{
                                              left: '50%',
                                              top: '50%',
                                              transform: `translate(-50%, -50%) ${getEyeTransform()}`, // Apply eye rotation
                                          }} >

                                      <div className='md:w-fit md:h-fit   md:flex md:gap-1 md:rounded-full '>
                                          <div className='md:w-1  md:h-1 md:rounded-full md:bg-white '></div>

                                          <div className='md:w-[0.563rem]  md:h-[0.563rem] md:bg-white md:rounded-full border border-[#2C7A85]'></div>
                                      </div>
                                  </div>
                          </div>
                          {/* second eye ends */}
                          
                          {/* eyelids starts */}

                          <div className= {` md:flex md:justify-center md:items-center md:gap-5 md:absolute md:bottom-full `}>
                          {/* eyelid 1 starts */}
                          <div className='md:w-6 md:h-6  bg-gradient-to-br from-[#CC9B61] to-[#D69E5B] md:rounded-full md:shadow-inner '></div>
                          {/* eyelid 1 ends */}

                          {/* eyelid 2 starts */}
                          <div className={`md:w-6 md:h-6  bg-gradient-to-br from-[#CC9B61] to-[#D69E5B] md:rounded-full md:shadow-inner md:absolute bottom-full  `}></div>
                          {/* eyelid 2 ends */}
                          </div>


                          {/* eyelids ends */}

                          </div>

                          {/* container covering both eyes ends */}





                      </div>
                      {/* eyes ends here */}

                      <div className='md:w-[5rem] md:h-[3rem] md:bg-nose_mouth2 md:bg-cover md:bg-no-repeat'></div>

                </div>
                  {/* full head container ends here  */}


                  {/* left ear starts */}
                  <div className=' md:bg-left_ear md:bg-cover md:bg-no-repeat md:w-[68px] md:h-[62px] md:absolute md:top-[204px] md:right-[660px]'></div>
                  {/* left ear ends */}

                  {/* right ear starts */}
                  <div className=' md:bg-right_ear md:bg-cover md:bg-no-repeat md:w-[67px] md:h-[65px] md:absolute md:top-[204px] md:left-[660px]'></div>
                  {/* right ear ends */}

              </div>

              <Link href='./homepage' className='md:hover:text-orange-700 md:transition-colors hover:text-orange-700 text-orange-700 transition-colors'>
                  <div className='md:mt-8 mt-40 '>
                    <p className='md:text-2xl  md:text-center text-center text-white md:w-[344px] text-2xl md:text-white '>Welcome to <span className='md:text-[#CC9B61] text-[#CC9B61]'>doggo</span>, lets get started</p>
                  </div>
              </Link>

              </div>

        </section>
    </main>


  )
}
