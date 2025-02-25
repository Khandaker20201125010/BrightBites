import  { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { FiGlobe } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [navbarVisible, setNavbarVisible] = useState(true); // To control navbar visibility
  const [navColor, setNavColor] = useState("bg-transparent"); // Navbar background color
  const [textColor, setTextColor] = useState("text-white"); // Navbar text color
  const [buttonColor, setButtonColor] = useState("bg-transparent"); // Button color
  const [lanColor, setLanColor] = useState("bg-transparent"); // Button color
//   const [logoVisible, setLogoVisible] = useState(logo);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => {
    setClick(false);
  };

 

  // Track scroll direction and apply styles dynamically
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      // Change logo based on scroll position
    //   if (currentScrollY > 0) {
    //     setLogoVisible(logo1); // Show logo1 when scrolled down
    //   } else {
    //     setLogoVisible(logo); // Show logo when at top
    //   }

      if (currentScrollY > lastScrollY) {
        setNavbarVisible(false);
        setNavColor("bg-white");
        setTextColor("text-white");
        setButtonColor("bg-transparent");
      } else {
        setNavbarVisible(true);
        setNavColor(currentScrollY === 0 ? "bg-transparent" : "bg-white");
        setTextColor(currentScrollY === 0 ? "text-white" : "text-blue-500");
        setLanColor(currentScrollY === 0 ? "text-white" : "text-blue-500");
        setButtonColor(
          currentScrollY === 0
            ? "bg-transparent text-white hover:bg-white"
            : "bg-orange-400 text-white"
        );
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const links = (
    <>
      <li className="group relative w-full whitespace-nowrap group lg:py-3 lg:px-6 transition-all duration-500 cursor-pointer">
        <NavLink
          to="/solutions"
          className={`font-bold ${textColor} hover:text-white-600 cursor-pointer`}
        >
          {("Solutions")}
        </NavLink>
        <ul className="absolute left-0 hidden group-hover:block bg-gray-100 p-2 rounded-sm shadow-md w-64 mt-2">
          <li>
            <NavLink
              to="/anycaas"
              className="text-black hover:text-white-600 block p-2"
            >
              AnyCaaS
            </NavLink>
          </li>
          <div className="border-t border-gray-300 my-1"></div>
          <li>
            <NavLink
              to="/anybaas"
              className="text-black hover:text-white-600 block p-2"
            >
              AnyBaaS
            </NavLink>
          </li>
          <div className="border-t border-gray-300 my-1"></div>
          <li>
            <NavLink
              to="/anypaas"
              className="text-black hover:border-b-2 border-white block p-2"
            >
              AnyPaaS
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 border-b border-transparent hover:border-white hover:border-opacity-100 transition-all duration-500 cursor-pointer">
        <NavLink
          className={`font-bold ${textColor} hover:text-white-600 cursor-pointer`}
          to="/services"
        >
          {("services")}
        </NavLink>
      </li>
      <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 border-b border-transparent hover:border-white hover:border-opacity-100 transition-all duration-500 cursor-pointer">
        <NavLink
          className={`font-bold ${textColor} hover:text-white-600 cursor-pointer`}
          to="/aboutUs"
        >
          {("aboutUs")}
        </NavLink>
      </li>
      <div className="relative inline-block ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex  items-center gap-2 px-4 py-2 rounded-full border bg-transparent ${textColor} font-bold transition-all `}
        >
          <FiGlobe size={18} />
          EN
          {isOpen ? (
            <span className="ml-1">
              <IoIosArrowUp />
            </span>
          ) : (
            <span className="ml-1">
              <IoIosArrowDown />
            </span>
          )}
        </button>

        {isOpen && (
          <ul className="absolute left-0 mt-2 w-56 bg-gray-100 rounded-md shadow-md p-2">
            <li
              onClick={() => changeLanguage("en")}
              className="p-2 hover:bg-gray-200 cursor-pointer border-b border-gray-300 "
            >
              EN (English)
            </li>
            <li
              onClick={() => changeLanguage("th")}
              className="p-2 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
            >
              TH (Thai)
            </li>
            <li
              onClick={() => changeLanguage("id")}
              className="p-2 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
            >
              ID (Bahasa Indonesia)
            </li>
            <li
              onClick={() => changeLanguage("tw")}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              TW (Traditional Chinese)
            </li>
          </ul>
        )}
      </div>
    </>
  );

  return (
    <div
      className={`md:fixed navbar w-full ${navColor} z-50 transition-all max-sm:bg-blue-500 duration-300 ${
        navbarVisible ? "transform-none" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto navbar-start">
        <Link to="/">
          <div className="w-40">
            <img className="md:mx-40 w-40" src="{logoVisible}" alt="" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          className={`max-sm:hidden btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-lg btn-outline ${buttonColor} border-white hover:text-blue-500 mx-20`}
        >
          {("contactUs")} <MdOutlineKeyboardArrowRight />
        </a>
      </div>
      <div>
        <div className="navbar relative md:hidden">
          <div className="navbar-end fixed top-0 right-0 z-[9999]">
            <div className="flex m-5 gap-5 lg:gap-10 justify-center items-center">
              <div
                onClick={handleClick}
                className="icon-wrapper cursor-pointer mx-10"
              >
                {click ? (
                  <AiOutlineClose size={30} className="text-white" />
                ) : (
                  <SlMenu size={30} className="text-white font-bold" />
                )}
              </div>
            </div>

            <div
              className={`fixed top-20 left-0 max-sm:w-full h-full bg-base-200 shadow-lg transition-transform duration-500 ease-in-out z-[10000] border-r-2 border-blue-500 ${
                click ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <ul
                className="bg-blue-500 p-4 space-y-6 text-2xl min-h-screen overflow-y-auto flex flex-col items-center"
                style={{
                  maxHeight: "calc(100vh - 64px)",
                  scrollbarWidth: "none", // Hide scrollbar for Firefox
                  msOverflowStyle: "none", // Hide scrollbar for IE/Edge
                }}
              >
                <style> {`ul::-webkit-scrollbar {display: none;}`} </style>

                {links}

                <div className="flex justify-center w-full pb-10">
                  <button
                    className={`btn w-full flex justify-center btn-outline hover:bg-transparent text-white  border-white `}
                  >
                    {("contactUs")} <MdOutlineKeyboardArrowRight />
                  </button>
                </div>
              </ul>
            </div>

            {click && (
              <div className="fixed inset-0 z-[1]" onClick={closeMenu}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
