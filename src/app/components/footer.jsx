import React from "react";
import Logo from "../../../public/logo2.png";
import Image from "next/image";

const Footre = () => {
  return (
    <div className="flex justify-between items-start pt-16 w-full rounded-t-[12px] bg-primary-black text-white h-[380px] px-2">
      <div className="flex flex-col gap-4">
        <Image src={Logo} width={180} height={68} />
        <p className="max-w-[30ch]">
          Stay informed about Sopa with our latest releases and founder news.
        </p>
        <button className="border border-white rounded-[32px] px-12 py-2">Enter email here for updates</button>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-[20px] font-medium">Products</h3>
        <p>Model 000</p>
        <p>Model 001</p>
        <p>Laces</p>
        <p>Masks</p>
        <p>No-show Socks</p>
        <p>Crew Socks</p>
        <p>Gift cards</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-[20px] font-medium">Support</h3>
        <p>Help Center</p>
        <p>FAQs</p>
        <p>Order</p>
        <p>Order Status</p>
        <p>Returns Exchanges</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-[20px] font-medium">Everthing Else</h3>
        <p>Community</p>
        <p>Why Sopa</p>
        <p>About</p>
        <p>Discount Program</p>
        <p>Sopa Blog</p>
      </div>
      <div></div>
    </div>
  );
};

export default Footre;
