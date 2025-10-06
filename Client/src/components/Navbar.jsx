import React, { useState } from "react";
import { Menu, X, Dumbbell, User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold tracking-wide">
          <Dumbbell className="text-red-500 w-7 h-7" />
          <span>FitForge</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-red-500 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Join Now
          </button>
          <button className="flex items-center space-x-1 border border-gray-600 px-3 py-2 rounded-lg hover:bg-gray-800 transition">
            <User className="w-4 h-4" />
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col items-center py-4 space-y-4 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-red-500 transition duration-300"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition">
              Join Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
