import React from "react";
import { Carddetails } from "./Carddetails";

export const Card = () => {
  return (
    <div>
      <Carddetails
        date="28/10/2020"
        heading="Amazon Gift"
        subheading="Pay"
        devices="Desktop - Mobile"
        logo="https://pngimg.com/uploads/amazon/amazon_PNG27.png"
        color="#ffa500"
      />
      <Carddetails
        date="17 Sep 2020"
        heading="Apple Gift"
        subheading="Payment"
        devices="MacOS - Mobile"
        logo="https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png"
        color="#f5f5f5"
      />
    </div>
  );
};
