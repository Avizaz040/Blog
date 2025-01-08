import React from 'react'

function Card({img, name, dateAndYear, topic, description}) {
  return (
    <div className='flex gap-[20px]'>
      <img src={img} alt="image" className='w-1/2 h-[222px] rounded-[16px]' />
      <div className='w-1/2 flex flex-col justify-center gap-[4px] text-left py-[12px]'>
        <p className='text-[14px] font-[Inter] font-normal text-[#666666]'>{name} <span>|</span> {dateAndYear}</p>
        <h5 className='text-[24px] font-[Inter] font-semibold leading-[29px]'>{topic}</h5>
        <p className='text-[15px] font-normal font-[Poppins] text-[#171717] opacity-[60%]'>{description}</p>
      </div>
    </div>
  )
}

export default Card