import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-indigo-300 w-full py-5 sticky top-0">
      <div onClick={() => setOpen(!open)} className="md:hidden pl-5">
        {
            open ? <XMarkIcon className="w-6 h-6"></XMarkIcon> : <Bars3Icon className="w-6 h-6"></Bars3Icon>
        }
      </div>
      <ul className={`bg-indigo-300 md:flex w-full justify-start pl-5 text-xl gap-4 absolute md:static duration-300 ease-in ${open ? 'top-10' : 'top-[-140px]'}`}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/rechart">Rechart</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
