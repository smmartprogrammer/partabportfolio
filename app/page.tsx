import Image from "next/image";
import { ChatAltIcon } from "@heroicons/react/outline";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <main className="bg-[#2A2C39] w-screen">
      <div className="flex justify-center items-center flex-wrap-reverse">
        <div className="md:w-[50%] flex mt-12">
          <div className=" flex justify-center animate-pulse  ">
            <div className=" flex flex-col items-center justify-center space-y-1 mx-6  ">
              <SocialIcon
                url="https://twitter.com/partabRparmar"
                bgColor="transparent"
                fgColor="white"
                className="hover:text-red-400"
              />
              <SocialIcon
                url="https://linkedin.com/in/jaketrent"
                bgColor="transparent"
                fgColor="white"
              />
              <SocialIcon
                url="https://whatsapp.com/jaketrent"
                bgColor="transparent"
                fgColor="white"
              />
              <SocialIcon
                url="https://gmail.com/jaketrent"
                bgColor="transparent"
                fgColor="white"
              />
            </div>
          </div>
          <div>
            <div className="md:text-4xl font-extrabold  ">
              <p>
                Hi, I'm <span className="text-red-400">Partab!</span>
              </p>
              <p className="font-light">
                I am developer, loves to solve problems
              </p>
            </div>
            <button
              className=" mt-5 flex items-center space-x-2
             border-4 bg-[#252734] text-white border-[#797B87]
              animate-pulse hover:bg-red-400 md:px-4 rounded-md  "
            >
              <ChatAltIcon className="md:h-14 md:w-10 hover:animate-spin " />
              <span className="md:animate-bounce"> Connect Me.. </span>
            </button>
          </div>
        </div>
        <div className="md:w-[50%] flex justify-center items-center   ">
          <div className="  flex justify-center items-center mt-6">
            <Image
              src="/partabaibackk.png"
              alt=""
              width={220}
              height={220}
              className="object-fit "
            />
          </div>
        </div>
      </div>
    </main>
  );
}
