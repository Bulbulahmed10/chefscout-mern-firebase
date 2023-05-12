import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { GoThreeBars } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../../../../context/AuthProvider";
import no_avatar from "../../../.././assets/no_avatar.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <nav className="flex justify-center items-center gap-16 text-base font-sans uppercase font-semibold mt-8 text-white customCssNavContainer">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/shop">Shop</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
        <ActiveLink to="/contact">Contact</ActiveLink>
        {!user && <ActiveLink to="/login">Login</ActiveLink>}

        <div className="flex items-center gap-6">
          <span className="cursor-pointer">
            <TbSearch className="text-xl" />
          </span>
          <Link to="/cart">
            <label htmlFor="my-drawer" className="cursor-pointer">
              <BsCart3 className="text-2xl" />
            </label>
          </Link>
          {user && (
            <>
              <Link to="/me" className="my-anchor-element">
                <img
                  className="w-10 h-10 object-cover rounded-full ring-2 ring-violet-400"
                  src={user && user?.photoURL ? user.photoURL : no_avatar}
                  alt=""
                />
              </Link>
              {user && user?.displayName && (
                <Tooltip anchorSelect=".my-anchor-element" place="bottom">
                  {user.displayName}
                </Tooltip>
              )}
            </>
          )}
        </div>
      </nav>
      <div className="customCssNavMobileRes">
        <div className="myDrawerCustomCss py-4 ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex items-center justify-between px-4 pb-2 bg-[#5d05af] h-14 ">
            <label htmlFor="my-drawer">
              <GoThreeBars className="text-4xl text-white cursor-pointer rounded-full p-1 " />
            </label>
            <div>
              <div className="flex items-center gap-6">
                <span className="cursor-pointer">
                  <TbSearch className="text-xl text-white" />
                </span>
                <span className="cursor-pointer text-white">
                  <BsCart3 className="text-2xl" />
                </span>

                {user && (
                  <>
                    <Link to="/me" className="my-anchor-element">
                      <img
                        className="w-10 h-10 object-cover rounded-full ring-2 ring-violet-400"
                        src={user && user?.photoURL ? user.photoURL : no_avatar}
                        alt=""
                      />
                    </Link>
                    {user && user?.displayName && (
                      <Tooltip anchorSelect=".my-anchor-element" place="bottom">
                        {user.displayName}
                      </Tooltip>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="drawer-side ">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-52 bg-black text-xl">
              <li className="hover:bg-[#705e5e] rounded-lg">
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li className="hover:bg-[#705e5e] rounded-lg">
                <ActiveLink to="/shop">Shop</ActiveLink>
              </li>
              <li className="hover:bg-[#705e5e] rounded-lg">
                <ActiveLink to="/blog">Blog</ActiveLink>
              </li>
              <li className="hover:bg-[#705e5e] rounded-lg">
                <ActiveLink to="/contact">Contact</ActiveLink>
              </li>
              {!user && (
                <li className="hover:bg-[#705e5e] rounded-lg">
                  <ActiveLink to="/login">Login</ActiveLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
