import { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineCreate, AiOutlineInbox, AiOutlineSend } from 'react-icons/ai';  // Correct imports from react-icons/ai
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const FloatingActionButton = () => {
  const [showInnerFabs, setShowInnerFabs] = useState(false);

  const handleMainFabClick = () => {
    setShowInnerFabs(prevState => !prevState);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.fab-container')) {
      setShowInnerFabs(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="fab-container fixed bottom-8 right-8">
      {/* Main FAB */}
      <button
        id="fab1"
        onClick={handleMainFabClick}
        className="fab flex size-14 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg transition-transform duration-300 ease-out hover:bg-pink-400">
        <AiOutlinePlus size={24} />
      </button>

      {/* Inner FABs */}
      {showInnerFabs && (
        <div className="inner-fabs absolute bottom-12 right-0 flex flex-col items-center transition-all duration-500 ease-out">
          {[{ icon: <FaFacebookF />, tooltip: 'Facebook' },
            { icon: <FaLinkedinIn />, tooltip: 'Linkedin' },
            { icon: <FaInstagram />, tooltip: 'Instagram' }]
            .map((item, index) => (
            <button
              key={index}
              data-tooltip={item.tooltip}
              className="fab mb-4 size-10 rounded-full bg-indigo-500 text-white shadow-lg transition-all duration-500 ease-out hover:bg-indigo-400"
            //   style={{ bottom: `${index * 55 + 70}px` }}
              >
              {item.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;  // Default export
