"use client";
import React, { useState } from "react";
import Link from "next/link";

function TopNavbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="bg-neutral-900 h-14 flex items-center text-base">
      <div className="ml-6 flex space-x-4">
        <div className="space-x-1.5 hidden md:inline-block">
          <img src="/images/Home.svg" className="inline" />
          <button className="text-white hover:text-gray-300 rounded-md font-medium">
            Home
          </button>
        </div>
        <div className="space-x-1.5 hidden md:inline-block">
          <img src="/images/Content.svg" className="inline" />
          <button className="text-white hover:text-gray-300 rounded-md font-medium">
            Contents
          </button>
        </div>
        <div className="space-x-1.5 hidden md:inline-block">
          <img src="/images/Categories.svg" className="inline" />
          <button className="text-white hover:text-gray-300 rounded-md font-medium">
            Categories
          </button>
        </div>
        <div className="space-x-1.5 hidden md:inline-block">
          <img src="/images/Settings.svg" className="inline" />
          <button className="text-white hover:text-gray-300 rounded-md font-medium">
            Settings
          </button>
        </div>
      </div>


      <div className="bg-white mr-6 h-9 p-1 rounded-3xl ml-10 md:ml-auto overflow-hidden">
      <Link href="/login">
        <img className="inline cursor-pointer" src="/images/Profile.svg" />
        <p className="inline pl-3 cursor-pointer">Ismail Ihsan Bulbul</p>
      </Link>
      </div>

      <div className="md:ml-auto md:hidden ml-auto mr-3">
        <button
          className="flex items-center"
          onClick={() => setNavbar(!navbar)}
        >
          <img src="/images/TopNav.png" alt="Hamburger Icon" />
        </button>
      </div>


      {navbar && (
        <div className="absolute w-40 h-60 flex-col pl-3 pt-3 text-2xl flex rounded-md top-14 left-auto right-0 bg-neutral-800 border-t border-neutral-300 md:hidden">
          <div className="cursor-pointer md:ml-auto">
            <img className="inline" src="/images/Home.svg" />
            <p className="inline pl-3 text-white">Home</p>
          </div>

          <hr></hr>

          <div className="cursor-pointer mt-5 md:ml-auto">
            <img className="inline" src="/images/Content.svg" />
            <p className="inline pl-3 text-white">Content</p>
          </div>
          
          <hr></hr>

          <div className="cursor-pointer mt-5 md:ml-auto">
            <img className="inline" src="/images/Categories.svg" />
            <p className="inline pl-3 text-white">Categories</p>
          </div>
          
          <hr></hr>

          <div className="cursor-pointer mt-5 md:ml-auto">
            <img className="inline" src="/images/Settings.svg" />
            <p className="inline pl-3 text-white">Settings</p>
          </div>
          
          <hr></hr>

        </div>
      )}
    </nav>
  );
}

export default TopNavbar;
