'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Calendar, Code, Briefcase, GraduationCap, User, Menu, X, Download, Star, Award, Zap, Target, ArrowRight, Globe, Users, TrendingUp, Eye, GitBranch, Layers, Coffee, Rocket, Heart, Brain, Lightbulb, Palette, Monitor, Smartphone, Database, Server, Cloud, Shield, Building, Clock, CheckCircle, Lock, UserCheck, BarChart3, MessageSquare, Settings, ShoppingCart } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
    
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Africa/Algiers',
        hour12: false 
      }));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['intro', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Harrir_Habib_Abdelghani_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { id: 'intro', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: Heart },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Rocket },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const workExperience = [
    {
      period: 'Nov 2024 - Present',
      company: 'Shabaketto Core',
      role: 'Frontend React Developer',
      location: 'Algeria',
      type: 'Full-time',
      description: 'Building responsive interfaces with React and modern frontend technologies. Developing user-friendly web applications with focus on performance optimization and clean code architecture.',
      current: true
    },
    {
      period: 'Oct 2024 - Present',
      company: 'Attaraxia',
      role: 'Senior Frontend Developer',
      location: 'Tallinn, Estonia',
      type: 'Remote',
      description: 'Leading frontend development with React and TypeScript. Mentoring junior developers and establishing best practices for component architecture and state management.',
      current: true
    },
    {
      period: 'Jan 2024 - Oct 2024',
      company: 'Bayt.com',
      role: 'Frontend React Developer',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      description: 'Built responsive web applications with React and Next.js for the leading job portal in the Middle East. Implemented SEO optimizations and improved page load speeds by 40%.'
    },
    {
      period: 'Mar 2023 - Jan 2024',
      company: 'Ibn Khaldoun Univ',
      role: 'Software Development Engineer',
      location: 'Tiaret, Algeria',
      type: 'Full-time',
      description: 'Designed and maintained software systems, optimizing performance by 20%. Collaborated with cross-functional teams to deliver scalable solutions for university management systems.'
    },
    {
      period: 'Jul 2022 - Aug 2023',
      company: 'SoBiapi',
      role: 'Full Stack Web Developer',
      location: 'Lille, France',
      type: 'Remote',
      description: 'Delivered front and back-end development across mobile and web applications. Integrated third-party APIs and implemented real-time features using WebSocket technology.'
    },
    {
      period: 'Jan 2022 - Jan 2023',
      company: 'Sogesi',
      role: 'React Developer',
      location: 'Tlemcen, Algeria',
      type: 'Full-time',
      description: 'Led stand-ups and agile meetings to plan and deliver on project goals. Developed reusable component libraries and implemented automated testing strategies.'
    },
    {
      period: 'Aug 2020 - Nov 2021',
      company: 'Ibn Khaldoun Univ',
      role: 'Software Developer Intern',
      location: 'Tiaret, Algeria',
      type: 'Internship',
      description: 'Enhanced user interaction and boosted customer satisfaction with instant communication features. Gained hands-on experience with modern development workflows and version control systems.'
    }
  ];

  const skills = [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'Responsive Design', level: 92 },
    { name: 'REST APIs', level: 88 },
    { name: 'Redux/Zustand', level: 82 },
  ];

  const projects = [
    {
      title: 'MyHuman App',
      description: 'A modern AI-powered dating platform that offers intelligent matchmaking, real-time communication, and a seamless user experience. Built with modern React architecture, it emphasizes intuitive design and personalized relationship discovery.',
      image: '/images/humain.PNG',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      liveUrl: 'https://www.myhumanapp.com/',
      features: ['Security Controls', 'Performance Analytics', 'Team Collaboration', 'Real-time Notifications'],
      category: 'Ai WebApp'
    },
    {
      title: 'KazAdmin Dashboard',
      description: 'A sophisticated administrative dashboard with advanced data visualization, user management, and system monitoring capabilities. Features secure authentication and role-based access control.',
      image: '/images/kazadmin.png',
      technologies: ['React', 'Next.js', 'Chart.js', 'Material-UI', 'Express.js'],
      liveUrl: 'https://admin.kazadmin.fr/login',
      features: ['Data Visualization', 'User Management', 'Security Controls', 'Real-time Monitoring'],
      category: 'Admin Dashboard'
    },
    {
      title: 'IntentLead CRM',
      description: 'A powerful customer relationship management system designed for lead generation and conversion tracking. Includes automated workflows, email campaigns, and detailed analytics.',
      image: '/images/intentlead.png',
      technologies: ['React', 'TypeScript', 'Redux', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://app.intentlead.com/auth/login',
      features: ['Lead Management', 'Email Automation', 'Analytics Dashboard', 'Conversion Tracking'],
      category: 'CRM Platform'
    },
    {
      title: 'Shabakett Network',
      description: 'Shabakett is a modern innovative management solution, offering the ability to collaborate, grow, and thrive through dynamic software integrating cutting-edge technologies.',
      image: '/images/shabakett.PNG',
      technologies: ['React', 'Next.js', 'Socket.io', 'Tailwind CSS', 'MongoDB'],
      liveUrl: 'https://www.shabakett.com/',
      features: ['User Management','Real-time Analytics','Customizable Dashboards','Role-based Access Control'],
      category: 'Social Platform'
    },
    {
      title: 'Confirmoo',
      description: 'All in one solution to automate order management and optimize your Ecommerce operations.',
      image: '/images/confirmoo.PNG',
      technologies: ['React', 'TypeScript', 'Calendar API', 'Stripe', 'Node.js'],
      liveUrl: 'https://www.confirmoo.com/',
      features: ['Order Tracking Dashboard','Delivery Agent Management','Real-Time Order Updates','Multi-Vendor Support'],
      category: 'Ecommerce Solution'
    },
    {
      title: 'Confirmoo Dashboard',
      description: 'A comprehensive business dashboard for managing orders, analyzing customer data, and tracking business performance. Provides detailed insights and reporting capabilities.',
      image: '/images/dashboard.PNG',
      technologies: ['React', 'Next.js', 'D3.js', 'Tailwind CSS', 'Express.js'],
      liveUrl: 'https://www.confirmoo.com/dashboard',
     features: ['Order Tracking Dashboard','Delivery Agent Management','Real-Time Order Updates','Multi-Vendor Support'],
      category: 'Ecommerce Dashboard'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl transition-all duration-500 ease-out animate-float"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/5 to-yellow-500/5 rounded-full blur-2xl animate-bounce-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        <div className="particle" style={{ top: '20%', left: '10%' }}></div>
        <div className="particle" style={{ top: '60%', left: '80%' }}></div>
        <div className="particle" style={{ top: '40%', left: '60%' }}></div>
        <div className="particle" style={{ top: '80%', left: '20%' }}></div>
      </div>

      {/* Enhanced Fixed Sidebar Navigation */}
      <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="glass glass-hover rounded-2xl p-3 w-16 shadow-2xl">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full h-12 rounded-xl mb-2 flex items-center justify-center transition-all duration-500 relative overflow-hidden group ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25 animate-glow'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              } stagger-${index + 1} animate-slide-in-left`}
              title={item.label}
            >
              <item.icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-shimmer"></div>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Enhanced Mobile Header */}
      <header className="lg:hidden fixed top-4 left-4 right-4 z-50">
        <div className={`glass glass-hover rounded-2xl px-6 py-4 flex justify-between items-center transition-all duration-500 ${isVisible ? 'animate-slide-in-up' : ''}`}>
          <div className="text-lg font-bold gradient-text">
            Portfolio
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-xl bg-white/10 text-white transition-all duration-300 hover:bg-white/20 btn-modern"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="mt-4 glass glass-hover rounded-2xl p-4 animate-scale-in">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-left hover:bg-white/10 transition-all duration-300 stagger-${index + 1} animate-slide-in-up`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative mx-8 z-10">
        {/* Enhanced Hero Section */}
        <section id="intro" className="min-h-screen flex items-center justify-center px-6 lg:px-12">
          <div className="w-full max-w-6xl mx-auto text-center">
            <div className="mb-12">
              <div className={`inline-flex items-center space-x-3 glass glass-hover rounded-full px-6 py-3 mb-12 mt-8 transition-all duration-700 ${isVisible ? 'animate-slide-in-up' : ''}`}>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for opportunities</span>
                {mounted && currentTime && (
                  <span className="text-xs text-gray-400">
                    {currentTime} Algeria
                  </span>
                )}
              </div>
              
              <h1 className={`text-6xl md:text-8xl font-bold mb-8 leading-none transition-all duration-1000 ${isVisible ? 'animate-slide-in-up stagger-2' : ''}`}>
                <span className="gradient-text">
                  Software Engineer
                </span>
              </h1>
              
              <p className={`text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${isVisible ? 'animate-slide-in-up stagger-3' : ''}`}>
                Crafting exceptional digital experiences with React, Next.js, and modern web technologies. 
                Passionate about clean code, beautiful interfaces, and performance optimization.
              </p>
            </div>

            <div className={`flex flex-wrap justify-center gap-6 mb-16 transition-all duration-1000 ${isVisible ? 'animate-slide-in-up stagger-4' : ''}`}>
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 flex items-center space-x-3 btn-modern animate-glow"
              >
                <Coffee size={20} />
                <span className="font-medium">Let's Talk</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={downloadCV}
                className="glass glass-hover text-white px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 flex items-center space-x-3 btn-modern"
              >
                <Download size={20} />
                <span className="font-medium">Download CV</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="glass glass-hover text-white px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 flex items-center space-x-3 btn-modern"
              >
                <Eye size={20} />
                <span className="font-medium">View Work</span>
              </button>
            </div>

            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-up stagger-5' : ''}`}>
              {[
                { metric: '5+', label: 'Years Experience', icon: Calendar },
                { metric: '25+', label: 'Projects Built', icon: Rocket },
                { metric: '4', label: 'Countries', icon: Globe },
                { metric: '15+', label: 'Technologies', icon: Code },
              ].map((achievement, index) => (
                <div 
                  key={index} 
                  className={`glass glass-hover rounded-2xl p-6 text-center card-hover stagger-${index + 1} animate-slide-in-up`}
                >
                  <achievement.icon className="mx-auto mb-3 text-cyan-400 animate-bounce-subtle" size={24} />
                  <div className="text-3xl font-bold text-white mb-2 gradient-text">{achievement.metric}</div>
                  <div className="text-sm text-gray-400">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced About Section */}
        <section id="about" className="py-20 mx-8 px-6 lg:px-12">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-slide-in-up">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h3 className="text-3xl font-semibold mb-6 text-white">Frontend-Focused Full Stack Developer</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  I'm a passionate developer with 5+ years of experience building modern web applications. 
                  While I work across the full stack, my heart lies in frontend development - creating 
                  beautiful, intuitive user interfaces that provide exceptional user experiences.
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  I specialize in React, Next.js, and TypeScript, and I'm always exploring new technologies 
                  to stay at the forefront of web development. I believe in writing clean, maintainable code 
                  and following best practices.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech, index) => (
                    <span key={tech} className={`glass glass-hover text-cyan-300 px-4 py-2 rounded-xl text-sm font-medium card-hover stagger-${index + 1} animate-slide-in-up`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-6 animate-slide-in-right">
                {[
                  { icon: GraduationCap, title: 'Education', content: 'Computer Science', subtitle: 'The Higher School of Computer Science', color: 'text-cyan-400' },
                  { icon: MapPin, title: 'Location', content: 'Tiaret, Algeria', subtitle: 'Open to remote opportunities', color: 'text-purple-400' },
                  { icon: Globe, title: 'Languages', content: 'Arabic (Native), English (Proficient), French (Proficient)', subtitle: '', color: 'text-green-400' }
                ].map((item, index) => (
                  <div key={index} className={`glass glass-hover rounded-2xl p-6 card-hover stagger-${index + 1} animate-slide-in-right`}>
                    <h4 className="font-semibold mb-2 text-white flex items-center">
                      <item.icon size={20} className={`mr-3 ${item.color}`} />
                      {item.title}
                    </h4>
                    <p className="text-gray-300">{item.content}</p>
                    {item.subtitle && <p className="text-sm text-gray-400">{item.subtitle}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Experience Timeline Section */}
        <section id="experience" className="py-20 px-6 mx-8 lg:px-12">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-slide-in-up">
              Experience Timeline
            </h2>
            
            <div className="relative">
              {/* Enhanced Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600 rounded-full animate-shimmer"></div>
              
              {workExperience.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center mb-16 transition-all duration-700 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} stagger-${index + 1} animate-slide-in-up`}
                >
                  {/* Enhanced Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full border-4 border-black flex items-center justify-center z-10 animate-glow">
                    {exp.current && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                  </div>
                  
                  {/* Enhanced Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="glass glass-hover rounded-2xl p-8 card-hover">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="bg-gradient-to-r from-cyan-600 to-purple-600 px-4 py-1 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                        <span className="text-gray-400 text-sm">{exp.period}</span>
                        {exp.current && (
                          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium flex items-center animate-pulse">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                            Current
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <p className="text-cyan-400 font-semibold mb-1 flex items-center">
                        <Building size={16} className="mr-2" />
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-sm mb-4 flex items-center">
                        <MapPin size={14} className="mr-2" />
                        {exp.location}
                      </p>
                      
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section id="skills" className="py-20 mx-8 px-6 lg:px-12">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-slide-in-up">
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`glass glass-hover rounded-2xl p-6 card-hover stagger-${index + 1} animate-slide-in-up`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <span className="text-cyan-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden flex">
                    <div
                      className="bg-cyan-500 h-3 transition-all duration-1000"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    ></div>
                    <div
                      className="bg-gray-500/30 h-3 transition-all duration-1000"
                      style={{
                        width: `${100 - skill.level}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="py-20 px-6 mx-8 lg:px-12">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-slide-in-up">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`glass glass-hover rounded-2xl overflow-hidden card-hover group stagger-${index + 1} animate-scale-in`}
                >
                  {/* Enhanced Project Image */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full  object-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = 'linear-gradient(135deg, #06b6d4, #8b5cf6)';
                          parent.innerHTML += `<div class="flex items-center justify-center h-full text-white text-2xl font-bold animate-bounce-subtle">${project.title.charAt(0)}</div>`;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-medium text-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                      {project.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Enhanced Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Enhanced Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.slice(0, 2).map((feature, featureIndex) => (
                          <span key={featureIndex} className="glass px-2 py-1 rounded-lg text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 2 && (
                          <span className="glass px-2 py-1 rounded-lg text-xs text-gray-400">
                            +{project.features.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Enhanced Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={tech} className={`bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-lg text-xs font-medium hover:scale-105 transition-transform duration-300 stagger-${techIndex + 1}`}>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="glass px-3 py-1 rounded-lg text-xs text-gray-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Enhanced Action Button */}
                    <div className="flex justify-center">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm font-medium glass glass-hover px-4 py-2 rounded-lg btn-modern group"
                      >
                        <ExternalLink size={16} className="mr-2 group-hover:rotate-45 transition-transform duration-300" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enhanced View More Projects */}
            <div className="text-center mt-12 animate-slide-in-up">
              <p className="text-gray-400 mb-6">
                These are just a few highlights from my portfolio. I've worked on many more projects across different industries and technologies.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 inline-flex items-center space-x-3 btn-modern animate-glow"
              >
                <MessageSquare size={20} />
                <span>Discuss Your Project</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-20 px-6 lg:px-12">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 gradient-text animate-slide-in-up">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-12 animate-slide-in-up stagger-2">
              Ready to build something amazing? Let's start the conversation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { href: 'mailto:h.harrir@esi-sba.dz', icon: Mail, title: 'Email', content: 'h.harrir@esi-sba.dz', gradient: 'from-cyan-600 to-purple-600' },
                { href: 'tel:+213699935835', icon: Phone, title: 'Phone', content: '+213 699 935 835', gradient: 'from-purple-600 to-pink-600' },
                { href: 'https://www.linkedin.com/in/harrir-habib-abdelghani-90741a230/', icon: Linkedin, title: 'LinkedIn', content: 'Connect with me', gradient: 'from-pink-600 to-red-600', external: true }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                  className={`glass glass-hover rounded-2xl p-8 card-hover text-center stagger-${index + 1} animate-scale-in`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce-subtle`}>
                    <contact.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
                  <p className="text-gray-300 flex items-center justify-center">
                    {contact.content}
                    {contact.external && <ExternalLink size={16} className="ml-2" />}
                  </p>
                </a>
              ))}
            </div>

            <div className="glass glass-hover rounded-2xl p-8 animate-slide-in-up stagger-4">
              <h3 className="text-2xl font-semibold text-white mb-4">Currently Available</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm open to new opportunities and exciting projects. Whether you're looking for a frontend developer 
                or want to collaborate on something innovative, I'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:h.harrir@esi-sba.dz"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 inline-flex items-center space-x-3 btn-modern animate-glow"
                >
                  <Coffee size={20} />
                  <span>Start a Conversation</span>
                  <ArrowRight size={18} />
                </a>
                <button
                  onClick={downloadCV}
                  className="glass glass-hover text-white px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 inline-flex items-center space-x-3 btn-modern"
                >
                  <Download size={20} />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t border-white/10 py-16 mx-10 px-6 lg:px-12">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 animate-slide-in-left">
              <h4 className="text-2xl font-bold text-white mb-4 gradient-text">
                Software Engineer
              </h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Passionate about creating exceptional digital experiences with modern web technologies. 
                Always learning, always building, always improving.
              </p>
              <div className="flex space-x-4">
                {[
                  { href: 'mailto:h.harrir@esi-sba.dz', icon: Mail, label: 'Send email' },
                  { href: 'https://www.linkedin.com/in/harrir-habib-abdelghani-90741a230/', icon: Linkedin, label: 'LinkedIn profile', external: true },
                  { href: 'https://github.com/Harrir2Abdelghani', icon: Github, label: 'GitHub profile', external: true }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/5 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-in-up stagger-2">
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navItems.slice(0, 3).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-left hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded px-1 py-1"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="animate-slide-in-up stagger-3">
              <h4 className="text-white font-semibold mb-4">More</h4>
              <ul className="space-y-3">
                {navItems.slice(3).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-left hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded px-1 py-1"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center animate-slide-in-up stagger-4">
            <p className="text-gray-400 text-sm">
              © 2024 Harrir Habib Abdelghani. Crafted with passion and modern web technologies.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center">
              Built with <Heart size={16} className="mx-1 text-red-500 animate-pulse" /> & <Coffee size={16} className="ml-1 text-amber-500" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}