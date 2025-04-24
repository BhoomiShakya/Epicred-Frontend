'use client';

import React, {useState} from 'react';
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

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('/api/search', {
                params: {
                    keyword: jobKeyword,
                    location: location,
                },
            });

            // You can route or update state with results here
            console.log('Search Results:', response.data);
        } catch (err) {
            console.error('Search failed:', err);
        }
    };

    return (
        <section className="relative h-screen px-6 py-12 md:py-20 lg:px-24">
            <Image
                src={Pattern}
                alt="Pattern"
                className="absolute inset-0 mt-[-5.3rem] w-screen h-screen object-cover z-0 pointer-events-none"
                priority
            />

            <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12">
                <div className='flex flex-col '>
                    <div className="flex-1 max-w-lg">
                        <h1 className="text-4xl md:text-7xl mt-[-6rem] font-extrabold text-[#25324B] leading-tight">
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
                        <p className="mt-12 text-[#7C8493] text-base md:text-lg">
                            Great platform for the job seeker that searching for new career heights and passionate about startups.
                        </p>
                    </div>
                    <div>
                        <div className="bg-white shadow-sm px-6 py-6 w-[50rem]">
                            <form onSubmit={handleSearch} className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <div className="flex items-center gap-5 border-b border-[#D6DDEB] flex-1">
                                    <Image src={Search} alt="Search" className="w-8 h-8" />
                                    <input
                                        type="text"
                                        placeholder="Job title or keyword"
                                        value={jobKeyword}
                                        onChange={(e) => setJobKeyword(e.target.value)}

                                        className="w-full py-3 outline-none placeholder:text-[#7C8493]/60  placeholder:text-lg text-sm"
                                    />
                                </div>

                                <div className="flex items-center gap-2 border-b border-[#D6DDEB] flex-1">
                                    <Image src={Location} alt="Location" className="w-8 h-8" />

                                    <select
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="w-full py-3 outline-none bg-transparent text-[#25324B] text-sm placeholder:text-[#7C8493]/60"
                                        defaultValue=""
                                    >
                                        <option value="" disabled className='placeholder:text-[#7C8493]/60'>
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
                                    className="bg-[#4640DE] text-white cursor-pointer px-6 py-3 font-semibold text-lg"
                                >
                                    Search my job
                                </button>
                            </form>
                        </div>
                        <p className='text-[#7C8493] my-3'>Popular : <span className='font-semibold text-[#7C8493] '>UI Designer, UX Researcher, Android, Admin</span></p>
                    </div>

                </div>

                <div className="flex-1">
                    <Image
                        src={Man}
                        alt="Man pointing"

                        className="w-screen h-[650px] mt-[-5rem] object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
