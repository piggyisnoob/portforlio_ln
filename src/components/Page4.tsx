import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export const Page4 = () => {
  return (
    <>
      <h1 className="title text-center">My services</h1>
      <div className="services-box">
        <div className="services-content">
          <h3>Web Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className="btn tagElement-a">
            Read More
          </a>
        </div>

        <div className="services-content">
          <h3>Web Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className="btn tagElement-a">
            Read More
          </a>
        </div>

        <div className="services-content">
          <h3>Web Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className="btn tagElement-a">
            Read More
          </a>
        </div>

        <div className="services-content">
          <h3>Web Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className="btn tagElement-a">
            Read More
          </a>
        </div>
      </div>
      <div className="number-page">3</div>
      <span className="nextprev-btn" data-page="turn-2">
        <IoIosArrowForward />
      </span>
    </>
  );
};
