"use client"
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const projects = (props: Props) => {
    const projects = [
        {
          id: 1,
          name: 'Pricing UI',
          description: 'a simple page displaying UI, of the Pricing Page of Product this has been created using nextjs, tailwind, design has been taken from figma, this is responsive design ',
          imageSrc: '/pricingUi.png',
          URL:"https://pricing-ui-tailwing.vercel.app//",
          
        },
        {
          id: 2,
          name: 'PanaverseDao',
          description: 'its a not a clone website, rather, panaversedao, website has been created with separate UI, and experience, by adding some animations and color combinations to attract the visitors.',
          imageSrc: '/panaverse.png',
          URL:"https://panaversemodernweb.vercel.app/",
        },
        {
          id: 3,
          name: 'Gold Price',
          description: 'This website is made for german client using react js technology, in this website client want dynamic gold calculator, which has been created approprietly, which is fetching data from global gold rate website and calculating here the grams and tolas prices .',
          imageSrc: '/goldprice.png',
          URL:"https://goldpricewithnewchanges.vercel.app/",
         },


        {
          id: 4,
          name: 'Todo App',
          description: 'a small todo app, has been created, where major emphasis has been given towards functionality, like it should perform CRUD operation thats all it.',
          imageSrc: '/todoappUI.png',
          URL:"https://goldpricewithnewchanges.vercel.app/",
        },


      ];
    return (
<div className="max-w-screen-lg mx-auto py-8 px-4 ">
<motion.h1
          className="text-3xl font-extrabold text-white sm:text "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5  ">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 p-4 rounded hover:scale-105 transition-all duration-500">
            <a href={project.URL}>
              <Image
                src={project.imageSrc}
                alt={`${project.name} screenshot`}
                width={500}
                height={500}
              />
            </a>
            <p className="mt-2 text-2xl">{project.name}</p>

            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



export default projects;
