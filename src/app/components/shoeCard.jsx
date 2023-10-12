import React from "react";
import Image from "next/image";

const ShoeCard = ({ image }) => {
  return (
    <div className="flex flex-col bg-brand-bg w-full md:w-[32%] p-8 h-[380px] md:h-[502px] border justify-end rounded-[16px]">
      <div className="flex justify-normal items-center">
        <Image src={image} width={322} height={270} />
      </div>
      <div>
        <h1>Model 000</h1>
        <div className="flex justify-between items-center text-[14px] text-secondery-gray">
          <p>Renk</p>
          <p>$145</p>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
