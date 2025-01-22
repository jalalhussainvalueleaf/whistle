import React from "react";
import { socialMediaData } from "@/utils/data";
import Link from "next/link";

export default function Share() {
  return (
    <div className="absolute bottom-0 right-2 z-50 hidden h-screen flex-col items-center justify-center gap-2 lg:flex">
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
            <Icon size={30} className={item.className} color={item.color} />
          </Link>
        );
      })}
    </div>
  );
}
