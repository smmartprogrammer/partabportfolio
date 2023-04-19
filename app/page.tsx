import Image from 'next/image';
import { ChatAlt2Icon, ChatAltIcon, ChatIcon } from '@heroicons/react/outline';

import { Inter } from 'next/font/google';

export default function Home() {
  return (
    <main className="bg-[#2A2C39] w-screen">
      <div className="flex justify-center items-center flex-wrap  ">
        <div className="md:w-[50%] flex justify-center items-center  ">
          <Image src="/partabb.png" alt="" width={300} height={100} />
        </div>

        <div className="md:w-[50%]  ">
          <div className="text-4xl font-extrabold ">
            <p>
              Hi, I'm <span className="text-red-400">Partab!</span>{' '}
            </p>
            <p className="font-light">
              I am developer, loves to solve problems
            </p>
          </div>
          <button className=" mt-5 flex items-center space-x-2   border-4 bg-[#252734] text-white border-[#797B87] animate-pulse hover:bg-red-400 text-white  px-4 rounded-md ">
            <ChatAltIcon className="h-14 w-10 hover:animate-spin " />
            <span className=" animate-bounce"> Connect Me.. </span>
          </button>
          <div className="flex space-x-4 mt-6 animate-bounce">
            <img src="linkedin.png" width={30} height={30} alt="" />
            <img src="insta.png" width={30} height={30} alt="" />
            <img src="twiter.png" width={30} height={30} alt="" />
            <img src="watsap.png" width={30} height={30} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}
