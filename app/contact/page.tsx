import { SocialIcon } from "react-social-icons";
import { Mail, MapPin, MessageSquare } from "react-feather";
import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const message = encodeURIComponent(
    "Hello! I came across your portfolio website and would like to discuss a project. Are you available to chat?"
  );
  const phone = "00923047887003"; // Replace with your WhatsApp phone number
  const address = encodeURIComponent("Garden West, Karachi, Pakistan"); // Replace with your address
  const zoomLevel = 15;
  const recipient = "partabrajp@gmail.com"; // Replace with your email address
  const subject = encodeURIComponent("I visited your website"); // Replace with your desired subject line
  const body = encodeURIComponent(
    "Hello, I came across your portfolio website and would like to discuss a project. Are you available to chat?"
  ); // Replace with your desired email body
  const href = `mailto:${recipient}?subject=${subject}&body=${body}`;

  return (
    <div className="antialiased bg-[#2A2C39] ">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md-space-x-6  space-y-6 bg-[#252734] w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-white text-white ">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-cyan-100 text-sm">
                Let's work together! Contact me today to discuss your project.{" "}
                <br />
                "I pride myself on delivering high-quality work and exceptional
                service - let me prove it to you."
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <Link href={`https://wa.me/${phone}?text=${message}`}>
                  <div className="flex items-center space-x-2 py-2 px-4 rounded-md bg-white text-black hover:bg-[#2A2C39] hover:text-white border  hover:border-white  shadow  ">
                    <FaWhatsapp size={18} className="hover:animate-spin" />
                    <span>Whatsapp Me..</span>
                  </div>
                </Link>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <div className="flex items-center space-x-2 py-2 px-4 rounded-md bg-white text-black hover:bg-[#2A2C39] hover:text-white border  hover:border-white  shadow">
                  {" "}
                  <Mail size={18} className="hover:animate-spin" />
                  <span action="mailto:partabrajp@gmail.com">
                    partabrajp@gmail.com
                  </span>
                  <div
                    href={`${href}`}
                    // className="flex items-center space-x-2 py-2 px-4 rounded-md bg-red-500 text-white hover:bg-red-600"
                  ></div>
                </div>
              </div>
              <div className="inline-flex space-x-2 items-center">
                {/* <div className="flex items-center space-x-2 py-2 px-4 rounded-md bg-green-500  text-white hover:bg-green-600">
                  <MapPin size={18}/>
                  <span>Garden West, Karachi, Pakistan</span>
                </div> */}
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${address}&zoom=${zoomLevel}`}
                >
                  <div className="flex items-center space-x-2 py-2 px-4 rounded-md bg-white text-black hover:bg-[#2A2C39] hover:text-white border  hover:border-white  shadow">
                    <FaMapMarkerAlt size={18} className="hover:animate-spin" />
                    <span>View on map</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <SocialIcon
                url="https://twitter.com/partabRparmar"
                bgColor="transparent"
                fgColor="white"
                className="hover:text-red-400 animate-bounce"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/partab-r-parmar-64930832/"
                bgColor="transparent"
                fgColor="white"
                className="hover:text-red-400 animate-bounce"
              />
              <Link href={`https://wa.me/${phone}?text=${message}`}>
                <div>
                  <SocialIcon
                    url="https://whatsapp.com"
                    bgColor="transparent"
                    fgColor="white"
                    className="hover:text-red-400 animate-bounce"
                  />
                </div>
              </Link>
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
