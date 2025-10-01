import React, { useState } from "react";
import { PiPlantBold } from "react-icons/pi";

const menuItem = [
  {
    id: "#home",
    label: "Home",
  },
  {
    id: "#guides",
    label: "Farming Guides",
  },
  {
    id: "#crop",
    label: "Crop Details",
  },
  {
    id: "#pest",
    label: "Pest Control",
  },
  {
    id: "#contact",
    label: "Contact",
  },
];
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav class="fixed w-full left-0 top-0 z-50 bg-white shadow-md border-gray-200 text-[#2D5016]">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse "
          >
            <div className="w-10 h-10 rounded-full bg-[#2D5016] text-white flex items-center justify-center text-2xl">
              {" "}
              <PiPlantBold />
            </div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Agrihub
            </span>
          </a>
          <button
            onClick={() => {
              setOpen(!open);
              console.log("ok");
            }}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={` w-full md:block md:w-auto ${
              open ? "visible" : "hidden"
            }`}
          >
            <ul
              className={`font-medium flex p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8  md:mt-0 md:border-0 md:bg-white ${
                open ? "flex-col gap-2 bg-[#2D5016]" : "flex-row"
              }`}
            >
              {menuItem?.map((item, index) => (
                <li key={index}>
                  <a href={item.id} class="block py-2 px-3">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
