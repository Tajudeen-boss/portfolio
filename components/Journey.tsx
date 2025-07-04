'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, TrendingUp, Users, Code, Briefcase, GraduationCap } from 'lucide-react';
import { useRef } from 'react';

const Journey = () => {
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
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);

  const experiences = [
    {
      id: 1,
      period: "2024 - Present",
      role: "Senior Full Stack Developer",
      company: "TechCorp Innovation",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Leading development of next-generation web applications using cutting-edge technologies. Architecting scalable solutions and mentoring junior developers.",
      achievements: [
        "Increased application performance by 40%",
        "Led team of 8 developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Built 3D visualization platform serving 100k+ users"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Three.js", "AWS", "Docker"],
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      period: "2022 - 2024",
      role: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      type: "Full-time",
      description: "Developed and maintained multiple client projects, focusing on modern web technologies and user experience optimization.",
      achievements: [
        "Built 15+ production applications",
        "Reduced loading times by 50%",
        "Implemented real-time features for 50k+ users",
        "Mentored 3 junior developers"
      ],
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Redis", "GraphQL"],
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      period: "2021 - 2022",
      role: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      type: "Full-time",
      description: "Specialized in creating responsive, interactive web interfaces with focus on performance and accessibility.",
      achievements: [
        "Delivered 25+ client projects",
        "Improved accessibility scores by 35%",
        "Created reusable component library",
        "Won 'Best Innovation' award"
      ],
      technologies: ["React", "SCSS", "JavaScript", "Webpack", "Figma"],
      icon: <Award className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      period: "2020 - 2021",
      role: "Junior Developer",
      company: "WebSolutions Inc",
      location: "Austin, TX",
      type: "Full-time",
      description: "Started my professional journey, learning industry best practices and contributing to various web development projects.",
      achievements: [
        "Completed 10+ projects successfully",
        "Learned 5 new technologies",
        "Contributed to open source projects",
        "Received 'Rising Star' recognition"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      period: "2018 - 2020",
      role: "Computer Science Degree",
      company: "University of Technology",
      location: "California",
      type: "Education",
      description: "Comprehensive study of computer science fundamentals, algorithms, data structures, and software engineering principles.",
      achievements: [
        "Graduated Magna Cum Laude",
        "GPA: 3.8/4.0",
        "President of Coding Club",
        "Published research paper on AI"
      ],
      technologies: ["Java", "Python", "C++", "Algorithms", "Data Structures"],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const milestones = [
    { year: "2024", achievement: "Senior Developer Promotion", icon: "🚀" },
    { year: "2023", achievement: "Led Major Product Launch", icon: "🎯" },
    { year: "2022", achievement: "Full Stack Certification", icon: "🏆" },
    { year: "2021", achievement: "First Industry Award", icon: "⭐" },
    { year: "2020", achievement: "Started Professional Career", icon: "💼" },
  ];

  return (
    <section 
      id="journey" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y, rotateX }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-morphing" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-morphing" style={{ animationDelay: '2s' }} />
      </motion.div>

      {/* Floating timeline elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            <div className={`w-3 h-3 bg-primary/40 ${i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rotate-45' : 'rounded-sm'}`} />
          </motion.div>
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
            <Calendar className="w-4 h-4 animate-pulse" />
            <span>Professional Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            My <span className="gradient-text">Journey</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A timeline of growth, learning, and achievements that shaped my career 
            as a full stack developer.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary via-primary/60 to-primary/20 rounded-full"
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 2, delay: 0.5 }}
            style={{ top: '2rem', bottom: '2rem' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50, rotateY: index % 2 === 0 ? -15 : 15 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center text-white shadow-lg border-4 border-background`}>
                    {exp.icon}
                  </div>
                </motion.div>

                {/* Content card */}
                <motion.div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'
                  } ml-20 md:ml-0`}
                  whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-card/50 backdrop-blur-xl rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 creative-hover relative overflow-hidden">
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 hover:opacity-5 transition-opacity duration-500`}
                      initial={false}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <motion.span
                          className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 1 + index * 0.2 }}
                        >
                          {exp.period}
                        </motion.span>
                        <motion.span
                          className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded"
                          initial={{ opacity: 0, x: 20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 1 + index * 0.2 }}
                        >
                          {exp.type}
                        </motion.span>
                      </div>

                      <motion.h3
                        className="text-2xl font-bold text-foreground mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.1 + index * 0.2 }}
                      >
                        {exp.role}
                      </motion.h3>

                      <motion.div
                        className="flex items-center space-x-4 mb-4 text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.2 + index * 0.2 }}
                      >
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span className="text-sm font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </motion.div>

                      <motion.p
                        className="text-muted-foreground mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.3 + index * 0.2 }}
                      >
                        {exp.description}
                      </motion.p>

                      {/* Achievements */}
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.4 + index * 0.2 }}
                      >
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-center text-sm text-muted-foreground"
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 1.5 + index * 0.2 + achIndex * 0.1 }}
                            >
                              <motion.span 
                                className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"
                                whileHover={{ scale: 1.5 }}
                              />
                              <span className="hover:text-foreground transition-colors duration-300">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Technologies */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.6 + index * 0.2 }}
                      >
                        <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-3 py-1 bg-primary/10 backdrop-blur-sm rounded-full text-xs font-medium text-primary border border-primary/20 hover:border-primary/40 transition-colors duration-300"
                              whileHover={{ scale: 1.05, rotate: 2 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.7 + index * 0.2 + techIndex * 0.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Milestones Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Career <span className="gradient-text">Milestones</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 2.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-center group"
                whileHover={{ scale: 1.05, rotateY: 10 }}
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-2xl text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {milestone.icon}
                </motion.div>
                <div className="text-2xl font-bold text-primary mb-2 group-hover:text-foreground transition-colors duration-300">
                  {milestone.year}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {milestone.achievement}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;