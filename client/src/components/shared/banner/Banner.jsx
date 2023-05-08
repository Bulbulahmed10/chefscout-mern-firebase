import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = ({ bannerText, bannerImage }) => {
  return (
    <div className="relative w-full z-10 h-full lg:h-[400px] -mt-[160px]  overflow-hidden flex items-center justify-center ">
      <div className="absolute bg-gray-900 h-full w-full bg-opacity-50"></div>
      <LazyLoadImage className="w-full " src={bannerImage} alt="" />
      <h4 className="mt-36 lg:mt-28 text-6xl font-CoveredByYourGrace absolute text-white capitalize">
        {bannerText}
      </h4>
    </div>
  );
};

export default Banner;
