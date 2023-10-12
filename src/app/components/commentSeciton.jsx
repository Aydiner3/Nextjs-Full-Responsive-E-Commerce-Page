import React from "react";
import Image from "next/image";
import ShoePhoto from "../../../public/commentphoto.png";
import Star from "../../../public/star.png";
import ShoeGirl from "../../../public/shoegirl.png";




const CommentSeciton = () => {
  return (
    <div className="flex flex-col md:flex-row h-[641px] gap-4 w-full items-end">
      <div className="bg-brand-bg rounded-[16px] h-full">
        <h3 className=" text-center text-[32px] md:text-[54px] font-bold flex justify-center items-center pt-6 w-full md:h-2/5 ">
          The Hype is real...
        </h3>
        <div className="flex flex-col md:flex-row w-full scale-75 md:scale-100 md:h-3/5">
          <Image src={ShoePhoto} width={409} height={449} />
          <div className="flex  flex-col justify-center items-center gap-5">
            <p className="flex gap-5  scale-50 md:scale-100">
              borkat u.
              <Image src={Star} width={20} height={20} />
              <Image src={Star} width={20} height={20} />
              <Image src={Star} width={20} height={20} />
              <Image src={Star} width={20} height={20} />
              <Image src={Star} width={20} height={20} />
            </p>
            <p className="max-w-[19ch] font-bold text-[12px] md:text-[28px] text-center">
              These stylishly simple and incredibly comfortable shoes have
              become such a staple in my daily wardrobe that I'm already buying
              a second pair.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-brand-bg rounded-[16px] h-[320px] md:h-full ">
        <Image src={ShoeGirl} className="h-4/5"/>
        <div className="flex flex-around justify-around items-center h-1/5  gap-3 md:gap-7 mt-3 ">
          <div className="flex flex-col md:flex-col gap-4 ">
            <p>Model 000</p>
            <p className="text-secondery-gray">Navy</p>
          </div>
          <button className="rounded-[32px] bg-hero-btn py-4 px-6">Shop Now</button>
        </div>

      </div>
    </div>
  );
};

export default CommentSeciton;
