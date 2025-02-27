import { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import logo from "../assets/images/logo.png";
import logo1 from "../assets/images/logo1.png";
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
  const [logoVisible, setLogoVisible] = useState(logo);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => {
    setClick(false);
  };

  // Track scroll direction and apply styles dynamically

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        setLogoVisible(logo1); // Show logo1 when scrolled down
      } else {
        setLogoVisible(logo); // Show logo when at top
      }

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
            ? "bg-transparent text-blue-900 hover:bg-white"
            : "bg-cyan-400 text-black"
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
      <li className="group relative w-full whitespace-nowrap lg:py-3 lg:px-3 transition-all duration-500 cursor-pointer">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-bold px-4 py-2 rounded-md ${
              isActive
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:brightness-90"
                : "bg-transparent text-black border-b border-transparent hover:border-blue-900 hover:border-opacity-100 transition-all duration-500 cursor-pointer"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li className="w-full whitespace-nowrap lg:py-3  transition-all duration-500 cursor-pointer">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-bold px-4 py-2 rounded-md ${
              isActive
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:brightness-90"
                : "bg-transparent text-black border-b border-transparent hover:border-blue-900 hover:border-opacity-100 transition-all duration-500 cursor-pointer"
            }`
          }
        >
          About
        </NavLink>
      </li>
      <li className="w-full whitespace-nowrap lg:py-3  transition-all duration-500 cursor-pointer">
        <NavLink
          to="/appointment"
          className={({ isActive }) =>
            `font-bold px-4 py-2 rounded-md ${
              isActive
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:brightness-90"
                : "bg-transparent text-black border-b border-transparent hover:border-blue-900 hover:border-opacity-100 transition-all duration-500 cursor-pointer"
            }`
          }
        >
          Appointment
        </NavLink>
      </li>
      <li className="w-full whitespace-nowrap lg:py-3  transition-all duration-500 cursor-pointer">
        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            `font-bold px-4 py-2 rounded-md ${
              isActive
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:brightness-90"
                : "bg-transparent text-black border-b border-transparent hover:border-blue-900 hover:border-opacity-100 transition-all duration-500 cursor-pointer"
            }`
          }
        >
          Reviews
        </NavLink>
      </li>
      <li className="w-full whitespace-nowrap lg:py-3 transition-all duration-500 cursor-pointer">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-bold px-4 py-2 rounded-md ${
              isActive
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:brightness-90"
                : "bg-transparent text-black border-b border-transparent hover:border-blue-900 hover:border-opacity-100 transition-all duration-500 cursor-pointer"
            }`
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 mx-auto navbar max-w-[90rem] ${navColor} z-50 transition-all max-sm:bg-blue-500 duration-300 ${
        navbarVisible ? "transform-none" : "-translate-y-full"
      }`}
    >
      <div className="  mx-auto navbar-start">
        <Link to="/">
          <div className="w-40">
            <img
              className="lg:mx-10 xl:mx-20 md:w-28 md:-mx-20 max-sm:h-12 max-sm:w-12 max-sm:bg-white max-sm:skeleton  max-sm:rounded-full"
              src={logoVisible}
              alt=""
            />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="hidden lg:block xl:block navbar-end">
        <a
          className={` btn btn-xs  lg:btn-md xl:btn-lg btn-outline ${buttonColor} border-blue-900 hover:text-blue-500 mx-20`}
        >
          {"Login"} <MdOutlineKeyboardArrowRight />
        </a>
      </div>
      <div className="">
        <div className="navbar relative lg:hidden">
          <div className="navbar-end fixed top-0 right-0 z-[9999]">
            <div className="flex m-5 gap-5 lg:gap-10 justify-center items-center">
              <div
                onClick={handleClick}
                className="icon-wrapper cursor-pointer mx-10"
              >
                {click ? (
                  <AiOutlineClose size={30} className="text-white md:text-blue-800" />
                ) : (
                  <SlMenu size={30} className="text-white font-bold md:text-blue-800" />
                )}
              </div>
            </div>

            <div
              className={`fixed top-20 left-0 w-full h-full bg-base-200 shadow-lg transition-transform duration-500 ease-in-out z-[10000] border-r-2 border-blue-500 ${
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
                    className={`btn w-full flex justify-center btn-outline hover:bg-transparent text-black  border-blue-900 `}
                  >
                    {"Login"} <MdOutlineKeyboardArrowRight />
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
