import MarqueeBar from "./MarqueeBar";
import spitdope from '../assets/spitdope.png';
import { useState } from "react";
import { IoCloseOutline,  IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
import { LiaOpencart } from "react-icons/lia";
import { FaUserAstronaut } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { PiYoutubeLogoLight } from "react-icons/pi";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="main-container relative">
      <MarqueeBar />
      <div className="navbar-container">
        <div className="container mx-auto w-full ">
          <div className="relative pt-5 flex justify-around items-center">
            {/* Social handles - Absolutely positioned */}
            <div className="socialhandle-box gap-5 items-center sm:flex hidden absolute left-0 top-15 ml-4">
              <p><CiInstagram className="text-3xl border rounded jersey-15-regular " /></p>
              {/* <p><IoLogoReddit className="text-3xl border rounded jersey-15-regular " /></p> */}
              <p><RxDiscordLogo className="text-3xl border rounded jersey-15-regular" /></p>
              <p><PiYoutubeLogoLight className="text-3xl border rounded jersey-15-regular" /></p>
            </div>
            <div className="imager-container">
              <Link to={'/'}>
                <img src={spitdope} alt="logo" width={300} height={300} className="imagefli imagefli animate-spin-slow text-center flex justify-center mx-auto" />
              </Link>
            </div>
            {/* Cart and User icons */}
            <div className="cart-box sm:flex hidden items-end gap-5 absolute right-0 top-15 mr-4">
              <p className="text-3xl rounded jersey-15-regular "><LiaOpencart /></p>
              <p><FaUserAstronaut className="text-3xl rounded jersey-15-regular" /></p>
            </div>
          </div>

          {/* Mobile view: social handle and menu icon */}
          <div className="flex justify-between items-center mt-4 sm:hidden">
            <div className="socialhandle-box px-2 flex gap-5 items-center">
              <p><CiInstagram className="text-3xl" /></p>
              {/* <p><IoLogoReddit className="text-3xl" /></p> */}
              <p><RxDiscordLogo className="text-3xl border rounded jersey-15-regular" /></p>
              <p><PiYoutubeLogoLight className="text-3xl border rounded jersey-15-regular" /></p>
            </div>
            <button className="text-3xl pe-2" onClick={handleClick}>
              {click ? <IoCloseOutline className="text-3xl" /> : <IoMenuOutline className="text-3xl" />}
            </button>
          </div>

          {/* Desktop navigation links */}
          <ul className="text-black jersey-15-regular py-2 text-3xl sm:text-3xl sm:flex hidden justify-center gap-10 w-full mx-auto pt-10 pb-5 items-center">
            <Link to='/'>
              <li className="hoverline">Home</li>
            </Link>
            <Link to={'/merch'}><li className="hoverline">Shop</li></Link>
             <Link to={'/aboutus'} ><li className="hoverline">About Us</li></Link>
            <li className="hoverline">History</li>
            <li className="hoverline">Articles</li>
          </ul>

          {/* Mobile navigation links */}
          <ul
            className={`sm:hidden gap-10 jersey-15-regular bg-white absolute text-black z-20 text-3xl w-full top-30 py-5 pl-4 flex flex-col items-center justify-center duration-1000 ${click ? "left-0" : "left-[-100%]"}`}
          >
            <Link to='/'>
              <li className="hoverline">Home</li>
            </Link>
            <Link to='/merch' ><li className="hoverline">Merch</li></Link>
            <li className="hoverline">Find us</li>
            <Link to={'/aboutus'} ><li className="hoverline">About Us</li></Link>
          </ul>
        </div>
      </div>
      <hr color="#b82fde" style={{height:'1.5px'}} className=" sm:flex hidden"/> 
    </div>
  );
};

export default Navbar;