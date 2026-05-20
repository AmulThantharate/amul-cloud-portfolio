"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-danger-red/10 border border-danger-red/20 flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-danger-red" />
          </div>

          <h1 className="text-3xl font-mono font-bold text-danger-red mb-2">
            System Error
          </h1>
          <p className="text-text-muted mb-8">
            An unexpected error occurred in the infrastructure. Our monitoring
            systems have been alerted.
          </p>

          <div className="glass rounded-lg p-4 mb-8 text-left font-mono text-sm">
            <p className="text-danger-red mb-2">
              Error: {error.message || "Unknown error"}
            </p>
            {error.digest && (
              <p className="text-text-muted">
                Digest: {error.digest}
              </p>
            )}
            <p className="text-text-muted mt-2">
              $ <span className="animate-pulse">_</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan/10 border border-cyan/30 rounded-lg font-mono text-sm text-cyan hover:bg-cyan/20 transition-all glow-border-hover"
            >
              <RefreshCw className="w-4 h-4" />
              terraform apply -auto-approve
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-text-muted/20 rounded-lg font-mono text-sm text-text-secondary hover:border-cyan/30 hover:text-cyan transition-all"
            >
              <Home className="w-4 h-4" />
              cd ~
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
