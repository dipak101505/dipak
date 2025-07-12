"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Code, 
  Cloud, 
  Database, 
  Globe,
  ChevronDown,
  ExternalLink,
  Star,
  Calendar,
  MapPin
} from "lucide-react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const telegramBotToken = '7585008198:AAHpfFwWVh4oOQJIy8xVP0HFTHyK3MpnHAA';
      const chatId = '7345131891';
      
      const message = `New Contact Form Submission:
      
Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}

Time: ${new Date().toLocaleString()}`;

      console.log('Sending to Telegram:', {
        url: `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        body: { chat_id: chatId, text: message }
      });

      const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-8 h-8" />,
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      icon: <Database className="w-8 h-8" />,
      technologies: ["Node.js", "Python", "Java", "Express.js", "REST APIs", "GraphQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Linux"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const projects = [
    {
      title: "Institute Website",
      description: "A responsive web application featuring course management, student portal, and modern UI/UX design",
      tech: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
      image: "/image.png",
      link: "https://www.zenithinstitute.co.in/"
    },
    {
      title: "LMS Platform",
      description: "A comprehensive Learning Management System with notification system, live streaming, video streaming, simulation, ERP, and examination modules",
      tech: ["Next.js", "WebRTC", "Video Streaming", "ERP", "Real-time"],
      image: "/lms.png",
      link: "https://lms-eight-chi.vercel.app/"
    },
    {
      title: "LMS Android App",
      description: "Android mobile application for the Learning Management System, providing mobile access to all LMS features",
      tech: ["React Native", "Android", "Mobile App", "LMS Integration"],
      image: "/lms mobile.png",
      link: "https://play.google.com/store/search?q=zenith%20lms&c=apps"
    }
  ];

  const experiences = [
    {
      role: "Software Developer",
      company: "ACI Worldwide",
      period: "2021 - 2022",
      location: "Remote",
      description: "Developed and maintained payment processing systems and financial technology solutions"
    },
    {
      role: "Founding Developer",
      company: "Rb Diag",
      period: "2022 - 2023",
      location: "Remote",
      description: "Led the development of Laboratory Information Management System (LIMS) as a founding team member"
    },
    {
      role: "Product Developer",
      company: "AgNext",
      period: "2023 - Present",
      location: "Remote",
      description: "Developing innovative agricultural technology solutions and products for the agri-tech industry"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              DA
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Dipak.jpg"
            alt="Dipak Agarwal"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
          <motion.div
            style={{ y }}
            className="absolute inset-0 opacity-20"
          >
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-8 z-20 max-w-md">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-6 rounded-2xl backdrop-blur-md"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-white mb-3"
            >
              Dipak Agarwal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-200 mb-3"
            >
              Software Developer & Cloud Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-sm text-gray-300 mb-4"
            >
              Building scalable solutions and transforming ideas into reality through code and cloud innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30"
              >
                Get in Touch
              </a>
              
              <div className="flex space-x-3">
                <a href="https://github.com/dipak101505" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/30">
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.linkedin.com/in/dipak-agarwal-653563137/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/30">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="mailto:dipakagarwal101505@gmail.com" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/30">
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 gradient-text">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hello! I'm Dipak, a passionate software developer and cloud engineer with over 5 years of experience in building scalable applications and cloud solutions.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I specialize in modern web technologies, cloud architecture, and DevOps practices. My expertise spans from frontend development with React and Next.js to backend services with Node.js and Python, along with cloud platforms like AWS and Azure.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I work with a diverse range of technologies to create robust and scalable solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-600">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey in software development and cloud engineering.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                  <div className="mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Let's Connect</h3>
                <div className="space-y-4">
                                     <a href="mailto:dipakagarwal101505@gmail.com" className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                     <Mail className="w-6 h-6 text-blue-600" />
                     <div>
                       <div className="font-semibold text-gray-800 dark:text-white">Email</div>
                       <div className="text-gray-600 dark:text-gray-400">dipakagarwal101505@gmail.com</div>
                     </div>
                   </a>
                                     <a href="https://www.linkedin.com/in/dipak-agarwal-653563137/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                     <Linkedin className="w-6 h-6 text-blue-600" />
                     <div>
                       <div className="font-semibold text-gray-800 dark:text-white">LinkedIn</div>
                       <div className="text-gray-600 dark:text-gray-400">linkedin.com/in/dipak-agarwal-653563137</div>
                     </div>
                   </a>
                                     <a href="https://github.com/dipak101505" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                     <Github className="w-6 h-6 text-gray-800 dark:text-white" />
                     <div>
                       <div className="font-semibold text-gray-800 dark:text-white">GitHub</div>
                       <div className="text-gray-600 dark:text-gray-400">github.com/dipak101505</div>
                     </div>
                   </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus === 'success' 
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300' 
                        : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                    }`}>
                      {submitStatus === 'success' 
                        ? '✅ Message sent successfully! I\'ll get back to you soon.' 
                        : '❌ Failed to send message. Please try again.'
                      }
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Dipak Agarwal.
          </p>
        </div>
      </footer>
    </div>
  );
}