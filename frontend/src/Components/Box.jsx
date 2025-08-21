import React from 'react'

const Box = () => {
  return (
    <div className='flex flex-col gap-9 w-68 p-4 shadow-gray-400 shadow-md rounded-lg'>
        <div className='flex justify-between'>
            <div className='font-medium'>Total Products</div>
            <div>icon</div>
        </div>
        <div>
            <div className='text-xl font-bold'>3</div>
            <p className='text-sm text-gray-400 '>Active Inventory Items</p>
        </div>
    </div>
  )
}

export default Box