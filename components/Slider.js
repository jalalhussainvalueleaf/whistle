import React, { useEffect, useState } from "react";

const Slider = () => {
    const data = [
        {
            img: "/images/Post-click-analysis.png",
            title: "Post Click Analysis",
            description:
                "The post-click analytics help create, nurture, and tailor campaigns to reach the right audience. Campaign reports are enriched with deep insights. Whistle helps customize campaigns for better prospects and enhances user engagement with SMS.",
        },
        {
            img: "/images/Insight-protocol.png",
            title: "Insight Protocol",
            description:
                "Whistle’s intelligent insights gauge campaign efficiency and optimize data resources. Insights are displayed on the dashboard for quick reference and optimization.",
        },
        {
            img: "/images/Performance-Visit.png",
            title: "Performance Visit",
            description:
                "Performance is measured through campaign conversions. Marketers can assess performance at any time to understand how close they are to campaign objectives.",
        },
        {
            img: "/images/Click-through-rate.png",
            title: "Click Through Rate",
            description:
                "CTRs measure campaign performance and user engagement. Whistle displays real-time click performance, enabling control over deliverables. Greater CTR equals better ROI.",
        },
        {
            img: "/images/Click-through-rate.png",
            title: "Required Cost Per Action",
            description:
                "Set target CPA and monitor spends and returns for instant insights. This feature provides instant profit navigation for campaigns.",
        },
        {
            img: "/images/Click-through-rate.png",
            title: "Retargeting",
            description:
                "Retarget audiences who showed interest in your content. Create a sampling database for analysis and scale up results effectively.",
        },
        {
            img: "/images/Content-based-performance.png",
            title: "Content Based Performance",
            description:
                "Whistle enables A/B testing for SMS content performance. Try multiple SMS content variations for the same campaign and gauge responses.",
        },
        {
            img: "/images/Data-based-performance.png",
            title: "Data Based Performance",
            description:
                "Whistle’s inbuilt intelligence analyzes data set performance. Compare database efficiency and optimize campaign costs by choosing the better-performing dataset.",
        },
    ];
    

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [data.length]);

    return (
        <div className="flex items-center w-full">
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
