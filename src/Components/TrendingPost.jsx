import React from "react";
import Card2 from "./Card2";
import DemoImg from "../assets/Images/demoImg.png";
import DemoImg2 from '../assets/Images/DemoImg2.png'
import SectionHeader from "./SectionHeader";
function TrendingPost() {
  return (
    <div className="py-6">
      <SectionHeader 
      SectionName="Trending Blog Post"/>
      <div className="grid grid-cols-3 gap-10">
      <Card2 
      Img={DemoImg}
      name="Sourav Mridha"
      dateAndYear="Dec 12, 2024"
      topic="Why Minimalism in Modern Design"
      description="In a cluttered world, less is more. Minimalist design emphasizes clarity, simplicity, and purpose. By stripping away the unnecessary, you allow users to focus on what truly matters."
      height={"400px"}
      fontSize={"16px"}
      fontWeight={"300"}
      topicSize={"24px"}
      topicHeight={"29px"}
      />
      <Card2 
      Img={DemoImg2}
      name="Sourav Mridha"
      dateAndYear="Dec 12, 2024"
      topic="Why Minimalism is the Key ?"
      description="In a cluttered world, less is more. Minimalist design emphasizes clarity, simplicity, and purpose. By stripping away the unnecessary, you allow users to focus on what truly matters."
      height={"400px"}
      fontSize={"16px"}
      fontWeight={"300"}
      topicSize={"24px"}
      topicHeight={"29px"}
      />
      <Card2 
      Img={DemoImg}
      name="Sourav Mridha"
      dateAndYear="Dec 12, 2024"
      topic="The Key of Modern Design."
      description="In a cluttered world, less is more. Minimalist design emphasizes clarity, simplicity, and purpose. By stripping away the unnecessary, you allow users to focus on what truly matters."
      height={"400px"}
      fontSize={"16px"}
      fontWeight={"300"}
      topicSize={"24px"}
      topicHeight={"29px"}
      />
      </div>
      </div>
  );
}

export default TrendingPost;
