"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Cloud, Wrench, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "cloud", label: "Cloud", icon: Cloud },
  { id: "devops", label: "DevOps", icon: Wrench },
  { id: "programming", label: "Programming", icon: Code2 },
];

function SkillBar({ name, proficiency, index }: { name: string; proficiency: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-mono text-text-secondary group-hover:text-cyan transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-text-muted">{proficiency}%</span>
      </div>
      <div className="h-1.5 bg-surface-light rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-cyan to-purple"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("cloud");

  const activeSkills = skills[activeCategory as keyof typeof skills] || [];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
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
          <p className="text-cyan font-mono text-sm mb-2">$ kubectl get skills --all-namespaces</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono transition-all",
                  activeCategory === cat.id
                    ? "bg-cyan/10 text-cyan border border-cyan/30"
                    : "text-text-muted hover:text-text-secondary border border-transparent hover:border-cyan/10"
                )}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-4xl mx-auto"
          >
            {activeSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                proficiency={skill.proficiency}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skill Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="glass rounded-xl p-8 border border-cyan/10">
            <p className="text-cyan font-mono text-sm mb-6 text-center">
              $ echo $SKILL_STACK
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.values(skills)
                .flat()
                .map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-mono border transition-all cursor-default",
                      skill.proficiency >= 85
                        ? "bg-cyan/10 text-cyan border-cyan/20 hover:border-cyan/40"
                        : skill.proficiency >= 75
                        ? "bg-purple/10 text-purple border-purple/20 hover:border-purple/40"
                        : "bg-surface-light text-text-muted border-text-muted/10 hover:border-text-muted/30"
                    )}
                  >
                    {skill.name}
                  </motion.span>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
