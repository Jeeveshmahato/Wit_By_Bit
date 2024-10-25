import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import Person from "../assets/person.png"
import { FaAngleRight } from "react-icons/fa6";
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation(); // Get the current route

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-full">
        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden flex items-center p-4 bg-gray-800 text-white">
          <button onClick={toggleSidebar}>
            {/* Hamburger Icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <span className="ml-4 text-xl">Menu</span>
        </div>

        {/* Sidebar */}
        <div className="flex justify-between flex-col h-full">
          <div
            className={`fixed inset-y-0 h-full w-fit left-0 z-50 bg-gray-800 md:bg-white text-white md:text-gray-800 transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative`}
          >
            <div className="flex justify-between flex-col h-full">
              <div className="p-4">
                <img className="w-[116px] h-[48px]" src={Logo} alt="" />
                <div className=" w-full h-[1px] border border-[#ebebeb] my-[24px]"></div>
                <ul>
                  <li
                    className={`mb-4 items-center  flex gap-[10px] ${
                      location.pathname === "/"
                        ? "font-[500] text-[14px] bg-[#ecf7ff]  py-[10px] px-[16px] text-[#1f8cd0]"
                        : " text-[14px] py-[10px] px-[16px]"
                    }`}
                  >
                    <div className=" w-[20px] h-[20px] bg-[#f5f5f5] border border-[#dddddd]"></div>
                    <Link to="/" className="block hover:text-[#1f8cd0]">
                      Home
                    </Link>
                  </li>
                  <li
                    className={`mb-4 items-center  flex gap-[10px] ${
                      location.pathname === "/stores"
                        ? " font-[500] text-[14px] bg-[#ecf7ff] py-[10px] px-[16px]  text-[#1f8cd0]"
                        : " text-[14px] py-[10px] px-[16px]"
                    }`}
                  >
                    <div className=" w-[20px] h-[20px] bg-[#f5f5f5] border border-[#dddddd]"></div>

                    <Link to="/stores" className="block hover:text-[#1f8cd0]">
                      Stores
                    </Link>
                  </li>
                  <li
                    className={`mb-4 items-center  flex gap-[10px] ${
                      location.pathname === "/products"
                        ? " font-[500] text-[14px] bg-[#ecf7ff] py-[10px] px-[16px]  text-[#1f8cd0]"
                        : " text-[14px] py-[10px] px-[16px]"
                    }`}
                  >
                    <div className=" w-[20px] h-[20px] bg-[#f5f5f5] border border-[#dddddd]"></div>

                    <Link to="/products" className="block hover:text-[#1f8cd0]">
                      Products
                    </Link>
                  </li>
                  <li
                    className={`mb-4 items-center  flex gap-[10px] ${
                      location.pathname === "/catalogue"
                        ? " font-[500] text-[14px] bg-[#ecf7ff] py-[10px] px-[16px]  text-[#1f8cd0]"
                        : " text-[14px] py-[10px] px-[16px]"
                    }`}
                  >
                    <div className=" w-[20px] h-[20px] bg-[#f5f5f5] border border-[#dddddd]"></div>

                    <Link
                      to="/catalogue"
                      className="block hover:text-[#1f8cd0]"
                    >
                      Catalogue
                    </Link>
                  </li>
                  <li
                    className={`mb-4 items-center  flex gap-[10px] ${
                      location.pathname === "/promotions"
                        ? " font-[500] text-[14px] bg-[#ecf7ff] py-[10px] px-[16px]  text-[#1f8cd0]"
                        : " text-[14px] py-[10px] px-[16px]"
                    }`}
                  >
                    <div className=" w-[20px] h-[20px] bg-[#f5f5f5] border border-[#dddddd]"></div>

                    <Link
                      to="/promotions"
                      className="block hover:text-[#1f8cd0]"
                    >
                      Promotions
                    </Link>
                  </li>
                  <li
                    className={`mb-4 items-center  flex gap-[10px] ${
                      location.pathname === "/reports"
                        ? " font-[500] text-[14px] bg-[#ecf7ff] py-[10px] px-[16px]  text-[#1f8cd0]"
                        : " text-[14px] py-[10px] px-[16px]"
                    }`}
                  >
                    <div className=" w-[20px] h-[20px] bg-[#f5f5f5] border border-[#dddddd]"></div>

                    <Link to="/reports" className="block hover:text-[#1f8cd0]">
                      Reports
                    </Link>
                  </li>
                  <li
                    className={`mb-4 items-center  flex gap-[10px] ${
                      location.pathname === "/docs"
                        ? " font-[500] text-[14px] bg-[#ecf7ff] py-[10px] px-[16px]  text-[#1f8cd0]"
                        : " text-[14px] py-[10px] px-[16px]"
                    }`}
                  >
                    <div className=" w-[20px] h-[20px] bg-[#f5f5f5] border border-[#dddddd]"></div>

                    <Link to="/docs" className="block hover:text-[#1f8cd0]">
                      Docs
                    </Link>
                  </li>
                  <li
                    className={`mb-4 items-center  flex gap-[10px] ${
                      location.pathname === "/settings"
                        ? " font-[500] text-[14px] bg-[#ecf7ff] py-[10px] px-[16px]  text-[#1f8cd0]"
                        : " text-[14px] py-[10px] px-[16px]"
                    }`}
                  >
                    <div className=" w-[20px] h-[20px] bg-[#f5f5f5] border border-[#dddddd]"></div>

                    <Link to="/settings" className="block hover:text-[#1f8cd0]">
                      Settings
                    </Link>
                  </li>
                  <li
                    className={`mb-4 items-center  flex gap-[10px] ${
                      location.pathname === "/pro"
                        ? " font-[500] text-[14px] bg-[#ecf7ff] py-[10px] px-[16px]  text-[#1f8cd0]"
                        : " text-[14px] py-[10px] px-[16px]"
                    }`}
                  >
                    <div className=" w-[20px] h-[20px] bg-[#f5f5f5] border border-[#dddddd]"></div>

                    <Link to="/pro" className="block hover:text-[#1f8cd0]">
                      Pro
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex gap-[8px] items-center p-4 bg-card rounded-lg">
                <img
                  aria-hidden="true"
                  alt="User Profile Picture"
                  src={Person}
                  className="rounded-full  w-[48px] h-[48px]"
                />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Andy Samberg</p>
                  <p className="text-muted-foreground">
                    andy.samberg@gmail.com
                  </p>
                </div>
              <div className=" text-[20px] text-[#1f8cd0] mr-[10px]">
              <FaAngleRight />
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay to close the sidebar when clicking outside */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
