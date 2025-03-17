import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import pintalogo from "../assets/img/pintalogo-8.png";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 gap-4 shadow-lg w-full px-4">
      <img src={pintalogo} alt="" className="w-12 h-6 hidden md:block" />

      <div className=" relative searchbox w-[200px] lg:w-[900px] bg-white p-2 rounded-lg shadow-lg ">
        <input
          type="text"
          placeholder="find your product"
          className="  w-full pl-8  text-center outline-none text-gray-400 font-semibold"
        />
        <IoIosSearch className="absolute top-0 text-gray-400 " size={30} />
      </div>

      <div className="cart relative">
        <p className="absolute w-2 h-2 p-2 flex items-center justify-center bg-orange-600  text-white rounded-full -right-4 top-0">
          2
        </p>
        <IoCartOutline className="text-gray-700 w-6 h-6" />
      </div>

      <div className="toggleicon">
        <button>
          <IoMdMenu size={30} />
        </button>
      </div>
    </header>
  );
};
