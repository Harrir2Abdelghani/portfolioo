'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Calendar, Code, Briefcase, GraduationCap, User, Menu, X, Download, Star, Award, Zap, Target, ArrowRight, Globe, Users, TrendingUp, Eye, GitBranch, Layers, Coffee, Rocket, Heart, Brain, Lightbulb, Palette, Monitor, Smartphone, Database, Server, Cloud, Shield, Building, Clock, CheckCircle, Lock, UserCheck, BarChart3, MessageSquare, Settings, ShoppingCart } from 'lucide-react';

// Typing Animation Component
function TypingAnimation({ text, speed = 100 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.substring(0, index + 1));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <>{displayedText}</>;
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [revealedExperiences, setRevealedExperiences] = useState(new Set<number>());

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

      // Reveal experience items based on scroll position
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        const experienceTop = experienceSection.offsetTop;
        const experienceCards = Array.from(document.querySelectorAll('[data-experience-index]'));
        
        experienceCards.forEach((card) => {
          const index = parseInt((card as HTMLElement).dataset.experienceIndex || '-1');
          const cardTop = (card as HTMLElement).offsetTop;
          const scrollTrigger = experienceTop + (index * 150) - 200;
          
          if (window.scrollY > scrollTrigger && !revealedExperiences.has(index)) {
            setRevealedExperiences(prev => new Set(prev).add(index));
          }
        });
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
      period: 'Sep 2020 - Dec 2021',
      company: 'Ibn Khaldoun University',
      role: 'Software Developer Intern',
      location: 'Tiaret, Algeria',
      type: 'Internship',
      description: 'Developed responsive web-based UI and intuitive interfaces. Designed user experiences targeted to customer requirements, enhanced scalability and maintainability, expanded user reach by 20%.'
    },
    {
      period: 'Feb 2022 - Feb 2023',
      company: 'Sogesi',
      role: 'Tech Lead/React Developer',
      location: 'Tlemcen, Algeria',
      type: 'Full-time',
      description: 'Developed new user-facing features and built reusable code libraries. Managed projects to develop high-performing platforms, reduced deployment time by 60%, increasing team productivity.'
    },
    {
      period: 'Aug 2022 - Sep 2023',
      company: 'SoBiapi',
      role: 'Full Stack Web Developer',
      location: 'Lille, France',
      type: 'Full-time',
      description: 'Delivered front and back-end development across mobile and web applications. Developed server-side-rendered React applications that improved page load times by 40% and enhanced user interaction.'
    },
    {
      period: 'Jan 2024 - Nov 2024',
      company: 'Bayt.com',
      role: 'Frontend React Developer',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      description: 'Created fast and SEO-friendly web experiences with server-side rendering. Developed and implemented architectures for web applications, enhanced project efficiency by 25% through user-friendly interfaces.'
    },
    {
      period: 'Nov 2024 - May 2025',
      company: 'Shabakett Core',
      role: 'React/Next.js Developer',
      location: 'Algeria',
      type: 'Full-time',
      description: 'Provided technical support and led resolution of customer inquiries. Played leadership role in technical design of new systems. Expanded user reach by making app functional on all screen sizes, increasing traffic by 20%.',
      current: false
    },
    {
      period: 'Nov 2024 - Sep 2025',
      company: 'Attraxia',
      role: 'Senior Web Developer',
      location: 'Tallinn, Estonia',
      type: 'Remote',
      description: 'Developed new features using React and TypeScript. Implemented REST APIs and optimized calls to reduce load times by 15%. Collaborated with cross-functional teams and debugged issues to improve user experience.',
      current: false
    },
    {
      period: 'May 2025 - January 2026',
      company: 'Confirmoo',
      role: 'MERN Stack Developer',
      location: 'Algiers, Algeria',
      type: 'Full-time',
      description: 'Designing and maintaining software systems with 20% performance optimization. Designed scalable REST APIs and integrated with frontend components, optimized performance through code-splitting and lazy loading.',
      current: false
    },
    {
      period: 'Aug 2025 - Present',
      company: 'Albert-Learning',
      role: 'React/Next.js Developer',
      location: 'Marseille, France',
      type: 'Full-time',
      description: 'Built full-stack web applications using Next.js and Supabase for scalable and serverless solutions. Developed real-time data features with Supabase Postgres, implemented SSR/SSG for improved SEO and performance.',
      current: true
    }
  ];

  const skillsByCategory = {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Responsive Design', level: 92 },
      { name: 'Redux/Zustand', level: 82 },
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'REST APIs', level: 88 },
      { name: 'Supabase', level: 85 },
      { name: 'JWT Authentication', level: 85 },
    ],
    mobile: [
      { name: 'React Native', level: 75 },
      { name: 'Mobile Optimization', level: 88 },
      { name: 'Responsive Design', level: 92 },
    ],
    deployment: [
      { name: 'Vercel', level: 92 },
      { name: 'AWS', level: 78 },
      { name: 'DigitalOcean', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD Pipelines', level: 80 },
    ],
    other: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Vite', level: 88 },
      { name: 'Webpack', level: 75 },
      { name: 'Figma', level: 70 },
      { name: 'Testing (Jest)', level: 80 },
    ]
  };

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
      {/* Modern Minimalist Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl transition-all duration-500 ease-out animate-float"
          style={{
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
          }}
        ></div>
        <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl animate-bounce-subtle"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Enhanced Fixed Sidebar Navigation */}
      <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block pointer-events-none">
        <div className="glass glass-hover rounded-2xl p-2 w-14 shadow-2xl backdrop-blur-xl pointer-events-auto">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full h-10 rounded-lg mb-1 flex items-center justify-center transition-all duration-500 relative overflow-hidden group ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20 animate-glow'
                  : 'text-gray-500 hover:text-white hover:bg-white/10'
              } stagger-${index + 1} animate-slide-in-left`}
              title={item.label}
            >
              <item.icon size={16} className="transition-transform duration-300 group-hover:scale-110" />
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 animate-shimmer"></div>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Enhanced Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
        <div className={`glass glass-hover rounded-xl px-5 py-3 flex justify-between items-center transition-all duration-500 ${isVisible ? 'animate-slide-in-up' : ''}`}>
          <div className="text-sm sm:text-base font-bold gradient-text truncate">
            Harrir Habib Abdelghani
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-white/10 text-white transition-all duration-300 hover:bg-white/20 btn-modern active:scale-95"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="mt-3 glass glass-hover rounded-xl p-3 animate-scale-in">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-left hover:bg-white/10 transition-all duration-300 stagger-${index + 1} animate-slide-in-up text-sm`}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 lg:pr-0">
        {/* Modern Hero Section */}
        <section id="intro" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-20 lg:pt-0">
          <div className="w-full max-w-5xl mx-auto text-center">
            <div className="mb-8 sm:mb-12">
              <div className={`inline-flex items-center space-x-2 sm:space-x-3 glass glass-hover rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'animate-slide-in-up' : ''}`}>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium">Available for opportunities</span>
                {mounted && currentTime && (
                  <span className="hidden sm:inline text-xs text-gray-500">
                    {currentTime} Algeria
                  </span>
                )}
              </div>
              
              <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight transition-all duration-1000 ${isVisible ? 'animate-slide-in-up stagger-2' : ''}`}>
                <span className="gradient-text inline-block">
                  <TypingAnimation text="Software Engineer" speed={100} />
                </span>
              </h1>
              
              <p className={`text-base sm:text-lg md:text-xl text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${isVisible ? 'animate-slide-in-up stagger-3' : ''}`}>
                Crafting exceptional digital experiences with React, Next.js, and modern web technologies. Passionate about clean code, beautiful interfaces, and performance optimization.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'animate-slide-in-up stagger-4' : ''}`}>
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 btn-modern animate-glow text-sm sm:text-base"
              >
                <Coffee size={18} className="sm:w-5 sm:h-5" />
                <span className="font-medium">Let's Talk</span>
                <ArrowRight size={16} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={downloadCV}
                className="glass glass-hover text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 btn-modern text-sm sm:text-base"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                <span className="font-medium">Download CV</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="glass glass-hover text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 btn-modern text-sm sm:text-base"
              >
                <Eye size={18} className="sm:w-5 sm:h-5" />
                <span className="font-medium">View Work</span>
              </button>
            </div>

            <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-up stagger-5' : ''}`}>
              {[
                { metric: '5+', label: 'Years Experience', icon: Calendar },
                { metric: '25+', label: 'Projects Built', icon: Rocket },
                { metric: '4', label: 'Countries', icon: Globe },
                { metric: '15+', label: 'Technologies', icon: Code },
              ].map((achievement, index) => (
                <div 
                  key={index} 
                  className={`glass glass-hover rounded-lg sm:rounded-2xl p-4 sm:p-6 text-center card-hover stagger-${index + 1} animate-slide-in-up`}
                >
                  <achievement.icon className="mx-auto mb-2 sm:mb-3 text-cyan-400 animate-bounce-subtle w-5 h-5 sm:w-6 sm:h-6" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 gradient-text">{achievement.metric}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern About Section */}
        <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 gradient-text animate-slide-in-up">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start md:items-center">
              <div className="animate-slide-in-left order-2 md:order-1">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-5 sm:mb-6 text-white">Frontend-Focused Full Stack Developer</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6 leading-relaxed">
                  I'm a passionate developer with 5+ years of experience building modern web applications. 
                  While I work across the full stack, my heart lies in frontend development - creating 
                  beautiful, intuitive user interfaces that provide exceptional user experiences.
                </p>
                <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  I specialize in React, Next.js, and TypeScript, and I'm always exploring new technologies 
                  to stay at the forefront of web development. I believe in writing clean, maintainable code 
                  and following best practices.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech, index) => (
                    <span key={tech} className={`glass glass-hover text-cyan-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium card-hover stagger-${index + 1} animate-slide-in-up`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6 animate-slide-in-right order-1 md:order-2">
                {[
                  { icon: GraduationCap, title: 'Education', content: 'Computer Science', subtitle: 'The Higher School of Computer Science', color: 'text-cyan-400' },
                  { icon: MapPin, title: 'Location', content: 'Tiaret, Algeria', subtitle: 'Open to remote opportunities', color: 'text-purple-400' },
                  { icon: Globe, title: 'Languages', content: 'Arabic (Native), English (Proficient), French (Proficient)', subtitle: '', color: 'text-green-400' }
                ].map((item, index) => (
                  <div key={index} className={`glass glass-hover rounded-lg sm:rounded-2xl p-4 sm:p-6 card-hover stagger-${index + 1} animate-slide-in-right`}>
                    <h4 className="font-semibold mb-2 text-white flex items-center text-sm sm:text-base">
                      <item.icon size={18} className={`mr-2 sm:mr-3 ${item.color}`} />
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300">{item.content}</p>
                    {item.subtitle && <p className="text-xs sm:text-sm text-gray-400">{item.subtitle}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modern Experience Timeline Section */}
        <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 gradient-text animate-slide-in-up">
              Experience Timeline
            </h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full animate-shimmer"></div>
              
              {workExperience.map((exp, index) => (
                <div 
                  key={index}
                  data-experience-index={index}
                  className={`relative flex items-start mb-10 sm:mb-16 transition-all duration-700 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${revealedExperiences.has(index) ? 'scroll-reveal' : 'opacity-30'} stagger-${index + 1}`}
                  style={{
                    animationDelay: revealedExperiences.has(index) ? `${index * 0.1}s` : '0s'
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-3 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-3 sm:border-4 border-black flex items-center justify-center z-10 animate-glow mt-1.5 sm:mt-2">
                    {exp.current && <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>}
                  </div>
                  
                  {/* Content Card */}
                  <div className={`ml-14 sm:ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-10 lg:pr-16' : 'md:pl-10 lg:pl-16'}`}>
                    <div className="glass glass-hover rounded-lg sm:rounded-2xl p-5 sm:p-8 card-hover transform transition-all duration-700">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                        <span className="bg-gradient-to-r from-cyan-600 to-blue-600 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                          {exp.type}
                        </span>
                        <span className="text-gray-400 text-xs sm:text-sm">{exp.period}</span>
                        {exp.current && (
                          <span className="bg-green-500/20 text-green-400 px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center animate-pulse">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                            Current
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <p className="text-cyan-400 font-semibold mb-1 flex items-center text-sm sm:text-base">
                        <Building size={14} className="mr-2 sm:mr-2" />
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm mb-4 flex items-center">
                        <MapPin size={12} className="mr-2 sm:mr-2" />
                        {exp.location}
                      </p>
                      
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Skills Section */}
        <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 gradient-text animate-slide-in-up">
              Skills & Technologies
            </h2>
            <div className="space-y-10 sm:space-y-12">
              {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
                <div key={category}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 capitalize animate-slide-in-up">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {category === 'frontend' && '💻 Frontend Technologies'}
                      {category === 'backend' && '⚙️ Backend Technologies'}
                      {category === 'mobile' && '📱 Mobile Development'}
                      {category === 'deployment' && '🚀 Deployment & DevOps'}
                      {category === 'other' && '🛠️ Tools & Others'}
                    </span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {categorySkills.map((skill, index) => (
                      <div 
                        key={`${category}-${index}`}
                        className={`glass glass-hover rounded-lg sm:rounded-2xl p-5 sm:p-6 card-hover stagger-${index + 1} animate-slide-in-up`}
                      >
                        <div className="flex justify-between items-center mb-3 sm:mb-4">
                          <h4 className="text-base sm:text-lg font-semibold text-white">{skill.name}</h4>
                          <span className="text-cyan-400 font-medium text-sm sm:text-base">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden flex">
                          <div
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-1000"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 5 + index) * 100}ms`,
                            }}
                          ></div>
                          <div
                            className="bg-gray-600/50 h-full transition-all duration-1000"
                            style={{
                              width: `${100 - skill.level}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Projects Section */}
        <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 gradient-text animate-slide-in-up">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`glass glass-hover rounded-lg sm:rounded-2xl overflow-hidden card-hover group stagger-${index + 1} animate-scale-in`}
                >
                  {/* Project Image */}
                  <div className="h-40 sm:h-48 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = 'linear-gradient(135deg, #06b6d4, #3b82f6)';
                          parent.innerHTML += `<div class="flex items-center justify-center h-full text-white text-3xl font-bold animate-bounce-subtle">${project.title.charAt(0)}</div>`;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 glass px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium text-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                      {project.category}
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-1.5 sm:mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.slice(0, 2).map((feature, featureIndex) => (
                          <span key={featureIndex} className="glass px-2 py-0.5 sm:py-1 rounded text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 2 && (
                          <span className="glass px-2 py-0.5 sm:py-1 rounded text-xs text-gray-400">
                            +{project.features.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={tech} className={`bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded text-xs font-medium hover:scale-105 transition-transform duration-300 stagger-${techIndex + 1}`}>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="glass px-2 sm:px-3 py-0.5 sm:py-1 rounded text-xs text-gray-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Action Button */}
                    <div className="flex justify-center">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-xs sm:text-sm font-medium glass glass-hover px-3 sm:px-4 py-1.5 sm:py-2 rounded btn-modern group"
                      >
                        <ExternalLink size={14} className="mr-1.5 sm:mr-2 group-hover:rotate-45 transition-transform duration-300" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View More Projects */}
            <div className="text-center mt-12 sm:mt-16 animate-slide-in-up">
              <p className="text-sm sm:text-base text-gray-400 mb-6">
                These are just a few highlights from my portfolio. I've worked on many more projects across different industries and technologies.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-500 transform hover:scale-105 inline-flex items-center space-x-2 sm:space-x-3 btn-modern animate-glow text-sm sm:text-base"
              >
                <MessageSquare size={18} className="sm:w-5 sm:h-5" />
                <span>Discuss Your Project</span>
                <ArrowRight size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Modern Contact Section */}
        <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 gradient-text animate-slide-in-up">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-10 sm:mb-12 animate-slide-in-up stagger-2">
              Ready to build something amazing? Let's start the conversation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-12">
              {[
                { href: 'mailto:h.harrir@esi-sba.dz', icon: Mail, title: 'Email', content: 'h.harrir@esi-sba.dz', gradient: 'from-cyan-600 to-blue-600' },
                { href: 'tel:+213699935835', icon: Phone, title: 'Phone', content: '+213 699 935 835', gradient: 'from-blue-600 to-purple-600' },
                { href: 'https://www.linkedin.com/in/harrir-habib-abdelghani-90741a230/', icon: Linkedin, title: 'LinkedIn', content: 'Connect with me', gradient: 'from-purple-600 to-pink-600', external: true }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                  className={`glass glass-hover rounded-lg sm:rounded-2xl p-5 sm:p-8 card-hover text-center stagger-${index + 1} animate-scale-in`}
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${contact.gradient} rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounce-subtle`}>
                    <contact.icon size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-xl font-semibold text-white mb-2">{contact.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 flex items-center justify-center">
                    {contact.content}
                    {contact.external && <ExternalLink size={14} className="ml-1.5 sm:ml-2" />}
                  </p>
                </a>
              ))}
            </div>

            <div className="glass glass-hover rounded-lg sm:rounded-2xl p-5 sm:p-8 animate-slide-in-up stagger-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Currently Available</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                I'm open to new opportunities and exciting projects. Whether you're looking for a frontend developer 
                or want to collaborate on something innovative, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <a
                  href="mailto:h.harrir@esi-sba.dz"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-500 transform hover:scale-105 inline-flex items-center justify-center space-x-2 sm:space-x-3 btn-modern animate-glow text-sm sm:text-base"
                >
                  <Coffee size={18} className="sm:w-5 sm:h-5" />
                  <span>Start a Conversation</span>
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </a>
                <button
                  onClick={downloadCV}
                  className="glass glass-hover text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-500 transform hover:scale-105 inline-flex items-center justify-center space-x-2 sm:space-x-3 btn-modern text-sm sm:text-base"
                >
                  <Download size={18} className="sm:w-5 sm:h-5" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
            <div className="md:col-span-2 animate-slide-in-left">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 gradient-text">
                Software Engineer
              </h4>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                Passionate about creating exceptional digital experiences with modern web technologies. 
                Always learning, always building, always improving.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
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
                    <social.icon size={18} className="sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-in-up stagger-2">
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {navItems.slice(0, 3).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300 text-left hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded px-1 py-1"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="animate-slide-in-up stagger-3">
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">More</h4>
              <ul className="space-y-2 sm:space-y-3">
                {navItems.slice(3).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300 text-left hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded px-1 py-1"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center animate-slide-in-up stagger-4 gap-4 sm:gap-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © 2024 Harrir Habib Abdelghani. Crafted with passion and modern web technologies.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 flex items-center">
              Built with <Heart size={14} className="mx-1 text-red-500 animate-pulse" /> & <Coffee size={14} className="ml-1 text-amber-500" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
