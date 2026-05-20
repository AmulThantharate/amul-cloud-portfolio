"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
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
          <p className="text-cyan font-mono text-sm mb-2">$ aws acm list-certificates</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass rounded-xl p-6 border border-cyan/10 hover:border-cyan/30 transition-all glow-border-hover h-full">
                <div className="flex items-start gap-4">
                  {/* Badge */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan/20 to-purple/20 border border-cyan/20 flex items-center justify-center group-hover:border-cyan/40 transition-colors">
                      <Award className="w-8 h-8 text-cyan" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-text-primary group-hover:text-cyan transition-colors mb-1">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-text-muted font-mono mb-3">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {cert.issuer}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.date}
                      </span>
                    </div>

                    {/* Badge Label */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan/5 border border-cyan/10 text-xs font-mono text-cyan">
                      <span className="w-1.5 h-1.5 rounded-full bg-success-green animate-pulse" />
                      {cert.badge}
                    </div>
                  </div>

                  {/* Link */}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2 rounded hover:bg-cyan/10 transition-colors text-text-muted hover:text-cyan"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
