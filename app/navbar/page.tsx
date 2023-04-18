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
    <div className="border-2 border-black flex justify-center items-center ">
      <ul className="flex space-x-4 ">
        <Link href="/" className="flex flex-col items-center">
          <HomeIcon className="h-14 w-10 " />
          <li>Home</li>
        </Link>
        <Link href="/aboutme" className="flex flex-col items-center">
          <UserIcon className="h-14 w-10 " />

          <li>About Me</li>
        </Link>
        <Link href="/skills" className="flex flex-col items-center">
          <CodeIcon className="h-14 w-10 " />
          <li>Skills</li>
        </Link>
        <Link href="/projects" className="flex flex-col items-center">
          <ClipboardListIcon className="h-14 w-10 " />
          <li>Projects</li>
        </Link>
        <Link href="/contact" className="flex flex-col items-center">
          <PhoneIncomingIcon className="h-14 w-10 " />
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
