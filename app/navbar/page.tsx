import Link from 'next/link';
import React from 'react';
import {
  ClipboardListIcon,
  UserIcon,
  HomeIcon,
  CodeIcon,
  PhoneIncomingIcon,
} from '@heroicons/react/outline';

const Navbar = () => {
  return (

    
    <div className="bg-white hover:bg-[#2A2C39] hover:text-white text-gray-800  border border-gray-400 rounded-lg shadow font-bold text-sm animate-pulse px-5">
 {/* <div className="bg-white hover:bg-[#2A2C39] hover:text-white text-gray-800   border border-gray-400 rounded-lg shadow font-bold text-sm animate-pulse w-full rounded-lg md:w-[25%] ">  */}
      <ul className="flex space-x-4 justify-evenly text-center">
        <Link href="/" className="flex flex-col items-center">
          <HomeIcon className="h-14 w-10   hover:animate-spin " />
          <li className="animate-bounce">Home</li>
        </Link>
        <Link href="/aboutme" className="flex flex-col items-center">
          <UserIcon className="h-14 w-10  hover:animate-spin " />

          <li className="animate-bounce">About Me</li>
        </Link>
        <Link href="/skills" className="flex flex-col items-center">
          <CodeIcon className="h-14 w-10 hover:animate-spin " />
          <li className="animate-bounce">Skills</li>
        </Link>
        <Link href="/projects" className="flex flex-col items-center">
          <ClipboardListIcon className="h-14 w-10 hover:animate-spin " />
          <li className="animate-bounce">Projects</li>
        </Link>
        <Link href="/contact" className="flex flex-col items-center">
          <PhoneIncomingIcon className="h-14 w-10 hover:animate-spin " />
          <li className="animate-bounce">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
