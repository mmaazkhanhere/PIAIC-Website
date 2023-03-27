/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Header() {
    return (
        <section className='flex justify-between container lg:max-w-[1200px] xl:max-w-[1800px] items-center font-bold text-white text-[20px] xs:ml-[25px] md:ml-[35px] lg:ml-[50px]'>
            <div>
                <a href="/" >
                    <img src="/piaic.png" alt="PIAIC" className="xs:w-[73px] md:w-[80px] mt-[10px] " />
                </a>
            </div>
            <div>
                <ul className="hidden md:flex items-center gap-16">
                    <li>
                        <a href="https://portal.piaic.org/signup" className='border-[#1B998B]  border-b-[#12FBE1] hover:border'>APPLY</a>
                    </li>
                    <li>
                        <a href="/Courses" className='border-[#1B998B]  border-b-[#12FBE1] hover:border'>PROGRAMS</a>
                    </li>
                    <li>
                        <a href="/AboutUs" className='border-[#1B998B]  border-b-[#12FBE1] hover:border'>ABOUT PRESIDENT</a>
                    </li>
                    <li>
                        <a href="/WIT" className='border-[#1B998B]  border-b-[#12FBE1] hover:border'>WIT</a>
                    </li>
                </ul>
                <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none group">
                    <div className="w-8 h-1 bg-white mb-1"></div>
                    <div className="w-8 h-1 bg-white mb-1"></div>
                    <div className="w-8 h-1 bg-white"></div>
                    <div className="absolute bg-[#2E294E] text-white top-0 h-screen right-0 w-6/12 opacity-0 group-focus:right-0 group-focus:opacity-100 
                        transition-all duration-300">
                        {/*Absolute: sets the elemebt to positoin absolute within its container
                            top-0: positions the top of the element at the top of its container
                            -right-full: with this the menu comes from the right and closes by moving towards the right
                            h-screen: sets the height of the element to height of the viewport
                            w-6/12: sets the width of the element to half of its container
                            group-focus: right-0 :  When the parent element is in the focus, moves the right edge of the element to the right edge of the container
                            group-focus: opacity-100: when the parent element is in focus, sets the opacity of the element to 100, making it visible
                            transition all duration -300: adds a transisiton effect to the elements when menu is displayed and removed*/}

                        <ul className=" flex flex-col w-full cursor-pointer pt-24">
                            <li className='py-1'>
                                <a href="https://portal.piaic.org/signup" className='border-[#1B998B]  border-b-[#12FBE1] hover:border'>APPLY</a>
                            </li>
                            <li className='py-1'>
                                <a href="/Courses" className='border-[#1B998B]  border-b-[#12FBE1] hover:border'>PROGRAMS</a>
                            </li>
                            <li className='py-1'>
                                <a href="/AboutUs" className='border-[#1B998B]  border-b-[#12FBE1] hover:border'>ABOUT US</a>
                            </li>
                            <li className='py-1'>
                                <a href="/WIT" className='border-[#1B998B]  border-b-[#12FBE1] hover:border'>WIT</a>
                            </li>
                        </ul>
                    </div>
                </button>
            </div >
        </section >
    )
}
