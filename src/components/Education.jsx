import React from 'react';

const Education = () => {
  return (
    <div name="education" className='w-full h-screen text-white bg-gradient-to-b from-black to-gray-800'>
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
        <div className='pb-8'>
          <p className='inline text-4xl font-bold border-b-4 border-gray-500'>
            Education
          </p>
        </div>

        <div className='text-xl mt-10 space-y-6'>
          <p>
            <span className='font-semibold'>Institute of Engineering and Management</span>, B.Tech (2022–2026) – <span className='text-gray-300'>9.22 CGPA</span>
          </p>
          <p>
            <span className='font-semibold'>Indira Gandhi Memorial High School</span>, CBSE (2021) – <span className='text-gray-300'>89%</span>
          </p>
          <p>
            <span className='font-semibold'>Sri Aurobindo Institute of Education</span>, ICSE (2019) – <span className='text-gray-300'>94.16%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
