import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaBarsStaggered, FaRegCircleUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TbBasket, TbUserCircle } from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";

const Header = () => {
  const [token, setToken] = useState("");

  return (
    <header className="max-padd-container w-full z-50">
      <div className="flexBetween py-3">
        {/* Logo coté gauche */}
        <Link to={"/"} className="flex flex-1">
          <div className="bold-32">
            Outfir<span className="text-secondary">o</span>
          </div>
        </Link>

        {/* Navbar */}
        <div className="flex-1">
          <Navbar />
        </div>

        {/* Boutton coté droit */}
        <div className="flex-1 flexAround gap-x-2 xs:gap-x-8">
          {/* menu toggle */}
          <FaBarsStaggered className="xl:hidden cursor-pointer text-xl" />
          {/* search icon */}
          <FaSearch className="text-lg cursor-pointer" />
          {/* Panier  */}
          <Link to={"/cart"} className="flex relative">
            <TbBasket className="text-[27px]" />
            <span className="bg-secondary text-white text-[12px] font-semibold left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md">
              0
            </span>
          </Link>
          {/* Profil utilisateur */}
          <div className="group relative">
            <div>
              {token ? (
                <div>
                  <TbUserCircle className="text-[29px] cursor-pointer" />
                </div>
              ) : (
                <button className="btn-light flexCenter gap-x-2">
                  Login
                  <RiUserLine className="text-xl" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
