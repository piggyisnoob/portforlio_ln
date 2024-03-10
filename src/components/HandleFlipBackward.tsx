"use client";
import React from "react";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export const HandleFlipBackward = () => {
  const [btnState, setBtnState] = useState(false);
  function handleclick() {
    setBtnState((btnState) => !btnState);
  }
  let toggleClassCheck = btnState ? "turn" : null;
  return (
    <>
      <span className={`nextprev-btn back`} data-page="turn-1">
        <IoIosArrowBack />
      </span>
    </>
  );
};
