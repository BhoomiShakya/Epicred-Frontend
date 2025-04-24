'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Pattern from '../../public/Pattern.png';
import Man from '../../public/man.png';
import Underline from '../../public/underline.png';
import Search from '../../public/search.png';
import Location from '../../public/location.png';

const Hero = () => {
    const [jobKeyword, setJobKeyword] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await axios.get('/api/search', {
                params: {
                    keyword: jobKeyword,
                    location: location,
                },
            });

            console.log('Search Results:', response.data);
        } catch (err) {
            console.error('Search failed:', err);
        }
    };

    return (
        <section className="relative px-6 py-12 md:py-20 lg:px-24 overflow-hidden">
            <Image
                src={Pattern}
                alt="Pattern"
                className="absolute inset-0 w-full h-[70%] lg:h-[85%] object-cover z-0 pointer-events-none"
                priority
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Content */}
                <div className="flex flex-col w-full max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#25324B] leading-tight">
                        Discover more than{' '}
                        <span className="text-[#377DFF] relative inline-block">
                            5000+ Jobs
                            <Image
                                src={Underline}
                                alt="Underline"
                                className="absolute bottom-0 left-0 w-full translate-y-[40px]"
                            />
                        </span>
                    </h1>
                    <p className=" mt-12 lg:mt-8 text-[#7C8493] text-base md:text-lg max-w-2xl">
                        Great platform for the job seeker that searching for new career heights and passionate about startups.
                    </p>

                    <div className="mt-8 bg-white shadow-sm px-4 sm:px-6 py-6 w-full">
                        <form
                            onSubmit={handleSearch}
                            className="flex flex-col md:flex-row justify-between items-center gap-4"
                        >
                            {/* Job Input */}
                            <div className="flex items-center gap-4 border-b border-[#D6DDEB] flex-1 w-full">
                                <Image src={Search} alt="Search" className="w-6 h-6" />
                                <input
                                    type="text"
                                    placeholder="Job title or keyword"
                                    value={jobKeyword}
                                    onChange={(e) => setJobKeyword(e.target.value)}
                                    className="w-full py-3 outline-none placeholder:text-[#7C8493]/60 text-sm"
                                />
                            </div>

                            <div className="flex items-center gap-4 border-b border-[#D6DDEB] flex-1 w-full">
                                <Image src={Location} alt="Location" className="w-6 h-6" />
                                <select
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full py-3 outline-none bg-transparent text-[#25324B] text-sm"
                                >
                                    <option value="" disabled>
                                        Select Location
                                    </option>
                                    <option value="florence">Florence, Italy</option>
                                    <option value="milan">Milan, Italy</option>
                                    <option value="rome">Rome, Italy</option>
                                    <option value="venice">Venice, Italy</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#4640DE] text-white px-6 py-3 font-semibold text-lg w-full md:w-auto"
                            >
                                Search my job
                            </button>
                        </form>
                    </div>

                    <p className="text-[#7C8493] mt-3">
                        Popular:{' '}
                        <span className="font-semibold">UI Designer, UX Researcher, Android, Admin</span>
                    </p>
                </div>

                <div className="hidden lg:flex flex-1">
                    <Image
                        src={Man}
                        alt="Man pointing"
                        className="w-full h-auto lg:h-[650px] object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
