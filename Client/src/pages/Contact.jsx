import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header Section */}
      <section className="text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-yellow-400 mb-4"
        >
          Get in Touch
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Have questions or want to join our fitness family? Fill out the form below or reach out directly — we’d love to hear from you!
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-16 pb-16">
        {[
          {
            icon: <MapPin size={40} className="text-yellow-400" />,
            title: "Our Location",
            detail: "FitZone Gym, 2nd Floor, Central Mall, Kolkata, India",
          },
          {
            icon: <Phone size={40} className="text-yellow-400" />,
            title: "Call Us",
            detail: "+91 98765 43210",
          },
          {
            icon: <Clock size={40} className="text-yellow-400" />,
            title: "Working Hours",
            detail: "Mon – Sat: 5:00 AM – 10:00 PM\nSunday: 6:00 AM – 8:00 PM",
          },
        ].map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl shadow-lg p-8 text-center hover:scale-105 transform transition duration-300"
          >
            <div className="flex justify-center mb-4">{info.icon}</div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{info.title}</h3>
            <p className="text-gray-400 whitespace-pre-line">{info.detail}</p>
          </motion.div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="px-6 md:px-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl shadow-lg p-10 md:p-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Send Us a Message</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid gap-6 md:grid-cols-2"
          >
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:border-yellow-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:border-yellow-400 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-300 mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:border-yellow-400 outline-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 flex items-center justify-center mx-auto transition"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full overflow-hidden border-t border-gray-800">
        <iframe
          title="Gym Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.586073032294!2d88.3638923150368!3d22.571111685180872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b0f8f9b74f%3A0x8e2cc2dfc5e0df4!2sCentral%20Mall!5e0!3m2!1sen!2sin!4v1630767474713!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-none"
        ></iframe>
      </section>
    </div>
  );
}
