"use client";
import React from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export const HandleFlipForward = () => {
  const [btnState, setBtnState] = useState(false);
  function handleclick() {
    setBtnState((btnState) => !btnState);
  }
  let toggleClassCheck = btnState ? "turn" : null;
  return (
    <>
      <span className={`nextprev-btn ${toggleClassCheck}`} data-page="turn-1" onClick={handleclick}>
        <IoIosArrowForward />
      </span>
    </>
  );
};
