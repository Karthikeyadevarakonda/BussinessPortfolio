import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Zap } from "lucide-react";

const skills = [
  "Full-Stack Developer",
  "Business Websites",
  "Modern UI/UX",
  "API Solutions",
  "Responsive Design",
  "Performance Optimization",
  "Client Success",
  "Scalable Architecture",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-500">
            About Me
          </h2>
          <div className="w-24 h-1 animated-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-500">
                I'm a passionate full-stack developer specializing in creating
                powerful, scalable business websites that drive real results.
                With expertise in modern technologies and a client-focused
                approach, I transform ideas into digital success stories.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-500">
                My mission is to help businesses establish a strong online
                presence through responsive design, seamless user experiences,
                and robust backend solutions. Every project is crafted with
                attention to detail and optimized for performance.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { icon: Award, label: "Projects", value: "50+" },
                  { icon: Users, label: "Happy Clients", value: "30+" },
                  { icon: Zap, label: "Experience", value: "3+ Years" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-3 transition-all duration-500">
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-500">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-500">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Animated Avatar/Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto p-1 rounded-full bg-gradient-to-br from-blue-400 via-sky-400 to-indigo-400 dark:from-blue-500 dark:via-sky-500 dark:to-indigo-500"
            whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-blue-50 dark:bg-slate-800 flex items-center justify-center">
              <img
                src="https://cf-st.sc-cdn.net/3d/render/33892300-104661184086_4-s5-v1.webp?ua=2"
                alt="3D Bitmoji for karthikeya86888"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Skills Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 overflow-hidden"
        >
          <div className="flex animate-marquee space-x-8">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-blue-100/50 dark:bg-slate-800/80 border border-blue-200 dark:border-slate-700 rounded-full transition-all duration-500"
              >
                <span className="text-blue-800 dark:text-sky-300 font-medium whitespace-nowrap transition-colors duration-500">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        /* Faster on mobile (max-width: 640px) */
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 5s; /* moves twice as fast */
          }
        }
      `}</style>
    </section>
  );
}
