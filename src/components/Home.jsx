import React from 'react';
import HeroImage from '../assets/PHOTO3.jpg';
import {MdArrowRightAlt} from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
    return (
    <div name="home" className='w-full h-screen text-white bg-gradient-to-b from-black to-gray-800'>
        <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl font-bold text-white sm:text-7xl'>
                    I'm a Front End Developer, ML Enthusiast
                </h2>
                <p className='max-w-md py-4 text-gray-500'>
                With over two years of experience in crafting modern, responsive web applications,
                I specialize in technologies like React, Tailwind CSS, JavaScript, Typescript and Next.js.
                    My development journey also expands into the realm of Machine Learning,
                    where I’ve built AI based systems using tools such as Python, Pandas, NumPy, scikit-learn, and Hugging Face.
                            I love to turn ideas into impactful, user-focused digital solutions.


                </p>
                <div>
                    <Link to ="portfolio" smooth duration={500} className='flex items-center px-4 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500'>
                        PortFolio
                        <span className='px-3 duration-300 group-hover:rotate-90'>
                        <MdArrowRightAlt size={25}
                        className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile" 
                className='w-2/3 mx-auto rounded-2xl md:w-full'/>
            </div>
        </div>
    </div>
    );   
};

export default Home;
