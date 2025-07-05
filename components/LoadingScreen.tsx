"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");
  const [isReadyToEnter, setIsReadyToEnter] = useState(false);

  const loadingSteps = [
    { progress: 20, text: "Loading assets..." },
    { progress: 40, text: "Preparing experience..." },
    { progress: 60, text: "Optimizing performance..." },
    { progress: 80, text: "Finalizing details..." },
    { progress: 100, text: "Welcome!" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 5 + 2; // Slower progress
        const clampedProgress = Math.min(newProgress, 100);

        const currentStep = loadingSteps.find(
          (step) => clampedProgress <= step.progress
        );
        if (currentStep) {
          setLoadingText(currentStep.text);
        }

        if (clampedProgress >= 100) {
          clearInterval(timer);
          setIsReadyToEnter(true);
        }

        return clampedProgress;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isReadyToEnter) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onLoadingComplete();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isReadyToEnter, onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
      </div>

      {/* Particles */}
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

      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo + Name */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-4 flex items-center justify-center rounded-full overflow-hidden shadow-2xl"
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotateY: { duration: 5, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Image
              src="/logo.jpeg"
              alt="My Logo"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1
            className="text-3xl font-bold gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Abdullah Tajudeen
          </motion.h1>

          <motion.p
            className="mt-2 text-lg font-semibold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            className="text-muted-foreground mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Dev.Boss
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-white/30"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>

          <motion.div
            className="flex justify-between items-center mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <span className="text-sm text-muted-foreground">{loadingText}</span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progress)}%
            </span>
          </motion.div>
        </motion.div>

        {/* Enter Button */}
        {isReadyToEnter && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg font-semibold text-primary mb-4">
              Press <span className="font-bold">Enter</span> or Click Below to
              Continue
            </p>
            <button
              onClick={onLoadingComplete}
              className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/80 transition"
            >
              Enter Site
            </button>
          </motion.div>
        )}

        {/* Loading Dots */}
      <motion.div
  className="flex justify-center space-x-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: isReadyToEnter ? 0 : 1 }}
  transition={{ duration: 0.8 }}
>
  {[0, 1, 2].map((i) => (
    <motion.div
      key={i}
      className="w-2 h-2 bg-primary rounded-full"
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.2,
      }}
    />
  ))}
</motion.div>


        {/* Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <Sparkles className="w-4 h-4 text-primary/60" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Radial Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
