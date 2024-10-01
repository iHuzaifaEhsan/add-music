import React from 'react'

const Card = ({ data, handleClick, index }) => {

  const { name, image, artist, added } = data;

  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative'>
      <div className='w-20 h-20 bg-orange-600 rounded-md cursor-grabbing'>
        <img className='w-full h-full object-cover rounded' src={image} alt="" />
      </div>
      <div className=''>
        <h3 className='text-xl leading-none font-semibold'>{artist}</h3>
        <h6 className='text-sm mt-1'>{name}</h6>
      </div>
      <button onClick={() => handleClick(index)} className={`px-4 py-4 ${added === false ? "bg-orange-600" : "bg-teal-500"} absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full whitespace-nowrap mt-10 cursor-pointer`}>{added === false ? "Add to favorites" : "Added"}</button>
    </div>
  )
}

export default Card