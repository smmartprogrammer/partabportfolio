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
            <div className="text-2xl md:text-4xl font-extrabold text-center md:text-left ">
              <p className="text-4xl mb-2 md:mb-0">
                Hi, I am <span className="text-red-400">Partab!</span>
              </p>
              <p className="font-light">
                I am developer, loves to solve problems
              </p>
              <Link href="/contact">
                <button className="mt-5 flex items-center space-x-2 inline-block self-end  bg-white hover:bg-[#2A2C39] hover:text-white text-gray-800  py-2 px-6 border border-gray-400 rounded-lg shadow font-bold text-sm">
                  <ChatAltIcon className="h-10 w-8 md:h-14 md:w-10 hover:animate-spin " />
                  <p>Connect Me..</p>
                  
                </button>
              </Link>
            </div>

            {/* <button
              className=" mt-5 flex items-center space-x-2 
             border-4 bg-[#252734] text-white border-[#797B87]
              animate-pulse hover:bg-red-400 w-[45%] md:w-[32%] px-2 md:px-4 rounded-md  "
            >
              <ChatAltIcon className="h-10 w-8 md:h-14 md:w-10  hover:animate-spin " />
              <span className="md:animate-bounce  "> Connect Me... </span>
            </button> */}
          </div>
        </div>
        <div className="md:w-[50%] flex justify-center items-center ">
          <div className="block md:hidden  ">
            <Sidebar />
          </div>
          <div className=" flex justify-center items-center mt-6  ">
            <Image
              layout="responsive"
              src="/partabaibackk.png"
              alt=""
              width={640}
              height={747}
              // width={180}
              // height={200}
              // sizes="
              // (max-width: 320px) 20vw,
              // (max-width: 481px) 50vw,
              // (max-width: 768px) 100vw,
              // (max-width: 1200px) 50vw,
              // 33vw"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
