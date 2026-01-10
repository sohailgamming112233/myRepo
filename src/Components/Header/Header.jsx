import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "text-black font-semibold" : "text-gray-700 hover:text-black";

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">MyWebsite</h1>

        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
           <NavLink to="/login" className={linkClass}>
            Login
          </NavLink> <NavLink to="/signup" className={linkClass}>
            SignUp
          </NavLink>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 text-2xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              className={linkClass}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/about"
              className={linkClass}
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/contact"
              className={linkClass}
            >
              Contact
            </NavLink>
             <NavLink
              onClick={() => setOpen(false)}
              to="/login"
              className={linkClass}
            >
              Login
            </NavLink>
             <NavLink
              onClick={() => setOpen(false)}
              to="/signup"
              className={linkClass}
            >
              SignUp
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
