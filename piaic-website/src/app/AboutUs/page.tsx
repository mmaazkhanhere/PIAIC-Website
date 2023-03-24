/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function AboutUs() {
    return (
        <section className="container mx-auto bg-[#2E294E] p-12 text-white mt-10 rounded-3xl mb-20">
            <div className="container flex flex-col items-center">
                <img src="https://pbs.twimg.com/profile_images/1083295676447027200/CqYuxTH-_400x400.jpg" alt="" className="xs:w-36 md:w-44 lg:w-48 rounded-full outline outline-offset-2 hover:scale-125 outline-[#12FBE1]" />
                <h1 className="mt-3 xs:text-3xl lg:text-4xl font-bold">Dr. Arif Alvi</h1>
                <h3 className="mt-3 font-thin">President of the Islamic Republic of Pakistan</h3>
            </div>

            <div className="container mt-6 flex place-content-center items-center gap-x-4">
                <a href="https://www.facebook.com/Dr.ArifAlvi/">
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_58_10)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.896 0H1.104C0.494 0 0 0.494 0 1.104V18.896C0 19.506 0.494 20 1.104 20H10.682V12.255H8.076V9.237H10.682V7.01C10.682 4.426 12.26 3.02 14.565 3.02C15.669 3.02 16.617 3.102 16.894 3.139V5.839H15.296C14.042 5.839 13.8 6.435 13.8 7.309V9.236H16.789L16.399 12.254H13.799V20H18.896C19.506 20 20 19.506 20 18.896V1.104C20 0.494 19.506 0 18.896 0Z" fill="#0066FF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_58_10">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>

                <a href="https://twitter.com/ArifAlvi">
                    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 35.7622C6.92886 36.8286 20.8914 44.8773 30.8199 38.674C40.7483 32.4707 40.2006 21.7833 40.2006 16.886C41.1 15.0018 43 14.0439 43 8.9438C41.1337 10.6678 39.2787 11.2544 37.435 10.7036C35.6287 7.94957 33.1435 6.73147 29.9794 7.04934C25.2333 7.52614 23.4969 12.1825 24.0079 18.2067C16.6899 21.9074 10.9515 15.524 7.99418 10.7036C7.00607 14.4999 6.0533 19.0576 7.99418 24.0995C9.2881 27.4607 12.3985 30.3024 17.3254 32.6246C12.3323 35.3308 8.22382 36.3766 5 35.7622Z" fill="#2F88FF" stroke="black" stroke-width="4" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>

            <div className="mt-10 text-justify lg:text-xl">
                <p>Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.</p>
                <br />
                <p>Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.</p>
                <br />
                <p>President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</p>
                <br />
                <p>Dr. Arif Alvi’s political career commenced with his pro-democracy struggle against the dictatorship of General Ayub Khan. He is a founding member of Pakistan Tehreek-e-Insaf (PTI) that came into being in 1996. He remained a member of the PTI’s Central Executive Committee since its inception and has held the offices of PTI President of Sindh (1997-2001), Central Vice President (2001-2006) and Secretary General (2006-2013). In line with Constitution of Pakistan, he resigned from all the positions of PTI before assuming the prestigious office of the President.</p>
                <br />
                <p>During his tenure as the Secretary General of the party, Dr. Arif Alvi introduced social media platform in the politics of Pakistan. He was instrumental in holding intra-party election (2012-2013) and enabled millions of party members to digitally participate in the election process. He was elected as member of National Assembly from Karachi in 2013 and 2018 and was instrumental in drafting and the passage of many bills including one on Alternate Dispute Resolution. He also chaired the sub-committee of EVM’s, Digital Identification of voters and voting of overseas Pakistanis. The latter has finally come to fruition. Dr. Arif Alvi has keen interest in education and health sectors. Provision of basic facilities to the common man and uplifting the country’s image are very close to his heart. He considers people of Pakistan as the most precious asset and, therefore, accords special focus to human resource development in the country. He is happily married and has four children.</p>
            </div>
        </section>

    )
}
