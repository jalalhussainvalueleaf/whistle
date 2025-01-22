import React,{useState} from 'react';
import {footerLinks} from "@/utils/data";
import { FaChevronDown } from "react-icons/fa6";
import Link from 'next/link';


function Footer({ footer, toggleFooter }) {
// const [footer, setFooter] = useState(false);
// const toggleFooter =() => {
// setFooter(!footer);
// }

    return (
        <div className={`bg-black bg-opacity-60 px-6 py-4 ${footer?'bottom-0':'-bottom-[200px]'} absolute z-50 flex w-full flex-col items-center transition-all`}>
        <button className='absolute -top-8 rounded-t-lg bg-black bg-opacity-60 px-4 py-1 text-white'
        onClick={() => toggleFooter()}
        ><FaChevronDown size={25} className={`${footer?'rotate-0':' rotate-180'}  transition-all`}/></button>    
            <div className='grid w-full grid-cols-4 text-white'>
                {footerLinks.map((column, index) => (
                    <div key={index} className={`bg-color-${index}`}>
                        <ul className='space-y-3'>
                            {column.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <Link 
                                        href={link.url} 
                                        target={link.target || "_self"} 
                                        rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <p className='w-full pt-4 text-center text-sm text-white'>Copyright@WValue Martech Pvt.Ltd 2025</p>
        </div>
    );
}

export default Footer;
