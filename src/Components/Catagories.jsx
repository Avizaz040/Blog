import React from "react";
import SectionHeader from "./SectionHeader";
import CatagoriesCard from "../Components/CatatoriesCard";
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
      <div className="grid grid-col-1 lg:grid-cols-6 gap-4 font-[Inter] font-bold text-[16px] lg:text-[24px] ">
        <CatagoriesCard img={TechImg} name="Technology & Innovation" />
        <CatagoriesCard img={DesignImg} name="Design & Creativity" />
        <CatagoriesCard img={LifestyleImg} name="Lifestyle & Wellness" />
        <CatagoriesCard img={BussinessImg} name="Business & Finance" />
        <CatagoriesCard img={TravelImg} name="Travel & Adventure" />
        <CatagoriesCard img={EducationImg} name="Education & Learning" />
      </div>

    
    </div>
  );
}

export default Catagories;
