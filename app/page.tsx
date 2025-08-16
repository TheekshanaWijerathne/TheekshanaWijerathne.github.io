"use client"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  GraduationCap,
  Code,
  Database,
  Smartphone,
  Cloud,
  Sparkles,
  Zap,
  Rocket,
  Globe,
  Server,
  Monitor,
  Layers,
  FileCode,
  Brain,
  BarChart3,
  Palette,
  Settings,
} from "lucide-react"
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiExpress, 
  SiNestjs, 
  SiFastapi, 
  SiPython, 
  SiPostgresql, 
  SiMysql, 
  SiMongodb, 
  SiMui, 
  SiBootstrap, 
  SiTailwindcss, 
  SiDocker, 
  SiAmazon, 
  SiVercel, 
  SiFramer,
  SiGit,
  SiGithub,
  SiIntellijidea,
  SiFigma
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"
import { ResumePDFGenerator } from "@/components/resume-pdf-generator"
import { ThemeToggle } from "@/components/theme-toggle"
import { ModernCursor } from "@/components/modern-cursor"
import { FloatingNav } from "@/components/floating-nav"
import { GlassCard } from "@/components/glass-card"
import { AnimatedBackground } from "@/components/animated-background"
import { SocialLinks } from "@/components/social-links"
import { GitHubPortfolio } from "@/components/github-portfolio"
// import { Hero3DBackground } from "@/components/hero-3d-background" // Import the new component - temporarily disabled

// Tech Stack Icon Mapping with Categories
const getTechIcon = (tech: string) => {
  const techIcons: Record<string, JSX.Element> = {
    "React.js": <Code className="w-4 h-4" />,
    "React": <Code className="w-4 h-4" />,
    "Next.js": <Globe className="w-4 h-4" />,
    "TypeScript": <FileCode className="w-4 h-4" />,
    "JavaScript": <FileCode className="w-4 h-4" />,
    "Node.js": <Server className="w-4 h-4" />,
    "Express": <Server className="w-4 h-4" />,
    "NestJS": <Layers className="w-4 h-4" />,
    "FastAPI": <Zap className="w-4 h-4" />,
    "Python": <Code className="w-4 h-4" />,
    "Java": <Code className="w-4 h-4" />,
    "PostgreSQL": <Database className="w-4 h-4" />,
    "MySQL": <Database className="w-4 h-4" />,
    "MongoDB": <Database className="w-4 h-4" />,
    "Material UI": <Palette className="w-4 h-4" />,
    "Bootstrap": <Palette className="w-4 h-4" />,
    "Tailwind CSS": <Palette className="w-4 h-4" />,
    "Docker": <Settings className="w-4 h-4" />,
    "AWS": <Cloud className="w-4 h-4" />,
    "Vercel": <Cloud className="w-4 h-4" />,
    "YFinance API": <BarChart3 className="w-4 h-4" />,
    "LSTM": <Brain className="w-4 h-4" />,
    "React Native": <Smartphone className="w-4 h-4" />,
  }
  
  return techIcons[tech] || <Code className="w-4 h-4" />
}

