import React from "react";
import SectionHeader from "./SectionHeader";
import TechImg from "../assets/Images/Tech and Innovation.png";
import DesignImg from "../assets/Images/Design and Creativity.png";
import LifestyleImg from "../assets/Images/Wellness and Lifestyle.png";
import BussinessImg from "../assets/Images/Business and finance.png";
import TravelImg from "../assets/Images/Travel and Adventure.png";
import EducationImg from "../assets/Images/Education and Learning.png";
function Catagories() {
  return (
    <div className="py-8">
      <SectionHeader SectionName="Categories" />
      <div className="grid grid-cols-6 gap-4 font-[Inter] font-bold text-[24px] ">
        <div className="flex flex-col justify-center items-center gap-4 cursor-pointer">
          <img
            src={TechImg}
            alt=""
            className="w-[10rem] h-[10rem] rounded-full border-4 border-[#3392FF]"
          />
          <p>Technology & Innovation</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 cursor-pointer">
          <img
            src={DesignImg}
            alt=""
            className="w-[10rem] h-[10rem] rounded-full border-4 border-[#3392FF]"
          />
          <p>Design & Creativity</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 cursor-pointer">
          <img
            src={LifestyleImg}
            alt=""
            className="w-[10rem] h-[10rem] rounded-full border-4 border-[#3392FF]"
          />
          <p>Lifestyle & Wellness</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 cursor-pointer">
          <img
            src={BussinessImg}
            alt=""
            className="w-[10rem] h-[10rem] rounded-full border-4 border-[#3392FF]"
          />
          <p>Business & Finance</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 cursor-pointer">
          <img
            src={TravelImg}
            alt=""
            className="w-[10rem] h-[10rem] rounded-full border-4 border-[#3392FF]"
          />
          <p>Travel & Adventure</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 cursor-pointer">
          <img
            src={EducationImg}
            alt=""
            className="w-[10rem] h-[10rem] rounded-full border-4 border-[#3392FF]"
          />
          <p>Education & Learning</p>
        </div>
      </div>
    </div>
  );
}

export default Catagories;
