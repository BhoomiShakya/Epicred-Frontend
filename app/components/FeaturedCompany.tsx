import React from 'react'
import Image from 'next/image';
import c1 from '../../public/companyLogo/1.png'
import c2 from '../../public/companyLogo/2.png'
import c3 from '../../public/companyLogo/3.png'
import c4 from '../../public/companyLogo/4.png'
import c5 from '../../public/companyLogo/5.png'


function FeaturedCompany() {
  
  return (
    <div className='flex flex-col mx-4 lg:mx-[9rem] pb-[3rem] '>
        <p className='text-[#7C8493]  font-sm pb-4'>Companies we helped grow</p>
        <div className="flex flex-wrap gap-6 justify-center lg:justify-between items-center w-full">
  {[c1, c2, c3, c4, c5].map((logo, index) => (
    <div key={index} className="w-28 sm:w-32 flex justify-center">
      <Image src={logo} alt={`Company ${index + 1}`} className="object-contain" />
    </div>
  ))}
</div>

    </div>
  )
}

export default FeaturedCompany