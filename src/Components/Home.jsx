import React, { useState } from 'react';
import { ReactTyped } from "react-typed";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Tooltip from '@mui/material/Tooltip';

import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {
    const [open, setOpen] = useState(false);

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
        <>

            <section id="home" className="md:h-screen flex flex-wrap items-center justify-evenly pt-10 md:pt-0">
                <div className='w-full md:w-3/5 text-white px-5 py-20 lg:p-0'>
                    <h2 className='text-2xl lg:text-4xl'>Hi, This is</h2>
                    <h1 className='text-4xl lg:text-6xl mb-3 font-medium text-[#00ffff]'>Nitin Gayke</h1>
                    <ReactTyped strings={items} typeSpeed={150} backSpeed={150} loop className='text-white font-medium text-2xl lg:text-4xl text-orange-500' />
                    <p className='py-3 lg:text-lg text-sm text-slate-200'>Full-Stack developer with 8 months experience building responsive web application using Frontend, Backend and Database.</p>

                    <button onClick={() => setOpen(true)} className='mt-4 lg:mt-8 text-lg text-[#00ffff] px-3 py-1 rounded hover:bg-[#00ffff] hover:text-[#161b1e] home-page-buttons'>Resume</button>

                    <ul className='flex pt-8 space-x-10 hidden lg:flex '>
                        <li>
                            <a href="https://github.com/nitingayke" target='_blank' className='p-2 pb-3 cursor-pointer rounded text-[#00ffff] home-page-buttons hover:rounded-tl-xl hover:rounded-br-xl' >
                                <Tooltip title="GitHub">
                                    <GitHubIcon />
                                </Tooltip>
                            </a>
                        </li>
                        <li>
                            <a href="https://in.linkedin.com/in/nitin-gayke92" target='_blank' className='p-2 pb-3 cursor-pointer rounded text-[#00ffff] home-page-buttons hover:rounded-tl-xl hover:rounded-br-xl' >
                                <Tooltip title="LinkedIn">
                                    <LinkedInIcon />
                                </Tooltip>
                            </a>
                        </li>
                        <li>
                            <a href="/" className='p-2 pb-3 cursor-pointer rounded text-[#00ffff] home-page-buttons hover:rounded-tl-xl hover:rounded-br-xl' >
                                <Tooltip title="Instagram">
                                    <InstagramIcon />
                                </Tooltip>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='w-full md:w-2/5 px-5 md:pb-20 md:p-12 md:mt-10 lg:p-10'>
                    <div className='home-user-image w-fit p-1 mx-auto w-auto md:w-full'>
                        <img src="public/assets/user_image.png" alt="" className='rounded-full md:w-full md:h-auto mx-auto bg-[#161b1e] p-2 '/>
                    </div>
                </div>
            </section>

            <Dialog
                fullScreen
                open={open}
                onClose={() => setOpen(false)}
                TransitionComponent={Transition}
            >

                <button onClick={() => setOpen(false)} className='sticky top-3 left-3 rounded bg-slate-400 w-6' ><CloseIcon className='text-white' /></button>
                <div className='p-5 h-screen overflow-auto md:w-2/3 mx-auto'>
                    <img src="Public/assets/resume.png" alt="" />
                </div>
                <a
                    href="/assets/Resume.pdf"
                    download="nitingayke_resume.pdf"
                    className='absolute bottom-3 right-3 rounded w-fit p-2 shadow-md hover:shadow-xl '
                >
                    Download Resume In PDF
                </a>
            </Dialog>
        </>
    )
}