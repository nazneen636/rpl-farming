import React from "react";

import Btn from "./Btn";

const GuidesCard = ({ title, image, badge, contents }) => {
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
          <p class="mb-3 text-sm font-normal text-gray-700 ">{contents}</p>
          <Btn btnText={"Read more"} />
        </div>
      </div>
    </div>
  );
};

export default GuidesCard;
