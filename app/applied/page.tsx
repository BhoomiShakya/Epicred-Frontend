/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Pattern from '../../public/Pattern.png';
import Navbar from '../components/Navbar';

function page() {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("appliedJobs") || "[]");
    setAppliedJobs(storedJobs);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <Image
        src={Pattern}
        alt="Pattern"
        className="absolute inset-0 w-full lg:h-screen object-cover z-0 pointer-events-none"
        priority
      />
      <Navbar />

      {appliedJobs.length > 0 && (
        <section className="px-6 md:px-16 py-12 ">
          <h2 className="text-2xl font-bold text-[#25324B] mb-6">Applied Jobs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {appliedJobs.map((job) => (
              <div key={job.id} className="border bg-white border-[#E7EAF0] rounded-lg p-6 shadow-sm relative">
                <div className="absolute top-2 right-2 bg-green-100 text-green-600 px-3 py-1 text-xs rounded-full">Applied</div>
                <div className="flex justify-between items-start mb-4">
                  <Image src={job.companyLogo} alt="Company Logo" className="w-10 h-10 object-contain" />
                 
                </div>
                <h2 className="text-lg font-bold text-[#25324B]">{job.title}</h2>
                <p className="text-sm text-[#515B6F] mb-2">{job.company} • {job.location}</p>
                <p className="text-sm text-[#7C8493]">{job.description}</p>
                <p className="text-[#4640DE] text-center text-sm border border-[#4640DE] px-4 py-2 my-3 font-semibold">
                    {job.type}
                  </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

export default page;
