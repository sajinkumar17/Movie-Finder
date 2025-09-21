import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="/" className="hover:underline">
            Cinebite™
          </a>
          . All Rights Reserved.
        </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Youtube
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                X
              </a>
            </li>
          </ul>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
