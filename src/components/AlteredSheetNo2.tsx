import React from "react";
import { Page4 } from "@/components/Page4";
import { Page5 } from "@/components/Page5";

export const AlteredSheetNo2 = () => {
  return (
    <>
      <div className="book-page page-right turn" id="turn-2">
        <div className="page-front">
          <Page4 />
        </div>
        <div className="page-back">
          <Page5 />
        </div>
      </div>
    </>
  );
};
