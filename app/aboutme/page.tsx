"use client";

import Link from "next/link";
import React from "react";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div className="mx-10 my-10">
      <form className="flex space-x-10">
        <div>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="please enter your email" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" placeholder="please enter your name" />
        </div>
        <div>
          <button></button>
        </div>
      </form>
      AboutMe
    </div>
  );
};

export default AboutMe;
