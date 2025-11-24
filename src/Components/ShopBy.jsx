import { BiCycling } from "react-icons/bi";
import { CiBaseball, CiBasketball } from "react-icons/ci";
import { FaTableTennis } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";

import { IoFootball } from "react-icons/io5";

const ShopBy = () => {
  return (
    <div className="my-20 py-10 bg-[#f9fafb]">
      <div className="text-center my-7">
        <h3 className="text-2xl font-semibold">Shop By EquiShop</h3>
        <p className="text-[#6a6c70] font-semibold mt-4">Find equipment tailored to your favorite sports and activities</p>
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-center gap-15 mt-15">
        <div className="bg-white  dark:bg-gray-800 rounded-xl w-35 h-25 p-2 m-y2 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-2 m-y2">
          <IoFootball className="text-4xl text-blue-800" />
          <h3>Football</h3>
          <p className="text-xs">45 Items</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl w-35 h-25 p-2 m-y2 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-2 m-y2">
          <CiBasketball className="text-4xl text-red-400" />
          <h3>Basketball</h3>
          <p className="text-xs">45 Items</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl w-35 h-25 p-2 m-y2 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-2 m-y2">
          <FaTableTennis className="text-3xl text-green-400" />
          <h3>Tennis</h3>
          <p className="text-xs">45 Items</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl w-35 h-25 p-2 m-y2 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-2 m-y2">
          <CiBaseball className="text-4xl text-orange-500" />
          <h3>Baseball</h3>
          <p className="text-xs">45 Items</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl w-35 h-25 p-2 m-y2 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-2 m-y2">
          <FaPersonSwimming className="text-4xl text-blue-400" />
          <h3>Swimming</h3>
          <p className="text-xs">45 Items</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl w-35 h-25 p-2 m-y2 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-2 m-y2">
          <BiCycling className="text-4xl text-red-500" />
          <h3>Cycling</h3>
          <p className="text-xs">45 Items</p>
        </div>
      </div>
    </div>
  );
};

export default ShopBy;
