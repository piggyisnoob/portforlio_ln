import React from "react";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";

export const Page1 = () => {
  return (
    <>
      <h1 className="mb-4 text-center">Work Experience</h1>
      <div className="workeduc-box">
        <div className="workeduc-content">
          <span className="year ">
            <SlCalender />
            2023-2024
          </span>
          <h3 className="">Web Development - Company</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            vitae in assumenda optio, consequatur possimus amet, temporibus
            nihil libero illo mollitia fugit esse repudiandae ut deleniti
            quisquam suscipit molestiae voluptas.
          </p>
        </div>
        <div className="workeduc-content">
          <span className="year ">
            <SlCalender />
            2023-2024
          </span>
          <h3 className="">Web Development - Company</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            vitae in assumenda optio, consequatur possimus amet, temporibus
            nihil libero illo mollitia fugit esse repudiandae ut deleniti
            quisquam suscipit molestiae voluptas.
          </p>
        </div>
        <div className="workeduc-content">
          <span className="year ">
            <SlCalender />
            2023-2024
          </span>
          <h3 className="">Web Development - Company</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            vitae in assumenda optio, consequatur possimus amet, temporibus
            nihil libero illo mollitia fugit esse repudiandae ut deleniti
            quisquam suscipit molestiae voluptas.
          </p>
        </div>
      </div>
      <div className="number-page">1</div>
    </>
  );
};
