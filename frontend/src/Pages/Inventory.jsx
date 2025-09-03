import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { CiSearch } from "react-icons/ci";
import { FaBox } from "react-icons/fa";
import { IoLogoDropbox } from "react-icons/io";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue]  = useState('');
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  }
  const [categories, setCategories] = useState('');
  const selectHandler = (e) => {
    setCategories(e.target.value)
  }
  return (
    <div className="flex flex-row w-full">
      <Sidebar />
      <div className="w-[83%] z-100 ml-auto">
        <h1 className="border p-3 border-gray-200 text-xl font-medium">
          Inventory
        </h1>
        <div className="flex justify-between items-center p-3">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold">Product Management</h1>
            <p className="text-gray-500">
              Manage your Inventory and product catalog.
            </p>
          </div>
          <div>
            <button className="px-2 py-1.5 cursor-pointer hover:scale-105 transition-all duration-400 bg-black text-white rounded-lg">
              + Add Product
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="border p-5 py-12 border-gray-300 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 w-full">
              <div className="flex gap-2 items-center border border-gray-300 rounded-lg p-2.5 w-[80%]">
                <label htmlFor="search">
                  <CiSearch className="text-lg text-gray-500" />
                </label>
                <input
                  className="w-full outline-none"
                  type="text"
                  id="search"
                  value={searchValue}
                  onChange={searchHandler}
                  placeholder="Search products..."
                />
              </div>
              <div className="w-[20%]">
                <select
                  name=""
                  onSelect={selectHandler}
                  value={categories}
                  id=""
                  className="outline-none border border-gray-300 rounded-md p-2.5 font-medium"
                >
                  <option value="All Categories"> All Categories </option>
                  <option value="Half Categories"> Half Categories </option>
                  <option value="half half Categories">
                    {" "}
                    half half Categories{" "}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3">
          <div className="border shadow-md border-gray-300 p-2 rounded-lg h-80">
            <h1 className="font-bold">Products({products.length})</h1>
            <div className="flex h-full justify-center items-center">
              <div className="flex flex-col items-center">
                <IoLogoDropbox className="text-5xl" />
                <h1 className="text-xl font-bold">No Products Found</h1>
                <p className="text-md text-gray-600">
                  Get Starting by adding your first product to the inventory.
                </p>
                <button className="mt-3 flex gap-3 hover:scale-105 transition-all duration-500 px-2 py-1.5 cursor-pointer bg-black text-white  rounded-md">
                  <span>+</span>
                  <span>Add Your First Product</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
