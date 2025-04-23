import React from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.png';
function Navbar() {
    return (
        <div className='flex justify-between items-center px-[5rem] py-5'>
            <div className='flex justify-center items-center gap-8'>
            <div className="flex justify-center items-center gap-2">
                <Image src={Logo} alt="Logo" width={40} height={40} />
                <p className="font-bold text-[#25324B] text-2xl">JobHuntly</p>
            </div>
            <div className='flex justify-center text-md items-center gap-4 text-[#515B6F]'>
                <p className='cursor-pointer'>Find Jobs</p>
                <p className='cursor-pointer'> Browse Companies</p>
            </div>
            </div>
            <div className="font-bold flex items-center gap-4">
                <button className="text-[#4640DE] px-5 py-3 cursor-pointer ">Login</button>
                <div className="h-10 w-px bg-[#D6DDEB]"></div>
                <button className="bg-[#4640DE] px-5 py-3 text-white cursor-pointer">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar