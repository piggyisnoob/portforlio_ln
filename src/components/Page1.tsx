import React from "react";
import Image from "next/image";
import chizuru from "@/images/chizuru.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

//PREFACE
export const Page1 = () => {
  return (
    <>
      <Image src={chizuru} alt="" className="image" />
      <h1 className="">NOOBER</h1>
      <h3 className="mt-3">Web Development</h3>
      <div className="social-media">
        <a href="#" className="href">
          <FaFacebookF />
        </a>
        <a href="#" className="href">
          <FaDiscord />
        </a>
        <a href="#" className="href">
          <FaLinkedinIn />
        </a>
        {/* <a href="#" className="href"></a> */}
      </div>
      <p className="">
        {/* Hi there! I'm a total newbie in the programming world, often referred to
        as a "noob", which is pointed out from my name XD. I'm absolutely
        fascinated by the power of code and the potential to create amazing
        things with it. My dream is to become a true or called fullstack "DEV,"
        a skilled programmer who can bring ideas to life - Uhmm, I'm kinda
        selfish so i want to do it for myself at the beginning :)). While I'm
        naturally curious and eager to learn, I admit I sometimes struggle with
        staying motivated. That's why I'm putting myself out there, hoping to
        learn from experienced programmers like you. By sharing my portforlio, I
        hope to receive valuable feedback that will help me grow and overcome my
        obstacles. I'm excited to embark on this exciting journey and become the
        best "geek" I can be! */}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, ipsum maxime! Ratione maiores impedit cum quae doloremque porro explicabo sequi dolor mollitia ea blanditiis nihil, eum unde voluptatum dicta commodi.
      </p>
      <div className="btn-box">
        <a href="#" className="btn">
          Dowload PFL
        </a>
        <a href="#" className="btn contact-me">
          Contact Me
        </a>
      </div>
    </>
  );
};
