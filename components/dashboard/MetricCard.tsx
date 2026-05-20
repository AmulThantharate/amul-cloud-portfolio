"use client";

import { motion } from "framer-motion";
import {
  Server,
  Box,
  CheckCircle,
  FileCode,
  Globe,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Server,
  Box,
  CheckCircle,
  FileCode,
  Globe,
  Cpu,
};

interface MetricCardProps {
  label: string;
  value: string;
  status: "healthy" | "warning" | "critical";
  trend?: string;
  icon: string;
  index: number;
}

export default function MetricCard({
  label,
  value,
  status,
  trend,
  icon,
  index,
}: MetricCardProps) {
  const Icon = iconMap[icon] || Server;

  const statusColors = {
    healthy: "text-success-green border-success-green/20 bg-success-green/5",
    warning: "text-warning-orange border-warning-orange/20 bg-warning-orange/5",
    critical: "text-danger-red border-danger-red/20 bg-danger-red/5",
  };

  const statusDot = {
    healthy: "bg-success-green",
    warning: "bg-warning-orange",
    critical: "bg-danger-red",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        "relative rounded-lg border p-4 transition-all duration-300 glow-border-hover",
        "bg-surface/50 backdrop-blur-sm",
        statusColors[status]
      )}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan/5 to-purple/5 opacity-0 hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Icon className="w-4 h-4 opacity-70" />
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
              {label}
            </span>
          </div>
          <div className={cn("w-2 h-2 rounded-full animate-pulse", statusDot[status])} />
        </div>

        <div className="text-2xl font-mono font-bold text-text-primary mb-1">
          {value}
        </div>

        {trend && (
          <div className="text-xs font-mono text-text-muted">
            {trend}
          </div>
        )}
      </div>
    </motion.div>
  );
}
