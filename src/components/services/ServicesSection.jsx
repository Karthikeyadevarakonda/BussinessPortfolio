import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-500">
            What I Offer
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors duration-500">
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
              <div className="relative bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 h-full hover:-translate-y-2">
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-md`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed transition-colors duration-300">
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
