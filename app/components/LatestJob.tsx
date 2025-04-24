'use client'
import React from 'react';
import Image from 'next/image';
import arrow from '../../public/rightarrow.png';
import Pattern from '../../public/Pattern.png';

import img1 from '../../public/latestjob/1.png';
import img2 from '../../public/latestjob/2.png';
import img3 from '../../public/latestjob/3.png';
import img4 from '../../public/latestjob/4.png';
import img5 from '../../public/latestjob/5.png';
import img6 from '../../public/latestjob/6.png';
import img7 from '../../public/latestjob/7.png';
import img8 from '../../public/latestjob/8.png';

const jobs = [
  {
    id: 1,
    logo: img1,
    title: 'Social Media Assistant',
    company: 'Nomad',
    location: 'Paris, France',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 2,
    logo: img2,
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Fransisco, USA',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 3,
    logo: img3,
    title: 'Interactive Developer',
    company: 'Terraform',
    location: 'Hamburg, Germany',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 4,
    logo: img4,
    title: 'HR Manager',
    company: 'Packer',
    location: 'Lucern, Switzerland',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 5,
    logo: img5,
    title: 'Social Media Assistant',
    company: 'Netlify',
    location: 'Paris, France',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 6,
    logo: img6,
    title: 'Brand Designer',
    company: 'Maze',
    location: 'San Fransisco, USA',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 7,
    logo: img7,
    title: 'Interactive Developer',
    company: 'Udacity',
    location: 'Hamburg, Germany',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 8,
    logo: img8,
    title: 'HR Manager',
    company: 'Webflow',
    location: 'Lucern, Switzerland',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
];

function LatestJob() {
  return (
    <div className="relative px-6 md:px-16 py-12 lg:mx-[5rem] lg:mt-[5rem]">
      <Image
        src={Pattern}
        alt="Pattern"
        className="absolute inset-0 w-full h-[70%] lg:h-[85%] object-cover z-0 pointer-events-none"
        priority
      />
      <div className="flex justify-between items-center mb-10 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#25324B]">
          Latest <span className="text-[#26A4FF]">jobs open</span>
        </h1>
        <div className="hidden lg:flex items-center text-[#4640DE] cursor-pointer font-medium text-sm">
          Show all jobs
          <Image src={arrow} alt="arrow" className="ml-2 w-4 h-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {jobs.map((job) => (
          <div key={job.id} className="flex items-center bg-white px-4 py-6  shadow-sm hover:shadow-md transition">
            <Image src={job.logo} alt={`${job.company} Logo`} className="w-12 h-12 object-contain mr-4" />
            <div>
              <h2 className="text-lg font-bold text-[#25324B]">{job.title}</h2>
              <p className="text-sm text-[#515B6F] mb-2">
                {job.company} • {job.location}
              </p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-xs px-3 py-1 border rounded-full  font-semibold ${
                      tag === 'Full-Time'
                        ? 'text-[#00B087] border-[#00B087] bg-[#E0F7F1]'
                        : tag === 'Marketing'
                        ? 'text-[#FFB836] border-[#FFB836] bg-[#FFF4E1]'
                        : 'text-[#4640DE] border-[#4640DE] bg-[#F4F4FF]'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestJob;
