import {useContext} from 'react'
import { motion } from "framer-motion";
import DemoImg from "../assets/Images/demoImg.png";
import Card from "../Components/Card";
import DemoCardImg from "../assets/Images/DemoCardImg.png";
import { SlArrowDown } from "react-icons/sl";
import Card2 from "./Card2";
import { CgProfile } from "react-icons/cg";
import SectionHeader from "./SectionHeader";
import { AuthContext } from "../Context-Api/AuthContext";

function FeaturedSection() {
  const { theme } = useContext(AuthContext);
  return (
    <div className={`py-8 lg:py-6 flex flex-col ${ theme === "dark" ? "text-white" : "text-black" }`}>
      <SectionHeader SectionName="Featured Blog Post" />

      <div className="flex flex-col lg:flex-row gap-[32px]">
        <div className="lg:w-1/2">
          <Card2
            Img={DemoImg}
            Icon={<CgProfile style={{ fontSize: "2rem", color: "gray" }} />}
            name="Sourav Mridha"
            dateAndYear="Dec 12, 2024"
            topic="Why Minimalism is the Key to Modern Design"
            description="In a cluttered world, less is more. Minimalist design emphasizes clarity, simplicity, and purpose. By stripping away the unnecessary, you allow users to focus on what truly matters. Whether it’s a sleek interface or a clean graphic, minimalism not only looks modern but enhances functionality. Next time you design, ask yourself: “What can I remove to improve this?"
            height={"auto"}
            fontSize={"clamp(16px, 2vw, 20px)"}
            fontWeight={"500"}
            topicSize={"clamp(28px, 5vw, 44px)"}
            topicHeight={"auto"}
          />
        </div>

        <div className="relative lg:w-1/2 flex flex-col gap-8 mb-8">
          <Card
            img={DemoCardImg}
            name="Sourav Mridha"
            dateAndYear="Dec 12, 2024"
            topic="5-Minute Morning Routine to Boost Productivity"
            description="In today’s fast-paced world, staying ahead means constantly learning and adapting."
          />
          <Card
            img={DemoCardImg}
            name="Sourav Mridha"
            dateAndYear="Dec 12, 2024"
            topic="Top 3 Budget-Friendly Travel Hacks"
            description="In today’s fast-paced world, staying ahead means constantly learning and adapting.In today’s fast-paced world, staying ahead means constantly learning and adapting."
          />
          <Card
            img={DemoCardImg}
            name="Sourav Mridha"
            dateAndYear="Dec 12, 2024"
            topic="5-Minute Morning Routine to Boost Productivity"
            description="In today’s fast-paced world, staying ahead means constantly learning and adapting.In today’s fast-paced world."
          />
          <Card
            img={DemoCardImg}
            name="Sourav Mridha"
            dateAndYear="Dec 12, 2024"
            topic="5-Minute Morning Routine to Boost Productivity"
            description="In today’s fast-paced world, staying ahead means constantly learning and adapting.In today’s fast-paced world."
          />
          <div className={`absolute w-full h-[13rem] flex justify-center items-center bottom-0 ${ theme === "dark" ? "bg-gradient-to-b from-gray-800/10 from-5% via-gray-800/90 to-gray-800 to-90%" : "bg-gradient-to-b from-white/10 from-5% via-white/90 to-white to-90%" }`}>
            <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            >
              <SlArrowDown className={`text-[3rem] font-[5px] cursor-pointer ${ theme === "dark" ? "text-white" : "text-blue-600" }`}/>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSection;
