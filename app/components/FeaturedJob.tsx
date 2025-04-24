import React from 'react';
import Image from 'next/image';
import arrow from '../../public/rightarrow.png';
import img1 from '../../public/featuredCompany/1.png';
import img2 from '../../public/featuredCompany/2.png';
import img3 from '../../public/featuredCompany/3.png';
import img4 from '../../public/featuredCompany/4.png';
import img5 from '../../public/featuredCompany/5.png';
import img6 from '../../public/featuredCompany/6.png';
import img7 from '../../public/featuredCompany/7.jpg';
import img8 from '../../public/featuredCompany/8.png';


const jobs = [
  {
    id: 1,
    companyLogo: img1,
    title: 'Email Marketing',
    company: 'Revolut',
    location: 'Madrid, Spain',
    description: 'Revolut is looking for Email Marketing to help team ma...',
    type: 'Full Time',
    tags: ['Marketing', 'Design'],
  },
  {
    id: 2,
    companyLogo: img2,
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Fransisco, US',
    description: 'Dropbox is looking for Brand Designer to help develop n...',
    type: 'Full Time',
    tags: ['Design', 'Business'],
  },
  {
    id: 3,
    companyLogo: img3,
    title: 'Email Marketing',
    company: 'Pitch',
    location: 'Berlin, Germany',
    description: 'Pitch is looking for Customer Manager to join marketing t...',
    type: 'Full Time',
    tags: ['Marketing'],
  },
  {
    id: 4,
    companyLogo: img4,
    title: 'Visual Designer',
    company: 'Blinkist',
    location: 'Granada, Spain',
    description: 'Blinkist is looking for Visual Designer to help team desi...',
    type: 'Full Time',
    tags: ['Design'],
  },
  {
    id: 5,
    companyLogo: img5,
    title: 'Product Designer',
    company: 'ClassPass',
    location: 'Manchester, UK',
    description: 'ClassPass is looking for Product Designer to help us...',
    type: 'Full Time',
    tags: ['Marketing', 'Design'],
  },
  {
    id: 6,
    companyLogo: img6,
    title: 'Lead Designer',
    company: 'Canva',
    location: 'Ontario, Canada',
    description: 'Canva is looking for Lead Designer to help develop n...',
    type: 'Full Time',
    tags: ['Design', 'Business'],
  },
  {
    id: 7,
    companyLogo: img7,
    title: 'Brand Strategist',
    company: 'GoDaddy',
    location: 'Marseille, France',
    description: 'GoDaddy is looking for Brand Strategist to join team...',
    type: 'Full Time',
    tags: ['Marketing'],
  },
  {
    id: 8,
    companyLogo: img8,
    title: 'Data Analyst',
    company: 'Twitter',
    location: 'San Diego, US',
    description: 'Twitter is looking for Data Analyst to help team desi...',
    type: 'Full Time',
    tags: ['Technology'],
  },
];


function FeaturedJob() {
  return (
    <div className="px-6 md:px-16 py-12 lg:mx-[5rem]">
      {/* Top Heading */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#25324B]">
          Featured <span className="text-[#26A4FF]">jobs</span>
        </h1>
        <div className="hidden lg:flex items-center text-[#4640DE] cursor-pointer font-medium text-sm">
          Show all jobs
          <Image src={arrow} alt="arrow" className="ml-2 w-4 h-4" />
        </div>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border cursor-pointer border-[#E7EAF0] rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex justify-between items-start mb-4">
              <Image src={job.companyLogo} alt="Company Logo" className="w-10 h-10 object-contain" />
              <p className="text-[#4640DE] text-sm border border-[#4640DE] px-4 py-2 font-semibold">
                {job.type}
              </p>
            </div>
            <h2 className="text-lg font-bold text-[#25324B]">{job.title}</h2>
            <p className="text-sm text-[#515B6F] mb-2">{job.company} • {job.location}</p>
            <p className="text-sm text-[#7C8493] mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-xs font-medium rounded-full ${tag === 'Marketing'
                      ? 'bg-[#FFF0E4] text-[#F58A1F] font-semibold'
                      : tag === 'Design'
                        ? 'bg-[#E5F8ED] text-[#3DB071] font-semibold'
                        : 'bg-[#FBE9EB] text-[#F15263] font-semibold'
                    }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedJob;
