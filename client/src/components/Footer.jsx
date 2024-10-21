import React from "react";
import { Link } from "react-router-dom";
import { IconBrandGithub } from "@tabler/icons-react";
const Footer = () => {
  return (
    <>
      {/* <div className="flex justify-center items-center">
        <a
          href={"/images/adityaresume.pdf"}
          target="__blank"
          className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-black dark:bg-white dark:text-black text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left"
        >
          <IconBook /> Read Resume!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
          >
            <path d="M5 12l14 0"></path>
            <path d="M13 18l6 -6"></path>
            <path d="M13 6l6 6"></path>
          </svg>
        </a>
      </div> */}
      <footer
        className={`flex justify-center align-middle px-4 text-gray-800 bg-white dark:bg-black dark:text-white sticky" bottom-0`}
      >
        <div className="container px-6 py-6">
          {/* <h1
            className={`text-lg font-bold text-center lg:text-2xl dark:text-white `}
          >
            Get in Touch <br /> out on new tips, tutorials, and more.
          </h1> */}

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col items-center justify-between md:flex-row">
            <div>
              <p>👋 Designd by Prashant & Aditya</p>
            </div>
            <div className="flex mt-4 md:m-0">
              <div className="flex items-center">
                <Link
                  to={"https://www.github.com/AdityaKumar41"}
                  target="_blank"
                  className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline flex gap-1 items-center"
                >
                  <IconBrandGithub className="h-5 w-5 text-neutral-500" />{" "}
                  <span>Prashant</span>
                </Link>
                <Link
                  to={"https://www.github.com/AdityaKumar41"}
                  target="_blank"
                  className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline flex gap-1 items-center"
                >
                  <IconBrandGithub className="h-5 w-5 text-neutral-500" />{" "}
                  <span>Aditya</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
