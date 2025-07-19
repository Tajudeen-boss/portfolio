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
      id: 3,
      title: "SchoologPlus",
      description: "A comprehensive school management system built collaboratively with a team to streamline academic and administrative workflows. The platform supports student enrollment, attendance tracking, grading, and teacher management, all accessible via a user-friendly web interface.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "indigenius AI", "Nest.js", "MongoDb", "TypeScript"],
      links: {
        live: "https://www.schoologplus.com/",
        github: "https://github.com/Schoologplus",
        demo: "#"
      },
      featured: false,
      stats: {}
    },
    {
      id: 4,
      title: "Skills Academy",
      description: "A modern Learning Management System (LMS) designed to facilitate online course delivery, student progress tracking, and interactive quizzes. Enables instructors to create courses and manage enrollments efficiently.",
      image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "Next.js ApI", "PostgreSQL", "TypeScript", "Docker"],
      links: {
        live: "https://www.skills-academy.net/",
        github: "https://github.com/Tajudeen-boss/skills-academy-landing/",
        demo: "#"
      },
      featured: false,
      stats: {}
    },
    {
      id: 5,
      title: "Bloom-Educare",
      description: "A user-friendly Book Ordering App that allows users to browse, order, and track books with real-time order status updates. Includes role-based access for Admins and Customers and secure payment integration.",
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "MongoDB", "TypeScript", "TailwindCSS", "JWT"],
      links: {
        live: "#",
        github: "",
        demo: "#"
      },
      featured: false,
      stats: {}
    }

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


        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
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