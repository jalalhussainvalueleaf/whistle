import React,{useState} from 'react';
import {footerLinks} from "@/utils/data";
import { FaChevronDown } from "react-icons/fa6";


function Footer({ footer, toggleFooter }) {
// const [footer, setFooter] = useState(false);
// const toggleFooter =() => {
// setFooter(!footer);
// }

    return (
        <div className={`bg-black bg-opacity-60 px-6 py-4 ${footer?'bottom-0':'-bottom-[200px]'} z-50 absolute w-full flex flex-col items-center transition-all`}>
        <button className='bg-black bg-opacity-60 rounded-t-lg py-1 px-4 absolute -top-8 text-white'
        onClick={() => toggleFooter()}
        ><FaChevronDown size={25} className={`${footer?'rotate-0':' rotate-180'}  transition-all`}/></button>    
            <div className='grid grid-cols-4 text-white w-full'>
                {footerLinks.map((column, index) => (
                    <div key={index} className={`bg-color-${index}`}>
                        <ul className='space-y-3'>
                            {column.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a 
                                        href={link.url} 
                                        target={link.target || "_self"} 
                                        rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <p className='text-sm text-center pt-4 w-full text-white'>Copyright@WValue Martech Pvt.Ltd 2025</p>
        </div>
    );
}

export default Footer;
