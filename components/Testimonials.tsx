'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Users, Award, Heart } from 'lucide-react';

const Testimonials = () => {
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

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Alex delivered an exceptional e-commerce platform that exceeded all our expectations. The 3D product visualization feature increased our conversion rate by 40%. His attention to detail and innovative approach made all the difference.",
      rating: 5,
      project: "3D E-Commerce Platform",
      featured: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "DataFlow Solutions",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Working with Alex was a game-changer for our analytics platform. His expertise in real-time data visualization and machine learning integration helped us create a product that our clients absolutely love.",
      rating: 5,
      project: "Analytics Dashboard",
      featured: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "Creative Studios",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Alex's collaborative design tool revolutionized how our team works together. The real-time features and intuitive interface have improved our productivity by 60%. Highly recommended!",
      rating: 5,
      project: "Design Collaboration Tool",
      featured: false
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder",
      company: "SmartHome Pro",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The IoT dashboard Alex built for us is simply outstanding. It's user-friendly, powerful, and has helped our customers save 30% on energy costs. Professional and reliable work.",
      rating: 5,
      project: "IoT Dashboard",
      featured: false
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Director",
      company: "Digital Innovations",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Alex's attention to detail and creative problem-solving skills are unmatched. He delivered our project on time and within budget, with features we didn't even know we needed.",
      rating: 5,
      project: "Marketing Platform",
      featured: false
    },
    {
      id: 6,
      name: "James Wilson",
      role: "VP Engineering",
      company: "FinTech Solutions",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The blockchain platform Alex developed for us is secure, scalable, and user-friendly. His deep understanding of DeFi protocols and smart contracts is impressive.",
      rating: 5,
      project: "DeFi Platform",
      featured: false
    }
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const allTestimonials = testimonials;

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % allTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y, rotateX }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-morphing" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-morphing" style={{ animationDelay: '3s' }} />
      </motion.div>

      {/* Floating quote elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${25 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -25, 0],
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
            <Quote className="w-4 h-4 text-primary/30" />
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
            <Quote className="w-4 h-4 animate-pulse" />
            <span>Client Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            What Clients <span className="gradient-text">Say</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Don't just take my word for it. Here's what clients and collaborators 
            have to say about working with me.
          </motion.p>
        </motion.div>

        {/* Featured Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, rotateY: index % 2 === 0 ? -15 : 15 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 1 + index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="group bg-card/50 backdrop-blur-xl rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 creative-hover relative overflow-hidden"
              whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5 }}
            >
              {/* Gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              {/* Featured badge */}
              <motion.div
                className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.2 }}
              >
                <Star className="w-3 h-3" />
                <span>Featured</span>
              </motion.div>

              <div className="relative z-10">
                {/* Quote icon */}
                <motion.div
                  className="text-primary/30 mb-6"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="w-12 h-12" />
                </motion.div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4 + index * 0.2 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <motion.p
                  className="text-muted-foreground mb-6 leading-relaxed text-lg italic group-hover:text-foreground transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.6 + index * 0.2 }}
                >
                  "{testimonial.content}"
                </motion.p>

                {/* Project tag */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.8 + index * 0.2 }}
                >
                  <span className="px-3 py-1 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20">
                    {testimonial.project}
                  </span>
                </motion.div>

                {/* Author */}
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 2 + index * 0.2 }}
                >
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="relative"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            More Client <span className="gradient-text">Feedback</span>
          </h3>

          <div className="relative bg-card/50 backdrop-blur-xl rounded-2xl p-8 border border-border max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote */}
              <Quote className="w-16 h-16 text-primary/30 mx-auto mb-6" />
              
              {/* Rating */}
              <div className="flex justify-center items-center space-x-1 mb-6">
                {Array.from({ length: allTestimonials[currentTestimonial].rating }, (_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed italic max-w-3xl mx-auto">
                "{allTestimonials[currentTestimonial].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <img
                  src={allTestimonials[currentTestimonial].image}
                  alt={allTestimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-foreground text-lg">
                    {allTestimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {allTestimonials[currentTestimonial].role} at {allTestimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Project tag */}
              <span className="px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20">
                {allTestimonials[currentTestimonial].project}
              </span>
            </motion.div>

            {/* Navigation buttons */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-primary/10 backdrop-blur-sm rounded-full text-primary hover:bg-primary/20 transition-all duration-300 border border-primary/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-primary/10 backdrop-blur-sm rounded-full text-primary hover:bg-primary/20 transition-all duration-300 border border-primary/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {allTestimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary scale-125' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;