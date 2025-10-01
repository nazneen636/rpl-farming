import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url(/bg.jpeg)] mt-16 py-32 gap-4 flex items-center justify-center flex-col bg-cover bg-no-repeat relative">
      <div className="absolute left-0 top-0 w-full h-full bg-[#ffffffc8]"></div>
      <div className="gap-5 flex items-center justify-center flex-col relative z-10">
        <h1 className="text-6xl font-rubik font-semibold text-[#2d5016] text-center uppercase  max-w-[800px] ">
          Cultivate Your Future
        </h1>
        <p className="text-base opacity-80 max-w-[500px] text-center">
          Agricultural Information Hub that sorvewa a comprehensive resource foe
          farmers and agriculture enthusiasts.
        </p>
        <button className="uppercase px-8 py-2 bg-green font-medium cursor-pointer text-white rounded-sm">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Banner;
