"use client";
import React, { useState } from "react";
import { Page1 } from "@/components/Page1";
import { Page3 } from "@/components/Page3";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export const AlteredSheetNo1 = () => {
  const [btnState, setBtnState] = useState(false);
  function handleclick() {
    setBtnState((btnState) => !btnState);
  }
  let toggleClassCheck = btnState ? "turn" : null;
  return (
    <>
      <div className={`book-page page-right ${toggleClassCheck}`} id="turn-2">
        <div className="page-front">
          <Page1 />
          <span
            className={`nextprev-btn`}
            data-page="turn-1"
            onClick={handleclick}
          >
            <IoIosArrowForward />
          </span>
        </div>
        <div className="page-back">
          <Page3 />
          <span
            className={`nextprev-btn back`}
            data-page="turn-1"
            onClick={handleclick}
          >
            <IoIosArrowBack />
          </span>
        </div>
      </div>
    </>
  );
};
