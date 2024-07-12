import React, { useState } from "react";
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineAddReaction } from "react-icons/md";
import LoginPage from "../pages/LoginPage";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar la autenticación

  const handleClick = () => setClick(!click);
  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#5D9C59] text-yellow-50 transition">
      <ul className="text-center text-xl p-1">
        <LinkRouter to="/">
          <li className="my-4 py-4 border-slate-400 hover:bg-slate-400 hover:rounded">Home</li>
        </LinkRouter>
        <LinkRouter to="/tasks">
          <li className="my-4 py-4 border-slate-400 hover:bg-slate-400 hover:rounded">Tasks</li>
        </LinkRouter>
        {!isLoggedIn && (
          <>
            <LinkRouter to="/register">
              <li className="my-4 py-4 border-slate-400 hover:bg-slate-400 hover:rounded">Register</li>
            </LinkRouter>
            <LinkRouter to="/login">
              <li className="my-4 py-4 border-slate-400 hover:bg-slate-400 hover:rounded">Login</li>
            </LinkRouter>
          </>
        )}
        {isLoggedIn && (
          <>
            <LinkScroll spy={true} smooth={true} to="profile">
              <li className="my-4 py-4 border-slate-400 hover:bg-slate-400 hover:rounded">Profile</li>
            </LinkScroll>
            <li className="my-4 py-4 border-slate-400 hover:bg-slate-400 hover:rounded">Logout</li>
          </>
        )}
      </ul>
    </div>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 bg-[#5D9C59] text-yellow-50 lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold"><MdOutlineAddReaction /></span>
        </div>
        <div className="lg:flex md:flex items center justify-end font-normal hidden text-2xl ">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18]">
              <LinkRouter to="/">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Home</li>
              </LinkRouter>
              <LinkRouter to="/tasks">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Tasks</li>
              </LinkRouter>
              {!isLoggedIn && (
                <>
                  <LinkRouter to="/register">
                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Register</li>
                  </LinkRouter>
                  <LinkRouter to="/login">
                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Login</li>
                  </LinkRouter>
                </>
              )}
              {isLoggedIn && (
                <>
                  <LinkScroll spy={true} smooth={true} to="profile">
                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Profile</li>
                  </LinkScroll>
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Logout</li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>{click ? <FaTimes /> : <CiMenuFries />}</button>
      </div>
    </nav>
  );
};

export default NavBar;
