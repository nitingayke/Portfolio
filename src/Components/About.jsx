import React from 'react';
import Skills from "./AboutSections.jsx"

export default function About() {

    return (
        <section id="about" className="lg:h-screen text-white pt-10 px-4">

            <div className='md:flex items-center pb-5 md:pt-10 lg:pt-16'>
                <div className='md:w-1/2 pb-5 pt-10 md:py-0 md:px-3'>
                    <h1 className='text-4xl font-bold text-[#00ffff]'>About Me</h1>
                </div>

                <div className='w-3/3'>
                    <p className='pb-2'> Hello! I'm Nitin Valmik Gayke, a Full-Stack Developer with 10 months of experience in building responsive and
                        user-friendly web applications using frontend, backend, and database technologies, including Express.js.</p>

                    <p className='pb-2'> In addition to my development skills, I have a strong foundation in Java and Data Structures & Algorithms,
                        with over 900 problems solved on LeetCode.</p>
                </div>
            </div>

            <Skills />

        </section >
    )
}