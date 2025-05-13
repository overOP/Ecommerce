import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#products",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#products",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#products",
  },
];
const Dropdownlist = [
  {
    id: 1,
    name: "Tranding Products",
    link: "/#products",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#products",
  },
];
const Navbar = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-text-white relative z-40 bg-white shadow-md duration-200">
      {/* upper Navbar */}
        <div className="bg-primary/40 py-2">
          <div className="container flex items-center justify-between">
            <div className="">
              <a href="#" className="flex items-center gap-1 text-xl font-bold">
                <FiShoppingBag size={30} className="text-primary text-3xl" />
                ShopMe
              </a>
            </div>
            {/* search bar */}
            <div className="flex items-center justify-between gap-4">
              <div className="group relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="focus:border-primary focus:border-1 w-[200px] rounded-lg border border-gray-300 px-2 py-1 text-sm transition-all duration-300 focus:outline-none group-hover:w-[300px] sm:w-[200px] dark:border-gray-500 dark:bg-slate-800"
                />
                <IoMdSearch className="group-hover:text-primary absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-slate-800" />
              </div>
              {/* order button */}
              <button
                onClick={() => {
                  handleOrderPopup();
                }}
                className="from-primary to-secondary group flex items-center gap-3 rounded-full bg-gradient-to-r px-4 py-1 text-white transition-all duration-200"
              >
                <span className="hidden transition-all duration-200 group-hover:block">
                  ORDER
                </span>
                <FaCartShopping className="cursor-pointer text-xl text-white drop-shadow-sm" />
              </button>
              {/* Darkmode Switch */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
        {/* lower Navbar */}
        <div data-aos="zoom-in" className="flex justify-center bg-amber-300">
          <ul className="hidden items-center gap-4 sm:flex">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="hover:text-primary inline-block px-4 duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Simple Dropdown and Links */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Tranding Products
                <span>
                  <FaCaretDown className="text-lg transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden w-[200px] rounded-md bg-white p-2 text-black shadow-md group-hover:block">
                <ul>
                  {Dropdownlist.map((data) => (
                    <li className="p-2 hover:bg-gray-100" key={data.id}>
                      <a
                        href={data.link}
                        className="hover:text-primary/20 inline-block w-full rounded-md p-2"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
