"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Common/Header";
import Sidebar from "@/components/Menu/SideBar";
import SideMenu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";

function Page() {
  const [videoFinished, setVideoFinished] = useState(false);
  const introVideoRef = useRef(null);
  const rotationVideoRef = useRef(null);
  const [footer, setFooter] = useState(false); // State for Footer visibility
  const [showSidebar, setShowSidebar] = useState(false); // State for controlling sidebar visibility

  const [showContent, setShowContent] = useState(false); // State for controlling sidebar visibility

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true); // Show Sidebar with animation
    }, 4000); // Delay for smooth effect
  });

  // Show Sidebar with smooth transition after Login
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true); // Show Sidebar with animation
    }, 4000); // Delay for smooth effect

    setTimeout(() => {
      setShowSidebar(true); // Show Sidebar with animation
    }, 3000); // Delay for smooth effect
  });

  // Play rotation video after intro finishes
  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  const toggleFooter = () => {
    setFooter(!footer);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background Video (Intro) */}
      <video
        ref={introVideoRef}
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd} // Trigger when intro video finishes
      >
        <source src="/video/Earth_Side_Rotation.webm" type="video/webm" />
      </video>

      {/* Background Video (Rotation, Looping) */}
      <video
        ref={rotationVideoRef}
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop
        muted
        style={{ display: videoFinished ? "block" : "none" }} // Hide until intro finishes
      >
        <source src="/video/Earth_Side_Rotation.webm" type="video/mp4" />
      </video>

      <Header />

      {/* Content */}
      {/* Content */}
      {showContent && (
        <div className="absolute right-0 z-50 flex h-screen w-full flex-col items-center justify-center space-y-4 transition-all ease-in-out lg:w-8/12 lg:p-12 ">
          <div className="h-[500px] space-y-4 overflow-scroll rounded-lg bg-black bg-opacity-50 p-4 text-white ">
            <p className="font-semibold text-wlOrange">
              Introducing A2P Messaging Services by Whistle
            </p>
            <p>
              Experience Incredible SMS communication with Whistle
              Application-to-Person (A2P) Enterprise Messaging Services.
            </p>
            <p className="font-semibold text-wlOrange">
              Your success is our priority!
            </p>
            <p>
              Empower your business with our exceptional features and benefits,
              making us the preferred choice for reliable and interactive 2-way
              communication on multiple channels. We take immense pride in
              empowering over 500 companies in India with our seamless and
              dependable messaging services. Our exceptional features and
              benefits make us the preferred choice!
            </p>
            <div className="mx-auto flex w-8/12 justify-between">
              <svg
                width="100"
                height="100"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 150L10.5941 111.481C4.05677 100.206 0.621703 87.425 0.627983 74.3187C0.646822 33.3437 34.1497 0 75.314 0C95.2901 0.00625 114.042 7.75 128.146 21.8C142.244 35.85 150.006 54.525 150 74.3875C149.981 115.369 116.478 148.713 75.314 148.713C62.8171 148.706 50.5024 145.588 39.5943 139.663L0 150ZM41.428 126.206C51.953 132.425 62.0007 136.15 75.2889 136.156C109.501 136.156 137.371 108.444 137.39 74.375C137.403 40.2375 109.665 12.5625 75.3391 12.55C41.1015 12.55 13.2504 40.2625 13.2379 74.325C13.2316 88.2313 17.326 98.6437 24.2025 109.537L17.9289 132.337L41.428 126.206ZM112.936 92.0563C112.472 91.2813 111.228 90.8187 109.357 89.8875C107.492 88.9562 98.317 84.4625 96.6026 83.8437C94.8945 83.225 93.6511 82.9125 92.4014 84.775C91.158 86.6313 87.5785 90.8188 86.4921 92.0563C85.4057 93.2938 84.313 93.45 82.4479 92.5188C80.5828 91.5875 74.5667 89.6313 67.4391 83.3C61.894 78.375 58.1449 72.2938 57.0585 70.4313C55.9721 68.575 56.9455 67.5688 57.8749 66.6438C58.7164 65.8125 59.74 64.475 60.6757 63.3875C61.624 62.3125 61.9317 61.5375 62.5597 60.2938C63.1814 59.0563 62.8736 57.9688 62.4027 57.0375C61.9317 56.1125 58.2015 46.9688 56.6503 43.25C55.1306 39.6313 53.5921 40.1187 52.4491 40.0625L48.8696 40C47.6262 40 45.6041 40.4625 43.896 42.325C42.1879 44.1875 37.365 48.675 37.365 57.8188C37.365 66.9625 44.053 75.7937 44.9824 77.0312C45.9181 78.2687 58.1386 97.0313 76.8588 105.075C81.3112 106.988 84.7902 108.131 87.4968 108.987C91.9681 110.4 96.0374 110.2 99.2527 109.725C102.838 109.194 110.293 105.231 111.85 100.894C113.407 96.55 113.407 92.8313 112.936 92.0563Z"
                  fill="#E87F06"
                ></path>
              </svg>
              <svg
                width="75"
                height="100"
                viewBox="0 0 100 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M87.5 150H12.5C5.6 150 0 144.4 0 137.5V12.5C0 5.6 5.6 0 12.5 0H87.5C94.4 0 100 5.6 100 12.5V137.5C100 144.4 94.4 150 87.5 150ZM93.75 118.231H6.25V137.5C6.25 140.95 9.05625 143.75 12.5 143.75H87.5C90.95 143.75 93.75 140.95 93.75 137.5V118.231ZM50 136.981C46.5438 136.981 43.75 134.181 43.75 130.731C43.75 127.281 46.5438 124.481 50 124.481C53.45 124.481 56.2437 127.281 56.2437 130.731C56.2437 134.181 53.45 136.981 50 136.981ZM93.75 30.7312H6.25V111.981H93.75V30.7312ZM87.5 6.25H12.5C9.05625 6.25 6.25 9.05625 6.25 12.5V24.4813H93.75V12.5C93.75 9.05625 90.95 6.25 87.5 6.25ZM59.375 18.2313H40.625C38.9 18.2313 37.5 16.8313 37.5 15.1063C37.5 13.3813 38.9 11.9813 40.625 11.9813H59.375C61.1 11.9813 62.5 13.3813 62.5 15.1063C62.5 16.8313 61.1 18.2313 59.375 18.2313Z"
                  fill="#E87F06"
                ></path>
                <path
                  d="M12.5284 90V60.9091H24.0057C26.2027 60.9091 28.0777 61.3021 29.6307 62.0881C31.1932 62.8646 32.3816 63.9678 33.196 65.3977C34.0199 66.8182 34.4318 68.4896 34.4318 70.4119C34.4318 72.3437 34.0152 74.0057 33.1818 75.3977C32.3485 76.7803 31.1411 77.8409 29.5597 78.5795C27.9877 79.3182 26.0843 79.6875 23.8494 79.6875H16.1648V74.7443H22.8551C24.0294 74.7443 25.0047 74.5833 25.7812 74.2614C26.5578 73.9394 27.1354 73.4564 27.5142 72.8125C27.9025 72.1686 28.0966 71.3684 28.0966 70.4119C28.0966 69.446 27.9025 68.6316 27.5142 67.9688C27.1354 67.3059 26.553 66.804 25.767 66.4631C24.9905 66.1127 24.0104 65.9375 22.8267 65.9375H18.679V90H12.5284ZM28.2386 76.7614L35.4688 90H28.679L21.6051 76.7614H28.2386ZM64.446 71.0938H58.2244C58.1108 70.2888 57.8788 69.5739 57.5284 68.9489C57.178 68.3144 56.7282 67.7746 56.179 67.3295C55.6297 66.8845 54.9953 66.5436 54.2756 66.3068C53.5653 66.0701 52.7936 65.9517 51.9602 65.9517C50.4545 65.9517 49.143 66.3258 48.0256 67.0739C46.9081 67.8125 46.0417 68.892 45.4261 70.3125C44.8106 71.7235 44.5028 73.4375 44.5028 75.4545C44.5028 77.5284 44.8106 79.2708 45.4261 80.6818C46.0511 82.0928 46.9223 83.1581 48.0398 83.8778C49.1572 84.5975 50.4498 84.9574 51.9176 84.9574C52.7415 84.9574 53.5038 84.8485 54.2045 84.6307C54.9148 84.4129 55.5445 84.0956 56.0938 83.679C56.643 83.2528 57.0975 82.7367 57.4574 82.1307C57.8267 81.5246 58.0824 80.8333 58.2244 80.0568L64.446 80.0852C64.285 81.4205 63.8826 82.7083 63.2386 83.9489C62.6042 85.1799 61.7472 86.2831 60.6676 87.2585C59.5975 88.2244 58.3191 88.9915 56.8324 89.5597C55.3551 90.1184 53.6837 90.3977 51.8182 90.3977C49.2235 90.3977 46.9034 89.8106 44.858 88.6364C42.822 87.4621 41.2121 85.7623 40.0284 83.5369C38.8542 81.3116 38.267 78.6174 38.267 75.4545C38.267 72.2822 38.8636 69.5833 40.0568 67.358C41.25 65.1326 42.8693 63.4375 44.9148 62.2727C46.9602 61.0985 49.2614 60.5114 51.8182 60.5114C53.5038 60.5114 55.0663 60.7481 56.5057 61.2216C57.9545 61.6951 59.2377 62.3864 60.3551 63.2955C61.4725 64.1951 62.3816 65.2983 63.0824 66.6051C63.7926 67.9119 64.2472 69.4081 64.446 71.0938ZM84.6378 69.2756C84.5241 68.1297 84.0365 67.2396 83.1747 66.6051C82.313 65.9706 81.1435 65.6534 79.6662 65.6534C78.6624 65.6534 77.8149 65.7955 77.1236 66.0795C76.4323 66.3542 75.902 66.7377 75.5327 67.2301C75.1728 67.7225 74.9929 68.2812 74.9929 68.9062C74.974 69.4271 75.0829 69.8816 75.3196 70.2699C75.5658 70.6581 75.902 70.9943 76.3281 71.2784C76.7543 71.553 77.2467 71.7945 77.8054 72.0028C78.3641 72.2017 78.9607 72.3722 79.5952 72.5142L82.2088 73.1392C83.4777 73.4233 84.6425 73.8021 85.7031 74.2756C86.7637 74.7491 87.6823 75.3314 88.4588 76.0227C89.2353 76.714 89.8366 77.5284 90.2628 78.4659C90.6984 79.4034 90.9209 80.4782 90.9304 81.6903C90.9209 83.4706 90.4664 85.0142 89.5668 86.321C88.6766 87.6184 87.3887 88.6269 85.7031 89.3466C84.027 90.0568 82.0052 90.4119 79.6378 90.4119C77.2893 90.4119 75.2438 90.0521 73.5014 89.3324C71.7685 88.6127 70.4143 87.5473 69.4389 86.1364C68.473 84.7159 67.9664 82.9593 67.919 80.8665H73.8707C73.937 81.8419 74.2164 82.6562 74.7088 83.3097C75.2107 83.9536 75.8783 84.4413 76.7116 84.7727C77.5545 85.0947 78.5062 85.2557 79.5668 85.2557C80.6084 85.2557 81.5128 85.1042 82.2798 84.8011C83.0563 84.4981 83.6577 84.0767 84.0838 83.5369C84.5099 82.9972 84.723 82.3769 84.723 81.6761C84.723 81.0227 84.5289 80.4735 84.1406 80.0284C83.7618 79.5833 83.2031 79.2045 82.4645 78.892C81.7353 78.5795 80.8404 78.2955 79.7798 78.0398L76.6122 77.2443C74.1596 76.6477 72.223 75.715 70.8026 74.446C69.3821 73.1771 68.6766 71.4678 68.6861 69.3182C68.6766 67.5568 69.1454 66.018 70.0923 64.7017C71.0488 63.3854 72.3603 62.358 74.027 61.6193C75.6937 60.8807 77.5876 60.5114 79.7088 60.5114C81.8679 60.5114 83.7524 60.8807 85.3622 61.6193C86.9815 62.358 88.241 63.3854 89.1406 64.7017C90.0402 66.018 90.5043 67.5426 90.5327 69.2756H84.6378Z"
                  fill="#E87F06"
                ></path>
              </svg>
              <svg
                width="100"
                height="90"
                viewBox="0 0 151 138"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M75 12.75C109.462 12.75 137.5 35.2 137.5 62.7937C137.5 93.525 105.35 112.55 75.5625 112.55C63.4563 112.55 54.4125 110.069 48.1 108.525C41.85 112.356 38.1375 115.006 21.4 119.9C24.7438 111.319 25.9125 102.725 25.1563 93.2437C19.925 86.9937 12.5 78.2437 12.5 62.7937C12.5 35.2 40.5375 12.75 75 12.75ZM75 0.25C35.3875 0.25 0 26.6625 0 62.7937C0 75.6062 4.61875 88.1875 12.7937 97.95C13.1375 109.388 6.4 125.8 0.3375 137.75C16.6 134.813 39.7187 128.325 50.2 121.9C59.0562 124.056 67.5375 125.044 75.5687 125.044C119.844 125.044 150.006 94.8125 150.006 62.7875C150 26.4687 114.369 0.25 75 0.25ZM47.1938 63.6938C48.7313 65.425 49.5 67.575 49.5 70.1563C49.5 73.4625 48.2 76.1437 45.6 78.2125C43 80.275 39.375 81.3062 34.725 81.3062C30.7438 81.3062 27.2187 80.5375 24.1625 79.0125L25.875 72.2438C28.9625 73.8 32.0812 74.5875 35.2562 74.5875C37.0875 74.5875 38.5125 74.2375 39.5438 73.5438C41.5125 72.2063 41.6312 69.5063 39.6875 67.9688C38.7562 67.2375 37.1625 66.4937 34.8812 65.7375C28.025 63.45 24.6 59.8813 24.6 55.0125C24.6 51.8688 25.8625 49.2813 28.375 47.2438C30.9 45.2125 34.2687 44.1938 38.4625 44.1938C42.125 44.1938 45.3125 44.8125 48.0563 46.0563L46.1875 52.6125C43.6812 51.4438 41.0625 50.8625 38.35 50.8625C36.6813 50.8625 35.375 51.1875 34.4312 51.8188C32.5625 53.0938 32.6 55.3813 34.2125 56.7375C35 57.4063 36.8875 58.275 39.9 59.3375C43.225 60.5063 45.65 61.9625 47.1938 63.6938ZM123.475 63.5625C121.919 61.8125 119.444 60.325 116.094 59.15C113.125 58.1 111.244 57.2312 110.475 56.5875C108.956 55.3062 108.919 53.1813 110.675 51.975C111.588 51.3563 112.875 51.05 114.481 51.05C117.381 51.05 119.919 51.7 122.444 52.8938L124.419 45.95L124.281 45.875C121.525 44.6313 118.269 44 114.594 44C110.375 44 106.937 45.0375 104.394 47.0937C101.831 49.1562 100.531 51.825 100.531 55.0125C100.531 59.9563 104.044 63.6187 110.969 65.9187C113.2 66.6812 114.794 67.4125 115.7 68.125C117.525 69.5687 117.45 72.1063 115.562 73.3813C114.581 74.0563 113.181 74.3937 111.394 74.3937C107.962 74.3937 104.881 73.4875 101.881 71.9562L100.069 79.125C103.5 80.8312 107.081 81.5 110.869 81.5C115.55 81.5 119.244 80.45 121.862 78.3625C124.5 76.275 125.838 73.5125 125.838 70.1563C125.838 67.5438 125.044 65.3313 123.475 63.5625ZM81.95 44.7812L74.275 69.575L67.9375 44.7812H56.7438L54.4563 80.7188H62.1375L63.4125 51.7062H63.525C63.525 51.7062 67.9125 69.6937 70.8875 80.125H77.3313C82.2938 65.0062 85.2125 55.525 86.075 51.7062H86.2375C86.2375 56.7875 86.5188 66.4562 87.0875 80.7188H95.2L93.2688 44.7812H81.95Z"
                  fill="#E87F06"
                ></path>
              </svg>
            </div>
            <ul className="list-inside list-disc space-y-4">
              <li>
                <strong className="font-semibold text-wlOrange">
                  Reliable Platform
                </strong>{" "}
                - Trust in seamless communication with our dependable A2P and
                RCS Messaging Services.
              </li>
              <li>
                <strong className="font-semibold text-wlOrange">
                  Strong Data Security (Robust Infosec)
                </strong>{" "}
                - Your data&apos;s protection is our top priority, ensuring
                peace of mind.
              </li>
              <li>
                <strong className="font-semibold text-wlOrange">
                  Remarkable 24/7 Support
                </strong>{" "}
                - Assistance whenever you need it, with our dedicated team.
              </li>
              <li>
                <strong className="font-semibold text-wlOrange">
                  Proven Delivery Rate
                </strong>{" "}
                - Count on us for high delivery rates and timely message
                distribution.
              </li>
              <li>
                <strong className="font-semibold text-wlOrange">
                  Fallback Mechanism
                </strong>{" "}
                - Our system is designed for uninterrupted messaging, always
                ensuring successful delivery.
              </li>
              <li>
                <strong className="font-semibold text-wlOrange">
                  User-Friendly UI
                </strong>{" "}
                - Simplified and intuitive interface, making your experience
                smooth and hassle-free.
              </li>
              <li>
                <strong className="font-semibold text-wlOrange">
                  Dedicated Resource
                </strong>{" "}
                - Get the undivided attention and resources you deserve for
                personalized solutions.
              </li>
              <li>
                <strong className="font-semibold text-wlOrange">
                  Easy Access to Reports
                </strong>{" "}
                - Detailed analytics at your fingertips, offering valuable
                campaign insights.
              </li>
              <li>
                <strong className="font-semibold text-wlOrange">
                  Extended DLT Support
                </strong>{" "}
                - Comply effortlessly with regulatory requirements using our
                extensive DLT support.
              </li>
            </ul>
            <p>
              Drive your business forward with Whistle&apos;s A2P Messaging
              Services: Increase conversions, foster customer loyalty through
              interactive messaging and facilitate secure payments - all while
              gaining valuable insights from comprehensive analytics and
              real-time delivery reports. Elevate your communication game and
              stay ahead of the competition!
            </p>
            <ul className="list-inside list-disc space-y-4">
              <li>
                <strong className="font-semibold text-wlOrange">
                  Drive Conversions
                </strong>{" "}
                - Experience effective SMS campaigns that generate more revenue.
              </li>
              <li>
                <strong className="font-semibold text-wlOrange">
                  Strengthen Relationships
                </strong>{" "}
                - Interact with customers through interactive messaging,
                building lasting connections.
              </li>
              <li>
                <strong className="font-semibold text-wlOrange">
                  Easy Payments
                </strong>{" "}
                - Facilitate secure and convenient payments via SMS.
              </li>
              <li>
                <strong className="font-semibold text-wlOrange">
                  Measure Performance
                </strong>{" "}
                - Gain valuable insights with comprehensive campaign analytics.
              </li>
              <li>
                <strong className="font-semibold text-wlOrange">
                  Real-Time Reports
                </strong>{" "}
                - Get instant delivery updates for every message sent.
              </li>
            </ul>
            <p>
              Ready to revolutionize your communication? Contact us now and
              let&apos;s explore how Whistle can transform your customer
              communication!
            </p>
          </div>
        </div>
      )}

      {showSidebar && (
        <Sidebar
          className="z-50 translate-x-0 transition-transform duration-1000"
          isHomepage={false}
          footer={footer}
        />
      )}
      {/* <SideMenu/> */}
      <Footer toggleFooter={toggleFooter} footer={footer} />
    </div>
  );
}

export default Page;
