"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star, GitFork, Eye, Calendar, Users } from "lucide-react"

interface ProjectRepositoryProps {
  title: string
  description: string
  githubUrl: string
  technologies: string[]
  status: "Completed" | "In Development" | "Archived"
  stars?: number
  forks?: number
  watchers?: number
  lastUpdated?: string
  contributors?: number
  language?: string
  size?: "sm" | "md" | "lg"
}

export function ProjectRepository({
  title,
  description,
  githubUrl,
  technologies,
  status,
  stars = 0,
  forks = 0,
  watchers = 0,
  lastUpdated,
  contributors = 1,
  language,
  size = "md",
}: ProjectRepositoryProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "In Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      case "Archived":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  const cardSize = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  }

  return (
    <motion.div
      className={`bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl ${cardSize[size]} hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 group`}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
            <Github className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
            {language && <p className="text-sm text-gray-500 dark:text-gray-400">{language}</p>}
          </div>
        </div>
        <Badge className={`${getStatusColor(status)} font-semibold`}>{status}</Badge>
      </div>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">{description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.slice(0, 4).map((tech, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="text-xs bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/40 transition-all duration-300"
          >
            {tech}
          </Badge>
        ))}
        {technologies.length > 4 && (
          <Badge variant="secondary" className="text-xs bg-white/50 dark:bg-black/20">
            +{technologies.length - 4} more
          </Badge>
        )}
      </div>

      {/* Repository Stats */}
      <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3" />
          <span>{stars}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="w-3 h-3" />
          <span>{forks}</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="w-3 h-3" />
          <span>{watchers}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          <span>{contributors}</span>
        </div>
      </div>

      {/* Last Updated */}
      {lastUpdated && (
        <div className="flex items-center gap-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
          <Calendar className="w-3 h-3" />
          <span>Updated {lastUpdated}</span>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        <Button
          size="sm"
          onClick={() => window.open(githubUrl, "_blank")}
          className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white border-0 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer"
        >
          <Github className="w-4 h-4 mr-2" />
          View Repository
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => window.open(githubUrl, "_blank")}
          className="px-3 py-2 rounded-lg border hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
        >
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  )
}
