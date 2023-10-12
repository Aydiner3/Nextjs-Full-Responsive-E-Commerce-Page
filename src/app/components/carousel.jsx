import React from "react";
import { GoDotFill } from "react-icons/Go";

const Carousel = () => {
  const items = [
    {
      src: "https://images.unsplash.com/photo-1696928634052-41aa345ef686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      alt: "Image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1682687981922-7b55dbb30892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",
      alt: "Image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1600000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      alt: "Image 3",
    },
    {
      src: "https://images.unsplash.com/photo-1600000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      alt: "Image 4",
    },
    {
      src: "https://images.unsplash.com/photo-1600000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      alt: "Image 4",
    },
    {
      src: "https://images.unsplash.com/photo-1600000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      alt: "Image 4",
    },
    {
      src: "https://images.unsplash.com/photo-1600000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      alt: "Image 4",
    },
  ];

  const donen = items.map((item, i) => {
    return <GoDotFill key={i} />;
  });

  return (
    <div className="w-full m-auto relative flex flex-col gap-2 h-[100%]">
      <div
        style={{ backgroundImage: `url(${items[0].src})` }}
        className="w-full h-full rounded-[16px] bg-center bg-cover duration-500 relative"
      >
        <div className="absolute bottom-0  right-[40%] left-[40%]  flex gap-3 text-white max-sm:hidden">
          {donen}
        </div>
        <h1 className="absolute left-12 bottom-12 md:left-32 md:bottom-32 text-white text-xl md:text-5xl max-w-[15ch] text-[66px]">Step inside, for comfort and magic await you.</h1>
        <button className="absolute left-11 bottom-3 md:left-32 md:bottom-12 bg-hero-btn text-black py-1 px-4 md:py-2 md:px-8 md:text-[16px] rounded-[32px]">Shop Now</button>
      </div>
    </div>
  );
};

export default Carousel;
