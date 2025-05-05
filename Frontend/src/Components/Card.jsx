import {useContext} from 'react'
import { AuthContext } from '../Context-Api/AuthContext';

function Card({img, name, dateAndYear, topic, description}) {
  const {theme} = useContext(AuthContext);
  return (
    <div className='flex flex-col lg:flex-row items-center lg:gap-[20px]'>
      <img src={img} alt="image" className='lg:w-1/2 h-[180px] lg:h-[222px] rounded-[16px]' />
      <div className={`lg:w-1/2 flex flex-col justify-center gap-[4px] text-left px-4 lg:px-0 py-[12px] ${ theme === "dark" ? "text-white" : "text-black"}`}>
        <p className={`text-[14px] font-[Inter] font-normal  ${ theme === "dark" ? "text-white" : "text-[#666666]"}`}>{name} <span>|</span> {dateAndYear}</p>
        <h5 className='lg:text-[24px] font-[Inter] font-semibold leading-[29px]'>{topic}</h5>
        <p className={`text-[15px] font-normal font-[Poppins]  opacity-[60%] ${ theme === "dark" ? "text-white" : "text-[#171717]"} `}>{description}</p>
      </div>
    </div>
  )
}

export default Card