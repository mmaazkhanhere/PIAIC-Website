import React from 'react'
import Image from 'next/image'
import president from '../../../public/President.png'
import i1 from '../../../public/piaic1.jpg'

export default function HomePage() {
    return (
        <>
            <section className="container bannerStyle">
                <div>
                    <Image src={president} alt='' width={{ sm: '250px', md: '275px', lg: '302px' }}></Image>
                </div>

                <div className="container bannerContent">

                    <h1 className="lg:text-[40px] md:text-[30px] xs:text-[18px] text-center font-semibold leading-tight"><span className="bannerSpan">P</span>RESIDENTIAL
                        <span className="bannerSpan"> I</span>NITIATIVE FOR <span className="bannerSpan"> A</span>RTIFICIAL <span className="bannerSpan">I</span>NTELLIGENCE &
                        <span className="bannerSpan"> C</span>OMPUTING</h1>

                    <p className="text-justify lg:text-[22px] md:text-[20px] xs:text-[16px] lg:leading-8 md:leading-6">
                        The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.
                    </p>

                    <button className="bannerButton">
                        <a href="/">Apply Now</a>
                    </button>
                </div>
            </section>

            <section class="container max-w-full border-b-[5px] border-t-[5px] border-b-[#12FBE1] border-t-[#12FBE1] mt-[55px] bg-[#2E294E]">
                <p class="text-center lg:text-[24px] md:text-[22px] xs:text-[16px] lg:pt-[50px] md:pt-[40px] xs:pt-[20px] lg:pb-[50px] md:pb-[40px] xs:pb-[20px]">
                    Admissions are now open in Web 3.0 and Metaverse program in Karachi, Lahore, Islamabad. For Queries Contact PIAIC helpline <span class="underline"> <a href="tel:03082220203"> 0308 2220203 </a></span>
                </p>
            </section>
        </>
    )
}
