import { SocialIcon } from "react-social-icons";

import React from "react";

const Contact = () => {
  return (
    <div className="antialiased bg-[#2A2C39] ">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md-space-x-6  space-y-6 bg-[#252734] w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-xl text-white ">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-cyan-100 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                totam cum, neque enim autem soluta necessitatibus aspernatur.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <SocialIcon
                  url="https://whatsapp.com/jaketrent"
                  bgColor="transparent"
                  fgColor="white"
                  className="text-teal-300 text-xl"
                />
                <span>+92 304 788 7003</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <SocialIcon
                  url="https://gmail.com/jaketrent"
                  bgColor="transparent"
                  fgColor="white"
                />
                <span>partabrajp@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <SocialIcon
                  url="https://gmail.com/jaketrent"
                  bgColor="transparent"
                  fgColor="white"
                />
                <span>Garden West, Karachi, Pakistan</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
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
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80 ">
            <form
              action="mailto:partabrajp@gmail.com"
              className="flex flex-col space-y-4"
            >
              <div>
                <label for="" className="text-sm font-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300  "
                />
              </div>
              <div>
                <label for="" className="text-sm font-bold">
                  Your Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your Email Address "
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300  "
                />
              </div>
              <div>
                <label for="" className="text-sm font-bold">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 "
                ></textarea>
              </div>

              <button className="inline-block self-end bg-white hover:bg-[#2A2C39] hover:text-white text-gray-800  py-2 px-6 border border-gray-400 rounded-lg shadow font-bold rounded-lg px-6 py-2 uppercase text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
