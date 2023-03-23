/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

export default function Header() {
    return (
        <header className='font-bold text-white '>
            <nav className="flex justify-between items-center w-full ">
                <div className="">
                    <img src="/piaic.png" alt="PIAIC" className="xs:w-[73px] md:w-[80px] mt-[10px] xs:ml[25px] md:ml-[35px] lg:ml-[50px]" />
                </div>
                <div className="container flex place-content-end lg:mr-[50px] md:mr-[35px] xs:mr-[25px] mt-[10px]">
                    <ul className="hidden md:flex items-center gap-16">
                        <li>
                            <a href="">APPLY</a>
                        </li>
                        <li>
                            <a href="/Program">PROGRAM</a>
                        </li>
                        <li>
                            <a href="/aboutUs">ABOUT US</a>
                        </li>
                        <li>
                            <a href="/WIT">WIT</a>
                        </li>
                    </ul>

                    <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none group">
                        <div className="w-8 h-1 bg-white mb-1"></div>
                        <div className="w-8 h-1 bg-white mb-1"></div>
                        <div className="w-8 h-1 bg-white"></div>
                        <div className="absolute top-0 -right-full h-screen w-6/12 border bg-[#2E294E] text-white opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                            <ul className=" flex flex-col w-full cursor-pointer pt-24">
                                <li className='py-1'>
                                    <a href="">APPLY</a>
                                </li>
                                <li className='py-1'>
                                    <a href="/Program">PROGRAM</a>
                                </li>
                                <li className='py-1'>
                                    <a href="/aboutUs">ABOUT US</a>
                                </li>
                                <li className='py-1'>
                                    <a href="/WIT">WIT</a>
                                </li>
                            </ul>
                        </div>
                    </button>
                </div>
            </nav>
        </header>


    )
}
