import Image from "next/image";
import { ChatAltIcon } from "@heroicons/react/outline";
import { SocialIcon } from "react-social-icons";
import Sidebar from "@/component/Sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#2A2C39] w-screen  ">
      <div className="flex justify-center items-center flex-wrap-reverse  ">
        <div className="md:w-[50%] flex md:mt-12 sm:align-top ">
          <div className="hidden md:block mx-10 ">
            <Sidebar />
          </div>
          <div className="flex flex-col items-center md:items-start mt-5 md:mt-0 ">
            <div className="text-2xl md:text-4xl font-extrabold flex flex-col items-center md:items-start text-center md:text-left  ">
              <p className="text-4xl mb-2 md:mb-0 text-center md:text-left">
                Hi, I am <span className="text-red-400">Partab!</span>
              </p>
              <p className="font-light text-center md:text-left">
                I am developer, loves to solve problems
              </p>
              <Link href="/contact">
                <button className=" my-5 flex items-center space-x-2 py-2  px-4 self-end  bg-white hover:bg-[#2A2C39] hover:text-white text-gray-800   border border-gray-400 rounded-lg shadow font-bold text-sm animate-pulse">
                  <ChatAltIcon className="h-10 w-8 md:h-14 md:w-10 hover:animate-spin " />
                  <p>Connect Me...</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] flex justify-center items-center ">
          <div className="block md:hidden  ">
            <Sidebar />
          </div>
          <div className=" relative flex justify-center items-center mt-6  ">
            <div className=" relative  ">
              <Image
                layout="intrinsic"
                src="/partabaibackk.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
