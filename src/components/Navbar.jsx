import React from 'react'

const Navbar = ({ data }) => {
  return (
    <div className='w-full px-10 py-3 flex justify-between items-center'>
      <h3 onClick={() => window.location.reload()} className='cursor-pointer'>Orange</h3>
      <div className='flex p-2 px-10 bg-orange-600 text-white rounded-md text-sm gap-3 cursor-pointer'>
        <h3 onClick={() => alert("buss bay buss itni hi functionality daal rkhi ha")}>Favorites</h3>
        <h4>{data.filter(item => item.added).length}</h4>
      </div>
    </div>
  )
}

export default Navbar