"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import {
  Server,
  Wrench,
  Activity,
  Shield,
  ExternalLink,
  Github,
  Terminal,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categoryIcons = {
  infrastructure: Server,
  automation: Wrench,
  monitoring: Activity,
  security: Shield,
};

const categoryColors = {
  infrastructure: "text-cyan border-cyan/20 bg-cyan/5",
  automation: "text-purple border-purple/20 bg-purple/5",
  monitoring: "text-success-green border-success-green/20 bg-success-green/5",
  security: "text-warning-orange border-warning-orange/20 bg-warning-orange/5",
};

const categoryLabels = {
  infrastructure: "Infrastructure",
  automation: "Automation",
  monitoring: "Monitoring",
  security: "Security",
};

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-surface/30" />
      <div className="absolute inset-0 grid-bg opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan font-mono text-sm mb-2">$ kubectl get deployments --show-labels</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            const Icon = categoryIcons[project.category];
            const isHovered = hoveredProject === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div
                  className={cn(
                    "relative h-full rounded-xl border p-6 transition-all duration-300 overflow-hidden",
                    "bg-surface/50 backdrop-blur-sm",
                    "hover:border-cyan/30 glow-border-hover"
                  )}
                >
                  {/* Glow background on hover */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br from-cyan/5 to-purple/5 transition-opacity duration-300",
                      isHovered ? "opacity-100" : "opacity-0"
                    )}
                  />

                  <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                    <div>
                      {/* Category Badge & Links */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={cn(
                            "flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono border",
                            categoryColors[project.category]
                          )}
                        >
                          <Icon className="w-3 h-3" />
                          {categoryLabels[project.category]}
                        </span>
                        <div className="flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded hover:bg-cyan/10 transition-colors text-text-muted hover:text-cyan"
                              aria-label={`${project.title} GitHub Repository`}
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded hover:bg-cyan/10 transition-colors text-text-muted hover:text-cyan"
                              aria-label={`${project.title} Live Demo`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-cyan transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Terminal-style metrics */}
                      <div className="mb-4 p-3 rounded bg-surface-light border border-cyan/10">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted mb-1">
                          <Terminal className="w-3 h-3" />
                          <span>metrics</span>
                        </div>
                        <p className="text-xs font-mono text-cyan">{project.metrics}</p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs font-mono rounded bg-surface-light text-text-muted border border-cyan/5 hover:border-cyan/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
