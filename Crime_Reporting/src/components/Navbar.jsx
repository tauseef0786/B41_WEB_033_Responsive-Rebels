
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"; 
import { useTheme } from "../components/ThemeContext"; 
import logo from "../assets/logo.svg";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  let local = localStorage.getItem("idToken") || false;
  const [token, setToken] = React.useState(local);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleToken = () => {
    if (token) {
      localStorage.removeItem("idToken");
      setToken(false);
    }
  };

  return (
    <nav className="bg-teal-900 text-white px-6 py-4 shadow-md border-b sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="Crime Portal Logo" className="w-10 h-10" />
            <h1 className="ml-2 text-lg font-bold">Crime Portal</h1>
          </div>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/crime-reports" className="hover:text-gray-300">
            Crime Reports
          </Link>
          <Link to="/crime-responses" className="hover:text-gray-300">
            Crime Responses
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact Us
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-teal-700 hover:bg-teal-600"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <FaMoon className="text-yellow-400 text-xl" />
            ) : (
              <FaSun className="text-yellow-400 text-xl" />
            )}
          </button>

          {/* Authentication Button */}
          <Link
            to="/register"
            className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
            onClick={toggleToken}
          >
            {token ? "Log Out" : "Register"}
          </Link>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        {!isMobileMenuOpen && (
          <button
            className="md:hidden text-2xl focus:outline-none z-50"
            onClick={toggleMobileMenu}
          >
            <FaBars />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-teal-800 text-white transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 text-3xl z-50"
          onClick={toggleMobileMenu}
        >
          <FaTimes />
        </button>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-xl font-medium">
          <Link
            to="/crime-reports"
            className="hover:text-teal-300"
            onClick={toggleMobileMenu}
          >
            Crime Reports
          </Link>
          <Link
            to="/crime-responses"
            className="hover:text-teal-300"
            onClick={toggleMobileMenu}
          >
            Crime Responses
          </Link>
          <Link
            to="/about"
            className="hover:text-teal-300"
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-teal-300"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </Link>
          <Link
            to="/register"
            className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
            onClick={() => {
              toggleMobileMenu();
              toggleToken();
            }}
          >
            {token ? "Log Out" : "Register"}
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={() => {
              toggleMobileMenu();
              toggleTheme();
            }}
            className="p-2 rounded-lg bg-teal-700 hover:bg-teal-600"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <FaMoon className="text-yellow-400 text-2xl" />
            ) : (
              <FaSun className="text-yellow-400 text-2xl" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
