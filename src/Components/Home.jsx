import React from 'react';
import { ReactTyped } from "react-typed";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Tooltip from '@mui/material/Tooltip';

export default function Home() {

    const items = [
        'Full-Stack Developer',
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Material UI',
        'Bootstrap',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'MongoDB',
        'Data Structure And Algorithm'
    ];

    return (


        <section id="home" className="md:h-screen flex flex-wrap items-center justify-evenly pt-10 md:pt-0">
            <div className='w-full md:w-3/5 text-white px-5 py-20 lg:p-0'>
                <h2 className='text-2xl lg:text-4xl'>Hi, This is</h2>
                <h1 className='text-4xl lg:text-6xl mb-3 font-medium text-[#00ffff]'>Nitin Gayke</h1>
                <ReactTyped strings={items} typeSpeed={150} backSpeed={150} loop className='text-orange-500 font-medium text-2xl lg:text-4xl text-orange-500' />
                <p className='py-3 lg:text-lg text-sm text-slate-200'>Full-Stack developer with 10 months experience building responsive web application using Frontend, Backend and Database.</p>

                <a href="https://drive.google.com/file/d/1UkX_csxZOTdpffiqGFc3Lo8u8ZYiYKgk/view?usp=drivesdk" target='_blank' >
                    <button className='mt-4 lg:mt-8 text-lg text-[#00ffff] px-3 py-1 rounded hover:bg-[#00ffff] hover:text-[#161b1e] home-page-buttons'>Resume</button>
                </a>

                <ul className='flex pt-8 space-x-10 hidden lg:flex '>
                    <li>
                        <a href="https://github.com/nitingayke" target='_blank' className='p-2 pb-3 cursor-pointer rounded text-[#00ffff] home-page-buttons hover:bg-[#00ffff] hover:text-[#161b1e]' >
                            <Tooltip title="GitHub">
                                <GitHubIcon />
                            </Tooltip>
                        </a>
                    </li>
                    <li>
                        <a href="https://in.linkedin.com/in/nitin-gayke92" target='_blank' className='p-2 pb-3 cursor-pointer rounded text-[#00ffff] home-page-buttons hover:bg-[#00ffff] hover:text-[#161b1e]' >
                            <Tooltip title="LinkedIn">
                                <LinkedInIcon />
                            </Tooltip>
                        </a>
                    </li>
                    <li>
                        <a href="/" className='p-2 pb-3 cursor-pointer rounded text-[#00ffff] home-page-buttons hover:bg-[#00ffff] hover:text-[#161b1e]' >
                            <Tooltip title="Instagram">
                                <InstagramIcon />
                            </Tooltip>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='w-full md:w-2/5 px-5 md:pb-20 md:p-12 md:mt-10 lg:p-10'>
                <div className='p-1'>
                    <div className='home-user-image w-fit mx-auto w-auto md:w-full p-1'>
                        <img src="https://avatars.githubusercontent.com/u/157243300?s=400&u=df4c098b21b1fcedead8e1e8ee2e93007c71f812&v=4" alt="" className='rounded-full md:w-full md:h-auto mx-auto bg-[#161b1e] p-5 ' />
                    </div>
                </div>
            </div>
        </section>

    )
}