import React from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Linkedin, HeartPulse } from "lucide-react";
import pic1 from '../assets/emma.png'

const trainers = [
  {
    name: "Alex Morgan",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sofia Reyes",
    specialty: "HIIT & Cardio",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Michael Chen",
    specialty: "Endurance Training",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Emma Watson",
    specialty: "Yoga & Flexibility",
    image: pic1,
  },
];

export default function Trainers() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Meet Our Trainers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Our team of expert trainers is dedicated to helping you achieve your fitness goals.
        </motion.p>
      </section>

      {/* Trainer Cards */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {trainers.map((trainer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-gray-900/80 to-black p-6 rounded-2xl shadow-2xl hover:shadow-red-600/50 border border-gray-800 transition hover:scale-105 cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden mb-4">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-64 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex justify-end items-start p-3 space-x-2 opacity-0 hover:opacity-100 transition duration-300">
                {[Instagram, Twitter, Facebook, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="text-white hover:text-red-500 transition">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">{trainer.name}</h3>
            <p className="text-gray-400 text-sm mb-3">{trainer.specialty}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl font-semibold shadow-md transition w-full"
            >
              View Profile
            </motion.button>
          </motion.div>
        ))}
      </section>

      {/* Call To Action */}
      <section className="py-20 text-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Join Our <span className="text-red-500">Fitness Community</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Train with the best and achieve your ultimate fitness goals today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-600 to-orange-500 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-red-600/50 transition"
          >
            Join Now
          </motion.button>
        </motion.div>

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1),transparent_70%)]"></div>
      </section>
    </div>
  );
}
