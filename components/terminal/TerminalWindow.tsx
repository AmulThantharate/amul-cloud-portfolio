"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Minus, Square, X } from "lucide-react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  showControls?: boolean;
}

export default function TerminalWindow({
  title = "terminal",
  children,
  className = "",
  showControls = true,
}: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg overflow-hidden terminal-shadow bg-surface border border-cyan/10 ${className}`}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-surface-light border-b border-cyan/10">
        <div className="flex items-center gap-2">
          {showControls && (
            <>
              <div className="w-3 h-3 rounded-full bg-danger-red/80" />
              <div className="w-3 h-3 rounded-full bg-warning-orange/80" />
              <div className="w-3 h-3 rounded-full bg-success-green/80" />
            </>
          )}
        </div>
        <span className="text-xs font-mono text-text-muted">{title}</span>
        <div className="flex items-center gap-1">
          <Minus className="w-3 h-3 text-text-muted" />
          <Square className="w-3 h-3 text-text-muted" />
          <X className="w-3 h-3 text-text-muted" />
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </motion.div>
  );
}
