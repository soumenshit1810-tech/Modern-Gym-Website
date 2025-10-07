import React, { useState } from "react";
import { motion } from "framer-motion";
import { Crown, Dumbbell, HeartPulse, CreditCard } from "lucide-react";

const plans = [
  {
    id: 1,
    icon: <Dumbbell size={50} className="text-yellow-400" />,
    name: "Basic Plan",
    price: "₹999 / month",
    features: [
      "Gym equipment access",
      "Locker facility",
      "1 personal session",
    ],
  },
  {
    id: 2,
    icon: <Crown size={50} className="text-yellow-400" />,
    name: "Premium Plan",
    price: "₹1999 / month",
    features: [
      "All Basic benefits",
      "Unlimited personal training",
      "Group classes access",
      "Diet & body analysis",
    ],
  },
  {
    id: 3,
    icon: <HeartPulse size={50} className="text-yellow-400" />,
    name: "Elite Plan",
    price: "₹2999 / month",
    features: [
      "All Premium benefits",
      "1-on-1 coaching",
      "Priority trainer access",
      "Custom diet & supplement plan",
    ],
  },
];

export default function JoinNow() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">
      {/* Header */}
      <section className="text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-yellow-400 mb-4"
        >
          Join FitForge Today
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Select your plan and complete your membership registration to start your fitness journey!
        </p>
      </section>

      {/* Plans Section */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-16 pb-16">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className={`bg-gray-900 rounded-2xl shadow-xl p-8 text-center cursor-pointer transform transition duration-300 ${
              selectedPlan === plan.id ? "scale-105 border-2 border-yellow-400" : ""
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <div className="flex justify-center mb-4">{plan.icon}</div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">{plan.name}</h2>
            <p className="text-gray-400 mb-4">{plan.price}</p>
            <ul className="space-y-2 mb-4">
              {plan.features.map((feat, i) => (
                <li key={i} className="text-gray-400 text-sm">{feat}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* Membership Form */}
      <section className="px-6 md:px-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl shadow-lg p-10 md:p-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Membership Details
          </h2>
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
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:border-yellow-400 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Phone</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:border-yellow-400 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Age</label>
              <input
                type="number"
                placeholder="Your Age"
                className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:border-yellow-400 outline-none"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-300 mb-2 font-medium">Gender</label>
              <select className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:border-yellow-400 outline-none">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-300 mb-2 font-medium">Payment Method</label>
              <select className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:border-yellow-400 outline-none">
                <option value="">Select Payment</option>
                <option value="stripe">Stripe</option>
                <option value="paypal">PayPal</option>
                <option value="cash">Cash at Gym</option>
              </select>
            </div>
            <div className="md:col-span-2 text-center mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-full hover:bg-yellow-500 transition flex items-center justify-center mx-auto"
              >
                <CreditCard size={20} className="mr-2" /> Confirm & Join
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
