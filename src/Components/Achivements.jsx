// import React from 'react';

// export default function Achivements() {
//     return (
//         <section id="achivements" className="md:h-screen flex flex-col items-center justify-center">
//             <h1 className="text-4xl font-bold text-white">Achivements Section</h1>
//         </section>
//     )
// }

import React from 'react';

export default function Achievements() {
  const achievements = [
    {
      title: "LeetCode Problem Solving",
      description: "Solved 900+ problems on LeetCode, mastering techniques from brute force to optimal solutions.",
      date: "2024",
      link: "https://leetcode.com/u/Nitin_Gayke/",
    },
    {
      title: "DSA and Web Development Certification",
      description: "Successfully completed DSA and full-stack web development course with a certification.",
      date: "Oct 2023 - Nov 2024",
    },
    {
      title: "Participation in NASA Hackathon",
      description: "Participated in the NASA Hackathon, Created application that display about (PACE) Plankton, Aerosol, Cloud, Ocean Ecosystem.",
      date: "Sept 2024",
    },
    {
      title: "LeetCode Contest Rank",
      description: "Achieved a rank of 1356 in LeetCode Weekly Contest 427, showcasing problem-solving skills.",
      date: "2024",
      link: "https://leetcode.com/u/Nitin_Gayke/",
    },
  ];

  return (
    <section id="achivements" className="md:pt-16 px-4">
      <h2 className="text-4xl font-bold text-[#00ffff] text-center mb-5 pt-2">Achievements</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, idx) => (
          <div
            key={idx}
            className="border border-gray-600 hover:border-[#00ffff] p-5 rounded text-white hover:scale-105 transform transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
            <p className="text-sm text-orange-500 mb-2">{achievement.date}</p>
            <p className="text-gray-300">{achievement.description}</p>
            {
                achievement?.link && <div className='pt-3'><a href={achievement.link} target='_blank' className='text-[#00ffff] hover:text-orange-500' >View</a></div>
            }
          </div>
        ))}
      </div>
    </section>
  );
}
