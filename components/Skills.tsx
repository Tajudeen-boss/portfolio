'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiPython, SiPostgresql, SiRedis, SiGraphql,
  SiDocker,  SiKubernetes, SiGit, SiAppwrite,
  SiJavascript, SiHtml5, SiCss3, SiMongodb, SiFigma,
  SiVuedotjs, SiAngular, SiExpress, SiNestjs, SiMysql,
  SiFirebase, SiVercel, SiNetlify, SiLinux,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const Skills = () => {
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
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});

  // Real skill icons mapping
  const skillIcons = {
    'React/Next.js': <SiReact className="w-8 h-8" />,
    'TypeScript': <SiTypescript className="w-8 h-8" />,
    'Javascript': <SiJavascript className="w-8 h-8" />,
    'Tailwind CSS': <SiTailwindcss className="w-8 h-8" />,
    'Framer Motion': <SiFramer className="w-8 h-8" />,
    'Node.js': <SiNodedotjs className="w-8 h-8" />,
    'Express.js': <SiPython className="w-8 h-8" />,
    'PostgreSQL': <SiPostgresql className="w-8 h-8" />,
    'Nest.js': <SiNestjs className="w-8 h-8" />,
    'GraphQL': <SiGraphql className="w-8 h-8" />,
    'Docker': <SiDocker className="w-8 h-8" />,
    'AWS/GCP': <FaAws className="w-8 h-8" />,
    'CI/CD': <SiGit className="w-8 h-8" />,
    'Kubernetes': <SiKubernetes className="w-8 h-8" />,
    'Git': <SiGit className="w-8 h-8" />,
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <SiReact className="w-8 h-8" />,
      skills: [
        { name: "React/Next.js", level: 95, icon: <SiReact className="w-6 h-6" /> },
        { name: "TypeScript", level: 90, icon: <SiTypescript className="w-6 h-6" /> },
        { name: "Javascript", level: 85, icon: <SiJavascript className="w-6 h-6" /> },
        { name: "Tailwind CSS", level: 92, icon: <SiTailwindcss className="w-6 h-6" /> },
        { name: "Framer Motion", level: 88, icon: <SiFramer className="w-6 h-6" /> },
      ]
    },
    {
      title: "Backend",
      icon: <SiNodedotjs className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 90, icon: <SiNodedotjs className="w-6 h-6" /> },
        { name: "Expres.js", level: 85, icon: <SiExpress className="w-6 h-6" /> },
        { name: "PostgreSQL", level: 88, icon: <SiPostgresql className="w-6 h-6" /> },
        { name: "Nest.js", level: 80, icon: <SiNestjs className="w-6 h-6" /> },
        { name: "GraphQL", level: 85, icon: <SiGraphql className="w-6 h-6" /> },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <SiDocker className="w-8 h-8" />,
      skills: [
        { name: "Docker", level: 85, icon: <SiDocker className="w-6 h-6" /> },
        { name: "AWS/GCP", level: 82, icon: <FaAws className="w-6 h-6" /> },
        { name: "CI/CD", level: 88, icon: <SiGit className="w-6 h-6" /> },
        { name: "Kubernetes", level: 75, icon: <SiKubernetes className="w-6 h-6" /> },
        { name: "Git", level: 95, icon: <SiGit className="w-6 h-6" /> },
      ]
    }
  ];

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const newAnimatedSkills: { [key: string]: number } = {};
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            newAnimatedSkills[skill.name] = skill.level;
          });
        });
        setAnimatedSkills(newAnimatedSkills);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-morphing" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-morphing" style={{ animationDelay: '2s' }} />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          style={{ opacity }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 text-sm font-medium text-primary mb-6"
          >
            <SiReact className="w-4 h-4 animate-spin-slow" />
            <span>Technical Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            exceptional digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="group bg-card/50 backdrop-blur-xl rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 creative-hover relative overflow-hidden"
              whileHover={{ scale: 1.02, rotateY: 5 }}
            >
              {/* Card background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              <motion.div
                className="text-center mb-8 relative z-10"
                initial={{ scale: 0.8 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 }}
              >
                <motion.div 
                  className="text-primary mb-4 flex justify-center animate-float" 
                  style={{ animationDelay: `${categoryIndex * 0.5}s` }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-2xl font-bold gradient-text">
                  {category.title}
                </h3>
              </motion.div>
              
              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 
                    }}
                    className="space-y-3 group/skill"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <motion.span 
                          className="text-primary skill-logo"
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                        >
                          {skill.icon}
                        </motion.span>
                        <span className="text-foreground font-medium group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <motion.span 
                        className="text-primary font-bold"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ 
                            width: inView ? `${animatedSkills[skill.name] || 0}%` : 0 
                          }}
                          transition={{ 
                            duration: 1.5, 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.8,
                            type: "spring",
                            stiffness: 50
                          }}
                          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "linear",
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 1.5
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'HTML', icon: <SiHtml5 className="w-5 h-5" /> },
              { name: 'CSS', icon: <SiHtml5 className="w-5 h-5" /> },
              { name: 'React', icon: <SiReact className="w-5 h-5" /> },
              { name: 'Next.js', icon: <SiNextdotjs className="w-5 h-5" /> },
              { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5" /> },
              { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5" /> },
              { name: 'Python', icon: <SiPython className="w-5 h-5" /> },
              { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5" /> },
              { name: 'MongoDB', icon: <SiMongodb className="w-5 h-5" /> },
              { name: 'MySQL', icon: <SiMysql className="w-5 h-5" /> },
              { name: 'Appwrite', icon: <SiAppwrite className="w-5 h-5" /> },
              { name: 'Docker', icon: <SiDocker className="w-5 h-5" /> },
              { name: 'AWS', icon: <FaAws className="w-5 h-5" /> },
              { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5" /> },
              { name: 'Framer Motion', icon: <SiFramer className="w-5 h-5" /> },
              { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5" /> },
              { name: 'GraphQL', icon: <SiGraphql className="w-5 h-5" /> },
              { name: 'Firebase', icon: <SiFirebase className="w-5 h-5" /> },
              { name: 'Vercel', icon: <SiVercel className="w-5 h-5" /> }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + (index * 0.05),
                  type: "spring",
                  stiffness: 100
                }}
                className="group flex items-center space-x-2 px-4 py-3 bg-card/50 backdrop-blur-sm rounded-full text-sm font-medium text-foreground border border-border hover:border-primary/50 transition-all duration-300 creative-hover"
                whileHover={{ scale: 1.05, rotateY: 10 }}
              >
                <motion.span 
                  className="text-primary group-hover:animate-bounce"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {tech.icon}
                </motion.span>
                <span className="group-hover:text-primary transition-colors duration-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;