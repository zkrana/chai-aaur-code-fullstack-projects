"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ userData, handleSignOut }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center lg:justify-between justify-end ">
      <div className="block lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex justify-end items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Menu</title>
            <path
              fillRule="evenodd"
              d="M2 3h16a1 1 0 110 2H2a1 1 0 110-2zm0 6h16a1 1 0 110 2H2a1 1 0 110-2zm0 6h16a1 1 0 110 2H2a1 1 0 110-2z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full py-6 lg:py-0 lg:static absolute top-[64px] right-0 z-10 p-3 lg:p-0 bg-gray-800 lg:bg-transparent block flex-grow lg:flex lg:items-center`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            href="/"
            className="block lg:mt-4 lg:inline-block text-white hover:text-gray-300 mr-4"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
          >
            Contact
          </Link>
          {userData ? (
            <div className="relative mt-4 flex flex-col items-end lg:inline-block lg:mt-0 text-white">
              <button
                className="flex justify-end items-center space-x-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-8 h-8 text-xs bg-gray-400 border border-slate-800 flex justify-center items-center rounded-full">
                  User
                </div>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="lg:absolute flex flex-col float-end lg:float-none right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-left hover:bg-gray-200"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4 lg:mr-0"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
