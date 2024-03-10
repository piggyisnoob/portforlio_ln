import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

export const Page3 = () => {
  return (
    <>
      <h1 className="title text-center">Education</h1>
      <div className="workeduc-box">
        <div className="workeduc-content">
          <span className="year ">
            <SlCalender />
            2021-2022
          </span>
          <h3 className="">Master Degree - University</h3>
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
            2022-2023
          </span>
          <h3 className="">Master Degree - University</h3>
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
          <h3 className="">Master Degree - University</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            vitae in assumenda optio, consequatur possimus amet, temporibus
            nihil libero illo mollitia fugit esse repudiandae ut deleniti
            quisquam suscipit molestiae voluptas.
          </p>
        </div>
      </div>
      <div className="number-page">2</div>
    </>
  );
};
