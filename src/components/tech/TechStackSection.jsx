import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
  { name: "HTML5", icon: "🌐", color: "from-orange-500 to-red-500" },
  { name: "CSS3", icon: "🎨", color: "from-blue-500 to-sky-500" },
  { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-amber-500" },
  { name: "React.js", icon: "⚛️", color: "from-sky-400 to-cyan-400" },
  { name: "Tailwind CSS", icon: "💨", color: "from-teal-400 to-emerald-400" },
  { name: "Node.js", icon: "🚀", color: "from-green-500 to-lime-500" },
  {
    name: "Express.js",
    icon: "🔧",
    color: "from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-600",
  },
  { name: "Spring Boot", icon: "🍃", color: "from-green-600 to-emerald-600" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-700 to-indigo-700" },
  { name: "MongoDB", icon: "🍀", color: "from-green-700 to-teal-700" },
  { name: "VS Code", icon: "💻", color: "from-blue-600 to-indigo-600" },
  { name: "Postman", icon: "📮", color: "from-orange-600 to-red-600" },
  { name: "GitHub", icon: "🐙", color: "from-slate-800 to-black" },
];

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="tech-stack"
      className="py-24 bg-sky-50/50 dark:bg-slate-800/50 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-500">
            My Tech Stack
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors duration-500">
            Modern technologies and tools I use to build exceptional web
            experiences.
          </p>
          <div className="w-24 h-1 animated-gradient mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="relative overflow-hidden group">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex space-x-8 animate-scroll-left group-hover:pause"
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0"
              >
                <div className="w-28 h-28 bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div
                    className={`text-4xl mb-2 bg-gradient-to-br ${tech.color} bg-clip-text text-transparent`}
                  >
                    {tech.icon}
                  </div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 text-center px-2 leading-tight transition-colors duration-300">
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
