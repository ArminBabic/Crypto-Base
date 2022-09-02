import React from "react";
import ThemeToggle from "./ThemeToggle";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="rounded-div py-8 grid  md:grid-cols-2 md:justify-between md:gap-x-32 ">
        <section className="flex flex-row justify-around md:justify-start md:gap-x-16 mb-4 md:ml-4 text-sm w-full">
          <div className="leading-8 ">
            <h5 className="font-bold">SUPPORT</h5>
            <p>HELP CENTER</p>
            <p>CONTACT US</p>
            <p>API STATUS</p>
            <p>DOCUMENTATION</p>
          </div>

          <div className="leading-8 ">
            <h5 className="font-bold">INFO</h5>
            <p>ABOUT US</p>
            <p>CAREERS</p>
            <p>INVEST</p>
            <p>LEGAL</p>
          </div>
        </section>

        <section className="w-full flex flex-col justify-center text-center md:text-end md:pr-4">
          <div className="flex justify-center md:justify-end">
            <ThemeToggle />
          </div>
          <p className="py-6">Sign up for crypto news</p>

          <form className="flex flex-col items-center justify-center md:flex-row  md:mb-8">
            <input
              className="w-full bg-primary  p-2 border border-input rounded-2xl shadow-xl mb-2"
              type="email"
              placeholder="Enter your email"
            />
            <button className=" w-full md:ml-2 md:w-1/3 text-btnText bg-button rounded-2xl py-2 mb-2  hover:shadow-xl">
              Sign up
            </button>
          </form>

          <div className="flex justify-around text-accent mb-12  ">
            <FaInstagram />
            <FaTiktok />
            <FaTwitter />
            <FaFacebook />
            <FaGithub />
          </div>
        </section>
        {/*     <p>Powered by Coin Gecko</p> */}

        <div className="text-center md:col-span-2">
          <p>Powered by Coin Gecko</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
