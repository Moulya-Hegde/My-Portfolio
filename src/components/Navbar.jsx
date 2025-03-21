import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-20 right-0 left-0">
      {/* Logo */}
      <NavLink
        to="/"
        className="w-12 h-12 rounded-lg bg-[#1A1A2E] flex items-center justify-center font-extrabold shadow-lg border border-[#2E2E3A]"
      >
        <p className="bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-transparent text-xl font-bold">
          MH
        </p>
      </NavLink>

      {/* Desktop Nav */}
      <nav className="hidden md:flex text-lg gap-10 font-semibold">
        {["about", "projects", "certificates"].map((item) => (
          <NavLink
            key={item}
            to={`/${item}`}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition-all duration-300 ${
                isActive
                  ? "text-[#00DFD8] bg-[#1A1A2E] shadow-md shadow-[#00DFD8]/50"
                  : "text-[#EAEAEA] hover:bg-[#1A1A2E] hover:text-[#00DFD8] hover:shadow-[#00DFD8]/50 hover:shadow-md"
              }`
            }
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-8 w-48 bg-[#1A1A2E] border border-[#2E2E3A] rounded-lg shadow-lg p-4 flex flex-col gap-4 text-center md:hidden">
          {["about", "projects", "certificates"].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? "text-[#00DFD8] bg-[#16213E] shadow-md shadow-[#00DFD8]/50"
                    : "text-[#EAEAEA] hover:bg-[#16213E] hover:text-[#00DFD8] hover:shadow-[#00DFD8]/50 hover:shadow-md"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
