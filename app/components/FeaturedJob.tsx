'use client';

import React, { useState } from 'react';
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
import { FaTimes } from 'react-icons/fa';


const jobs = [
  {
    id: 1,
    companyLogo: img1,
    title: 'Email Marketing',
    company: 'Revolut',
    location: 'Madrid, Spain',
    description: 'Revolut is looking for an Email Marketing expert to help manage marketing campaigns and increase customer engagement.',
    type: 'Full Time',
    tags: ['Marketing', 'Design'],
  },
  {
    id: 2,
    companyLogo: img2,
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Francisco, US',
    description: 'Dropbox is hiring a Brand Designer to help shape and evolve the brand identity across all digital platforms.',
    type: 'Full Time',
    tags: ['Design', 'Business'],
  },
  {
    id: 3,
    companyLogo: img3,
    title: 'Email Marketing',
    company: 'Pitch',
    location: 'Berlin, Germany',
    description: 'Pitch is looking for an Email Marketing specialist to join the marketing team and lead customer retention efforts.',
    type: 'Full Time',
    tags: ['Marketing'],
  },
  {
    id: 4,
    companyLogo: img4,
    title: 'Visual Designer',
    company: 'Blinkist',
    location: 'Granada, Spain',
    description: 'Blinkist is hiring a Visual Designer to work with product and marketing teams to deliver creative digital assets.',
    type: 'Full Time',
    tags: ['Design'],
  },
  {
    id: 5,
    companyLogo: img5,
    title: 'Product Designer',
    company: 'ClassPass',
    location: 'Manchester, UK',
    description: 'ClassPass is hiring a Product Designer to build seamless user experiences and improve product usability.',
    type: 'Full Time',
    tags: ['Marketing', 'Design'],
  },
  {
    id: 6,
    companyLogo: img6,
    title: 'Lead Designer',
    company: 'Canva',
    location: 'Ontario, Canada',
    description: 'Canva is looking for a Lead Designer to manage the design team and develop next-gen visual tools for creators.',
    type: 'Full Time',
    tags: ['Design', 'Business'],
  },
  {
    id: 7,
    companyLogo: img7,
    title: 'Brand Strategist',
    company: 'GoDaddy',
    location: 'Marseille, France',
    description: 'GoDaddy is hiring a Brand Strategist to craft messaging frameworks and oversee brand storytelling initiatives.',
    type: 'Full Time',
    tags: ['Marketing'],
  },
  {
    id: 8,
    companyLogo: img8,
    title: 'Data Analyst',
    company: 'Twitter',
    location: 'San Diego, US',
    description: 'Twitter is hiring a Data Analyst to work with large-scale datasets and extract insights to inform product decisions.',
    type: 'Full Time',
    tags: ['Technology'],
  },
];


function FeaturedJob() {

  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleApply = () => {
    const updatedJobs = JSON.parse(localStorage.getItem("appliedJobs") || "[]");
    const isAlreadyApplied = updatedJobs.some(job => job.id === selectedJob.id);
    if (!isAlreadyApplied) {
      const newJobs = [...updatedJobs, selectedJob];
      localStorage.setItem("appliedJobs", JSON.stringify(newJobs));
    }
  
    setFormData({ name: '', email: '', phone: '' });
    closeModal();
  };
  

  const openModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setModalOpen(false);
  };

  return (
    <div id="Featuredjobs" className="px-6 md:px-16 py-12 lg:mx-[5rem]">
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
            onClick={() => openModal(job)}
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
      {/* Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black/60  z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-2xl rounded-lg py-[2rem] px-[2rem] relative mx-3">
            <button onClick={closeModal} className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-red-500">
              <FaTimes size={20} />
            </button>

            {/* Job Info */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-[#25324B]">{selectedJob.title}</h2>
                <span className="text-sm bg-[#E0E7FF] text-[#4640DE] px-3 py-1 rounded">{selectedJob.type}</span>
              </div>
              <p className="text-sm text-[#515B6F]">{selectedJob.company} • {selectedJob.location}</p>
              <p className="text-sm text-[#7C8493] mt-2">{selectedJob.description}</p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded border-gray-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border rounded border-gray-300"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border rounded border-gray-300"
              />
              <div className="flex justify-between gap-4 mt-4">
                <button
                  type="button"
                  onClick={handleApply}
                  className="bg-[#4640DE] text-white px-6 py-2 rounded hover:bg-indigo-700"
                >
                  Apply
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeaturedJob;
