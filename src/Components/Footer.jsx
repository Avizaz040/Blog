import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";

function Footer() {
  return (
    <div className="flex flex-col py-4 mb-[5rem]">
      <div className="flex justify-between mb-[5rem]">
        <h5 className="text-[40px] font-[DM] font-semibold text-[#0075FA]">
          Blogs
        </h5>
        <div className="flex items-center gap-4">
          <p className="font-[Roboto] text-[19px] font-medium text-[#0075FA]">
            Follow Us
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-[#0075FA] text-[18px]" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-[#0075FA] text-[18px]" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[#0075FA] text-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[#0075FA] text-[18px]" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex px-8">
        <div className="w-[80%] grid grid-cols-4 gap-16">
          <div className="text-left">
            <h5 className="font-[Inter] text-[19px] font-semibold pb-6">
              Discover
            </h5>
            <div className="flex flex-col gap-2 font-[Roboto] text-[15px] text-[#333333]">
              <a href="#">Miami</a>
              <a href="#">New York</a>
              <a href="#">Chicago</a>
              <a href="#">Florida</a>
              <a href="#">Los Angeles</a>
              <a href="#">San Diego</a>
            </div>
          </div>
          <div className="text-left">
            <h5 className="font-[Inter] text-[19px] font-semibold pb-6">
              Quick Links
            </h5>
            <div className="flex flex-col gap-2 font-[Roboto] text-[15px] text-[#333333]">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">FAQ's</a>
              <a href="#">Blog</a>
              <a href="#">Pricing Plans</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
          <div className="text-left">
            <h5 className="font-[Inter] text-[19px] font-semibold pb-6">
              Discover
            </h5>
            <div className="flex flex-col gap-2 font-[Roboto] text-[15px] text-[#333333]">
              <a href="#">Miami</a>
              <a href="#">New York</a>
              <a href="#">Chicago</a>
              <a href="#">Florida</a>
              <a href="#">Los Angeles</a>
              <a href="#">San Diego</a>
            </div>
          </div>
          <div className="text-left">
            <h5 className="font-[Inter] text-[19px] font-semibold pb-6">
              Quick Links
            </h5>
            <div className="flex flex-col gap-2 font-[Roboto] text-[15px] text-[#333333]">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">FAQ's</a>
              <a href="#">Blog</a>
              <a href="#">Pricing Plans</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
        <div className="w-[20%] flex flex-col items-end justify-center gap-2">
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
              <p className="text-[16px]">App Store</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
