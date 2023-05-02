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
          name: 'Todo App',
          description: 'a small todo app, has been created, where major emphasis has been given towards functionality, like it should perform CRUD operation thats all it.',
          imageSrc: '/todoappUI.png',
          URL:"https://goldpricewithnewchanges.vercel.app/",
        },
        {
            id: 3,
            name: 'PanaverseDao',
            description: 'its a not a clone website, rather, panaversedao, website has been created with separate UI, and experience, by adding some animations and color combinations to attract the visitors.',
            imageSrc: '/panaverse.png',
            URL:"https://goldpricewithnewchanges.vercel.app/",
          },
          {
            id: 4,
            name: 'Gold Price',
            description: 'This website is made for german client using react js technology, in this website client want dynamic gold calculator, which has been created approprietly, which is fetching data from global gold rate website and calculating here the grams and tolas prices .',
            imageSrc: '/goldprice.png',
            URL:"https://goldpricewithnewchanges.vercel.app/",
          },


        // Add more projects here
      ];
    return (
<div className="max-w-screen-lg mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 rounded p-4">
            <a href={project.URL}>
              <img
                src={project.imageSrc}
                alt={`${project.name} screenshot`}
                className="rounded"
              />
            </a>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


//     return (
//     <div className="antialiased  text-gray-800">
//       <div className="relative container mx-auto px-6 flex flex-col space-y-8">
//       <motion.h1
//           className="text-3xl font-extrabold text-white sm:text-4xl"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Projects
//         </motion.h1>

//             <div
//                 className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"
//             ></div>
//             <div className="relative z-10">
//                 <img
//                     src="/pricingUI.png"
//                     alt=""
//                     className="timeline-img"
//                 />
//                 <div className="timeline-container">
//                     <div className="timeline-pointer" aria-hidden="true"></div>
//                     <div className="bg-white p-6 rounded-md shadow-md">
//                         <span
//                             className="font-bold text-indigo-600 text-sm tracking-wide"
//                             >Jan 2023</span
//                         >
//                         <h1 className="text-2xl font-bold pt-1">
//                             Pricing UI
//                         </h1>
//                         <p className="pt-1">
//                             a simple page displaying UI, of the Pricing Page of Product
//                             this has been created using nextjs, tailwind, design has been 
//                             taken from figma, this is responsive design 
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="relative z-10">
//                 <img
//                     src="https://images.pexels.com/photos/3223552/pexels-photo-3223552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
//                     alt=""
//                     className="timeline-img"
//                 />
//                 <div className="timeline-container timeline-container-left">
//                     <div
//                         className="timeline-pointer timeline-pointer-left"
//                         aria-hidden="true"
//                     ></div>
//                     <div className="bg-white p-6 rounded-md shadow-md">
//                         <span
//                             className="font-bold text-indigo-600 text-sm tracking-wide"
//                             >Aug 2020</span
//                         >
//                         <h1 className="text-2xl font-bold pt-1">A trip far away</h1>
//                         <p className="pt-1">
//                             Lorem ipsum dolor, sit amet consectetur adipisicing
//                             elit. Ex iste suscipit reiciendis, perferendis vel
//                             consequuntur cupiditate ad commodi provident,
//                             sapiente veniam sed
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="relative z-10">
//                 <img
//                     src="https://images.pexels.com/photos/2906807/pexels-photo-2906807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
//                     alt=""
//                     className="timeline-img"
//                 />
//                 <div className="timeline-container">
//                     <div className="timeline-pointer" aria-hidden="true"></div>
//                     <div className="bg-white p-6 rounded-md shadow-md">
//                         <span
//                             className="font-bold text-indigo-600 text-sm tracking-wide"
//                             >March 2020</span
//                         >
//                         <h1 className="text-2xl font-bold pt-1">Solo Trip</h1>
//                         <p className="pt-1">
//                             Lorem ipsum dolor, sit amet consectetur adipisicing
//                             elit. Ex iste suscipit reiciendis, perferendis vel
//                             consequuntur cupiditate ad commodi provident,
//                             sapiente veniam sed autem, perspiciatis
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>    </div>
//   );
// };

export default projects;
