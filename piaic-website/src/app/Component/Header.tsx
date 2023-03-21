import React from 'react'
import Image from 'next/image'
import piaic from '../../../public/piaic.png'

export default function Header() {
    return (
        <header className="container flex min-w-full items-center ">
            <div className='ml-[50px] mt-[10px]'>
                <Image src={piaic} alt='PIAIC Logo' width={80} height={100} />
            </div>

            <div className="container flex gap-x-[52px] text-[20px] font-bold text-white justify-end">
                <a href="/"> Apply</a>
                <a href="/">Program</a>
                <a href="/">About</a>
                <a href="/">WIT</a>
            </div>
        </header>

    )
}
