"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Zap, Layout, Download } from "lucide-react";
import dynamic from "next/dynamic";
import TerminalPrompt from "@/components/terminal/TerminalPrompt";
import TerminalCursor from "@/components/terminal/TerminalCursor";
import { useHeroMode } from "@/hooks/useHeroMode";
import { heroCommands } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import Image from "next/image";

const InfrastructureNetwork = dynamic(
  () => import("@/components/three/InfrastructureNetwork"),
  { ssr: false, loading: () => <div className="absolute inset-0 bg-background" /> }
);

const MinimalBackground = dynamic(
  () => import("@/components/three/MinimalBackground"),
  { ssr: false }
);

const typewriterTexts = [
  "Cloud & DevOps Engineer",
  "AWS Solutions Architect",
  "Infrastructure Automation Expert",
  "Kubernetes & GitOps Specialist",
];

export default function HeroSection() {
  const [mode, setMode] = useHeroMode();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const typeText = useCallback(() => {
    const text = typewriterTexts[currentTextIndex];
    let index = 0;
    setDisplayedText("");
    setIsTyping(true);
    setShowCursor(true);

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTimeout(() => {
          setShowCursor(false);
          setTimeout(() => {
            setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
          }, 1000);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentTextIndex]);

  useEffect(() => {
    const cleanup = typeText();
    return cleanup;
  }, [typeText]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <AnimatePresence mode="wait">
        {mode === "aggressive" ? (
          <motion.div
            key="aggressive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <InfrastructureNetwork />
            {/* Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[length:100%_2px]" />
            </div>
            {/* Grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-20" />
          </motion.div>
        ) : (
          <motion.div
            key="minimal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <MinimalBackground />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Mode Toggle */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <button
                onClick={() => setMode("aggressive")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-all",
                  mode === "aggressive"
                    ? "bg-cyan/10 text-cyan border border-cyan/30"
                    : "text-text-muted hover:text-text-secondary"
                )}
              >
                <Zap className="w-3 h-3" />
                Aggressive
              </button>
              <button
                onClick={() => setMode("minimal")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-all",
                  mode === "minimal"
                    ? "bg-purple/10 text-purple border border-purple/30"
                    : "text-text-muted hover:text-text-secondary"
                )}
              >
                <Layout className="w-3 h-3" />
                Minimal
              </button>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="text-xl sm:text-2xl font-mono text-text-primary/95 font-semibold">
                Hi, I&apos;m
              </h2>
              <h1 className="text-[42px] sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight leading-[1.1] sm:leading-[1.05] uppercase">
                <span className="text-text-primary">AMUL</span>
                <br />
                <span className="bg-gradient-to-r from-cyan via-blue-400 to-indigo-500 bg-clip-text text-transparent text-glow">
                  THANTHARATE
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Cursor Block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="h-8 flex items-center"
            >
              <span className="w-3.5 h-6 bg-cyan shadow-[0_0_10px_#00d4ff] animate-pulse inline-block" />
            </motion.div>

            {/* Terminal Console Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-lg rounded-xl border border-cyan/15 bg-[#080d1a]/70 backdrop-blur-md p-4 sm:p-5 font-mono text-xs sm:text-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="text-text-muted/80 mb-3 flex items-center gap-2">
                <span className="text-cyan/60">&gt;_</span>
                <span>Infrastructure Console</span>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 leading-relaxed">
                  <span className="text-[#00ffcc] font-semibold">✔</span>
                  <span className="text-cyan font-medium">amul@cloud</span>
                  <span className="text-text-muted">:~$</span>
                  <span className="text-text-primary break-all sm:break-normal">docker build -t platform:v2 .</span>
                  <span className="w-2 h-4 bg-cyan animate-pulse inline-block" />
                </div>
                <div className="text-[#00ffcc] pl-5 leading-relaxed">
                  Build successful
                </div>
              </div>
            </motion.div>

            {/* CTA Button: Curl Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="/Amul_Thantharate_Resume.docx"
                download
                className="inline-flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg border border-text-muted/10 bg-white/5 backdrop-blur-md font-mono text-xs sm:text-sm text-cyan hover:border-cyan/40 hover:bg-cyan/5 transition-all shadow-[0_0_15px_rgba(0,0,0,0.2)] group"
              >
                <Download className="w-4 h-4 text-cyan group-hover:scale-110 transition-transform" />
                <span className="break-all sm:break-normal">
                  <span className="text-text-muted font-medium">~/resume $</span> curl -O resume.docx
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right: Circular Portrait with Gradient Glow Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center mt-12 lg:mt-0"
          >
            <div className="relative group w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px]">
              {/* Dynamic Outer Backdrop Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan via-blue-500 to-purple-600 blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 animate-pulse" />
              
              {/* Gradient Border Ring */}
              <div className="relative w-full h-full rounded-full p-[4px] bg-gradient-to-tr from-cyan via-blue-500 to-purple-600 shadow-[0_0_40px_rgba(0,212,255,0.3)]">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#050816]">
                  <Image
                    src="/images/amul_professional.png"
                    alt="Amul Thantharate"
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 420px"
                    className="object-cover object-top scale-105 transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("#metrics")}
            className="flex flex-col items-center gap-2 text-text-muted hover:text-cyan transition-colors"
          >
            <span className="text-xs font-mono">scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
