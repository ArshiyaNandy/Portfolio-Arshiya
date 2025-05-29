import React from 'react'

const About = () => {
return (
    <div name="about" className='w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
            <div className='pb-8'>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='mt-20 text-xl'>
                Hello, I'm Arshiya Nandy.
            I am currently pursuing my B.Tech from IEM, Kolkata.
            Over the past few years, I have developed a strong interest in
            developing websites and working with modern web technologies.
            Becoming a skilled Web Developer has always been a dream of mine,
            and recently I have also been diving deep into Machine Learning and Artificial Intelligence.
            My passion for coding started back in school and has stayed strong throughout college.
            I love building useful digital solutions and always seek new challenges.
            Apart from tech, I enjoy drawing, dancing, singing and exploring new ideas to keep my creativity active.
            My current focus is on growing my skillset and preparing myself to secure an impactful role in the tech industry.
            </p>
        </div>
    </div>
);
};

export default About
