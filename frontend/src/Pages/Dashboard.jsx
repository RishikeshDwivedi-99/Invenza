import React from "react";
import Sidebar from "../Components/Sidebar";
import Box from "../Components/Box";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FcBullish } from "react-icons/fc";
import { MdInventory } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { IoPeopleOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row w-full">
      <Sidebar />
      <div className="w-full ml-[17%] h-screen overflow-auto">
        <h1 className="border p-3 border-gray-200 text-xl font-medium">
          Dashboard
        </h1>
        <div className="p-3">
          <div className="grid grid-cols-4 gap-5">
            <Box
              icon={<BsCurrencyDollar />}
              color="green"
              text1="Total Sales"
              text2="Revenue Generated"
            />
            <Box
              icon={<CiShoppingCart />}
              color="red"
              text1="Total Purchases"
              text2="Expenses incurred"
            />
            <Box
              icon={<FcBullish />}
              color="green"
              text1="Net Profit"
              text2="Sales-Purchases"
            />
            <Box
              icon={<MdInventory className="text-gray-500" />}
              color=""
              text1="Inventory Value"
              text2="0 products"
            />
          </div>
          <div className="grid grid-cols-3 gap-5 mt-5">
            <Box
              icon={<CgDanger />}
              color="red"
              text1="Low Stock Items"
              text2="Need restocking"
            />
            <Box
              icon={<IoPeopleOutline />}
              text1="Categories"
              text2="Product categories"
            />
            <Box
              icon={<SlCalender />}
              text1="Recent Activity"
              text2="Last 7 days"
            />
          </div>
          <div className="flex cursor-pointer transition-all duration-300 flex-col gap-9 p-5 border shadow border-gray-200 rounded-xl mt-5">
            <h1>Quick Actions</h1>
            <div className="flex gap-3">
              <button className="bg-black text-white px-2 py-1.5 rounded-md text-sm cursor-pointer font-medium">Manage Products</button>
              <button  onClick={()=>navigate('/sales')} className="px-2 py-1.5 rounded-md text-sm border border-gray-300 font-medium cursor-pointer">Create Sale</button>
              <button onClick={()=>navigate('/purchase')}  className="px-2 py-1.5 rounded-md text-sm border border-gray-300 font-medium cursor-pointer">Add Purchase</button>
              <button  onClick={()=>navigate('/reports')} className="px-2 py-1.5 rounded-md text-sm border font-medium border-gray-300 cursor-pointer">View Reports</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
