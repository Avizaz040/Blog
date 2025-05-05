import {useContext} from 'react'
import { GoArrowRight } from "react-icons/go";
import { AuthContext } from '../Context-Api/AuthContext';

function SectionHeader({SectionName}) {
  const { theme } = useContext(AuthContext);
  return (
    
      <div className="flex justify-between py-[40px]">
              <h2 className={`text-[24px] lg:text-[40px] font-medium font-[DMdisplay] ${ theme === "dark" ? "text-white bg-gray-800" : "text-[#030612]  bg-white" }`}>
                {SectionName}
              </h2>
              <div className="flex items-center gap-[12px]">
                <a href="#" className={`font-[inter]  font-[700] ${ theme === "dark" ? "text-white bg-gray-800" : "text-[#1067CB]  bg-white" }`}>
                  See all
                </a>
                <GoArrowRight className={`${ theme === "dark" ? "text-white" : "text-[#1067CB] " }`} />
              </div>
            </div>
    
  )
}

export default SectionHeader