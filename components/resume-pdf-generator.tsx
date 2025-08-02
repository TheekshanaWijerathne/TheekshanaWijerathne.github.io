"use client"

import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface ResumePDFGeneratorProps {
  variant?: "hero" | "about" | "contact"
  size?: "sm" | "lg"
  className?: string
}

export function ResumePDFGenerator({ variant = "about", size = "lg", className = "" }: ResumePDFGeneratorProps) {
  const { theme } = useTheme()

  // Function to download your actual CV PDF
  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/CV.pdf" // Path to your CV in public folder
    link.download = "Theekshana_Wijerathne_CV.pdf"
    link.target = "_blank" // Opens in new tab as backup
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Dynamic PDF generator for backup/alternative option
  const generateResumePDF = () => {
    const resumeHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Theekshana Wijerathne - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #2d3748;
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .resume-container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 25px 50px rgba(0,0,0,0.15);
            position: relative;
            overflow: hidden;
        }
        .resume-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
            position: relative;
        }
        .name {
            font-size: 36px;
            font-weight: 900;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 8px;
            letter-spacing: -1px;
        }
        .title {
            font-size: 18px;
            color: #6b7280;
            margin-bottom: 20px;
            font-weight: 500;
        }
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            font-size: 14px;
            color: #4b5563;
        }
        .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background: #f8fafc;
            border-radius: 25px;
            border: 1px solid #e2e8f0;
        }
        .section {
            margin-bottom: 35px;
        }
        .section-title {
            font-size: 22px;
            font-weight: 800;
            color: #1e293b;
            margin-bottom: 20px;
            position: relative;
            padding-left: 20px;
        }
        .section-title::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 24px;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            border-radius: 2px;
        }
        .project {
            margin-bottom: 25px;
            padding: 25px;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border-radius: 16px;
            border-left: 5px solid #3b82f6;
            position: relative;
            transition: all 0.3s ease;
        }
        .project::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(139,92,246,0.05) 100%);
            border-radius: 16px;
            pointer-events: none;
        }
        .project-title {
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 8px;
            font-size: 18px;
        }
        .project-period {
            font-size: 13px;
            color: #6b7280;
            margin-bottom: 12px;
            font-weight: 600;
        }
        .project-description {
            margin-bottom: 15px;
            color: #374151;
            line-height: 1.7;
        }
        .tech-stack {
            font-size: 13px;
            color: #4f46e5;
            font-weight: 600;
            background: #eef2ff;
            padding: 8px 12px;
            border-radius: 8px;
            display: inline-block;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        .skill-category {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            position: relative;
        }
        .skill-category::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            border-radius: 16px 16px 0 0;
        }
        .skill-category-title {
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 12px;
            font-size: 16px;
        }
        .skills-list {
            font-size: 14px;
            color: #4b5563;
            line-height: 1.8;
        }
        .education-item {
            margin-bottom: 20px;
            padding: 20px;
            background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
            border-radius: 16px;
            border-left: 5px solid #10b981;
        }
        .institution {
            font-weight: 700;
            color: #065f46;
            font-size: 18px;
        }
        .degree {
            color: #047857;
            margin: 8px 0;
            font-weight: 500;
        }
        .gpa {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 13px;
            display: inline-block;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(16,185,129,0.3);
        }
        .summary {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            padding: 25px;
            border-radius: 16px;
            border-left: 5px solid #f59e0b;
            margin-bottom: 35px;
            color: #92400e;
            line-height: 1.8;
        }
        .honors-item {
            background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
            padding: 20px;
            border-radius: 16px;
            border-left: 5px solid #ef4444;
            margin-bottom: 15px;
        }
        .reference-item {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            padding: 20px;
            border-radius: 16px;
            border-left: 5px solid #0ea5e9;
            color: #0c4a6e;
        }
        @media print {
            body { 
                margin: 0; 
                padding: 20px; 
                background: white;
            }
            .resume-container {
                box-shadow: none;
                padding: 20px;
            }
            .project { 
                break-inside: avoid; 
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="resume-container">
        <div class="header">
            <div class="name">THEEKSHANA WIJERATHNE</div>
            <div class="title">Full-Stack Developer & Software Engineer</div>
            <div class="contact-info">
                <div class="contact-item">📧 theekshana.22@cse.mrc.ac.lk</div>
                <div class="contact-item">📱 0761541254</div>
                <div class="contact-item">📍 Matale, Sri Lanka</div>
                <div class="contact-item">💼 theekshana-wijerathne</div>
                <div class="contact-item">🔗 TheekshanaWijerathne</div>
            </div>
        </div>

        <div class="section">
            <div class="summary">
                A highly motivated Computer Science and Engineering student with a strong focus on Software Engineering. Proficient in problem-solving, software design, and full-stack development, with a keen interest in building robust, scalable, and user-centered applications. Passionate about exploring modern development frameworks, tools, and best practices. Actively seeking a Software Engineering role to gain hands-on experience and contribute to the development of impactful, real-world software solutions.
            </div>
        </div>

        <div class="section">
            <div class="section-title">EDUCATION</div>
            <div class="education-item">
                <div class="institution">University of Moratuwa</div>
                <div class="degree">Bachelor of Science (Hons) in Engineering, Computer Science and Engineering</div>
                <div>March 2023 – present</div>
                <div style="margin-top: 12px;"><span class="gpa">CGPA: 3.85 (Dean's List)</span></div>
            </div>
            <div class="education-item">
                <div class="institution">St.Thomas' College Matale</div>
                <div class="degree">GCE Advanced Level - Physical Science Stream</div>
                <div>2013 – 2021 • 3A passes with Z-score of 2.4718</div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">FEATURED PROJECTS</div>
            
            <div class="project">
                <div class="project-title">Collaborative Learning Platform with Personalized Study Plans</div>
                <div class="project-period">Jul 2025 – present • Full-stack Developer & Scrum Master</div>
                <div class="project-description">Building a microservices-based web platform for academic collaboration, enabling admins to manage workspaces for subjects, tutors to coordinate group learning, and students to engage through quizzes, collaborative notes, and personalized study plans. Features include resource tagging, real-time editing, whiteboards, and gamified progress tracking.</div>
                <div class="tech-stack">Tech Stack: React.js, Material UI, NestJS, PostgreSQL, TypeORM, Docker</div>
            </div>

            <div class="project">
                <div class="project-title">Intelligent Advisor for Personal Finance & Investment</div>
                <div class="project-period">Apr 2025 – May 2025 • Full-Stack Developer & Scrum Master</div>
                <div class="project-description">Developed an AI-powered financial advisory platform supporting stock prediction, budgeting, investment planning, and risk monitoring using integrated ML models and financial APIs. Built personalized investment portfolio optimization module using Markowitz Mean-Variance Model and Monte Carlo simulation.</div>
                <div class="tech-stack">Tech Stack: FastAPI, Next.js, PostgreSQL, YFinance API, LSTM</div>
            </div>

            <div class="project">
                <div class="project-title">Human Resource Management System</div>
                <div class="project-period">Aug 2024 – Oct 2024 • Full-Stack Developer</div>
                <div class="project-description">Developed a full-stack HRMS for Jupiter Apparels to streamline employee lifecycle management, leave request workflows, and HR operations. Key features included customizable job titles, role-based access control, and responsive analytics dashboard.</div>
                <div class="tech-stack">Tech Stack: React.js (Vite), Bootstrap, Node.js, Express, MySQL</div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">TECHNICAL SKILLS</div>
            <div class="skills-grid">
                <div class="skill-category">
                    <div class="skill-category-title">Web Development</div>
                    <div class="skills-list">HTML, CSS, React, Tailwind CSS, Node.js, Express, Next.js, FastAPI, NestJS, Material UI, Bootstrap</div>
                </div>
                <div class="skill-category">
                    <div class="skill-category-title">Programming Languages</div>
                    <div class="skills-list">C, C++, Python, Java, JavaScript, TypeScript</div>
                </div>
                <div class="skill-category">
                    <div class="skill-category-title">Database & Mobile</div>
                    <div class="skills-list">MySQL, MongoDB, PostgreSQL, React Native</div>
                </div>
                <div class="skill-category">
                    <div class="skill-category-title">Tools & Deployment</div>
                    <div class="skills-list">Git, GitHub, AWS, Render, Vercel, Docker, VS Code, IntelliJ IDEA</div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">HONORS AND AWARDS</div>
            <div class="honors-item">
                <div class="institution">Dean's List — University of Moratuwa</div>
                <div>Awarded for academic excellence in Semester 1, Semester 2, and Semester 3</div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">VOLUNTARY EXPERIENCE</div>
            <ul style="padding-left: 20px; color: #374151;">
                <li style="margin-bottom: 12px;"><strong>Company Coordinator, Careers' Day 2025</strong><br>Department of Computer Science and Engineering, University of Moratuwa</li>
                <li style="margin-bottom: 12px;"><strong>Company Coordinator, CSE Hit the Ground Cricket Competition</strong><br>Department of Computer Science and Engineering, University of Moratuwa</li>
                <li><strong>Volunteer, Sasnaka Sansada, Matale</strong></li>
            </ul>
        </div>

        <div class="section">
            <div class="section-title">REFERENCES</div>
            <div class="reference-item">
                <div class="institution">Prof. Dulani Meedeniya</div>
                <div>Senior Lecturer, Department of Computer Science and Engineering</div>
                <div>University of Moratuwa, Sri Lanka</div>
                <div style="margin-top: 8px;">📱 +94 713935801 • 📧 dulanim@cse.mrt.ac.lk</div>
            </div>
        </div>
    </div>
</body>
</html>
    `

    // Create blob and download
    const blob = new Blob([resumeHTML], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Theekshana_Wijerathne_Resume.html"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    // Also create a text version
    setTimeout(() => {
      const textContent = `
THEEKSHANA WIJERATHNE
Full-Stack Developer & Software Engineer

CONTACT INFORMATION
Email: theekshana.22@cse.mrc.ac.lk
Phone: 0761541254
Location: Matale, Sri Lanka
GitHub: theekshana-wijerathne
LinkedIn: TheekshanaWijerathne

SUMMARY
A highly motivated Computer Science and Engineering student with a strong focus on Software Engineering. Proficient in problem-solving, software design, and full-stack development, with a keen interest in building robust, scalable, and user-centered applications. Passionate about exploring modern development frameworks, tools, and best practices. Actively seeking a Software Engineering role to gain hands-on experience and contribute to the development of impactful, real-world software solutions.

EDUCATION
University of Moratuwa
Bachelor of Science (Hons) in Engineering, Computer Science and Engineering
March 2023 – present
• CGPA: 3.85 (Semester 1,2,3 Dean's list)

St.Thomas' College Matale
GCE Advanced Level - Physical Science Stream - 3A passes with Z-score of 2.4718
2013 – 2021

FEATURED PROJECTS

Collaborative Learning Platform with Personalized Study Plans
Jul 2025 – present | Full-stack Developer & Scrum Master
• Building a microservices-based web platform for academic collaboration, enabling admins to manage workspaces for subjects, tutors to coordinate group learning, and students to engage through quizzes, collaborative notes, and personalized study plans.
• Features include resource tagging, real-time editing, whiteboards, and gamified progress tracking.
• Tech Stack: React.js, Material UI, NestJS, PostgreSQL, TypeORM, Docker

Intelligent Advisor for Personal Finance & Investment
Apr 2025 – May 2025 | Full-Stack Developer & Scrum Master
• Developed an AI-powered financial advisory platform supporting stock prediction, budgeting, investment planning, and risk monitoring using integrated ML models and financial APIs.
• Built personalized investment portfolio optimization module using Markowitz Mean-Variance Model and Monte Carlo simulation.
• Tech Stack: FastAPI, Next.js, PostgreSQL, YFinance API, LSTM

Human Resource Management System
Aug 2024 – Oct 2024 | Full-Stack Developer
• Developed a full-stack HRMS for Jupiter Apparels to streamline employee lifecycle management, leave request workflows, and HR operations.
• Key features included customizable job titles, role-based access control, and responsive analytics dashboard.
• Tech Stack: React.js (Vite), Bootstrap, Node.js, Express, MySQL

TECHNICAL SKILLS
Web Development: HTML, CSS, React, Tailwind CSS, Node.js, Express, Next.js, FastAPI, NestJS, Material UI, Bootstrap
Programming Languages: C, C++, Python, Java, JavaScript, TypeScript
Database & Mobile: MySQL, MongoDB, PostgreSQL, React Native
Tools & Deployment: Git, GitHub, AWS, Render, Vercel, Docker, VS Code, IntelliJ IDEA

HONORS AND AWARDS
• Dean's List — University of Moratuwa
  Awarded for academic excellence in Semester 1, Semester 2, and Semester 3

VOLUNTARY EXPERIENCE
• Company Coordinator, Careers' Day 2025 - Department of Computer Science and Engineering, University of Moratuwa
• Company Coordinator, CSE Hit the Ground Cricket Competition - Department of Computer Science and Engineering, University of Moratuwa
• Volunteer, Sasnaka Sansada, Matale

REFERENCES
Prof. Dulani Meedeniya
Senior Lecturer, Department of Computer Science and Engineering
University of Moratuwa, Sri Lanka
Phone: +94 713935801
Email: dulanim@cse.mrt.ac.lk
      `

      const textBlob = new Blob([textContent], { type: "text/plain" })
      const textUrl = URL.createObjectURL(textBlob)
      const textLink = document.createElement("a")
      textLink.href = textUrl
      textLink.download = "Theekshana_Wijerathne_Resume.txt"
      document.body.appendChild(textLink)
      textLink.click()
      document.body.removeChild(textLink)
      URL.revokeObjectURL(textUrl)
    }, 500)
  }

  if (variant === "hero") {
    return (
      <Button
        size={size}
        onClick={downloadCV}
        className={`bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 ${className}`}
      >
        <Download className="w-5 h-5 mr-2" />
        Download CV
      </Button>
    )
  }

  if (variant === "contact") {
    return (
      <Button
        size={size}
        onClick={downloadCV}
        className={`bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 ${className}`}
      >
        <Download className="w-6 h-6 mr-2" />
        Download CV
      </Button>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={className}>
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-2xl border border-orange-200 dark:border-orange-800 hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
            <FileText className="w-6 h-6 text-white" />
          </div>
          Resume
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          Download my complete resume with detailed project descriptions, technical skills, and professional experience.
        </p>
        <Button
          onClick={downloadCV}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Download className="w-5 h-5 mr-2" />
          Download CV
        </Button>
      </div>
    </motion.div>
  )
}