// Tech Stack Category Colors - Simplified and Clean Color Scheme
const getTechCategory = (tech: string) => {
  const categories: Record<string, { color: string; bgColor: string; hoverColor: string }> = {
    // Frontend Technologies - Blue
    "React.js": { color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-900/20", hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30" },
    "React": { color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-900/20", hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30" },
    "Next.js": { color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-900/20", hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30" },
    "TypeScript": { color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-900/20", hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30" },
    "JavaScript": { color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-900/20", hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30" },
    "Material UI": { color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-900/20", hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30" },
    "Bootstrap": { color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-900/20", hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30" },
    "Tailwind CSS": { color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-900/20", hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30" },
    
    // Backend Technologies - Green
    "Node.js": { color: "text-green-600 dark:text-green-400", bgColor: "bg-green-50 dark:bg-green-900/20", hoverColor: "hover:bg-green-100 dark:hover:bg-green-900/30" },
    "Express": { color: "text-green-600 dark:text-green-400", bgColor: "bg-green-50 dark:bg-green-900/20", hoverColor: "hover:bg-green-100 dark:hover:bg-green-900/30" },
    "NestJS": { color: "text-green-600 dark:text-green-400", bgColor: "bg-green-50 dark:bg-green-900/20", hoverColor: "hover:bg-green-100 dark:hover:bg-green-900/30" },
    "FastAPI": { color: "text-green-600 dark:text-green-400", bgColor: "bg-green-50 dark:bg-green-900/20", hoverColor: "hover:bg-green-100 dark:hover:bg-green-900/30" },
    "Python": { color: "text-green-600 dark:text-green-400", bgColor: "bg-green-50 dark:bg-green-900/20", hoverColor: "hover:bg-green-100 dark:hover:bg-green-900/30" },
    "Java": { color: "text-green-600 dark:text-green-400", bgColor: "bg-green-50 dark:bg-green-900/20", hoverColor: "hover:bg-green-100 dark:hover:bg-green-900/30" },
    
    // Database Technologies - Purple
    "PostgreSQL": { color: "text-purple-600 dark:text-purple-400", bgColor: "bg-purple-50 dark:bg-purple-900/20", hoverColor: "hover:bg-purple-100 dark:hover:bg-purple-900/30" },
    "MySQL": { color: "text-purple-600 dark:text-purple-400", bgColor: "bg-purple-50 dark:bg-purple-900/20", hoverColor: "hover:bg-purple-100 dark:hover:bg-purple-900/30" },
    "MongoDB": { color: "text-purple-600 dark:text-purple-400", bgColor: "bg-purple-50 dark:bg-purple-900/20", hoverColor: "hover:bg-purple-100 dark:hover:bg-purple-900/30" },
    
    // Cloud & DevOps - Gray
    "Docker": { color: "text-gray-600 dark:text-gray-400", bgColor: "bg-gray-50 dark:bg-gray-800/40", hoverColor: "hover:bg-gray-100 dark:hover:bg-gray-700/60" },
    "AWS": { color: "text-gray-600 dark:text-gray-400", bgColor: "bg-gray-50 dark:bg-gray-800/40", hoverColor: "hover:bg-gray-100 dark:hover:bg-gray-700/60" },
    "Vercel": { color: "text-gray-600 dark:text-gray-400", bgColor: "bg-gray-50 dark:bg-gray-800/40", hoverColor: "hover:bg-gray-100 dark:hover:bg-gray-700/60" },
    
    // Specialized Technologies - Cyan
    "React Native": { color: "text-cyan-600 dark:text-cyan-400", bgColor: "bg-cyan-50 dark:bg-cyan-900/20", hoverColor: "hover:bg-cyan-100 dark:hover:bg-cyan-900/30" },
    "YFinance API": { color: "text-cyan-600 dark:text-cyan-400", bgColor: "bg-cyan-50 dark:bg-cyan-900/20", hoverColor: "hover:bg-cyan-100 dark:hover:bg-cyan-900/30" },
    "LSTM": { color: "text-cyan-600 dark:text-cyan-400", bgColor: "bg-cyan-50 dark:bg-cyan-900/20", hoverColor: "hover:bg-cyan-100 dark:hover:bg-cyan-900/30" },
  }
  
  return categories[tech] || { color: "text-gray-600 dark:text-gray-400", bgColor: "bg-gray-50 dark:bg-gray-800/40", hoverColor: "hover:bg-gray-100 dark:hover:bg-gray-700/60" }
}

