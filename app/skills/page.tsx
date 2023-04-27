"use client"
// import Link from 'next/link';
// import React from 'react';

// type Props = {};

// const Skills = (props: Props) => {
//   return <div>Skills</div>;
// };

// export default Skills;

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 80 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Git", level: 80 },
];

type Props = {};


const Skills = (props: Props) => {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl font-extrabold text-white sm:text-4xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h1>
        <div className="mt-12">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-8">
              <h2 className="text-lg font-medium text-white">{skill.name}</h2>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
                  <motion.div
                    className="bg-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Skills;
