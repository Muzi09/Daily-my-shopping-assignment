"use client";

import { useState } from "react";

function SideNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex text-base">
      <aside
        className={`bg-neutral-800 text-white w-64 flex-shrink-0 absolute md:static ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="w-48 rounded-md h-12 bg-white mt-4 ml-7">
          <img src="/images/Plus.svg" className="p-4 pr-2 inline"></img>
          <p className="inline text-black font-semibold">New Item</p>
        </div>

        <hr className="mt-4 border-black"></hr>

        <div>
          <div>
            <img src="/images/Dashboard.svg" className="inline ml-5 mb-1"></img>
            <button className="text-white mt-4 ml-1">
              Dashboard
            </button>
            <img onClick={toggleDropdown} className="inline cursor-pointer float-right mt-6 mr-6" src="/images/Expand.svg"></img>
          </div>

          {isOpen && (
            <ul className="mt-2 ml-2">
              <li>
                <a href="#" className="block px-4 py-2 text-white">
                  Commerce
                </a>
              </li>

              <li>
                <a href="#" className="block px-4 py-2 text-white">
                  Analytics
                </a>
              </li>

              <li>
                <a href="#" className="block px-4 py-2 text-white">
                  Crypto
                </a>
              </li>

              <li>
                <a href="#" className="block px-4 py-2 text-white">
                  Helpdesk
                </a>
              </li>

              <li>
                <a href="#" className="block px-4 py-2 text-white">
                  Monitoring
                </a>
              </li>

              <li>
                <a href="#" className="block px-4 py-2 text-white">
                  Fitness
                </a>
              </li>
            </ul>
          )}

          <hr className="mt-3 border-black"></hr>

          <div>
            <img src="/images/Dashboard.svg" className="inline ml-5 mb-1"></img>
            <button className="text-white mt-4 ml-1">
              Application
            </button>
            <img className="inline cursor-pointer float-right mt-6 mr-6" src="/images/Expand.svg"></img>
          </div>

          <hr className="mt-3 border-black"></hr>

          <div>
            <img src="/images/Dashboard.svg" className="inline ml-5 mb-1"></img>
            <button className="text-white mt-4 ml-1">
              Elements
            </button>
            <img className="inline cursor-pointer float-right mt-6 mr-6" src="/images/Expand.svg"></img>
          </div>

          <hr className="mt-3 border-black"></hr>

          <div>
            <img src="/images/Dashboard.svg" className="inline ml-5 mb-1"></img>
            <button className="text-white mt-4 ml-1">
              Forms
            </button>
            <img className="inline cursor-pointer float-right mt-6 mr-6" src="/images/Expand.svg"></img>
          </div>

          <hr className="mt-3 border-black"></hr>

          <div>
            <img src="/images/Dashboard.svg" className="inline ml-5 mb-1"></img>
            <button className="text-white mt-4 ml-1">
              Plugins
            </button>
            <img className="inline cursor-pointer float-right mt-6 mr-6" src="/images/Expand.svg"></img>
          </div>

          <hr className="mt-3 border-black"></hr>

          <div>
            <img src="/images/Dashboard.svg" className="inline ml-5 mb-1"></img>
            <button className="text-white mt-4 ml-1">
              Elements
            </button>
            <img className="inline cursor-pointer float-right mt-6 mr-6" src="/images/Expand.svg"></img>
          </div>

          <hr className="mt-3 border-black"></hr>

          <div>
            <img src="/images/Dashboard.svg" className="inline ml-5 mb-1"></img>
            <button className="text-white mt-4 ml-1">
              Data Grids
            </button>
            <img className="inline cursor-pointer float-right mt-6 mr-6" src="/images/Expand.svg"></img>
          </div>

          <hr className="mt-3 border-black"></hr>

          <div>
            <img src="/images/Dashboard.svg" className="inline ml-5 mb-1"></img>
            <button className="text-white mt-4 ml-1">
              Settings
            </button>
            <img className="inline cursor-pointer float-right mt-6 mr-6 mb-6" src="/images/Expand.svg"></img>
          </div>
        </div>
      </aside>

      <div className="md:hidden ">
        <button className="absolute top-2 left-1" onClick={toggleSidebar}>
          <img className="w-10" src="/images/side-menu.png"></img>
        </button>
      </div>
    </div>
  );
}

export default SideNavbar;
