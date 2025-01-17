import React, { useEffect, useRef, useState } from "react";

const CircularLinks = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight || 238);
  const circleRef = useRef(null);

  const links = [
    { label: "link1", bg: "#c0392b" },
    { label: "link2", bg: "#16a085" },
    { label: "link3", bg: "#8e44ad" },
    { label: "link4", bg: "#27ae60" },
    { label: "link5", bg: "#f39c12" },
    { label: "link6", bg: "#2980b9" },
  ];

  const radius = windowHeight * 0.6;
  const borderSize = radius * 0.021;
  const totalArea = 48;
  const increment = totalArea / (links.length - 1);
  const startPoint = -(totalArea / 2);
  const fontSize = radius * 0.12;
  const linkSize = radius * 0.25;

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight || 238);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseOver = (e, bgColor) => {
    const link = e.target;
    const hover = link.nextSibling;
    link.style.paddingLeft = `${radius * 1.25}px`;
    hover.style.opacity = 1;
    document.body.style.backgroundColor = bgColor;
  };

  const handleMouseOut = (e) => {
    const link = e.target;
    const hover = link.nextSibling;
    link.style.paddingLeft = `${radius * 1.2}px`;
    hover.style.opacity = 0;
  };

  return (
    <div
      ref={circleRef}
      style={{
        border: `${borderSize}px solid #fff`,
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        borderRadius: `${radius}px`,
        position: "absolute",
        top: `-${radius * 0.2}px`,
        left: `${radius * -1}px`,
      }}
    >
      {links.map((link, index) => {
        const deg = startPoint + index * increment;
        return (
          <React.Fragment key={link.label}>
            <a
              href="#"
              data-color={link.bg}
              style={{
                display: "inline-block",
                textDecoration: "none",
                color: "#fff",
                position: "absolute",
                zIndex: 100,
                paddingLeft: `${radius * 1.2}px`,
                fontSize: `${fontSize}px`,
                height: `${linkSize}px`,
                lineHeight: `${linkSize}px`,
                left: `${borderSize}px`,
                top: `${windowHeight / 2 - windowHeight * 0.1 + borderSize}px`,
                transform: `rotate(${deg}deg)`,
                transformOrigin: `0px ${linkSize * 0.5}px`,
                transition: "all 0.2s ease-out",
              }}
              onMouseOver={(e) => handleMouseOver(e, link.bg)}
              onMouseOut={handleMouseOut}
            >
              {link.label}
            </a>
            <span
              style={{
                position: "absolute",
                display: "inline-block",
                zIndex: 50,
                opacity: 0,
                left: `${borderSize}px`,
                top: `${windowHeight * 0.4 + borderSize}px`,
                width: `${radius + borderSize / 2}px`,
                height: `${linkSize}px`,
                borderRight: `${borderSize * 2}px solid #fff`,
                // transform: `rotate(${deg}deg)`,
                transformOrigin: `0px ${linkSize * 0.5}px`,
                transition: "all 0.2s ease-out",
              }}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CircularLinks;
