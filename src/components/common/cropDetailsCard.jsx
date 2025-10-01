import React from "react";

import Btn from "./Btn";

const CropDetailsCard = ({
  title,
  image,
  badge,
  contents,
  varieties,
  soil,
  seasons,
}) => {
  return (
    <div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <a href="#">
          <img class="h-[250px] w-full object-cover" src={image} alt="" />
        </a>
        <div class="p-5">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-green ">
            {title}
          </h5>
          <p className="mb-3 text-sm font-normal text-gray-700 ">{badge}</p>
          <div className="flex flex-col gap-1 my-3">
            <p class="text-sm font-normal text-gray-700 ">
              <span className=" text-black font-medium">Varieties: </span>
              {varieties}
            </p>
            <p class="text-sm font-normal text-gray-700 ">
              <span className=" text-black font-medium">soil: </span>
              {soil}
            </p>
            <p class=" text-sm font-normal text-gray-700 ">
              <span className=" text-black font-medium">Season: </span>
              {seasons}
            </p>
          </div>
          <Btn btnText={"Read more"} />
        </div>
      </div>
    </div>
  );
};

export default CropDetailsCard;
