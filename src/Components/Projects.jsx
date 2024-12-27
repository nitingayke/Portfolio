import React, { useState } from 'react';
import MoreIcon from '@mui/icons-material/More';

export default function Projects() {
  return (
    <section id="projects" className="md:pt-16 px-3">
      <h1 className="text-4xl font-bold text-[#00ffff] text-center lg:block pt-2 pb-5">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            "name": "LogicHelp",
            "date": "Oct 2024 - Dec 2024",
            "features": [
              "DSA Problem Solving: Platform to filter and solve DSA problems with solutions and code.",
              "Live Doubt Solving & Challenges: Engage in live doubt resolution and real-time coding challenges.",
              "AI Bug Detection & Job Updates: AI-based bug detection, live job updates, and course suggestions."
            ],
            "tech": ["React", "Bootstrap", "Material-UI", "Monaco Editor", "Node.js", "Express", "MongoDB", "Socket.io", "Chart.js", "APIs"],
            "link": "https://logichelp.onrender.com"
          },
          {
            "name": "Zerodha",
            "date": "Aug 2024 - Sept 2024",
            "features": [
              "Stock Trading: Full-stack application to buy and sell stocks.",
              "Real-Time Stock Data: Fetch live stock data and visualize trends with dynamic charts.",
              "Responsive Design & Authentication: Responsive UI with secure user authentication."
            ],
            "tech": ["Node.js", "Express", "MongoDB", "JavaScript", "CSS", "Bootstrap", "Chart.js"],
            "link": "https://github.com/nitingayke/zerodha-application"
          },
          {
            "name": "JobHelper",
            "date": "Jun 2024 - July 2024",
            "features": [
              "Job Search Platform: Help users find jobs, internships, and hackathons.",
              "User Achievements: Track and provide feedback on user achievements.",
              "Authentication & API Integration: Secure login with Passport.js and real-time API data."
            ],
            "tech": ["EJS", "Node.js", "Express", "MongoDB", "Passport.js", "Cloudinary", "Bootstrap"],
            "link": "https://jobhelperwebapp.onrender.com"
          }
        ].map((data, idx) => (
          <div className="border border-gray-600 p-3 text-white rounded transform hover:scale-105 transition-transform duration-500 flex flex-col h-full hover:border-[#00ffff]" key={idx}>

            <div className='flex flex-col flex-grow'>
              <h3 className="text-xl font-bold pb-1">{data.name}</h3>
              <p className="text-orange-500 text-sm pb-2">{data.date}</p>

              <p className="text-[#00ffff] text-sm pb-1">Features</p>
              <ul className="list-disc list-inside text-gray-300 pb-3">
                {data.features.map((feature, idx) => (
                  <li key={idx} className="pb-1">
                    <span className='text-gray-100'>{feature.split(":")[0]}:</span>
                    <span>{feature.split(":")[1]}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[#00ffff] text-sm py-2">Technology</p>
              <div className="flex flex-wrap  text-sm">
                {data.tech.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 rounded-full mb-2 me-1 border border-gray-700 h-fit">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* View Project Button */}
            <div className="text-center mt-auto pt-5">
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-orange-500 border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-white transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-end py-3">
        <a
          href="https://github.com/nitingayke"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md text-[#00ffff] flex items-center pe-2 hover:text-orange-500"
          title="Explore more projects on GitHub"
        >
          View More Projects
          <MoreIcon className="ms-1 rotate-45 mb-1" style={{ fontSize: "1rem" }} />
        </a>
      </div>
    </section>
  );
}
