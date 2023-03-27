/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

import i1 from '../../../public/piaic1.jpg'
import i2 from '../../../public/piaic2.jpg'
import i3 from '../../../public/piaic3.jpg'
import i4 from '../../../public/piaic4.jpg'
import i5 from '../../../public/piaic5.jpg'
import i6 from '../../../public/piaic6.jpg'


import Testimonial from './Testimonial'

export default function HomePage() {
    return (
        <section className='container  max-w-full mx-auto'> {/*Banner Section */}
            <section className="container bannerStyle">
                <div>
                    <a href="/" className='cursor-pointer'>
                        <img src="/President.png" alt="" className='xs:w-[250px] md:w-[250px] lg:w-[320px]' />
                    </a>
                </div>

                <div className="container bannerContent">
                    <h1 className="lg:text-[40px] md:text-[30px] xs:text-[18px] text-center font-semibold leading-tight"><span className="headingSpan">P</span>RESIDENTIAL
                        <span className="headingSpan"> I</span>NITIATIVE FOR <span className="headingSpan"> A</span>RTIFICIAL <span className="headingSpan">I</span>NTELLIGENCE &
                        <span className="headingSpan"> C</span>OMPUTING</h1>

                    <p className="text-justify lg:text-[22px] md:text-[20px] xs:text-[16px] lg:leading-8 md:leading-6">
                        The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.
                    </p>

                    <button className="bannerButton">
                        <a href="https://portal.piaic.org/signup">Apply Now</a>
                    </button>
                </div>
            </section>

            <section className="container max-w-full border-b-[5px] border-t-[5px] border-b-[#12FBE1] border-t-[#12FBE1] mt-[55px] bg-[#2E294E]">
                {/*Admission Available Section */}

                <p className="text-center lg:text-[24px] md:text-[22px] xs:text-[16px] lg:pt-[50px] md:pt-[40px] xs:pt-[20px] lg:pb-[50px] md:pb-[40px] xs:pb-[20px]">
                    Admissions are now open in Web 3.0 and Metaverse program in Karachi, Lahore, Islamabad. For Queries Contact PIAIC helpline <span className="underline"> <a href="tel:03082220203"> 0308 2220203 </a></span>
                </p>
            </section>

            <section className='lg:max-w-[1336px] md:max-w-2xl xs:max-w-[400px] grid lg:grid-cols-[repeat(3,auto)] md:grid-cols-[repeat(2,auto)] xs:grid-cols-1 
            xs:gap-1 md:gap-2 mx-auto mt-[50px]' > {/*Images Sectoin */}

                <div className='border border-[#12FBE1] rounded-[30px] overflow-hidden'>
                    <Image src={i1} alt='Image 1' className='hover:scale-150' />
                </div>

                <div className='border border-[#12FBE1] rounded-[30px] overflow-hidden'>
                    <Image src={i2} alt='Image 2' className='hover:scale-150' />
                </div>

                <div className='border border-[#12FBE1] rounded-[30px] overflow-hidden'>
                    <Image src={i3} alt='Image 3' className='hover:scale-150' />
                </div>

                <div className='border border-[#12FBE1] rounded-[30px] overflow-hidden'>
                    <Image src={i4} alt='Image 4' className='hover:scale-150' />
                </div>

                <div className='border border-[#12FBE1] rounded-[30px] overflow-hidden'>
                    <Image src={i5} alt='Image 5' className='hover:scale-150' />
                </div>

                <div className='border border-[#12FBE1] rounded-[30px] overflow-hidden'>
                    <Image src={i6} alt='Image 6' className='hover:scale-150' />
                </div>
            </section>

            <section className='container lg:max-w-[1600px] mx-auto mt-[50px] md:pb-[50px] lg:pb-[100px]'> {/*Courses Section */}

                <h1 className="lg:text-[40px] md:text-[30px] xs:text-[18px] container mx-auto flex place-content-center items-center font-semibold leading-tight"><span className="headingSpan">C</span>OURSES <span
                    className="headingSpan">A</span>VAILABLE
                </h1> {/*Heading */}

                <div className="container mt-8 grid gap-5 xs:grid-cols-1 xs:place-items-center md:max-w-[1000px] md:grid-cols-[repeat(2,auto)] md:pr-4 md:pl-4 
                lg:max-w-[1600px] lg:grid-cols-[repeat(5,auto)] lg:pr-0 lg:pl-0 "> {/*Courses */}

                    <div className="relative group xs:w-[300px] md:w-[230px] border-[3px] border-[#12FBE1]">
                        {/*The container is relative in postion allowing absolute items to be positioned relative to the container */}
                        <img src="/AI.jpg" className="w-full h-auto hover:scale-150" alt="your-image-alt" />
                        <div className="absolute inset-0 flex flex-col items-center group-hover:bg-gray-900 group-hover:bg-opacity-75 justify-center text-white text-center 
                        opacity-0 hover:opacity-100 transition-opacity duration-300 text-2xl font-bold uppercase">
                            {/*Absolute inset-0 makes the caption absolutely to the container and stretches it to the full width and height 
                            flex flex-col items-center: the caption is center vertically and horizontally within the container
                            group-hover:bg-gray-900 group-hover:bg-opacity-75: This changes the background color and its opacity when hovered over*/}

                            <p>Artifical Intelligence</p>
                        </div>
                    </div>

                    <div className="relative group xs:w-[300px] md:w-[200px] border-[3px] border-[#12FBE1]">
                        <img src="/metaverse.jpg" className="w-full h-auto hover:scale-150" alt="your-image-alt" />
                        <div className="absolute inset-0 flex flex-col items-center group-hover:bg-gray-900 group-hover:bg-opacity-75 justify-center text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-2xl font-bold uppercase">
                            <p>Web 3.0 and Metaverse</p>
                        </div>
                    </div>

                    <div className="relative group xs:w-[300px] md:w-[260px] border-[3px] border-[#12FBE1]">
                        <img src="/network.jpg" className="w-full h-auto hover:scale-150" alt="your-image-alt" />
                        <div className="absolute inset-0 flex flex-col items-center group-hover:bg-gray-900 group-hover:bg-opacity-75 justify-center text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-2xl font-bold uppercase">
                            <p>Network Programmability</p>
                        </div>
                    </div>

                    <div className="relative group xs:w-[300px] md:w-[210px] border-[3px] border-[#12FBE1]">
                        <img src="/iot.jpg" className="w-full h-auto hover:scale-150" alt="your-image-alt" />
                        <div className="absolute inset-0 flex flex-col items-center group-hover:bg-gray-900 group-hover:bg-opacity-75 justify-center text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-2xl font-bold uppercase">
                            <p>IoT</p>
                        </div>
                    </div>

                    <div className="relative group xs:w-[300px] md:w-[240px] border-[3px] border-[#12FBE1]">
                        <img src="/cloud.jpg" className="w-full h-auto hover:scale-150" alt="your-image-alt" />
                        <div className="absolute inset-0 flex flex-col items-center group-hover:bg-gray-900 group-hover:bg-opacity-75 justify-center text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-2xl font-bold uppercase">
                            <p>Cloud Native Programming</p>
                        </div>
                    </div>

                </div>
            </section >

            <section className='mt-5'> {/*Testimonial Section */}
                <h1 className="lg:text-[40px] md:text-[30px] xs:text-[18px] text-center font-semibold leading-tight"><span className="headingSpan">W</span>HAT<span
                    className="headingSpan"> P</span>EOPLE <span className="headingSpan"> H</span>AVE <span className="headingSpan"> T</span>O <span className="headingSpan"> S</span>
                    AY</h1>
                <Testimonial />
            </section>
        </section>
    )
}
