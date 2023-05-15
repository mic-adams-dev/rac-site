"use client";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState("hidden md:hidden");
  const handleClick = () => {
    if (active == "hidden md:hidden") {
      setActive("md:hidden");
    } else {
      setActive("hidden md:hidden");
    }
  };
  return (
    <div>
      <nav className="border-b border-gray-400 bg-zinc-950">
        <div className="px-8 mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <Link
                  href="/"
                  className="flex items-center py-3 px-2 text-white font-bold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-9 h-9 mr-1 text-red-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                  <span className="text-xl">Weakest Link</span>
                </Link>
              </div>
            </div>

            {/* nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="#"
                className="py-5 px-3 text-white hover:text-gray-300"
              >
                Resources
              </Link>
              <Link
                href="/articles"
                className="py-5 px-3 text-white hover:text-gray-300"
              >
                Journal
              </Link>
              <Link
                href="/archive"
                className="py-5 px-3 text-white hover:text-gray-300"
              >
                Archive
              </Link>
            </div>

            {/* mobile button */}
            <div className="md:hidden flex items-center">
              <button onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* mobile menu */}
          <div className={active}>
            <Link
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-black text-white"
            >
              Resources
            </Link>
            <Link
              href="/articles"
              className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-black text-white"
            >
              Journal
            </Link>
            <Link
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-black text-white"
            >
              Archive
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
