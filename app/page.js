
"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  GraduationCap,
  Trophy,
  Star,
  Download,
  ChevronDown,
  Target,
  TrendingUp,
  Calculator,
  BarChart3,
  Users,
  Clock,
  BookOpen,
  Moon,
  Sun,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const [theme, setTheme] = useState("dark")

  const skills = [
    { name: "Leadership", icon: Users, level: 90 },
    { name: "Communication", icon: Users, level: 85 },
    { name: "Problem Solving", icon: Target, level: 88 },
    { name: "Decision Making", icon: TrendingUp, level: 87 },
    { name: "Project Management", icon: Clock, level: 82 },
    { name: "Accounting Principles", icon: Calculator, level: 92 },
    { name: "Financial Analysis", icon: BarChart3, level: 89 },
    { name: "Time Management", icon: Clock, level: 85 },
  ]

  const education = [
    {
      year: "2022 - Present",
      title: "BBA (Hons) in Accounting & Finance",
      institution: "SLIIT",
      type: "Undergraduate",
      status: "In Progress",
    },
    {
      year: "2022",
      title: "English Diploma",
      institution: "British Way English Academy",
      type: "Certification",
      status: "Completed",
    },
    {
      year: "2022",
      title: "G.C.E. A/L Examination",
      institution: "Commerce Stream",
      type: "Advanced Level",
      status: "Completed",
      results: ["Economic: A", "Accounting: A", "Business Studies: B"],
    },
    {
      year: "2019",
      title: "G.C.E. O/L Examination",
      institution: "Eight Distinction Passes",
      type: "Ordinary Level",
      status: "Completed",
    },
    {
      year: "2013",
      title: "Grade 5 Scholarship Examination",
      institution: "Successfully Passed",
      type: "Scholarship",
      status: "Completed",
    },
  ]

  const achievements = [
    { title: "2nd Place Buddhism", year: "2020", category: "Academic" },
    { title: "3rd Place Oriental Dancing", year: "2020", category: "Cultural" },
    { title: "3rd Place History", year: "2020", category: "Academic" },
    { title: "1st Place Shot Put", year: "2019", category: "Sports" },
    { title: "1st Place Discuss Throw", year: "2019", category: "Sports" },
    { title: "Cricket Championship", year: "2017", category: "Sports" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "education", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleDownloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    // Set the href to the direct download link
    link.href = 'https://drive.google.com/uc?export=download&id=1p_HzYVnXfcW-ueLoFCt4VHvFXF9dGPSw';
    // Set the download attribute with a filename
    link.setAttribute('download', 'Shehani_Akashya_CV.pdf');
    // Append to body, trigger click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          : "bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50"
      }`}
    >
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          theme === "dark"
            ? "bg-black/20 backdrop-blur-lg border-b border-white/10"
            : "bg-white/80 backdrop-blur-lg border-b border-gray-200"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Shehani Akashya
            </motion.div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-8">
                {["About", "Education", "Achievements", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`transition-colors hover:text-purple-400 ${
                      activeSection === item.toLowerCase()
                        ? "text-purple-400"
                        : theme === "dark"
                          ? "text-white"
                          : "text-gray-800"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  theme === "dark" ? "hover:bg-white/10 text-white" : "hover:bg-gray-200 text-gray-800"
                }`}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </motion.div>

        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="mb-8"
          >
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 p-1 shadow-2xl">
              <div className={`w-full h-full rounded-full ${theme === "dark" ? "bg-slate-800" : "bg-white"} flex items-center justify-center overflow-hidden shadow-inner`}>
                <Image 
                  src="/images/ShehaniProtfolio.jpg"
                  alt="Shehani Akashya"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>

          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Shehani
            </span>
            <br />
            <span className={`${theme === "dark" ? "text-white" : "text-gray-800"}`}>Akashya</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`text-xl md:text-2xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"} mb-8 max-w-3xl mx-auto`}
          >
            Finance & Accounting Undergraduate | Future Financial Leader |
            <span className="text-purple-400"> Turning Numbers into Insights</span>
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="h-8 w-8 text-purple-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-5xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"} mb-6`}>About Me</h2>
            <p
              className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"} max-w-4xl mx-auto leading-relaxed`}
            >
              I am a <span className="text-purple-400">self-confident, self-motivated</span> finance and accounting
              undergraduate with a genuine passion for transforming complex financial data into strategic insights. My
              journey combines <span className="text-pink-400">academic excellence</span> with practical leadership
              experience, positioning me to contribute meaningfully to organizational objectives while continuously
              developing my expertise in the evolving landscape of{" "}
              <span className="text-purple-400">financial technology</span>.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20"
                      : "bg-white/80 backdrop-blur-lg border-gray-200 hover:bg-white/90 shadow-lg"
                  } transition-all duration-300`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-110 transition-transform">
                        <skill.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className={`${theme === "dark" ? "text-white" : "text-gray-800"} font-semibold mb-3`}>
                      {skill.name}
                    </h3>
                    <div className={`w-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"} rounded-full h-2 mb-2`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      />
                    </div>
                    <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      {skill.level}%
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className={`text-5xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"} mb-6`}>
              Educational Journey
            </h2>
            <p className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Building a strong foundation in finance and accounting
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card
                    className={`${
                      theme === "dark"
                        ? "bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20"
                        : "bg-white/80 backdrop-blur-lg border-gray-200 hover:bg-white/90 shadow-lg"
                    } transition-all duration-300`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <GraduationCap className="h-5 w-5 text-purple-400 mr-2" />
                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                          {edu.type}
                        </Badge>
                      </div>
                      <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"} mb-2`}>
                        {edu.title}
                      </h3>
                      <p className="text-purple-400 font-semibold mb-2">{edu.institution}</p>
                      <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"} mb-3`}>
                        {edu.year}
                      </p>
                      {edu.results && (
                        <div className="space-y-1">
                          {edu.results.map((result, i) => (
                            <p key={i} className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                              {result}
                            </p>
                          ))}
                        </div>
                      )}
                      <Badge
                        variant={edu.status === "Completed" ? "default" : "secondary"}
                        className={
                          edu.status === "Completed"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-yellow-500/20 text-yellow-300"
                        }
                      >
                        {edu.status}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 ${theme === "dark" ? "border-slate-900" : "border-gray-50"}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className={`text-5xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"} mb-6`}>
              Achievements & Recognition
            </h2>
            <p className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Excellence across academics, sports, and cultural activities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group perspective-1000"
              >
                <Card
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20"
                      : "bg-white/80 backdrop-blur-lg border-gray-200 hover:bg-white/90 shadow-lg"
                  } transition-all duration-300 transform-gpu`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:scale-110 transition-transform">
                        {achievement.category === "Academic" && <BookOpen className="h-8 w-8 text-white" />}
                        {achievement.category === "Sports" && <Trophy className="h-8 w-8 text-white" />}
                        {achievement.category === "Cultural" && <Star className="h-8 w-8 text-white" />}
                      </div>
                    </div>
                    <h3 className={`${theme === "dark" ? "text-white" : "text-gray-800"} font-bold text-lg mb-2`}>
                      {achievement.title}
                    </h3>
                    <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} mb-3`}>
                      {achievement.year}
                    </p>
                    <Badge
                      variant="secondary"
                      className={`
                        ${achievement.category === "Academic" ? "bg-blue-500/20 text-blue-300" : ""}
                        ${achievement.category === "Sports" ? "bg-green-500/20 text-green-300" : ""}
                        ${achievement.category === "Cultural" ? "bg-purple-500/20 text-purple-300" : ""}
                      `}
                    >
                      {achievement.category}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className={`text-5xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"} mb-6`}>
              Let&#39;s Connect
            </h2>
            <p className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}>
              Ready to bring fresh perspectives and analytical expertise to your organization. Let&#39;s discuss how I can
              contribute to your team&#39;s success.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Card
              className={`${
                theme === "dark"
                  ? "bg-white/10 backdrop-blur-lg border-white/20"
                  : "bg-white/80 backdrop-blur-lg border-gray-200 hover:bg-white/90 shadow-lg"
              }`}
            >
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"} mb-8`}>
                    Get in Touch
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className={`${theme === "dark" ? "text-white" : "text-gray-800"} font-semibold mb-1`}>
                          Email
                        </h4>
                        <a
                          href="mailto:shehaniakashya92@gmail.com"
                          className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} hover:text-purple-400 transition-colors`}
                        >
                          shehaniakashya92@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className={`${theme === "dark" ? "text-white" : "text-gray-800"} font-semibold mb-1`}>
                          Phone
                        </h4>
                        <a
                          href="tel:+94759569167"
                          className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} hover:text-purple-400 transition-colors`}
                        >
                          +94 759 569 167
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className={`${theme === "dark" ? "text-white" : "text-gray-800"} font-semibold mb-1`}>
                          Location
                        </h4>
                        <span className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                          Colombo, Sri Lanka
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                        <Linkedin className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className={`${theme === "dark" ? "text-white" : "text-gray-800"} font-semibold mb-1`}>
                          LinkedIn
                        </h4>
                        <a
                          href="https://www.linkedin.com/in/shehani-akashya-7b76ba30b"
                          className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} hover:text-purple-400 transition-colors`}
                        >
                          Connect with me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${theme === "dark" ? "border-t border-white/10" : "border-t border-gray-200"}`}>
        <div className="container mx-auto px-6 text-center">
          <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            © 2024 Shehani Akashya. Crafted with passion for excellence in finance and accounting.
          </p>
        </div>
      </footer>
    </div>
  )
}
