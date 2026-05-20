"use client";

import { motion } from "framer-motion";

export default function TerminalCursor() {
  return (
    <motion.span
      className="inline-block w-[8px] h-[1.2em] bg-cyan ml-0.5 align-middle"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    />
  );
}
