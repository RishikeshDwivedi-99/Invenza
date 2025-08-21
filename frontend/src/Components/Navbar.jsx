import React from 'react'

const Navbar = () => {
  return (
    <div className='border-b-2 border-gray-300 p-4 flex justify-between items-center'>
      <div>
      <h1 className='text-2xl font-medium'>Shopify</h1>
      <p className='text-gray-500 text-sm'>Billing & Inventory Management</p>
      </div>
      <div>
        <button className='bg-blue-800 text-white px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-blue-700'>+ Add Product</button>
      </div>
    </div>
  )
}

export default Navbar