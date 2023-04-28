"use client"
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="antialiased  text-gray-800">
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
      <motion.h1
          className="text-3xl font-extrabold text-white sm:text-4xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>

            <div
                className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"
            ></div>
            <div className="relative z-10">
                <img
                    src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                    alt=""
                    className="timeline-img"
                />
                <div className="timeline-container">
                    <div className="timeline-pointer" aria-hidden="true"></div>
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <span
                            className="font-bold text-indigo-600 text-sm tracking-wide"
                            >Jan 2021</span
                        >
                        <h1 className="text-2xl font-bold pt-1">
                            An amazing travel
                        </h1>
                        <p className="pt-1">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ex iste suscipit reiciendis, perferendis vel
                            consequuntur cupiditate ad commodi provident,
                            sapiente veniam sed autem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative z-10">
                <img
                    src="https://images.pexels.com/photos/3223552/pexels-photo-3223552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                    alt=""
                    className="timeline-img"
                />
                <div className="timeline-container timeline-container-left">
                    <div
                        className="timeline-pointer timeline-pointer-left"
                        aria-hidden="true"
                    ></div>
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <span
                            className="font-bold text-indigo-600 text-sm tracking-wide"
                            >Aug 2020</span
                        >
                        <h1 className="text-2xl font-bold pt-1">A trip far away</h1>
                        <p className="pt-1">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ex iste suscipit reiciendis, perferendis vel
                            consequuntur cupiditate ad commodi provident,
                            sapiente veniam sed
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative z-10">
                <img
                    src="https://images.pexels.com/photos/2906807/pexels-photo-2906807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                    alt=""
                    className="timeline-img"
                />
                <div className="timeline-container">
                    <div className="timeline-pointer" aria-hidden="true"></div>
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <span
                            className="font-bold text-indigo-600 text-sm tracking-wide"
                            >March 2020</span
                        >
                        <h1 className="text-2xl font-bold pt-1">Solo Trip</h1>
                        <p className="pt-1">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ex iste suscipit reiciendis, perferendis vel
                            consequuntur cupiditate ad commodi provident,
                            sapiente veniam sed autem, perspiciatis
                        </p>
                    </div>
                </div>
            </div>
        </div>    </div>
  );
};

export default Projects;
