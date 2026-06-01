export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  metrics: string;
  github?: string;
  demo?: string;
  category: "infrastructure" | "automation" | "monitoring" | "security";
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
  proficiency: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  badge: string;
  status: "earned" | "in-progress";
  url?: string;
}

export interface DashboardMetric {
  label: string;
  value: string;
  status: "healthy" | "warning" | "critical";
  trend?: string;
  icon: string;
}

export interface TerminalLog {
  id: number;
  timestamp: string;
  level: "info" | "success" | "warning" | "error";
  message: string;
  prefix?: string;
}
