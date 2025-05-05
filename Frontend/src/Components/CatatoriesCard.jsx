import React from 'react'

function CatatoriesCard({img,name}) {
  return (
    <div className="flex flex-row lg:flex-col justify-between lg:justify-center items-center gap-4 cursor-pointer">
              <img
                src={img}
                alt=""
                className="w-[6rem] h-[6rem] lg:w-[10rem] lg:h-[10rem] rounded-full border-4 border-[#3392FF]"
              />
              <p className='text-center'>{name}</p>
            </div>
  )
}

export default CatatoriesCard