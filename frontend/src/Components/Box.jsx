import React from "react";
import clsx from "clsx";

const Box = ({ icon, color = "black", text1 = "Total Products", text2 = "Revenue Generated" }) => {
  const colorClass = clsx({
    'text-blue-600': color === 'blue',
    'text-green-600': color === 'green',
    'text-red-600': color === 'red',
    'text-yellow-600': color === 'yellow',
    'text-purple-600': color === 'purple',
    'text-gray-600': color === 'gray',
  });

  return (
    <div className="flex hover:scale-105 cursor-pointer transition-all duration-300 flex-col gap-9 p-5 border shadow border-gray-200 rounded-xl">
      <div className="flex justify-between">
        <div className="font-medium text-sm">{text1}</div>
        <div className={clsx("text-xl", colorClass)}>{icon}</div>
      </div>
      <div className="flex flex-col justify-center gap-1">
        <div className={clsx("text-2xl font-bold", colorClass)}>$3</div>
        <p className="text-xs text-gray-500">{text2}</p>
      </div> 
    </div>
  );
};

export default Box;
