import { useContext } from "react";
import { AuthContext } from "../Context-Api/AuthContext";

function Card2({Img,Icon, name, dateAndYear, topic, description, height, fontSize, fontWeight, topicSize, topicHeight}) {
  const { theme } = useContext(AuthContext);
  return (
    <div className="flex flex-col gap-4">
      <img
        src={Img}
        alt="demoImage"
        className={`rounded-[24px]  object-cover`}
        style={{ height: height }}
      />
      <div className="flex gap-2">
        <div>{Icon}</div>
        <p className={`font-[Inter] text-left  ${ theme === "dark" ? "text-white" : "text-[#171717]" }`}
        style={{fontSize: fontSize, fontWeight: fontWeight}}>
          {name} <span>|</span> {dateAndYear}
        </p>
      </div>
      <div className="flex flex-col gap-2 text-left">
        <h4 className="font-[Inter] font-semibold  lg:leading-[53px]" 
        style={{fontSize: topicSize, lineHeight: topicHeight}}>
          {topic}
        </h4>
        <p className={`leading-[27px] font-[Poppins] font-normal text-[18px] opacity-[60%] ${ theme === "dark" ? "text-white" : "text-[#171717]" }`}>
         {description}
        </p>
      </div>
    </div>
  );
}

export default Card2;
