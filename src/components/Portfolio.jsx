import React from 'react';
import arrayDestruct from '../assets/portfolio/ai-mock.jpg';
import instalNode from '../assets/portfolio/urai.jpg';
import navbar from '../assets/portfolio/ai-medical.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demo: 'https://ai-interviewer-by-arshiya.vercel.app/sign-in',
      code: 'https://github.com/ArshiyaNandy/Arshiya-AI-Interviewer.git',
    },
    {
      id: 2,
      src: instalNode,
      demo: 'https://urai-arshiya.vercel.app/',
      code: 'https://github.com/ArshiyaNandy/URAI.git',
    },
    {
      id: 3,
      src: navbar,
      demo: 'https://ai-medical-assistant-arshiya.streamlit.app/',
      code: 'https://github.com/ArshiyaNandy/AI-Medical-Assistant.git',
    },
  ];

  return (
    <div name="portfolio" className='w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-screen'>
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
        <div className='pb-8'>
          <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4'>
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className='rounded-lg shadow-md shadow-gray-600'>
              <img
                src={src}
                alt="project screenshot"
                className='duration-200 rounded-md hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <a href={demo} target="_blank" rel="noopener noreferrer" className='w-1/2'>
                  <button className='w-full px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                </a>
                <a href={code} target="_blank" rel="noopener noreferrer" className='w-1/2'>
                  <button className='w-full px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
