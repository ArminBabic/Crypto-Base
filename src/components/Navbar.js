import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => setToggle(!toggle);

  const mobileNav = (
    <nav className="md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[85%] bg-primary ease-in duration-300 z-10">
      <ul className="w-full p-4">
        <li className="border-b py-6">
          <Link to="/">Home</Link>
        </li>
        <li className="border-b py-6">
          <Link to="/">Account</Link>
        </li>
        <li className="py-6">
          <ThemeToggle />
        </li>
      </ul>

      <div className="w-full flex flex-col p-4 ">
        <Link to="/SignIn">
          <button className="bg-primary w-full my-2 p-3  text-primary border border-secondary  rounded-2xl  shadow-xl">
            Sign In
          </button>
        </Link>
        <Link to="/SignUp">
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl ">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );

  return (
    <nav className="rounded-div flex items-center justify-between font-bold h-20">
      <Link className="text-2xl" to="/">
        Cryptobase
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      <div className="hidden md:block">
        <Link className="p-4 hover:text-accent" to="/SignIn">
          Sign In
        </Link>
        <Link
          className="bg-button text-btnText px-5 py-2 rounded-2xl shadow-lg hover:shadow-2xl"
          to="/SignUp"
        >
          Sign Up
        </Link>
      </div>
      {/* menu icons */}
      <div className="block md:hidden cursor-pointer">
        {!toggle ? (
          <AiOutlineMenu className="text-xl" onClick={toggleHandler} />
        ) : (
          <AiOutlineClose className="text-xl" onClick={toggleHandler} />
        )}
      </div>
      {/* mobile menu */}
      {toggle && mobileNav}
    </nav>
  );
}

export default Navbar;
