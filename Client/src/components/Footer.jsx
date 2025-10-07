import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-950 text-gray-300 pt-16 pb-10 border-t border-gray-800 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1),transparent_70%)] pointer-events-none"></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center space-x-2 text-2xl font-bold text-white">
            <Dumbbell className="text-red-500 w-7 h-7" />
            <span>FitForge</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Transform your body and mind with professional fitness programs,
            expert trainers, and a motivating community.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Programs", "Trainers", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-red-500 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-500 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Help Center</a></li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to get fitness tips and exclusive offers!
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
            />
            <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-medium transition">
              Join
            </button>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-8"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0 relative z-10">
        <p>© {new Date().getFullYear()} FitForge. Develop by Soumen❤️.</p>
        <div className="flex space-x-5">
          {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-red-500 transition duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
