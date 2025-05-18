import React from 'react'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

function HrMovieCard({item}) {
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in'>
        <img src={IMAGE_BASE_URL+item.backdrop_path} alt="" 
        className='w-[110px] md:w-[260px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer'/>
        <h2 className='w-[110px] md:w-[260px]
        text-white font-bold mt-2'>{item.title}</h2>
    </section>
  )
}

export default HrMovieCard
