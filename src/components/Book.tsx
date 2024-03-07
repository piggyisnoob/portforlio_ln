import React from "react";
import Image from "next/image";
import chizuru from "@/images/chizuru.jpg";
import { recursive } from "@/app/layout";
import facebook from "@/images/facebook.svg";

export const Book = () => {
  return (
    <div className={`book ${recursive.className}`}>
      <div className="book-page">
        <div className="page-left profile-page">
          <Image src={chizuru} alt="" />
          <h1 className="">NOOBER</h1>
          <h3 className="">Web Developer</h3>
          <div className="">
            <a href="#" className="href">
              <Image src={facebook} alt="" />
            </a>
            <a href="#" className="href"></a>
            <a href="#" className="href"></a>
            <a href="#" className="href"></a>
          </div>
          <span>Hi Im NOOBER</span>
        </div>
      </div>
    </div>
  );
};
