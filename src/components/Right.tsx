import React from "react";
import { Page2 } from "@/components/Page2";

export const Right = () => {
  return (
    <>
      <div className="book-page page-right" id="turn-1">
        <div className="page-front">
          <Page2 />
        </div>
        <div className="page-back"></div>
      </div>
    </>
  );
};
