"use client";

import { motion } from "framer-motion";
import TerminalWindow from "@/components/terminal/TerminalWindow";
import { personalInfo, education } from "@/data/portfolio";
import { MapPin, Mail, Github, Linkedin, Calendar, GraduationCap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
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
          <p className="text-cyan font-mono text-sm mb-2">$ cat about.md</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Terminal Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TerminalWindow title="bio.sh" className="h-full">
              <div className="space-y-4">
                <div className="text-cyan font-mono text-sm">
                  <span className="text-text-muted">$</span> cat /etc/passwd | grep amul
                </div>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex gap-2">
                    <span className="text-cyan w-20 shrink-0">name:</span>
                    <span className="text-text-primary">{personalInfo.name}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-cyan w-20 shrink-0">role:</span>
                    <span className="text-text-primary">{personalInfo.role}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-cyan w-20 shrink-0">exp:</span>
                    <span className="text-text-primary">{personalInfo.experience}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-cyan w-20 shrink-0">location:</span>
                    <span className="text-text-primary">{personalInfo.location}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-cyan w-20 shrink-0">status:</span>
                    <span className="text-success-green">● Available for opportunities</span>
                  </div>
                </div>

                <div className="text-cyan font-mono text-sm pt-2">
                  <span className="text-text-muted">$</span> cat philosophy.txt
                </div>
                <div className="text-text-secondary text-sm leading-relaxed pl-4 border-l-2 border-cyan/20">
                  Building infrastructure that scales is not just about technology —
                  it&apos;s about reliability, automation, and operational excellence.
                  I believe in infrastructure as code, GitOps workflows, and
                  observability-first design. Every system I build is designed to
                  withstand production load, recover gracefully from failures, and
                  evolve with the business.
                </div>

                <div className="text-cyan font-mono text-sm pt-2">
                  <span className="text-text-muted">$</span> cat skills_summary.txt
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-success-green">✓</span>
                    <span className="text-text-secondary">Infrastructure as Code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-success-green">✓</span>
                    <span className="text-text-secondary">GitOps & CI/CD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-success-green">✓</span>
                    <span className="text-text-secondary">Cloud Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-success-green">✓</span>
                    <span className="text-text-secondary">Container Orchestration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-success-green">✓</span>
                    <span className="text-text-secondary">Observability & SRE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-success-green">✓</span>
                    <span className="text-text-secondary">Security & Compliance</span>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="glass rounded-xl p-6 border border-cyan/10 hover:border-cyan/30 transition-all glow-border-hover">
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan" />
                Location
              </h3>
              <p className="text-text-secondary text-sm">
                Based in {personalInfo.location}, working with teams across the globe.
                Comfortable with remote collaboration and async communication.
              </p>
            </div>

            <div className="glass rounded-xl p-6 border border-cyan/10 hover:border-cyan/30 transition-all glow-border-hover">
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple" />
                Experience
              </h3>
              <p className="text-text-secondary text-sm">
                {personalInfo.experience} of hands-on experience designing, operating,
                and securing production cloud infrastructure. Expert in designing EKS, ArgoCD GitOps,
                and scalable multi-environment Terraform configurations.
              </p>
            </div>

            <div className="glass rounded-xl p-6 border border-cyan/10 hover:border-cyan/30 transition-all glow-border-hover">
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan" />
                Education
              </h3>
              <div className="space-y-2">
                <p className="text-text-primary font-bold text-sm">
                  {education[0].degree}
                </p>
                <p className="text-cyan font-mono text-xs">
                  {education[0].institution}
                </p>
                <div className="flex justify-between items-center text-xs text-text-muted font-mono mt-1">
                  <span>{education[0].period}</span>
                  <span>{education[0].location}</span>
                </div>
                <p className="text-text-secondary text-xs mt-2 leading-relaxed">
                  {education[0].details}
                </p>
              </div>
            </div>

            <div className="glass rounded-xl p-6 border border-cyan/10 hover:border-cyan/30 transition-all glow-border-hover">
              <h3 className="text-lg font-bold text-text-primary mb-4">Connect</h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-cyan transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:text-cyan" />
                  {personalInfo.email}
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-cyan transition-colors group"
                >
                  <Github className="w-4 h-4 group-hover:text-cyan" />
                  github.com/AmulThantharate
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-cyan transition-colors group"
                >
                  <Linkedin className="w-4 h-4 group-hover:text-cyan" />
                  linkedin.com/in/amul-thantharate
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
