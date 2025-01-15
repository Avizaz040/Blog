import {useContext} from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";
import { ThemeContext } from "../Context-Api/ThemeContext";
import FooterMenu from "./FooterMenu"

function Footer() {
 
  const {theme} = useContext(ThemeContext);
  return (
    <div className="w-full flex flex-col py-4 gap-10 text-center">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 ">
        <h5 className="text-left text-[40px] font-[DM] font-semibold text-[#0075FA]">
          Blogs
        </h5>
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-4">
          <p className={`font-[Roboto] text-[19px] font-medium  ${ theme === "dark" ? "text-white" : "text-[#0075FA]" }`}>
            Follow Us
          </p>
          <div className={`flex gap-4 ${ theme === "dark" ? "text-white" : "text-[#0075FA]" }`}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-[24px] lg:text-[18px]" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-[24px] lg:text-[18px]" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[24px] lg:text-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[24px] lg:text-[18px]" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:px-auto gap-4 lg:gap-0">
        <FooterMenu/>
        <div className=" lg:w-[20%] flex flex-col items-center lg:items-end justify-center gap-2">
          <p className="font-[Inter] font-bold text-[19px]">Get the app</p>
          <div className="w-[213px] flex items-center justify-center gap-4 py-4 bg-[#1067CB] text-white rounded-[12px] px-4 cursor-pointer mb-2">
            <div className="w-1/4 border-r-[1px] border-white">
              <IoLogoApple
                style={{ color: "white", height: "32px", width: "32px" }}
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-[13px]">Download on the</p>
              <p className="text-[16px]">App Store</p>
            </div>
          </div>
          <div className="w-[213px] flex items-center justify-center gap-4 py-4 bg-[#1067CB] text-white rounded-[12px] px-4 cursor-pointer">
            <div className="w-1/4 border-r-[1px] border-white">
              <BiLogoPlayStore
                style={{ color: "white", height: "32px", width: "32px" }}
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-[13px]">Download on the</p>
              <p className="text-[16px]">Play Store</p>
            </div>
          </div>
        </div>
        
      </div>
      <p className="w-full">Copyright © 2025. All rights reserved</p>
    </div>
  );
}

export default Footer;
