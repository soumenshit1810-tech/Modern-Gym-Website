import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Dumbbell, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen flex items-center justify-center text-white px-4 ">
      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 shadow-2xl rounded-2xl p-10 w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Dumbbell size={60} className="text-yellow-400" />
          </div>
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm">
            Log in to continue your fitness journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6 ">
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={20}
                className="absolute top-3 left-3 text-yellow-400 pointer-events-none"
              />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-black text-white border border-gray-700 rounded-lg pl-10 p-3 focus:border-yellow-400 outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Password
            </label>
            <div className="relative">
              <Lock
                size={20}
                className="absolute top-3 left-3 text-yellow-400 pointer-events-none"
              />
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
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-yellow-400" />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-yellow-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full hover:bg-yellow-500 transition flex justify-center items-center"
          >
            <LogIn size={20} className="mr-2" />
            Log In
          </motion.button>

          {/* Sign Up Redirect */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-yellow-400 hover:underline font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
