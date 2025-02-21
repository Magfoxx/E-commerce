import { Link, NavLink } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";
import { MdFactCheck } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaListAlt } from "react-icons/fa";

const Sidebar = ({setToken}) => {
  return (
    <div className="max-sm:flexCenter max-xs:pb-3 rounded bg-white pb-3 sm:w-1/5 sm:min-h-screen">
      <div className="flex flex-col gap-y-6 max-sm:items-center sm:flex-col pt-4 sm:pt-14">
        {/* Logo */}
        <Link to={"/"} className="bold-22 xl:bold-32 sm:pl-2 lg:pl-12">
          Outfir<span className="text-secondary">o</span>
        </Link>
        <div className="flex sm:flex-col gap-x-5 gap-y-8 sm:pt-10">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"
            }
          >
            <FaSquarePlus />
            <div className="hidden lg:flex">Add Item</div>
          </NavLink>
          <NavLink
            to={"/link"}
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"
            }
          >
            <FaListAlt />
            <div className="hidden lg:flex">Add List</div>
          </NavLink>
          <NavLink
            to={"/orders"}
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"
            }
          >
            <MdFactCheck />
            <div className="hidden lg:flex">Add Orders</div>
          </NavLink>
          <div className="max-sm:ml-5 sm:mt-72">
            <button
              onClick={() => setToken("")}
              className="flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl text-red-500"
            >
              <BiLogOut />
              <div className="hidden lg:flex">Logout</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
