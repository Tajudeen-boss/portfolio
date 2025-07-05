'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import LoadingScreen from '@/components/LoadingScreen';
import { initializeAnimations } from '@/lib/animations';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize animations after loading is complete
    if (!isLoading) {
      initializeAnimations();
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen 
            key="loading"
            onLoadingComplete={handleLoadingComplete} 
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {!isLoading && (
          <main className="relative" key="main">
            <Navigation />
            <Hero />
            <About />
            <Journey />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
          </main>
        )}
      </AnimatePresence>
    </>
  );
}