import React from 'react';
import Image from 'next/image';
import rec from '../../public/rec.png';
import dash from '../../public/dash.png';

function Banner() {
  return (
    <div className="relative w-[85%] mx-auto h-[400px] md:h-[450px] overflow-hidden mb-[3rem]">
      {/* Background shape (rec) */}
      <Image
        src={rec}
        alt="background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center h-full px-8 md:px-20">
        <div className="text-white max-w-md space-y-4 mt-[1rem]">
          <h1 className="text-3xl md:text-6xl font-bold">Start posting<br />jobs today</h1>
          <p className="text-lg font-semibold">Start posting jobs for only $10.</p>
          <button className="bg-white text-[#4640DE] px-8 py-4 my-1  font-bold text-sm hover:bg-gray-200 transition">
            Sign Up For Free
          </button>
        </div>
        <div className=" lg:block lg:mt-[6rem]">
          <Image src={dash} alt="dashboard" width={600} height={400} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
