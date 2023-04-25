import React from 'react'
import { SocialIcon } from "react-social-icons";

function Sidebar() {
  return (
        <div className="animate-pulse ">
            <div className=" flex flex-col space-y-1 mx-6  ">
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
  )
}

export default Sidebar