// Professional Hero Section
function ModernHeroSection() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black"
      style={{ y, opacity }}
    >
      {/* Professional 3D Background - Temporarily disabled */}
      {/* <Hero3DBackground /> */}
      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-5" />
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">Theekshana</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Wijerathne</span>
          </motion.h1>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-4">
              Full-Stack Developer & Software Engineer
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">Matale, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-300">University of Moratuwa</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-sm border border-green-400/20 rounded-full">
              <Award className="w-4 h-4 text-green-400" />
              <span className="text-green-300">CGPA 3.85</span>
            </div>
          </motion.div>

          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Passionate about building robust, scalable applications with modern technologies. Focused on creating
            exceptional user experiences through clean code and innovative solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
          <a href="mailto:theekshana.22@cse.mrt.ac.lk">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-3 text-base font-medium rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </a>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://github.com/TheekshanaWijerathne", "_blank")}
              className="border border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-8 py-3 text-base font-medium rounded-lg transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View Work
            </Button>
            <ResumePDFGenerator variant="hero" size="lg" />
          </motion.div>
        </motion.div>
      </div>
      {/* Professional Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center relative">
            <motion.div
              className="w-1 h-2 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

// Modern About Section
function ModernAboutSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <motion.section id="about" className="py-32 px-4 bg-white dark:bg-gray-900 relative overflow-hidden" style={{ y }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">About Me</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white">
            Crafting Digital
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                A highly motivated Computer Science and Engineering student with a strong focus on Software Engineering.
                Proficient in problem-solving, software design, and full-stack development, with a keen interest in
                building robust, scalable, and user-centered applications.
              </p>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate about exploring modern development frameworks, tools, and best practices. Actively seeking a
                Software Engineering role to gain hands-on experience and contribute to the development of impactful,
                real-world software solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                variant="outline"
                onClick={() => window.open("mailto:theekshana.22@cse.mrt.ac.lk", "_blank")}
                className="flex items-center gap-2 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 border-2 px-6 py-3 rounded-full cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                theekshana.22@cse.mrt.ac.lk
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("tel:+94761541254", "_blank")}
                className="flex items-center gap-2 bg-transparent hover:bg-green-50 dark:hover:bg-green-900/20 border-2 px-6 py-3 rounded-full cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                0761541254
              </Button>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h4>
              <SocialLinks variant="minimal" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                Areas of Interest
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Database Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <span className="text-gray-700 dark:text-gray-300">Mobile Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <Cloud className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  <span className="text-gray-700 dark:text-gray-300">DevOps & CI/CD</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-lg text-gray-900 dark:text-white">University of Moratuwa</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Bachelor of Science (Hons) in Computer Science and Engineering
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">March 2023 – present</p>
                </div>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 text-sm font-semibold">
                  CGPA: 3.85 (Dean's List)
                </Badge>
              </div>
            </GlassCard>

            <ResumePDFGenerator />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

// Modern Projects Section
function ModernProjectsSection() {
  const projects = [
    {
      title: "Collaborative Learning Platform",
      description:
        "A microservices-based web platform for academic collaboration with personalized study plans, real-time editing, and gamified progress tracking.",
      tech: ["React.js", "Material UI", "NestJS", "PostgreSQL", "Docker"],
      role: "Full-stack Developer & Scrum Master",
      period: "Jul 2025 – present",
      gradient: "from-blue-500 via-purple-500 to-cyan-500",
      icon: <Code className="w-8 h-8" />,
      githubUrl: "https://github.com/collaborative-learning-platform", // Reverted URL
      status: "In Development",
    },
    {
      title: "Intelligent Financial Advisor",
      description:
        "AI-powered financial advisory platform with stock prediction, budgeting, investment planning using ML models and financial APIs.",
      tech: ["FastAPI", "Next.js", "PostgreSQL", "YFinance API", "LSTM"],
      role: "Full-Stack Developer & Scrum Master",
      period: "Apr 2025 – May 2025",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      icon: <Zap className="w-8 h-8" />,
      githubUrl: "https://github.com/Intelligent-Advisor-Sem-4", // Reverted URL
      status: "Completed",
    },
    {
      title: "HR Management System",
      description:
        "Full-stack HRMS for Jupiter Apparels to streamline employee lifecycle management, leave workflows, and HR operations.",
      tech: ["React.js", "Bootstrap", "Node.js", "Express", "MySQL"],
      role: "Full-Stack Developer",
      period: "Aug 2024 – Oct 2024",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      icon: <Database className="w-8 h-8" />,
      githubUrl: "https://github.com/TheekshanaWijerathne/HRMS",
      status: "Completed",
    },
  ]

  return (
    <section id="projects" className="py-32 px-4 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Rocket className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400 font-semibold">Featured Work</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white">
            Recent
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <GlassCard className="h-full p-8 hover:shadow-2xl">
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-6`} />

                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <Badge
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={`${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                    } font-semibold`}
                  >
                    {project.status}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{project.period}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{project.role}</p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{project.description}</p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                      <Settings className="w-3 h-3 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {project.tech.map((tech, techIndex) => {
                      const category = getTechCategory(tech)
                      return (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: techIndex * 0.08,
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.08, 
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                          className="group/tech"
                        >
                          <div className={`
                            flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border shadow-sm
                            ${category.bgColor} ${category.hoverColor}
                            border-gray-200 dark:border-gray-600 
                            hover:border-opacity-50 hover:shadow-md
                            transition-all duration-300 ease-out
                            backdrop-blur-sm
                          `}>
                            <div className={`${category.color} transition-all duration-300 group-hover/tech:scale-110`}>
                              {getTechIcon(tech)}
                            </div>
                            <span className={`
                              text-xs font-semibold tracking-wide
                              ${category.color}
                              transition-all duration-300
                            `}>
                              {tech}
                            </span>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white border-0 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, "_blank")} // Assuming external link also goes to GitHub for now
                    className="px-4 py-3 rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Want to see more of my work? Check out my complete portfolio on GitHub.
          </p>
          <Button
            size="lg"
            onClick={() => window.open("https://github.com/TheekshanaWijerathne", "_blank")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
          >
            <Github className="w-6 h-6 mr-2" />
            View All Repositories
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Modern Skills Section
function ModernSkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <SiReact className="w-5 h-5" />, color: "text-blue-600 dark:text-blue-400" },
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" />, color: "text-gray-800 dark:text-gray-200" },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" />, color: "text-blue-700 dark:text-blue-300" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" />, color: "text-cyan-600 dark:text-cyan-400" },
        { name: "Material UI", icon: <SiMui className="w-5 h-5" />, color: "text-indigo-600 dark:text-indigo-400" },
        { name: "Framer Motion", icon: <SiFramer className="w-5 h-5" />, color: "text-purple-600 dark:text-purple-400" },
      ],
      icon: <SiReact className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      count: 6,
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" />, color: "text-green-600 dark:text-green-400" },
        { name: "Express", icon: <SiExpress className="w-5 h-5" />, color: "text-gray-700 dark:text-gray-300" },
        { name: "NestJS", icon: <SiNestjs className="w-5 h-5" />, color: "text-red-600 dark:text-red-400" },
        { name: "FastAPI", icon: <SiFastapi className="w-5 h-5" />, color: "text-emerald-600 dark:text-emerald-400" },
        { name: "Python", icon: <SiPython className="w-5 h-5" />, color: "text-yellow-600 dark:text-yellow-400" },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" />, color: "text-orange-600 dark:text-orange-400" },
      ],
      icon: <SiNodedotjs className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      count: 6,
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" />, color: "text-blue-700 dark:text-blue-300" },
        { name: "MySQL", icon: <SiMysql className="w-5 h-5" />, color: "text-orange-600 dark:text-orange-400" },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" />, color: "text-green-600 dark:text-green-400" },
        { name: "AWS", icon: <SiAmazon className="w-5 h-5" />, color: "text-orange-500 dark:text-orange-300" },
        { name: "Docker", icon: <SiDocker className="w-5 h-5" />, color: "text-blue-500 dark:text-blue-300" },
        { name: "Vercel", icon: <SiVercel className="w-5 h-5" />, color: "text-gray-800 dark:text-gray-200" },
      ],
      icon: <SiPostgresql className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      count: 6,
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <SiGit className="w-5 h-5" />, color: "text-red-600 dark:text-red-400" },
        { name: "GitHub", icon: <SiGithub className="w-5 h-5" />, color: "text-gray-800 dark:text-gray-200" },
        { name: "VS Code", icon: <VscCode className="w-5 h-5" />, color: "text-blue-600 dark:text-blue-400" },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea className="w-5 h-5" />, color: "text-orange-600 dark:text-orange-400" },
        { name: "Figma", icon: <SiFigma className="w-5 h-5" />, color: "text-purple-600 dark:text-purple-400" },
        { name: "Bootstrap", icon: <SiBootstrap className="w-5 h-5" />, color: "text-purple-700 dark:text-purple-300" },
      ],
      icon: <SiGit className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      count: 6,
    },
  ]

  return (
    <section id="skills" className="py-32 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 px-6 py-3 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-green-600 dark:text-green-400 font-semibold">Technical Arsenal</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white">
            Skills &
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <GlassCard className="h-full p-8 hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.gradient} text-white`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">{category.count} technologies</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group/skill"
                    >
                      <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-sm hover:shadow-md">
                        <div className="flex items-center gap-3">
                          <div className={`${skill.color} transition-all duration-300 group-hover/skill:scale-110`}>
                            {skill.icon}
                          </div>
                          <span className={`font-semibold text-sm ${skill.color} transition-colors duration-300`}>
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Modern Contact Section
function ModernContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black text-white relative overflow-hidden"
    >
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">Get In Touch</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Let's Create
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-12"></div>

          <p className="text-xl mb-16 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on exciting projects or discuss opportunities? I'm always open to new challenges and
            innovative ideas. Let's connect and build the future together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <GlassCard
            className="p-8 text-center hover:bg-white/20 cursor-pointer"
            onClick={() => window.open("mailto:theekshana.22@cse.mrt.ac.lk", "_blank")}
          >
            <Mail className="w-12 h-12 mx-auto mb-6 text-blue-400" />
            <h3 className="text-2xl font-bold mb-4">Email</h3>
            <p className="text-gray-300 text-lg">theekshana.22@cse.mrt.ac.lk</p>
          </GlassCard>

          <GlassCard
            className="p-8 text-center hover:bg-white/20 cursor-pointer"
            onClick={() => window.open("tel:+94761541254", "_blank")}
          >
            <Phone className="w-12 h-12 mx-auto mb-6 text-green-400" />
            <h3 className="text-2xl font-bold mb-4">Phone</h3>
            <p className="text-gray-300 text-lg">0761541254</p>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Button
            size="lg"
            onClick={() => window.open("https://github.com/TheekshanaWijerathne", "_blank")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
          >
            <Github className="w-6 h-6 mr-2" />
            GitHub
          </Button>
          <Button
            size="lg"
            onClick={() => window.open("https://linkedin.com/in/theekshana-wijerathne-0b84a9268", "_blank")}
            className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
          >
            <Linkedin className="w-6 h-6 mr-2" />
            LinkedIn
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("mailto:theekshana.22@cse.mrt.ac.lk", "_blank")}
            className="border-2 border-white/30 text-white hover:bg-white hover:text-black bg-white/10 backdrop-blur-md px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 cursor-pointer"
          >
            <Mail className="w-6 h-6 mr-2" />
            Email Me
          </Button>
          <ResumePDFGenerator variant="contact" size="lg" />
        </motion.div>
      </div>
    </section>
  )
}

// Main Portfolio Component
export default function ModernPortfolio() {
  return (
    <div className="min-h-screen relative">
      <ModernCursor />
      <ThemeToggle />
      <FloatingNav />

      <ModernHeroSection />
      <ModernAboutSection />
      <ModernProjectsSection />
      <GitHubPortfolio />
      <ModernSkillsSection />
      <ModernContactSection />
    </div>
  )
}
