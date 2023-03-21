import React from 'react'
import Image from 'next/image'

import president from '../../../public/President.png'
import i1 from '../../../public/piaic1.jpg'
import i2 from '../../../public/piaic2.jpg'
import i3 from '../../../public/piaic3.jpg'
import i4 from '../../../public/piaic4.jpg'
import i5 from '../../../public/piaic5.jpg'
import i6 from '../../../public/piaic6.jpg'

import ai from '../../../public/AI.jpg'
import block from '../../../public/blockchain.jpeg'
import cloud from '../../../public/cloud.jpg'
import iot from '../../../public/iot.jpg'
import meta from '../../../public/metaverse.jpg'

export default function HomePage() {
    return (
        <>
            <section className="container bannerStyle">
                <div>
                    <Image src={president} alt='' width={{ sm: '250px', md: '275px', lg: '302px' }} />
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

            <section className="container max-w-full border-b-[5px] border-t-[5px] border-b-[#12FBE1] border-t-[#12FBE1] mt-[55px] bg-[#2E294E]">
                <p className="text-center lg:text-[24px] md:text-[22px] xs:text-[16px] lg:pt-[50px] md:pt-[40px] xs:pt-[20px] lg:pb-[50px] md:pb-[40px] xs:pb-[20px]">
                    Admissions are now open in Web 3.0 and Metaverse program in Karachi, Lahore, Islamabad. For Queries Contact PIAIC helpline <span className="underline"> <a href="tel:03082220203"> 0308 2220203 </a></span>
                </p>
            </section>

            <section className='lg:max-w-[1336px] md:max-w-2xl xs:max-w-[400px] grid lg:grid-cols-[repeat(3,auto)] md:grid-cols-[repeat(2,auto)] xs:grid-cols-[repeat(1,auto)] xs:gap-1 md:gap-2 mx-auto mt-[50px]' >
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

            <section className='md:pb-[500px] lg:pb-[100px]'>
                <h1 className="lg:text-[40px] md:text-[30px] xs:text-[18px] text-center font-semibold leading-tight"><span className="bannerSpan">C</span>OURSES <span className="bannerSpan">A</span>VAILABLE</h1>

                <div className="container grid lg:grid-cols-[repeat(5,auto)] md:grid-cols-[repeat(3,auto)] xs:grid-cols-[repeat(1,auto)] lg:max-w-[1600px] md:max-w-[1000px] md:pl-4 lg:pl-0 md:pr-4 lg:pr-0  mx-auto gap-[55px] mt-6">

                    <div className="ml-1 bg-[#2E294E] container max-w-[270px] md:relative lg:static max-h-[310px] border-[3px] border-[#12FBE1]">
                        <div className="text-[23px] font-semibold text-center">ARTIFICIAL INTELLIGENCE</div>
                        <Image src={ai} alt='AI Picture' className='md:mt-3 xl:mt-8 hover:translate-y-5' />
                    </div>

                    <div className="container max-w-[270px] bg-[#2E294E] max-h-[310px] border-[3px] border-[#12FBE1]">
                        <div className="text-[23px] font-semibold text-center">WEB3.0 AND METAVERSE</div>
                        <Image src={meta} alt='Metaverse' className='hover:translate-y-5' />
                    </div>

                    <div className="container max-w-[270px] max-h-[310px] bg-[#2E294E] border-[3px] border-[#12FBE1]">
                        <div className="text-[23px] font-semibold text-center">BLOCKCHAIN</div>
                        <Image src={block} alt='Blockchain' className='md:mt-8 xl:mt-11 hover:translate-y-5' />
                    </div>

                    <div className="container flex flex-col max-w-[270px] max-h-[310px] ml- border-[3px] bg-[#2E294E] md:absolute lg:static md:ml-48 lg:ml-0 md:mt-72 lg:mt-0 border-[#12FBE1]">
                        <div className="text-[23px] font-semibold text-center">INTERNET OF THINGS</div>
                        <Image src={iot} alt='' className='md:mt-5 xl:mt-11 hover:translate-y-5' />
                    </div>

                    <div className="container max-w-[270px] md:absolute lg:static bg-[#2E294E] md:ml-[520px] lg:ml-0 md:mt-72 lg:mt-0 max-h-[310px] border-[3px] border-[#12FBE1]">
                        <div className=" text-[23px] font-semibold  text-center">CLOUD NATIVE PROGRAMMING</div>
                        <Image src={cloud} alt='Cloud' className='md:mt-1 xl:mt-9 hover:translate-y-5' />
                    </div>

                </div>
            </section >
        </>
    )
}
