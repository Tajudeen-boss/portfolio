'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play, Star, Award } from 'lucide-react';
import { useRef } from 'react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A revolutionary e-commerce experience with 3D product visualization, AR try-on features, and immersive shopping environments built with Three.js and WebGL.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "Three.js", "TypeScript", "Stripe", "PostgreSQL"],
      links: {
        live: "#",
        github: "#",
        demo: "#"
      },
      featured: true,
      award: "Best Innovation 2024",
      stats: { stars: 1200, forks: 340 }
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced analytics platform with real-time data visualization, machine learning insights, and predictive analytics for business intelligence.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "D3.js", "Python", "TensorFlow", "Redis"],
      links: {
        live: "#",
        github: "#",
        demo: "#"
      },
      featured: true,
      award: "Developer's Choice",
      stats: { stars: 890, forks: 210 }
    },
    {
      id: 3,
      title: "Collaborative Design Tool",
      description: "Real-time collaborative design platform with vector editing, team collaboration features, and version control for design teams.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Socket.io", "Canvas API", "Node.js", "MongoDB"],
      links: {
        live: "#",
        github: "#",
        demo: "#"
      },
      featured: false,
      stats: { stars: 567, forks: 123 }
    },
    {
      id: 4,
      title: "Smart Home IoT Dashboard",
      description: "Comprehensive IoT dashboard for smart home management with real-time monitoring, automation, and energy efficiency tracking.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React Native", "MQTT", "InfluxDB", "Grafana", "Docker"],
      links: {
        live: "#",
        github: "#",
        demo: "#"
      },
      featured: false,
      stats: { stars: 432, forks: 89 }
    },
    {
      id: 5,
      title: "Blockchain DeFi Platform",
      description: "Decentralized finance platform with yield farming, staking, and liquidity provision features built on Ethereum blockchain.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Web3.js", "Solidity", "Ethereum", "IPFS"],
      links: {
        live: "#",
        github: "#",
        demo: "#"
      },
      featured: false,
      stats: { stars: 789, forks: 156 }
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-morphing" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-morphing" style={{ animationDelay: '3s' }} />
      </motion.div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 text-sm font-medium text-primary mb-6"
          >
            <Award className="w-4 h-4 animate-pulse" />
            <span>Featured Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A showcase of my most impactful work, demonstrating technical excellence, 
            creative problem-solving, and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="group bg-card/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 project-card relative"
              whileHover={{ scale: 1.02, rotateY: 5 }}
            >
              {/* Award badge */}
              {project.award && (
                <motion.div
                  className="absolute top-4 left-4 z-20 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  <Award className="w-3 h-3" />
                  <span>{project.award}</span>
                </motion.div>
              )}

              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Project links overlay */}
                <motion.div
                  className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ y: -20 }}
                  whileHover={{ y: 0 }}
                >
                  {[
                    { href: project.links.live, icon: ExternalLink, label: "Live Demo" },
                    { href: project.links.github, icon: Github, label: "Source Code" },
                    { href: project.links.demo, icon: Play, label: "Video Demo" }
                  ].map((link, linkIndex) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors duration-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: linkIndex * 0.1 }}
                    >
                      <link.icon size={16} />
                    </motion.a>
                  ))}
                </motion.div>

                {/* Stats overlay */}
                <motion.div
                  className="absolute bottom-4 left-4 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
                    <Star className="w-3 h-3" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
                    <Github className="w-3 h-3" />
                    <span>{project.stats.forks}</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="p-8">
                <motion.h3
                  className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20 hover:border-primary/40 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.6 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Other Notable Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + (index * 0.1),
                  type: "spring",
                  stiffness: 100
                }}
                className="group bg-card/50 backdrop-blur-xl rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-500 creative-hover relative overflow-hidden"
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <motion.h4
                    className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h4>
                  
                  <div className="flex gap-2">
                    {[
                      { href: project.links.github, icon: Github },
                      { href: project.links.live, icon: ExternalLink }
                    ].map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <link.icon size={16} />
                      </motion.a>
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed relative z-10 group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-4 mb-4 relative z-10">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Github className="w-3 h-3" />
                    <span>{project.stats.forks}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 backdrop-blur-sm rounded text-xs font-medium text-primary border border-primary/20"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + (index * 0.1) + (techIndex * 0.05) }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-muted/50 backdrop-blur-sm rounded text-xs font-medium text-muted-foreground border border-border">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;