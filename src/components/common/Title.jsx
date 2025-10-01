import React from "react";

const Title = ({ heading, description = "" }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <h1 className="text-3xl font-rubik text-green font-semibold text-center">
        {heading}
      </h1>
      <p className="text-base opacity-80 max-w-[500px] text-center">
        {description}
      </p>
    </div>
  );
};

export default Title;
