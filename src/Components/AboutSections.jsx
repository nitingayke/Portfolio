import React, { useState } from 'react';

export default function Skills() {
    const [selectedSectionId, setSelectedSectionId] = useState("user-education");

    const handleAboutSection = (e) => {
        let target = e.target;
        document.querySelector(`.${selectedSectionId}`).classList.add("hidden");
        document.querySelector(`.${target.id}`).classList.remove("hidden");
        document.getElementById(selectedSectionId).classList.remove("text-orange-500");
        document.getElementById(target.id).classList.add("text-orange-500");
        setSelectedSectionId(target.id);
    }
    return (
        <>
            <ul className='flex space-x-3 pb-3'>
                <li>
                    <button onClick={handleAboutSection} className="relative group p-1 text-orange-500" id='user-education' >
                        Education
                        <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:left-0 group-hover:w-full rounded" ></span>
                    </button>
                </li>
                <li>
                    <button onClick={handleAboutSection} className="relative group p-1" id='user-skills' >
                        Skills
                        <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:left-0 group-hover:w-full rounded" ></span>
                    </button>
                </li>
                <li>
                    <button onClick={handleAboutSection} className="relative group p-1" id='user-experience' >
                        Experience
                        <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:left-0 group-hover:w-full rounded" ></span>
                    </button>
                </li>
            </ul>

            <div className='user-education' >
                <ul className="list-none">
                    <li className="mb-4 border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-900 hover:text-[#00ffff]">
                        <h3 className="font-semibold text-lg">Bachelor of Technology in Computer Science & Engineering</h3>
                        <p className="text-gray-400">Sandip University Nashik | Expected Graduation: Jul 2024</p>
                        <p className="text-gray-500">IV sem CGPA 8.04/10</p>
                    </li>
                    <li className="mb-4 border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-900 hover:text-[#00ffff]">
                        <h3 className="font-semibold text-lg">HSC (12th)</h3>
                        <p className="text-gray-400">KVN Naik College Jategaon | Jun 2021 - Apr 2022</p>
                        <p className="text-gray-500">Grade: 75.00%</p>
                    </li>
                    <li className="mb-4 border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-900 hover:text-[#00ffff]">
                        <h3 className="font-semibold text-lg">SSC (10th)</h3>
                        <p className="text-gray-400">Shree Sai Dnyan Mandir Jategaon | Jun 2019 - Apr 2020</p>
                        <p className="text-gray-500">Grade: 80.80%</p>
                    </li>
                </ul>
            </div>

            <div className="user-skills hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border border-gray-700 rounded-lg text-center p-4 cursor-pointer hover:bg-gray-900 hover:text-[#00ffff]">
                    <h3 className="font-semibold">Frontend</h3>
                    <p className="text-gray-400 text-sm">HTML, CSS, React, TailwindCSS, Bootstrap, Material-UI</p>
                </div>
                <div className="border border-gray-700 rounded-lg text-center p-4 cursor-pointer hover:bg-gray-900 hover:text-[#00ffff]">
                    <h3 className="font-semibold">Backend</h3>
                    <p className="text-gray-400 text-sm">Node.js, Express.js, RESTful APIs, Socket.io</p>
                </div>
                <div className="border border-gray-700 rounded-lg text-center p-4 cursor-pointer hover:bg-gray-900 hover:text-[#00ffff]">
                    <h3 className="font-semibold">Database</h3>
                    <p className="text-gray-400 text-sm">MongoDB, MySQL</p>
                </div>
                <div className="border border-gray-700 rounded-lg text-center p-4 cursor-pointer hover:bg-gray-900 hover:text-[#00ffff]">
                    <h3 className="font-semibold">Support Tools</h3>
                    <p className="text-gray-400 text-sm">Git/GitHub, VS Code, Thunder Client</p>
                </div>
                <div className="border border-gray-700 rounded-lg text-center p-4 cursor-pointer hover:bg-gray-900 hover:text-[#00ffff]">
                    <h3 className="font-semibold">Languages</h3>
                    <p className="text-gray-400 text-sm">JavaScript, Java, Python</p>
                </div>
                <div className="border border-gray-700 rounded-lg text-center p-4 cursor-pointer hover:bg-gray-900 hover:text-[#00ffff]">
                    <h3 className="font-semibold">Problem Solving</h3>
                    <p className="text-gray-400 text-sm">Data Structures and Algorithms</p>
                </div>
            </div>

            <div className='user-experience hidden space-y-4'>
                <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-900 cursor-pointer hover:text-[#00ffff]">
                    <h3 className="font-semibold">LogicHelp: Live Messaging Platform</h3>
                    <p className="text-gray-400 text-sm">Oct 2024 - Dec 2024</p>
                    <p className="text-gray-500 text-sm">
                        Developed a real-time problem-solving platform using React, Node.js, and MongoDB with features like AI-based bug detection, Courses, Live Doubt Solving and Live Challenges.
                    </p>
                </div>
                <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-900 cursor-pointer hover:text-[#00ffff]">
                    <h3 className="font-semibold">Zerodha Trading Application</h3>
                    <p className="text-gray-400 text-sm">Aug 2024 - Sept 2024</p>
                    <p className="text-gray-500 text-sm">
                        Built a responsive trading app with stock buying/selling features and real-time data visualization.
                    </p>
                </div>
                <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-900 cursor-pointer hover:text-[#00ffff]" >
                    <h3 className="font-semibold">JobHelper</h3>
                    <p className="text-gray-400 text-sm">Jun 2024 - Jul 2024</p>
                    <p className="text-gray-500 text-sm">
                        Designed a job portal with user authentication, achievement tracking, and job search APIs.
                    </p>
                </div>
            </div>

        </>
    )
}