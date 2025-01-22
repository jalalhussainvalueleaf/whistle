import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { menuItems } from "@/utils/data";
import { usePathname } from "next/navigation";

const CircularMenu = ({ isHomepage, footer }) => {
  const pathname = usePathname();
  const circleRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null); // Track the active menu index
  const radiusMultiplier = 0.4;
  const totalArea = 90; // Half-circle area in degrees

  useEffect(() => {
    if (!isHomepage) {
      const windowHeight = window.innerHeight || 238;
      const radius = windowHeight * radiusMultiplier;
      const increment = totalArea / (menuItems.length - 1);
      const startPoint = totalArea / 2; // Adjust to start at the top and go clockwise

      // Style the circle
      const circle = circleRef.current;
      if (circle) {
        circle.style.width = `${radius}px`;
        circle.style.height = `${radius}px`;
      }

      // Style the links dynamically
      menuItems.forEach((item, index) => {
        const element = document.getElementById(`link-${index}`);
        const angle = startPoint - index * increment; // Adjust angle calculation
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        if (element) {
          element.style.position = "absolute";
          element.style.left = `${radius + x}px`;
          element.style.top = `${radius - y}px`;
          element.style.color = "white";

          // Hover Effects
          element.onmouseover = () => {
            element.style.transform = "translateY(-5px)";
            element.style.opacity = "0.8";
          };

          element.onmouseout = () => {
            element.style.transform = "translateY(0)";
            element.style.opacity = "1";
          };
        }
      });
    }
  }, [isHomepage]);

  const handleMenuClick = (index) => {
    setActiveIndex(index); // Set the clicked menu item as active
  };

  if (isHomepage && !footer) {
    // Render a vertical menu for the homepage
    return (
      <div className="absolute top-0 h-screen z-40 flex justify-center items-center gap-4 left-[0px]">
        <ul className="space-y-4 p-6 gap-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`space-y-4 text-white w-full translate-y-5 animate-fade-up rounded-full px-2 py-2 opacity-0 hover:bg-wlOrange ${
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
    );
  }

  // Render the circular menu for other pages
  return (
    <div className="-left-[380px] top-[80px] z-40 justify-center items-center gap-4 absolute">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          id={`link-${index}`}
          href={item.url}
          className={`space-y-4 text-white w-[180px] translate-y-5 animate-fade-up rounded-full px-2 py-2 opacity-0 hover:bg-wlOrange ${pathname === item.url?'bg-wlOrange':''} ${
            activeIndex === index ? "bg-wlOrange" : ""
          }`} // Highlight active menu
          style={{
            animationDelay: `${index * 200}ms`,
          }}
          onClick={() => handleMenuClick(index)} // Set active menu on click
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default CircularMenu;
