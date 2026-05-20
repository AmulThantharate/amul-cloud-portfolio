"use client";

import { motion } from "framer-motion";
import MetricCard from "./MetricCard";
import { dashboardMetrics } from "@/data/portfolio";

export default function DashboardGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {dashboardMetrics.map((metric, index) => (
        <MetricCard
          key={metric.label}
          label={metric.label}
          value={metric.value}
          status={metric.status}
          trend={metric.trend}
          icon={metric.icon}
          index={index}
        />
      ))}
    </div>
  );
}
