import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { menuItems } from "@/utils/data";
import Link from "next/link";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const [activeIndex, setActiveIndex] = useState(null); // Track the active menu index

  const handleMenuClick = (index) => {
    setActiveIndex(index); // Set the clicked menu item as active
  };

  return (
    <div className="block lg:hidden">
      <div className="text-center">
        <button
          className="mb-2 rounded-lg bg-transparent px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={toggleDrawer}
        >
          <FaBarsStaggered size={30} />
        </button>
      </div>

      <div
        className={`fixed right-0 top-0 z-40 h-screen w-full overflow-y-auto bg-black/80 p-4 transition-transform dark:bg-gray-800 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <p onClick={toggleDrawer}>
          <IoMdClose size={30} color="white" />
        </p>
        {/* ... rest of the drawer content ... */}
        <ul className="gap-4 space-y-4 p-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`w-full translate-y-5 animate-fade-up space-y-4 rounded-full p-2 text-white opacity-0 hover:bg-wlOrange ${
                index + 1 * 100
              } ${activeIndex === index ? "bg-wlOrange" : ""}`} // Highlight active menu
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => handleMenuClick(index)} // Set active menu on click
            >
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
