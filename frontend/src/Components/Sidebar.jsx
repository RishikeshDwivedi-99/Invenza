import React from "react";
import { NavLink } from "react-router-dom";
import { MdInventory } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { TbReportSearch } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="w-[17%] fixed h-screen flex flex-col bg-white shadow-md">
      <div className="p-3 border-b border-gray-200 flex items-center gap-1.5">
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-bold">Invenza</h1>
          <p className="text-sm font-medium text-gray-500">Medical</p>
        </div>
      </div>

      <div className="p-3 h-full flex flex-col justify-between border-b border-gray-200">
        <div className="flex flex-col gap-3 flex-grow">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive
                ? "flex p-1.5 px-2 items-center gap-3 rounded-lg bg-black text-white"
                : "flex p-1.5 px-2 hover:bg-gray-100 items-center gap-3 rounded-lg text-gray-500 bg-white"
            }
          >
            <div>
              <MdOutlineSpaceDashboard />
            </div>
            <div>Dashboard</div>
          </NavLink>

          <NavLink
            to={"/inventory"}
            className={({ isActive }) =>
              isActive
                ? "flex p-1.5 px-2 items-center gap-3 rounded-lg bg-black text-white"
                : "flex p-1.5 px-2 hover:bg-gray-100 items-center gap-3 rounded-lg text-gray-500 bg-white"
            }
          >
            <div>
              <MdInventory />
            </div>
            <div>Inventory</div>
          </NavLink>

          <NavLink
            to={"/sales"}
            className={({ isActive }) =>
              isActive
                ? "flex p-1.5 px-2 items-center gap-3 rounded-lg bg-black text-white"
                : "flex p-1.5 px-2 hover:bg-gray-100 items-center gap-3 rounded-lg text-gray-500 bg-white"
            }
          >
            <div>
              <FcSalesPerformance />
            </div>
            <div>Sales</div>
          </NavLink>

          <NavLink
            to={"/purchase"}
            className={({ isActive }) =>
              isActive
                ? "flex p-1.5 px-2 items-center gap-3 rounded-lg bg-black text-white"
                : "flex p-1.5 px-2 hover:bg-gray-100 items-center gap-3 rounded-lg text-gray-500 bg-white"
            }
          >
            <div>
              <BiPurchaseTagAlt />
            </div>
            <div>Purchase</div>
          </NavLink>

          <NavLink
            to={"/reports"}
            className={({ isActive }) =>
              isActive
                ? "flex p-1.5 px-2 items-center gap-3 rounded-lg bg-black text-white"
                : "flex p-1.5 px-2 hover:bg-gray-100 items-center gap-3 rounded-lg text-gray-500 bg-white"
            }
          >
            <div>
              <TbReportSearch />
            </div>
            <div>Reports</div>
          </NavLink>
        </div>

        <div className="mt-3">
          <div className="border p-3 border-gray-300 rounded-md ">
            <div className="flex gap-2 items-center">
              <div className="bg-black shrink-0 cursor-pointer text-white w-7 h-7 flex justify-center items-center rounded-full">
                R
              </div>
              <div>
                <div className="cursor-pointer">Rishikesh</div>
                <div className="text-xs cursor-pointer text-gray-400">
                  rishikeshdwivedi99@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
