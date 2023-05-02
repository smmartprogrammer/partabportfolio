"use client"
import Link from "next/link";
import React from "react";

type Props = {};

import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left">

        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/profile.jpg"
            alt="Profile Image"
            width={250}
            height={200}
            className="rounded-full mx-auto md:mx-none"
          />
        </motion.div>
        <motion.div
          className="text-base text-gray-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl tracking-wide text-white sm:text-4xl">
              About Me
            </h1>
            <p className="mt-4">
              I'm the experienced web developers who specialize in creating custom web applications using Next.js and Tailwind CSS.
            </p>
            <p className="mt-4">
              I belive in delivering high-quality websites that exceed client's expectations. I take pride in my attention to detail and commitment to delivering projects on time and within budget.
            </p>
            <p className="mt-4">
              At my core, I believe that a successful website requires more than just technical expertise. That's why I prioritize user experience in all of my projects. I strive to create websites that are intuitive, easy to navigate, and visually appealing.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
