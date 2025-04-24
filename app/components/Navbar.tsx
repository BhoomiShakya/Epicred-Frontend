'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();


    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="relative z-50 px-6 py-4 md:px-20 ">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image src={Logo} alt="Logo" width={40} height={40} />
                    <p className="font-bold text-[#25324B] text-2xl">JobHuntly</p>
                    <div className='hidden lg:flex justify-center items-center gap-6 mx-4'>
                        <a href="#Featuredjobs"><p className="cursor-pointer">Find Jobs</p></a>
                        <a href="#categoryjobs"><p className="cursor-pointer">Browse Companies</p></a>
                        <p onClick={() => router.push('/applied')} className="cursor-pointer">Inprogress Application</p>
                    </div>
                </div>
                <div className="hidden lg:flex justify-between items-center gap-10 text-[#515B6F] text-md">

                    <div className="flex items-center gap-4 font-bold">
                        <button className="text-[#4640DE] px-4 py-2 cursor-pointer">Login</button>
                        <div className="h-6 w-px bg-[#D6DDEB]"></div>
                        <button className="bg-[#4640DE] text-white px-4 py-2 rounded-md cursor-pointer">Sign Up</button>
                    </div>
                </div>
                <button onClick={toggleMenu} className="lg:hidden">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            {isOpen && (
                <div className="fixed top-0 right-0 w-1/2 h-full lg:hidden flex flex-col gap-6 text-[#25324B] bg-white py-8 px-6 shadow-lg z-50">
                    <button onClick={toggleMenu} className="self-end">
                        <X size={28} />
                    </button>
                    <p className="cursor-pointer text-lg">Find Jobs</p>
                    <p className="cursor-pointer text-lg">Browse Companies</p>
                    <button className="text-[#4640DE] font-bold text-lg text-left">Login</button>
                    <button className="bg-[#4640DE] text-white py-3 rounded-md font-bold text-lg">Sign Up</button>
                </div>
            )}

        </nav>
    );
}

export default Navbar;
