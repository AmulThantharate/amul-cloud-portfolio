"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Terminal, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 overflow-hidden border-t border-cyan/10">
      <div className="absolute inset-0 bg-surface/80" />
      <div className="absolute inset-0 grid-bg opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded bg-cyan/10 border border-cyan/20 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan" />
            </div>
            <div>
              <p className="font-mono text-sm text-text-primary">
                <span className="text-cyan">amul</span>
                <span className="text-text-muted">@cloud</span>
              </p>
              <p className="text-xs text-text-muted font-mono">
                {personalInfo.role}
              </p>
            </div>
          </motion.div>

          {/* Center */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <p className="text-xs text-text-muted font-mono flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-danger-red fill-danger-red" /> and
              <span className="text-cyan">Terraform</span>
            </p>
            <p className="text-xs text-text-muted/60 font-mono mt-1">
              {new Date().getFullYear()} — All systems operational
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan/10 hover:border-cyan/30 hover:bg-cyan/5 transition-all text-xs font-mono text-text-muted hover:text-cyan"
          >
            <ArrowUp className="w-3 h-3" />
            cd ~
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
