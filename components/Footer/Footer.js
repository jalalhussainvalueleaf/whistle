import React, { useState } from "react";
import { footerLinks } from "@/utils/data";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { socialMediaData } from "@/utils/data";

function Footer({ footer, toggleFooter }) {
  // const [footer, setFooter] = useState(false);
  // const toggleFooter =() => {
  // setFooter(!footer);
  // }
  const currentYear = new Date().getFullYear();
  return (
    <div
      className={`bg-black bg-opacity-60 px-6 py-4 ${footer ? "bottom-0" : "-bottom-[290px] lg:-bottom-[200px]"} absolute z-50 flex w-full flex-col items-center transition-all`}
    >
      <button
        className="absolute -top-8 rounded-t-lg bg-black bg-opacity-60 px-4 py-1 text-white"
        onClick={() => toggleFooter()}
      >
        <FaChevronDown
          size={25}
          className={`${footer ? "rotate-0" : " rotate-180"}  transition-all`}
        />
      </button>
      <div className="grid w-full grid-cols-2 text-white lg:grid-cols-5">
        <div className="hidden lg:block">
          <Link href="/">
            <Image
              src="/images/whl-logo.png"
              width={400}
              height={400}
              className="hidden w-28 lg:block"
            />
          </Link>
          <div className="hidden lg:block">
            <p className="pt-4 text-sm">Follow Us</p>
            <div className="flex gap-2">
              {socialMediaData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                  >
                    <Icon
                      size={30}
                      className={item.className}
                      color={item.color}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {footerLinks.map((column, index) => (
          <div key={index} className="grid grid-cols-1">
            <ul className="space-y-3">
              {column.map((link, linkIndex) => (
                <li key={linkIndex} className="">
                  <Link
                    href={link.url}
                    target={link.target || "_self"}
                    rel={
                      link.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="w-full pt-4 text-center text-sm text-white">
        &copy;{currentYear} WValue Martech Pvt.Ltd
      </p>
    </div>
  );
}

export default Footer;
