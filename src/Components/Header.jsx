import React from "react";
import { Link } from "react-router-dom";
import HeadLogo from "../Assets/logo.webp";
const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-white">
        <div style={{ background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)" }} className="flex items-center justify-between px-12 pt-4 pb-3">
      <Link to="/">
        <div className="flex gap-2 items-center justify-center">
        <img
          src={HeadLogo}
          alt="Yoda"
          className="h-full w-8 object-cover"
        />
        <p className="text-white text-sm font-bold w-8">Star Wars</p>
        </div>
      </Link>
    </div>
    </div>
  );
};

export default Header;
