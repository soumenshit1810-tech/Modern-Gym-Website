import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Crown, Star } from "lucide-react";

const plans = [
  {
    id: 1,
    icon: <Dumbbell size={50} className="text-yellow-400" />,
    name: "Basic Plan",
    price: "₹999 / month",
    features: [
      "Access to gym equipment",
      "Locker facility",
      "1 personal training session",
      "Free Wi-Fi",
    ],
    highlight: false,
  },
  {
    id: 2,
    icon: <Crown size={50} className="text-yellow-400" />,
    name: "Premium Plan",
    price: "₹1999 / month",
    features: [
      "All Basic Plan benefits",
      "Unlimited personal training",
      "Access to group classes (Yoga, Zumba, HIIT)",
      "Diet & body composition analysis",
    ],
    highlight: true,
  },
  {
    id: 3,
    icon: <HeartPulse size={50} className="text-yellow-400" />,
    name: "Elite Plan",
    price: "₹2999 / month",
    features: [
      "All Premium Plan benefits",
      "Exclusive 1-on-1 coaching",
      "Priority access to trainers",
      "Customized diet & supplement plan",
    ],
    highlight: false,
  },
];

export default function Fees() {
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
          Membership Plans
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Choose a plan that fits your goals and commitment level. No hidden fees — just
          results, motivation, and transformation.
        </p>
      </section>

      {/* Plans Section */}
      <section className="grid md:grid-cols-3 gap-10 px-6 md:px-16 pb-20">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-2xl shadow-xl overflow-hidden border ${
              plan.highlight
                ? "bg-yellow-400 text-black scale-105 border-yellow-500"
                : "bg-gray-900 border-gray-800"
            } transform transition duration-300 hover:scale-105`}
          >
            <div className="p-8 flex flex-col items-center text-center">
              {plan.icon}
              <h2
                className={`text-3xl font-bold mt-4 ${
                  plan.highlight ? "text-black" : "text-yellow-400"
                }`}
              >
                {plan.name}
              </h2>
              <p
                className={`mt-2 mb-6 text-xl font-semibold ${
                  plan.highlight ? "text-black" : "text-gray-300"
                }`}
              >
                {plan.price}
              </p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 text-sm ${
                      plan.highlight ? "text-black" : "text-gray-400"
                    }`}
                  >
                    <Star
                      size={16}
                      className={`${
                        plan.highlight ? "text-black" : "text-yellow-400"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  plan.highlight
                    ? "bg-black text-yellow-400 hover:bg-gray-800"
                    : "bg-yellow-400 text-black hover:bg-yellow-500"
                }`}
              >
                Join Now
              </button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
