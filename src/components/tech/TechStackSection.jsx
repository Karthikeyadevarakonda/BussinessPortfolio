import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostman,
  SiPostgresql,
  SiMongodb,
  SiSpringboot,
  SiVercel,
  SiRender,
  SiIntellijidea,
  SiNetlify,
} from "react-icons/si";

const techStack = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React.js", icon: <FaReact />, color: "text-sky-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <FaNodeJs />, color: "text-slate-600" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-600" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-700" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
  { name: "Postman", icon: <SiPostman />, color: "text-orange-600" },
  {
    name: "GitHub",
    icon: <FaGithub />,
    colorLight: "text-slate-800",
    colorDark: "text-white",
  },
  { name: "Vercel", icon: <SiVercel />, color: "text-black dark:text-white" },
  { name: "Render", icon: <SiRender />, color: "text-blue-600" },
  { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
  { name: "IntelliJ", icon: <SiIntellijidea />, color: "text-purple-600" },
  { name: "Netlify", icon: <SiNetlify />, color: "text-green-500" },
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
        </motion.div>

        <div className="relative overflow-x-auto scrollbar-none group">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-flex space-x-6 animate-scroll-left"
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0"
              >
                <div className="w-20 h-20 sm:w-28 sm:h-28 bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative">
                  <div className="mb-1 sm:mb-2 w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                    {tech.name === "GitHub" ? (
                      <FaGithub className="w-full h-full text-slate-800 dark:text-white" />
                    ) : (
                      React.cloneElement(tech.icon, {
                        className: `w-full h-full ${tech.color}`,
                      })
                    )}
                  </div>

                  <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 text-center px-2 leading-tight transition-colors duration-300 truncate">
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

        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @media (max-width: 640px) {
          .animate-scroll-left {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
}
