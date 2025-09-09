import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Code, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children, currentPageName }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-500">
      <style>{`
        .gradient-text {
          background-image: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        }
        .dark .gradient-text {
          background-image: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
        }

        .animated-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }
        .dark .animated-gradient {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .glow-effect {
          box-shadow: 0 0 40px rgba(99, 102, 241, 0.4);
        }

        .dark .glow-effect {
          box-shadow: 0 0 40px rgba(129, 140, 248, 0.5);
        }
      `}</style>

      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-10 h-10 rounded-lg animated-gradient flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-800 dark:text-white transition-colors">
                Karthikeya
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {["About", "Tech Stack", "Services", "Contact"].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", "-"))
                    }
                    className="font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </nav>

              {/* Theme Toggle */}
              <motion.button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <motion.button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 transition-all"
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>

              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
            >
              <div className="px-4 py-4 space-y-3">
                {["About", "Tech Stack", "Services", "Contact"].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", "-"))
                    }
                    className="block w-full text-left font-medium py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors"
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main content */}
      <main className="relative">{children}</main>

      {/* Floating CTA Button */}
      <motion.button
        onClick={() => scrollToSection("contact")}
        className="fixed bottom-8 right-8 z-40 px-6 py-3 animated-gradient text-white font-semibold rounded-full shadow-xl glow-effect"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          Work With Me
        </motion.div>
      </motion.button>
    </div>
  );
}
