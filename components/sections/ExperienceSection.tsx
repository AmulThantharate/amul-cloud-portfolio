"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
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
          <p className="text-cyan font-mono text-sm mb-2">$ kubectl get jobs --sort-by=.metadata.creationTimestamp</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Experience <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/50 via-purple/30 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative mb-12",
                index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%]"
              )}
            >
              {/* Timeline Dot */}
              <div
                className={cn(
                  "absolute top-6 w-4 h-4 rounded-full bg-cyan border-2 border-background z-10",
                  index % 2 === 0
                    ? "left-4 md:left-1/2 md:-translate-x-1/2"
                    : "left-4 md:left-1/2 md:-translate-x-1/2"
                )}
              >
                <div className="absolute inset-0 rounded-full bg-cyan animate-ping opacity-30" />
              </div>

              {/* Card */}
              <div
                className={cn(
                  "ml-12 md:ml-0",
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                )}
              >
                <div className="glass rounded-xl p-6 border border-cyan/10 hover:border-cyan/30 transition-all glow-border-hover">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-cyan" />
                        {exp.role}
                      </h3>
                      <p className="text-cyan font-mono text-sm mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-text-muted font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <ChevronRight className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono rounded bg-cyan/5 text-cyan/80 border border-cyan/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
