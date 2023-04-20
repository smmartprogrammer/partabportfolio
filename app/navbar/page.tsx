import Link from 'next/link';
import React from 'react';
import {
  ClipboardListIcon,
  UserIcon,
  HomeIcon,
  CodeIcon,
  PhoneIncomingIcon,
} from '@heroicons/react/outline';
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="border-4 bg-[#252734] text-white border-[#797B87] animate-pulse rounded-lg w-[100%] md:w-[35%] m-3 border-none ">
      <ul className="flex space-x-4 justify-evenly text-center   ">
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
