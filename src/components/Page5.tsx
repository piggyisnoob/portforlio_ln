import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export const Page5 = () => {
  return (
    <>
      <h1 className="title text-center">My skills</h1>
      <span>JS</span>
      <br />
      <span>HTML</span>
      <br />
      <span>CSS</span>
      <br />
      <span>Reactjs</span>
      <br />
      <span>Tailwind</span>
      <div className="number-page">4</div>
      <span className="nextprev-btn back" data-page="turn-2">
        <IoIosArrowBack />
      </span>
    </>
  );
};
