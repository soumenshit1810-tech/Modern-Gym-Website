import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Phone, Calendar } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 rounded-2xl shadow-2xl p-10 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-2">
            Create Account
          </h1>
          <p className="text-gray-400 text-sm">
            Sign up to start your fitness journey with FitForge
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Full Name</label>
            <div className="relative">
              <User size={20} className="absolute top-3 left-3 text-yellow-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black text-white border border-gray-700 rounded-lg pl-10 p-3 focus:border-yellow-400 outline-none"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Email</label>
            <div className="relative">
              <Mail size={20} className="absolute top-3 left-3 text-yellow-400 pointer-events-none" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-black text-white border border-gray-700 rounded-lg pl-10 p-3 focus:border-yellow-400 outline-none"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Phone</label>
            <div className="relative">
              <Phone size={20} className="absolute top-3 left-3 text-yellow-400 pointer-events-none" />
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full bg-black text-white border border-gray-700 rounded-lg pl-10 p-3 focus:border-yellow-400 outline-none"
                required
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Date of Birth</label>
            <div className="relative">
              <Calendar size={20} className="absolute top-3 left-3 text-yellow-400 pointer-events-none" />
              <input
                type="date"
                className="w-full bg-black text-white border border-gray-700 rounded-lg pl-10 p-3 focus:border-yellow-400 outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Password</label>
            <div className="relative">
              <Lock size={20} className="absolute top-3 left-3 text-yellow-400 pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-black text-white border border-gray-700 rounded-lg pl-10 pr-10 p-3 focus:border-yellow-400 outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-yellow-400"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Gender</label>
            <select className="w-full bg-black text-white border border-gray-700 rounded-lg p-3 focus:border-yellow-400 outline-none" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Sign Up Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full hover:bg-yellow-500 transition flex justify-center items-center"
          >
            Sign Up
          </motion.button>

          {/* Redirect to Login */}
          <p className="text-center text-gray-400 text-sm mt-4">
            Already have an account?{" "}
            <NavLink to="/login" className="text-yellow-400 hover:underline font-semibold">
              Login
            </NavLink>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
