import React from "react";

const Btn = ({ btnText, className }) => {
  return (
    <button
      className={`uppercase px-8 py-2 bg-green font-medium cursor-pointer text-white rounded-sm text-sm ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Btn;
