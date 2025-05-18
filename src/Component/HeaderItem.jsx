import React from 'react'

function HeaderItem({ name, icon: Icon }) {
  return (
    <div className='text-white flex items-center gap-3 
        text-[16px] font-semibold cursor-pointer
        hover:underline underline-offset-8 underline-5 mb-1'>
        {Icon && <Icon className="text-[20px]"/>}
        <p className=''>{name}</p>
    </div>
  )
}

export default HeaderItem
