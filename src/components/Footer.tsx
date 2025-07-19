import { FiYoutube, FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="border-gray-700 h-[10rem] flex flex-col justify-center items-center gap-4">
        <div className="flex gap-6">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FiYoutube className="text-2xl hover:text-red-500 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FiInstagram className="text-2xl hover:text-pink-500 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="text-2xl hover:text-blue-500 transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FiFacebook className="text-2xl hover:text-blue-600 transition" />
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          © 2023 QuantiVisionTech. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
