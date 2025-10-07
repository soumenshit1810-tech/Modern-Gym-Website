import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Users, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* 🏋️‍♂️ HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Forge Your <span className="text-red-500">Strength</span>,
            Build Your <span className="text-orange-400">Future</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Join <span className="text-white font-semibold">FitForge</span> — where dedication meets power.
            Unleash your potential with expert coaches and tailored programs.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

          >
            <NavLink
              to="/login"
              className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-red-600/50 transition"
            >
              Get Started
            </NavLink>
          </motion.div>
        </motion.div>

        {/* 🔥 Background Glow + Image Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1600&q=80"
            alt="Fitness Hero"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/70 to-transparent"></div>
        </div>
      </section>

      {/* ⚡ STATS SECTION */}
      <section className="py-20 bg-black/50 border-t border-b border-gray-800 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            { icon: Dumbbell, title: "10+ Programs", desc: "Strength, Cardio, HIIT & more" },
            { icon: Users, title: "5K+ Members", desc: "Growing fitness community" },
            { icon: HeartPulse, title: "Expert Trainers", desc: "Certified fitness professionals" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-b from-gray-900/80 to-black shadow-lg border border-gray-800 hover:border-red-500/50 transition"
            >
              <item.icon className="w-10 h-10 mx-auto text-red-500 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧠 ABOUT SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80"
          alt="Training"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-xl"
        />
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Redefine Your <span className="text-red-500">Limits</span>
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Whether you're just starting out or a seasoned athlete, our gym offers personalized
            programs, cutting-edge equipment, and professional trainers to push you beyond boundaries.
          </p>
          <NavLink
            to="/programs"
            className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-red-600/50 transition"
          >
            Explore Programs
          </NavLink>

        </motion.div>
      </section>

      {/* ⚡ CALL TO ACTION */}
      <section className="py-20 text-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Start Your <span className="text-red-500">Transformation</span> Today
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join thousands of athletes achieving their goals every day. Be stronger, faster, unstoppable.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

          >
            <NavLink
              to="/joinnow"
              className="bg-gradient-to-r from-red-600 to-orange-500 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-red-600/50 transition"
            >
              Join Now
            </NavLink>
          </motion.button>
        </motion.div>

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1),transparent_70%)]"></div>
      </section>
    </div>
  );
}
