import React from "react";
import { socialMediaData } from "@/utils/data";
import Link from "next/link";

export default function Share() {
  return (
    <div className="absolute bottom-0 right-2 h-screen flex items-center gap-2 flex-col justify-center z-50">
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
