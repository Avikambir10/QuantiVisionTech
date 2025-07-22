import { FiYoutube, FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="h-[8rem] sm:h-[9rem] lg:h-[10rem] flex flex-col justify-center items-center gap-3 sm:gap-4 px-4">
        <div className="flex gap-4 sm:gap-6">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FiYoutube className="text-xl sm:text-2xl hover:text-red-500 transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FiInstagram className="text-xl sm:text-2xl hover:text-pink-500 transition duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="text-xl sm:text-2xl hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FiFacebook className="text-xl sm:text-2xl hover:text-blue-600 transition duration-300" />
          </a>
        </div>
        <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2 text-center">
          © 2023 QuantiVisionTech. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;