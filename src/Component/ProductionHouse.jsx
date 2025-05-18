import React, { useEffect, useState } from 'react'

import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import starwar from './../assets/Images/starwar.png'
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'

import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import starwarsV from './../assets/Videos/star-wars.mp4'
import nationalGV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'

function ProductionHouse() {
  const [isMobile, setIsMobile] = useState(false)

  const ProductionHouseList = [
    { id: 1, name: 'DISNEY', image: disney, video: disneyV },
    { id: 2, name: 'MARVEL', image: marvel, video: marvelV },
    { id: 3, name: 'STAR WARS', image: starwar, video: starwarsV },
    { id: 4, name: 'NATIONAL GEOGRAPHIC', image: nationalG, video: nationalGV },
    { id: 5, name: 'PIXAR', image: pixar, video: pixarV }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md = 768px
    }

    handleResize(); // Gọi khi component mount
    window.addEventListener('resize', handleResize); // Cập nhật khi thay đổi size

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, [])

  const displayedList = isMobile
    ? ProductionHouseList.slice(0, 3) // Lấy 3 phần tử đầu
    : ProductionHouseList // Hiển thị tất cả

  return (
    <div className='flex gap-2 md:gap-7 px-5 md:px-16 mx-4 md:mx-0 p-2'>
      {displayedList.map((item) => (
        <div
          className='border-[2px] border-gray-400 rounded-lg
            hover:scale-110 transition-all duration-100 ease-in-out
            cursor-pointer relative shadow-2xl shadow-gray-800'
          key={item.id}
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            preload='auto'
            className='absolute rounded-lg z-0 opacity-0 hover:opacity-50'
          />
          <img src={item.image} alt={item.name} className='w-full z-[1]' />
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse
