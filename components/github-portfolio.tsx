"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Code, BookOpen } from "lucide-react"
import { ProjectRepository } from "./project-repository"

const featuredRepositories = [
  {
    title: "Collaborative Learning Platform",
    description:
      "A microservices-based web platform for academic collaboration with personalized study plans, real-time editing, and gamified progress tracking.",
    githubUrl: "https://github.com/collaborative-learning-platform",
    technologies: ["React.js", "Material UI", "NestJS", "PostgreSQL", "TypeORM", "Docker"],
    status: "In Development" as const,
    stars: 12,
    forks: 3,
    watchers: 8,
    lastUpdated: "2 days ago",
    contributors: 4,
    language: "TypeScript",
  },
  {
    title: "Intelligent Financial Advisor",
    description:
      "AI-powered financial advisory platform with stock prediction, budgeting, investment planning using ML models and financial APIs.",
    githubUrl: "https://github.com/Intelligent-Advisor-Sem-4",
    technologies: ["FastAPI", "Next.js", "PostgreSQL", "YFinance API", "LSTM", "Python"],
    status: "Completed" as const,
    stars: 25,
    forks: 8,
    watchers: 15,
    lastUpdated: "1 week ago",
    contributors: 3,
    language: "Python",
  },
  {
    title: "HR Management System",
    description:
      "Full-stack HRMS for Jupiter Apparels to streamline employee lifecycle management, leave workflows, and HR operations.",
    githubUrl: "https://github.com/TheekshanaWijerathne/HRMS",
    technologies: ["React.js", "Bootstrap", "Node.js", "Express", "MySQL"],
    status: "Completed" as const,
    stars: 18,
    forks: 5,
    watchers: 12,
    lastUpdated: "3 weeks ago",
    contributors: 2,
    language: "JavaScript",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website built with Next.js, Three.js, and Framer Motion featuring 3D animations and glass morphism design.",
    githubUrl: "https://github.com/TheekshanaWijerathne/My-Portfolio",
    technologies: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    status: "Completed" as const,
    stars: 32,
    forks: 12,
    watchers: 20,
    lastUpdated: "1 day ago",
    contributors: 1,
    language: "TypeScript",
  },
]

const githubStats = {
  totalRepos: 26,
  totalStars: 10,
  totalForks: 3,
  totalContributions: 513,
  languagesUsed: ["TypeScript", "JavaScript", "Python", "Java", "C++"],
  yearsActive: 3,
}

export function GitHubPortfolio() {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-blue-100 dark:from-gray-800/50 dark:to-blue-900/30 px-6 py-3 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            <span className="text-gray-700 dark:text-gray-300 font-semibold">GitHub Portfolio</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white">
            Code
            <br />
            <span className="bg-gradient-to-r from-gray-700 to-blue-600 bg-clip-text text-transparent">
              Repositories
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gray-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my open-source projects, contributions, and code repositories. Each project represents a journey of
            learning, problem-solving, and innovation.
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{githubStats.totalRepos}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Repositories</div>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">{githubStats.totalStars}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Stars Earned</div>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{githubStats.totalForks}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Forks</div>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {githubStats.totalContributions}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Contributions</div>
          </div>
        </motion.div>

        {/* Featured Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Featured Repositories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRepositories.map((repo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectRepository {...repo} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Primary Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {githubStats.languagesUsed.map((language, index) => (
              <Badge
                key={index}
                className="px-6 py-3 text-base bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700 hover:scale-105 transition-transform duration-300"
              >
                <Code className="w-4 h-4 mr-2" />
                {language}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Explore More on GitHub</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Discover additional projects, contributions, and code samples. Follow my journey as I continue to build
              and contribute to the open-source community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => window.open("https://github.com/TheekshanaWijerathne", "_blank")}
                className="bg-white text-blue-600 hover:bg-gray-100 border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 cursor-pointer"
              >
                <Github className="w-6 h-6 mr-2" />
                Visit GitHub Profile
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://github.com/TheekshanaWijerathne?tab=repositories", "_blank")}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 cursor-pointer"
              >
                <BookOpen className="w-6 h-6 mr-2" />
                Browse All Repos
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
