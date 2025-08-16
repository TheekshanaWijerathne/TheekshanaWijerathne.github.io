"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/TheekshanaWijerathne",
    icon: Github,
    color: "hover:text-gray-900 dark:hover:text-white",
    description: "View my code repositories and open source contributions",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/theekshana-wijerathne-0b84a9268",
    icon: Linkedin,
    color: "hover:text-blue-600",
    description: "Connect with me professionally",
  },
  {
    name: "Email",
    url: "mailto:theekshana.22@cse.mrt.ac.lk",
    icon: Mail,
    color: "hover:text-green-600",
    description: "Get in touch directly",
  },
]

export function SocialLinks({ variant = "default" }: { variant?: "default" | "minimal" }) {
  if (variant === "minimal") {
    return (
      <div className="flex items-center gap-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-300 hover:scale-110`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <link.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="p-6 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 group-hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
                <link.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {link.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{link.description}</p>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
