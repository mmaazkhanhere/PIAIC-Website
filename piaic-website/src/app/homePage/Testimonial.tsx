/* eslint-disable @next/next/no-img-element */
'use client'

import { useRef, useEffect, React } from 'react';
import { register } from 'swiper/element/bundle';

register();

export default function Testimonial() {

    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('progress', (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current.addEventListener('slidechange', (e) => {
            console.log('slide changed');
        });
    }, []);

    return (
        <div className='container xs:max-w-sm md:max-w-xl lg:max-w-4xl mx-auto bg-[#2E294E] text-[#F6E7CB] mt-[50px] mb-[50px] p-3 hover:bg-white hover:text-black rounded-3xl'>

            <swiper-container
                ref={swiperElRef}
                slides-per-view="1"
                navigation="true"
                pagination="true"
            >
                <swiper-slide> {/*First Slide */}
                    <section class="flex flex-col items-center p-10 mt-10 mb-4 container mx-auto rounded-3xl">
                        <div>
                            <img src="https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg" alt="" class="w-32 h-32 rounded-full object-cover 
                            border-[4px] border-[#12FBE1]" />
                        </div>

                        <div>
                            <p class="text-justify p-8">
                                Big shoutout to PIAIC for providing me with the opportunity to learn web development! The courses were engaging, the instructors were knowledgeable, and the curriculum was top-notch. I feel confident in my new skills and cannot wait to apply them in the real world. Thank you for investing in my future!
                            </p>
                        </div>

                        <div class="flex flex-col">
                            <h1 class="font-bold text-lg">M Maaz Khan</h1>
                            <h3 class="font-thin">PIAIC Student</h3>
                        </div>
                    </section>
                </swiper-slide>

                <swiper-slide> {/*Second Slide */}
                    <section class="flex flex-col items-center container p-10 mb-4  mt-10 mx-auto rounded-3xl">
                        <div>
                            <img src="https://allywhitlock.com/wp-content/uploads/2020/07/04-who-needs-headshots-1024x683.jpg" alt="" class="w-32 h-32 rounded-full 
                            object-cover border-[4px] border-[#12FBE1]" />
                        </div>

                        <div>
                            <p class="text-justify p-8">
                                As a journalist, it is inspiring to witness the impact PIAIC nationwide drive to train the youth in cutting-edge technology is having on the future of our
                                society. The institute commitment to equipping young minds with the latest skills in web and AI is truly commendable. The potential of these young people
                                to change the world with their newfound knowledge is exciting to contemplate. Kudos to the PIAIC for leading the way in empowering the next
                                generation!
                            </p>
                        </div>

                        <div class="flex flex-col">
                            <h1 class="font-bold text-lg">Usman Hanif</h1>
                            <h3 class="font-thin">Journalist</h3>
                        </div>
                    </section>
                </swiper-slide>

                <swiper-slide> {/*3 Slide */}
                    <section class="flex flex-col items-center container mx-auto mt-10 mb-4 0 p-10 rounded-3xl">
                        <div>
                            <img src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg" alt="" class="w-32 h-32 rounded-full 
                            object-cover border-[4px] border-[#12FBE1]" />
                        </div>

                        <div>
                            <p class="text-justify p-8">
                                Big thanks to PIAIC for providing me with the opportunity to advance my career! The knowledge, skills, and experiences gained here
                                have been invaluable in shaping my future. Forever grateful for this life-changing experience!
                            </p>
                        </div>

                        <div class="flex flex-col">
                            <h1 class="font-bold text-lg">Furqan Nr</h1>
                            <h3 class="font-thin">PIAIC Student</h3>
                        </div>
                    </section>
                </swiper-slide>

                <swiper-slide> {/*4 Slide */}
                    <section class="flex flex-col items-center container mx-auto mt-10 mb-4 0 p-10 rounded-3xl">
                        <div>
                            <img src="https://www.minneapolisheadshots.com/gallery/main/professional-woman1.jpg" alt="" class="w-32 h-32 rounded-full 
                            object-cover border-[4px] border-[#12FBE1]" />
                        </div>

                        <div>
                            <p class="text-justify p-8">
                                As a tech analyst, I am impressed by the PIAIC nationwide drive to train the youth in cutting-edge technology such as web and AI. The institute innovative
                                approach to education is exactly what our society needs to stay at the forefront of technological advancements. It is refreshing to see an institution
                                that is committed to equipping young minds with the necessary skills and knowledge to take on the challenges of the future. The PIAIC is truly a
                                trailblazer in preparing the next generation for the digital age. Kudos to the institute for its outstanding work.
                            </p>
                        </div>

                        <div class="flex flex-col">
                            <h1 class="font-bold text-lg">Aziza Butt</h1>
                            <h3 class="font-thin">Tech Analyst</h3>
                        </div>
                    </section>
                </swiper-slide>
                ...
            </swiper-container>
        </div>
    );
};