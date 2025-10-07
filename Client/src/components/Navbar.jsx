import React, { useState } from "react";
import { Dumbbell, Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Programs", href: '/programs' },
    { name: "Trainers", href: '/trainers' },
    { name: "FEES", href: '/fees' },
    { name: "Contact", href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-2xl z-50 border-b border-red-800/30 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🔥 Logo Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-2xl font-extrabold cursor-pointer"
        >
          <motion.div
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Dumbbell className="text-red-500 w-8 h-8 drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]" />
          </motion.div>
          <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-x">
            FitForge
          </span>
        </motion.div>

        {/* 🌐 Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm font-semibold uppercase tracking-wide">
          {links.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <a href={link.href} className="hover:text-red-500 transition duration-300">
                {link.name}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-orange-400 group-hover:w-full transition-all duration-300"></span>
            </motion.li>
          ))}
        </ul>

        {/* 🎯 Right Buttons */}
        <div className="hidden md:flex space-x-4">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255, 0, 0, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            // className="bg-gradient-to-r from-red-600 to-orange-500 px-5 py-2 rounded-xl font-semibold shadow-md hover:shadow-red-600/50 transition"
          >
            <NavLink
              to="/joinnow"
              className="flex bg-gradient-to-r from-red-600 to-orange-500 items-center gap-2 border border-gray-600 px-4 py-2 rounded-xl hover:bg-gray-800 transition"
            >
              <User className="w-4 h-4"/>
              <span>Join now</span>
            </NavLink>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to="/login"
              className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-xl hover:bg-gray-800 transition"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </NavLink>
          </motion.button>
        </div>

        {/* 📱 Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-gray-900 to-black border-t border-gray-700/40 shadow-lg"
          >
            <ul className="flex flex-col items-center py-6 space-y-6 text-sm font-semibold uppercase">
              {links.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setOpen(false)}
                >
                  <a
                    href={link.href}
                    className="hover:text-red-500 transition duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 0, 0, 0.6)",
                }}
                className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-2 rounded-xl font-semibold shadow-md hover:shadow-red-600/50 transition"
              >
                Join Now
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
