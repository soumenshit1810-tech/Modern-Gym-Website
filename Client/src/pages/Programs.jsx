import React from "react";
import { motion } from "framer-motion";
// import { Dumbbell, HeartPulse, Flame, Running, Bike, StretchHorizontal } from "lucide-react";
import { Dumbbell, HeartPulse, Flame, Activity, Bike, Infinity } from "lucide-react";
import pic2 from '../assets/cardio.png'
import pic1 from '../assets/strength.png'
import pic4 from '../assets/func.png'
import pic6 from '../assets/yoga.png'


const programs = [
  {
    id: 1,
    icon: <Dumbbell size={50} className="text-yellow-400" />,
    title: "Strength Training",
    description:
      "Build muscle, increase power, and sculpt your body with our advanced weight training programs guided by professional trainers.",
    image:
      pic1,
  },
  {
    id: 2,
    icon: <HeartPulse size={50} className="text-red-500" />,
    title: "Cardio & HIIT",
    description:
      "Boost stamina and burn fat with high-intensity interval training and cardio workouts designed to challenge every level.",
    image:
      pic2,
  },
  {
    id: 3,
    icon: <Flame size={50} className="text-orange-500" />,
    title: "Fat Burning Bootcamp",
    description:
      "A total-body program focusing on burning calories through intense circuit training, conditioning, and endurance drills.",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    icon: <Activity size={50} className="text-blue-400" />,
    title: "Functional Fitness",
    description:
      "Improve your daily movement and core strength with functional training routines tailored to all fitness levels.",
    image:
      pic4,
  },
  {
    id: 5,
    icon: <Bike size={50} className="text-green-400" />,
    title: "Cycling & Spin",
    description:
      "Join our energy-packed spin classes with immersive lighting and music to burn calories while having fun.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    icon: <Infinity size={50} className="text-purple-400" />,
    title: "Yoga & Flexibility",
    description:
      "Enhance flexibility, reduce stress, and achieve mental clarity through guided yoga and meditation sessions.",
    image:
      pic6,
  },
];

export default function Programs() {
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
          Our Fitness Programs
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Choose from a variety of specialized fitness programs designed to help you
          achieve your health and body goals faster and smarter.
        </p>
      </section>

      {/* Programs Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 pb-20">
        {programs.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex flex-col items-center text-center">
              {program.icon}
              <h2 className="text-2xl font-semibold mt-4 mb-2 text-yellow-400">
                {program.title}
              </h2>
              <p className="text-gray-400 text-sm">{program.description}</p>
              <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold transition">
                Join Now
              </button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
