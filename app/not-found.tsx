"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
            <Terminal className="w-10 h-10 text-cyan" />
          </div>

          <h1 className="text-6xl font-mono font-bold text-cyan mb-2">404</h1>
          <p className="text-xl text-text-primary font-mono mb-2">
            Resource Not Found
          </p>
          <p className="text-text-muted mb-8">
            The requested resource could not be located in this namespace.
          </p>

          <div className="glass rounded-lg p-4 mb-8 text-left font-mono text-sm">
            <p className="text-danger-red mb-2">Error: ENOENT</p>
            <p className="text-text-muted">
              $ kubectl get pods -n production
            </p>
            <p className="text-danger-red">
              Error from server (NotFound): namespaces &quot;production&quot; not found
            </p>
            <p className="text-text-muted mt-2">
              $ <span className="animate-pulse">_</span>
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan/10 border border-cyan/30 rounded-lg font-mono text-sm text-cyan hover:bg-cyan/20 transition-all glow-border-hover"
          >
            <ArrowLeft className="w-4 h-4" />
            cd ~
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
