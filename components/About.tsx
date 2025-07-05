'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Rocket, Users, Sparkles, Zap } from 'lucide-react';
import { useRef } from 'react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Crafting beautiful, intuitive interfaces that provide exceptional user experiences.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless user interactions.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to deliver outstanding results.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y, rotateX }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      </motion.div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            <div className={`w-4 h-4 bg-primary/30 ${i % 2 === 0 ? 'rounded-full' : 'rotate-45'}`} />
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
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I started my coding journey during the COVID-19 lockdown—when the world slowed down, I sped up.
            With just curiosity, determination, and free online resources, I taught myself how to code. No fancy degrees. No formal classes. Just pure grit and late-night learning.

            What began as a hobby quickly turned into a freelance career. I started working with real clients—solving problems, building websites, and creating apps that people actually use.

            Despite my age, I’ve been trusted by clients and teams because I deliver results, meet deadlines, and never stop learning.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              className="bg-card/50 backdrop-blur-xl rounded-2xl p-8 border border-border creative-hover"
              whileHover={{ scale: 1.02, rotateY: 5 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-primary">My Philosophy</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I believe that great software is born from the intersection of robust engineering
                and thoughtful design. Every line of code I write is driven by a commitment to
                creating solutions that not only work flawlessly but also delight users and
                drive business success.
              </p>
            </motion.div>

            <motion.div
              className="bg-card/50 backdrop-blur-xl rounded-2xl p-8 border border-border creative-hover"
              whileHover={{ scale: 1.02, rotateY: -5 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-primary">What I Do</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  'Full Stack Web Development',
                  'API Integrations & Automation',
                  'Mobile App Development',
                  'Cloud Architecture & DevOps',
                  'Backend Systems & Databases'
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="group-hover:text-foreground transition-colors duration-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20, rotateY: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group bg-card/50 backdrop-blur-xl rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-500 creative-hover relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  z: 10
                }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                />

                <motion.div
                  className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>

                <h4 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 relative z-10">
                  {feature.title}
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300 relative z-10">
                  {feature.description}
                </p>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-2xl transition-colors duration-500"
                  initial={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "5+", label: "Years Experience", icon: "🚀" },
            { number: "50+", label: "Projects Completed", icon: "💼" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" },
            { number: "24/7", label: "Support Available", icon: "🛟" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 1.2 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl mb-2 group-hover:animate-bounce"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:text-foreground transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;