import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Code, Palette, Database, Cloud, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Website Development",
    description:
      "Custom-built websites tailored to your business needs with modern design and optimal performance.",
    gradient: "from-blue-500 to-sky-500",
  },
  {
    icon: Code,
    title: "Full-Stack Solutions",
    description:
      "End-to-end web applications with robust backend systems and intuitive user interfaces.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Palette,
    title: "Modern UI/UX Design",
    description:
      "Beautiful, user-centric designs that convert visitors into customers using modern CSS frameworks.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Database,
    title: "API Development & Integrations",
    description:
      "Seamless third-party integrations and custom API development for enhanced functionality.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Cloud,
    title: "Deployment & Hosting Support",
    description:
      "Complete deployment solutions with ongoing maintenance and performance monitoring.",
    gradient: "from-slate-500 to-slate-600",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed optimization and performance tuning to ensure your website loads lightning-fast.",
    gradient: "from-rose-500 to-red-500",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // --- Tilt effect handler ---
  const handleMouseMove = (e, cardRef) => {
    const { left, top, width, height } = cardRef.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rotateX = (y - 0.5) * 15;
    const rotateY = (x - 0.5) * -15;
    cardRef.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTilt = (cardRef) => {
    cardRef.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            What I Offer
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive web development services to elevate your business
            online.
          </p>
          <div className="w-24 h-1 animated-gradient mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div
                ref={(el) => {
                  if (!el) return;
                  el.onmousemove = (e) => handleMouseMove(e, el);
                  el.onmouseleave = () => resetTilt(el);
                }}
                className="relative bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-700/50 h-full transition-transform duration-300 transform-gpu"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition duration-500`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
