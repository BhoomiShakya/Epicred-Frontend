import React from 'react';
import Image from 'next/image';
import arrow from '../../public/rightarrow.png';
import arrow2 from '../../public/category/arrow2.png';

import { FaPencilRuler } from "react-icons/fa"; // Design
import { MdOutlineCrisisAlert } from "react-icons/md"; // Sales
import { IoMegaphoneOutline } from "react-icons/io5"; // Marketing
import { SlDocs } from "react-icons/sl"; // Finance
import { LuLaptopMinimal } from "react-icons/lu"; // Tech
import { FaCode } from "react-icons/fa6"; // Engineering
import { PiSuitcaseBold } from "react-icons/pi"; // Business
import { BsFillPeopleFill } from "react-icons/bs"; // HR

const categories = [
  { icon: <FaPencilRuler size={36} />, title: 'Design', jobs: '235 jobs available' },
  { icon: <MdOutlineCrisisAlert size={36} />, title: 'Sales', jobs: '756 jobs available' },
  { icon: <IoMegaphoneOutline size={36} />, title: 'Marketing', jobs: '140 jobs available' },
  { icon: <SlDocs size={36} />, title: 'Finance', jobs: '325 jobs available' },
  { icon: <LuLaptopMinimal size={36} />, title: 'Technology', jobs: '436 jobs available' },
  { icon: <FaCode size={36} />, title: 'Engineering', jobs: '542 jobs available' },
  { icon: <PiSuitcaseBold size={36} />, title: 'Business', jobs: '211 jobs available' },
  { icon: <BsFillPeopleFill size={36} />, title: 'Human Resource', jobs: '346 jobs available' },
];

function Category() {
  return (
    <div className="px-8 md:px-16 py-12">
      <div className="flex justify-between items-center mb-10 lg:mx-[5rem]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#25324B]">
          Explore by <span className="text-[#26A4FF]">category</span>
        </h1>
        <div className="hidden lg:flex items-center text-[#4640DE] cursor-pointer font-medium text-sm">
          Show all jobs
          <Image src={arrow} alt="arrow" className="ml-2 w-4 h-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-[1rem] lg:mx-[5rem]">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="group py-12 px-6 border bg-white text-[#25324B] border-[#E7EAF0] hover:bg-[#4640DE] hover:text-white transition-all duration-200 cursor-pointer"
          >
            <div className='flex lg:flex-col lg:justify-baseline justify-around lg:items-start  gap-5'>
                <div className=" text-[#4640DE] group-hover:text-white">
                    {cat.icon}
                </div>
                <div className='flex flex-col'>
                    <h3 className="font-bold text-lg mb-2">{cat.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                        <p className="text-[#7C8493] group-hover:text-white">{cat.jobs}</p>
                        <Image src={arrow2} alt="arrow" className="w-4 h-4" />
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex py-5 px-2 gap-6 lg:hidden items-center text-[#4640DE] cursor-pointer font-medium text-sm">
          Show all jobs
          <Image src={arrow} alt="arrow" className="ml-2 w-4 h-4" />
        </div>
    </div>
  );
}

export default Category;
