"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TerminalCursor from "./TerminalCursor";

interface TerminalPromptProps {
  command: string;
  output?: string;
  isSuccess?: boolean;
  delay?: number;
  showPrompt?: boolean;
  onComplete?: () => void;
}

export default function TerminalPrompt({
  command,
  output,
  isSuccess = true,
  delay = 0,
  showPrompt = true,
  onComplete,
}: TerminalPromptProps) {
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < command.length) {
          setDisplayedCommand(command.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setShowCursor(false);
          setTimeout(() => {
            setShowOutput(true);
            onComplete?.();
          }, 300);
        }
      }, 40);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [command, delay, onComplete]);

  return (
    <div className="font-mono text-sm">
      {showPrompt && (
        <div className="flex items-start gap-1">
          <span className="text-cyan shrink-0">amul@cloud:~$</span>
          <span className="text-text-primary">
            {displayedCommand}
            {showCursor && <TerminalCursor />}
          </span>
        </div>
      )}

      {showOutput && output && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-1"
        >
          {isSuccess ? (
            <span className="text-success-green">✔ {output}</span>
          ) : (
            <span className="text-danger-red">✗ {output}</span>
          )}
        </motion.div>
      )}
    </div>
  );
}
