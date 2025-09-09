import React, { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const projectTypes = [
  { value: "business-website", label: "Business Website", icon: "🌐" },
  { value: "ecommerce", label: "E-commerce Store", icon: "🛒" },
  { value: "web-app", label: "Web Application", icon: "💻" },
  { value: "api-development", label: "API Development", icon: "⚙️" },
  { value: "redesign", label: "Website Redesign", icon: "🎨" },
  { value: "other", label: "Other", icon: "💡" },
];

const CustomSelect = ({ value, onChange, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.find((opt) => opt.value === value) || null
  );

  const handleSelect = (option) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 bg-transparent border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 text-gray-900 dark:text-white text-left flex items-center justify-between"
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-3">
          {selectedOption ? (
            <>
              <span className="text-lg">{selectedOption.icon}</span>
              <span>{selectedOption.label}</span>
            </>
          ) : (
            <span className="text-gray-400 dark:text-gray-500">
              {placeholder}
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-xl z-50 overflow-hidden"
          >
            {options.map((option, index) => (
              <motion.button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center gap-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5 }}
              >
                <span className="text-lg">{option.icon}</span>
                <span className="text-gray-900 dark:text-white">
                  {option.label}
                </span>
                {selectedOption?.value === option.value && (
                  <CheckCircle className="w-4 h-4 text-blue-500 ml-auto" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside handler */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProjectChange = (value) => {
    setFormData({
      ...formData,
      project: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, new inquiry from website:
Name: ${formData.name}
Email: ${formData.email}
Project: ${formData.project}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/918688795001?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show success message
    setIsSubmitted(true);

    // Reset form
    setFormData({ name: "", email: "", project: "", message: "" });

    // Hide success after 3s (like before)
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden transition-all duration-500"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Let's Create Something Amazing
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
            Ready to bring your vision to life? Let's discuss your project and
            build something extraordinary together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 transition-colors">
                I'm always excited to work on new projects and help businesses
                succeed online. Let's discuss how we can bring your ideas to
                life with cutting-edge web solutions.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: "Phone / WhatsApp",
                  value: "8688795001",
                  href: "tel:8688795001",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "karthikeya8787@gmail.com",
                  href: "mailto:karthikeya8787@gmail.com",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Available Globally",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
                      {contact.label}
                    </div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-lg font-semibold text-gray-900 dark:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                        {contact.value}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Available Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-900 dark:text-white transition-colors">
                  Available for Projects
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                Typically respond within 2-4 hours during business days
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-transparent border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 text-gray-900 dark:text-white peer placeholder-transparent"
                      placeholder="Your Name"
                    />
                    <label className="absolute left-4 -top-2.5 px-2 bg-white dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500">
                      Your Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-transparent border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 text-gray-900 dark:text-white peer placeholder-transparent"
                      placeholder="your@email.com"
                    />
                    <label className="absolute left-4 -top-2.5 px-2 bg-white dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500">
                      Email Address
                    </label>
                  </div>

                  {/* Custom Project Type Select */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 transition-colors">
                      Project Type
                    </label>
                    <CustomSelect
                      value={formData.project}
                      onChange={handleProjectChange}
                      options={projectTypes}
                      placeholder="Select your project type"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-4 bg-transparent border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 text-gray-900 dark:text-white peer placeholder-transparent resize-none"
                      placeholder="Tell me about your project..."
                    />
                    <label className="absolute left-4 -top-2.5 px-2 bg-white dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500">
                      Project Details
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </motion.button>
                </form>
              ) : (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">
                    Thank you for reaching out! I'll get back to you within 2-4
                    hours.
                  </p>

                  {/* Confetti Effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                        initial={{
                          x: "50%",
                          y: "50%",
                          scale: 0,
                        }}
                        animate={{
                          x: `${50 + (Math.random() - 0.5) * 200}%`,
                          y: `${50 + (Math.random() - 0.5) * 200}%`,
                          scale: [0, 1, 0],
                          rotate: 360,
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
