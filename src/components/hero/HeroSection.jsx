import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Hi, I'm Karthikeya 👋, I build powerful business websites.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen  flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-sky-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 transition-colors duration-500">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 dark:bg-indigo-400 rounded-full opacity-50 transition-colors duration-500"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 800),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 600),
            }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 800),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 600),
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Heading with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="-mt-40 sm:mt-0 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight transition-colors duration-500">
            {text}
            {isTyping && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="gradient-text bg-clip-text text-transparent"
              >
                |
              </motion.span>
            )}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto transition-colors duration-500"
        >
          Crafting modern, responsive, and scalable web solutions that drive
          business growth
        </motion.p>

        {/* CTA Button with Ripple Effect */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToContact}
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-blue-500/30 dark:shadow-indigo-500/30 transition-all duration-300 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-3">
            <Sparkles className="w-5 h-5" />
            Let's Work Together
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>

          <motion.div
            className="absolute inset-0 bg-white opacity-20 rounded-full"
            initial={{ scale: 0, opacity: 0.5 }}
            whileHover={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      </div>
    </div>
  );
}
