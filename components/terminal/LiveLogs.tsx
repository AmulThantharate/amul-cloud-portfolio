"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { terminalLogs } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function LiveLogs() {
  const [visibleLogs, setVisibleLogs] = useState(terminalLogs.slice(0, 5));
  const [currentIndex, setCurrentIndex] = useState(5);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= terminalLogs.length) {
          setVisibleLogs(terminalLogs.slice(0, 5));
          return 5;
        }
        setVisibleLogs((current) => {
          const updated = [...current, terminalLogs[next]];
          if (updated.length > 8) {
            return updated.slice(-8);
          }
          return updated;
        });
        return next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLogs]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "success":
        return "text-success-green";
      case "warning":
        return "text-warning-orange";
      case "error":
        return "text-danger-red";
      default:
        return "text-cyan";
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "success":
        return "✓";
      case "warning":
        return "⚠";
      case "error":
        return "✗";
      default:
        return "ℹ";
    }
  };

  return (
    <div
      ref={scrollRef}
      className="h-[200px] overflow-y-auto scrollbar-thin"
    >
      <AnimatePresence mode="popLayout">
        {visibleLogs.map((log) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-2 py-1 text-xs font-mono"
          >
            <span className="text-text-muted shrink-0 w-[60px]">
              {log.timestamp}
            </span>
            <span className={cn("shrink-0 w-4", getLevelColor(log.level))}>
              {getLevelIcon(log.level)}
            </span>
            <span className="text-cyan/60 shrink-0 w-[100px]">
              [{log.prefix}]
            </span>
            <span className="text-text-secondary">{log.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
