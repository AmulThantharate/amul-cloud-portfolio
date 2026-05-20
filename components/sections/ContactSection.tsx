"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  MapPin,
} from "lucide-react";
import TerminalWindow from "@/components/terminal/TerminalWindow";
import LiveLogs from "@/components/terminal/LiveLogs";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-cyan",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/AmulThantharate",
      href: personalInfo.github,
      color: "text-text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/amul-thantharate",
      href: personalInfo.linkedin,
      color: "text-blue-400",
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-surface/50" />
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
          <p className="text-cyan font-mono text-sm mb-2">$ ssh amul@cloud</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Let&apos;s build infrastructure that <span className="gradient-text">scales</span>.
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Whether you&apos;re looking to optimize your cloud infrastructure, implement GitOps workflows,
            or build automated deployment pipelines — I&apos;m ready to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div className="glass rounded-xl p-5 border border-cyan/10 hover:border-cyan/30 transition-all glow-border-hover">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-cyan/5 border border-cyan/10 flex items-center justify-center group-hover:border-cyan/30 transition-colors">
                          <Icon className={cn("w-5 h-5", item.color)} />
                        </div>
                        <div>
                          <p className="text-xs font-mono text-text-muted mb-0.5">
                            {item.label}
                          </p>
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm text-text-primary hover:text-cyan transition-colors"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => copyToClipboard(item.value, item.label)}
                        className="p-2 rounded hover:bg-cyan/10 transition-colors text-text-muted hover:text-cyan"
                        title="Copy to clipboard"
                      >
                        {copiedField === item.label ? (
                          <Check className="w-4 h-4 text-success-green" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="glass rounded-xl p-5 border border-cyan/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple/5 border border-purple/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple" />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-muted mb-0.5">Location</p>
                  <p className="text-sm text-text-primary">{personalInfo.location}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Terminal Contact Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TerminalWindow title="system-logs" className="h-full">
              <div className="space-y-4">
                <div className="text-cyan font-mono text-sm">
                  <span className="text-text-muted">$</span> kubectl logs -f contact-service --tail=20
                </div>
                <LiveLogs />
                <div className="pt-4 border-t border-cyan/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                    <span className="text-cyan">amul@cloud:~$</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
