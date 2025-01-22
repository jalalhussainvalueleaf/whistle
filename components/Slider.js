import React, { useEffect, useState } from "react";
import {data} from "@/utils/data"

const Slider = () => {
  
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [data.length]);

    return (
        <div className="flex gap-2 items-center w-full">
        <ul className="list-disc gap-4">
        {data.map((item, index) => (
            <li
            className={` ${index === activeIndex ? "text-wlOrange font-semibold text-lg" : "text-white text-lg"} transition-all duration-300 ease-in-out`}
            key={index}>{item.title}</li>
        ))}
 
        </ul>
        <div className="relative w-[340px] mx-auto overflow-hidden">
            <div className="rounded-[37px] border-2 border-white">
            <div className="bg-black w-36 mx-auto rounded-full py-2 my-4 h-8 flex items-center justify-between p-2 border border-gray-50 border-opacity-[0.2]">
                                <div className="rounded-full bg-white bg-opacity-[0.2] w-4 h-4"></div>
                                <div className="rounded-full bg-white w-2 h-2 bg-opacity-[0.2]"></div>
                            </div>
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {data.map((item, index) => (
                    <div key={index} className="min-w-full flex-shrink-0">
                        <div className=" bg-opacity-[0.4] w-[320px] h-[580px]   p-4 ">
                           
                            <div className=" flex h-[500px] items-center">
                            <div className="text-center">
                                <img src={item.img} alt="img" className="w-20 h-20 mx-auto" />
                                <h1 className="text-white text-2xl font-bold">{item.title}</h1>
                                <p className="text-white text-sm">{item.description}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-1 rounded-full ${index === activeIndex ? "bg-wlOrange" : "bg-gray-400"}`}
                    ></button>
                ))}
            </div>
        </div>
        </div>
        </div>
    );
};

export default Slider;
