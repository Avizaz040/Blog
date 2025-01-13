
import { GoArrowRight } from "react-icons/go";

function SectionHeader({SectionName}) {
  return (
    
      <div className="flex justify-between py-[40px]">
              <h2 className="text-[24px] lg:text-[40px] font-medium font-[DMdisplay] text-[#030612] ">
                {SectionName}
              </h2>
              <div className="flex items-center gap-[12px]">
                <a href="#" className="font-[inter] text-[#1067CB] font-[700]">
                  See all
                </a>
                <GoArrowRight style={{ color: "blue" }} />
              </div>
            </div>
    
  )
}

export default SectionHeader