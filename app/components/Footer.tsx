import React from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaDribbble } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#1A1A2E] text-white px-6 md:px-20 py-12 ">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between gap-10 w-full">
                {/* Left: Logo & About */}
                <div className="md:w-[40%]">
                    <div className="flex items-center space-x-2 mb-4">
                        <Image src={Logo} alt="JobHuntly" width={30} height={30} />
                        <p className="font-bold text-[white] text-2xl">JobHuntly</p>
                        </div>
                    <p className="text-md text-[#C4C4C4] max-w-sm">
                        Great platform for the job seeker that passionate about startups. Find your dream job easier.
                    </p>
                </div>

                {/* Right: Links & Newsletter */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-20 md:w-[60%] justify-end">
                    {/* About */}
                    <div>
                        <h3 className="font-semibold mb-3 text-md">About</h3>
                        <ul className="space-y-5 text-md text-[#C4C4C4]">
                            <li>Companies</li>
                            <li>Pricing</li>
                            <li>Terms</li>
                            <li>Advice</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-md mb-3">Resources</h3>
                        <ul className="space-y-5 text-md text-[#C4C4C4]">
                            <li>Help Docs</li>
                            <li>Guide</li>
                            <li>Updates</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="max-w-xs">
                        <h3 className="font-semibold text-md mb-3">Get job notifications</h3>
                        <p className="text-md text-[#C4C4C4] mb-3">
                            The latest job news, articles, sent to your inbox weekly.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="px-4 py-3 bg-white text-black text-md w-full outline-none "
                            />
                            <button className="bg-[#4640DE] px-4 py-3 text-md font-semibold ">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#333] my-8"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#C4C4C4]">
                <p>2021 © JobHuntly. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0 text-white">
                    <FaInstagram className="hover:text-[#0077B5] cursor-pointer h-5 w-5" />
                    <FaDribbble className="hover:text-[#0077B5]  cursor-pointer h-5 w-5" />
                    <FaLinkedinIn className="hover:text-[#0077B5] cursor-pointer h-5 w-5" />
                    <FaTwitter className="hover:text-[#1DA1F2] cursor-pointer h-5 w-5" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
