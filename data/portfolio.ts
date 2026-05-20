export const personalInfo = {
  name: "Amul Thantharate",
  role: "Cloud & DevOps Engineer",
  experience: "2+ years",
  location: "Pune, Maharashtra",
  email: "amulthantharate@gmail.com",
  github: "https://github.com/AmulThantharate",
  linkedin: "https://linkedin.com/in/amul-thantharate",
  tagline: "Architecting resilient, cost-efficient, and secure cloud platforms at scale.",
};

export const heroCommands = [
  "terraform apply production-scale-infrastructure",
  "kubectl get pods --all-namespaces",
  "docker build -t platform:v2 .",
  "helm upgrade --install production ./chart",
  "argocd app sync production",
  "aws eks update-kubeconfig --region ap-south-1",
];

export const dashboardMetrics = [
  {
    label: "EKS Cluster",
    value: "Healthy",
    status: "healthy" as const,
    trend: "99.9% uptime",
    icon: "Server",
  },
  {
    label: "Active Pods",
    value: "128",
    status: "healthy" as const,
    trend: "+12 today",
    icon: "Box",
  },
  {
    label: "Deployment Success",
    value: "99.9%",
    status: "healthy" as const,
    trend: "Last: 2m ago",
    icon: "CheckCircle",
  },
  {
    label: "Terraform State",
    value: "Synced",
    status: "healthy" as const,
    trend: "S3 backend",
    icon: "FileCode",
  },
  {
    label: "AWS Region",
    value: "ap-south-1",
    status: "healthy" as const,
    trend: "Mumbai",
    icon: "Globe",
  },
  {
    label: "CPU Usage",
    value: "42%",
    status: "healthy" as const,
    trend: "avg 38%",
    icon: "Cpu",
  },
];

export const terminalLogs = [
  { id: 1, timestamp: "02:14:32", level: "info" as const, message: "Starting EKS cluster health check...", prefix: "kubectl" },
  { id: 2, timestamp: "02:14:33", level: "success" as const, message: "All pods running (128/128)", prefix: "kubectl" },
  { id: 3, timestamp: "02:14:34", level: "info" as const, message: "Checking Terraform state synchronization...", prefix: "terraform" },
  { id: 4, timestamp: "02:14:35", level: "success" as const, message: "State file synced with S3 backend", prefix: "terraform" },
  { id: 5, timestamp: "02:14:36", level: "info" as const, message: "Running security scan on container images...", prefix: "trivy" },
  { id: 6, timestamp: "02:14:38", level: "success" as const, message: "No vulnerabilities found in 24 images", prefix: "trivy" },
  { id: 7, timestamp: "02:14:40", level: "info" as const, message: "ArgoCD sync initiated for production namespace", prefix: "argocd" },
  { id: 8, timestamp: "02:14:42", level: "success" as const, message: "Sync completed: 15 resources updated", prefix: "argocd" },
  { id: 9, timestamp: "02:14:45", level: "info" as const, message: "Prometheus metrics collection: 99.9% success rate", prefix: "prometheus" },
  { id: 10, timestamp: "02:14:48", level: "info" as const, message: "Auto-scaling triggered: 3 new nodes provisioned", prefix: "cluster-autoscaler" },
];

export const skills = {
  cloud: [
    { name: "AWS", icon: "SiAmazonaws", proficiency: 92 },
    { name: "EKS", icon: "SiKubernetes", proficiency: 90 },
    { name: "VPC", icon: "SiAmazonaws", proficiency: 88 },
    { name: "IAM", icon: "SiAmazonaws", proficiency: 88 },
    { name: "S3", icon: "SiAmazonaws", proficiency: 86 },
    { name: "RDS", icon: "SiAmazonaws", proficiency: 84 },
    { name: "Lambda", icon: "SiAmazonaws", proficiency: 82 },
    { name: "CloudWatch", icon: "SiAmazonaws", proficiency: 84 },
    { name: "CloudTrail", icon: "SiAmazonaws", proficiency: 80 },
    { name: "Auto Scaling", icon: "SiAmazonaws", proficiency: 82 },
    { name: "Route 53", icon: "SiAmazonaws", proficiency: 80 },
    { name: "GCP", icon: "SiGooglecloud", proficiency: 75 },
    { name: "Azure", icon: "SiMicrosoftazure", proficiency: 72 },
  ],
  devops: [
    { name: "Terraform", icon: "SiTerraform", proficiency: 92 },
    { name: "Kubernetes", icon: "SiKubernetes", proficiency: 90 },
    { name: "Helm", icon: "SiHelm", proficiency: 88 },
    { name: "ArgoCD", icon: "SiArgo", proficiency: 88 },
    { name: "GitHub Actions", icon: "SiGithubactions", proficiency: 86 },
    { name: "GitLab CI", icon: "SiGitlab", proficiency: 78 },
    { name: "Jenkins", icon: "SiJenkins", proficiency: 76 },
    { name: "Prometheus", icon: "SiPrometheus", proficiency: 84 },
    { name: "Grafana", icon: "SiGrafana", proficiency: 84 },
    { name: "SonarQube", icon: "SiSonarqube", proficiency: 80 },
    { name: "Trivy", icon: "SiTrivy", proficiency: 80 },
  ],
  programming: [
    { name: "Python", icon: "SiPython", proficiency: 85 },
    { name: "Bash", icon: "SiGnubash", proficiency: 88 },
    { name: "Golang", icon: "SiGo", proficiency: 70 },
    { name: "YAML", icon: "SiYaml", proficiency: 90 },
    { name: "HCL", icon: "SiTerraform", proficiency: 92 },
  ],
};

export const experiences = [
  {
    id: "1",
    role: "Freelance Cloud & DevOps Consultant",
    company: "Independent Consulting",
    period: "12/2025 – Present",
    location: "Remote",
    description: [
      "Provide cloud infrastructure architecture and DevOps advisory services to early-stage startups and SMEs.",
      "Consult on high-availability AWS architecture design, cost optimization strategies, and infrastructure security hardening.",
      "Build reusable modular Terraform IaC templates and automated CI/CD pipeline blueprints for streamlined client onboarding.",
      "Conduct comprehensive cloud security compliance audits and implement IAM least-privilege policies across AWS resources."
    ],
    tech: ["AWS", "Terraform", "CI/CD", "IAM", "Security Auditing", "Cost Optimization"],
  },
  {
    id: "2",
    role: "Cloud & DevOps Engineer",
    company: "Beltronic Consultancy Pvt. Ltd",
    period: "03/2024 – 11/2025",
    location: "Remote / Hybrid",
    description: [
      "Architected and maintained 12+ modular, highly-reusable Terraform modules across Dev, Staging, and Production environments, cutting infrastructure provisioning cycles by 90%.",
      "Enforced IAM least-privilege and granular RBAC policies across all cloud environments; implemented EKS IAM Roles for Service Accounts (IRSA) for pod-level security isolation.",
      "Containerized and migrated microservices from legacy EC2 instances to AWS EKS clusters using multi-stage Docker builds and production-grade Helm charts.",
      "Implemented robust GitOps CD workflows utilizing ArgoCD, reducing application deployment cycle times by 35% and preventing configuration drift.",
      "Standardized automated CI/CD pipelines across diverse client projects, integrating SonarQube SAST and Trivy security vulnerability scans into the automation lifecycle.",
      "Deployed Prometheus-Grafana observability stack with real-time alerting integrations, maintaining a strict 99.9% uptime SLA across critical workloads.",
      "Built an automated serverless cost monitoring pipeline using AWS Lambda and SNS, saving an average of 15% on monthly cloud spend through resource optimization."
    ],
    tech: ["AWS", "EKS", "Terraform", "ArgoCD", "Docker", "Helm", "CI/CD", "Prometheus", "Grafana", "SonarQube", "Trivy", "Serverless"],
  },
  {
    id: "3",
    role: "Personal Cloud Projects",
    company: "Self-Directed",
    period: "07/2023 – 03/2024",
    location: "Pune, Maharashtra",
    description: [
      "Dedicated intensive self-directed period to cloud security research, advanced infrastructure engineering, and AWS certification prep.",
      "Designed and built custom cloud security training infrastructure simulating red-team/blue-team scenarios using Terraform and Docker.",
      "Maintained deep hands-on expertise with EKS, ArgoCD, Helm, and observability through extensive local and AWS lab environments.",
      "Successfully earned AWS Certified Solutions Architect – Associate (SAA-C03) and AWS Knowledge: Architecting credentials through practical labs."
    ],
    tech: ["AWS", "Terraform", "Docker", "EKS", "ArgoCD", "Helm", "Kubernetes", "Observability"],
  },
];

export const projects = [
  {
    id: "1",
    title: "MineOps",
    description: "Production-grade Minecraft server orchestration platform. Features automated deployment of high-availability clusters using Terraform for AWS resources (EKS, EFS, ElastiCache), Helm for Kubernetes packaging, and self-healing StatefulSets with Prometheus-Grafana telemetry.",
    tech: ["Terraform", "AWS (EKS/EFS)", "Kubernetes", "Docker", "Helm", "GitHub Actions", "Prometheus", "Grafana"],
    metrics: "EKS Cluster | HA StatefulSets | CI/CD Automations",
    category: "infrastructure" as const,
    github: "https://github.com/AmulThantharate/MineOps",
    demo: "https://github.com/AmulThantharate/MineOps#readme",
  },
  {
    id: "2",
    title: "KubeSentinel",
    description: "Autonomous Kubernetes SRE agent built on Model Context Protocol (MCP). Integrates LLMs with Kubernetes APIs to observe node pressures, auto-diagnose Pod crash loops, and execute remediation workflows (PDB-aware node scaling, container restarts) with zero manual overhead.",
    tech: ["Python", "Model Context Protocol", "Groq/Gemini API", "Kubernetes API", "Prometheus", "Docker", "SRE Runbooks"],
    metrics: "AI-Powered Diagnostics | Autonomous Remediation | SRE Automation",
    category: "monitoring" as const,
    github: "https://github.com/AmulThantharate/k8s-sre-agent",
    demo: "https://github.com/AmulThantharate/k8s-sre-agent#readme",
  },
  {
    id: "3",
    title: "SecOps-Lab",
    description: "Multi-vector cloud security training infrastructure designed for red-team/blue-team simulation. Provisions intentional vulnerability vectors in AWS (VPC, IAM, S3) using Terraform, automates intrusion audits via CloudTrail/CloudWatch, and runs automated Trivy container image CVE checks.",
    tech: ["Terraform", "AWS (IAM/CloudTrail)", "Docker", "Trivy", "SonarQube SAST", "CloudWatch", "Bash scripting"],
    metrics: "IAM Least-Privilege Audits | Container SAST/CVE Scans | Threat Sandbox",
    category: "security" as const,
    github: "https://github.com/AmulThantharate/SecOps-Lab",
    demo: "https://github.com/AmulThantharate/SecOps-Lab#readme",
  },
  {
    id: "4",
    title: "SkyShift",
    description: "Secure multi-environment ECS Fargate CI/CD pipeline built with Terraform (IaC). Implements a complete DevOps lifecycle featuring integrated Bandit SAST scanning, container vulnerability security gates (AWS Lambda), and automated blue/green ECS deployments (AWS CodeDeploy) with unified Grafana observability.",
    tech: ["Terraform", "AWS (ECS/ECR/CodePipeline)", "Docker", "Lambda", "Grafana", "Bandit SAST", "AWS CodeDeploy"],
    metrics: "Secure ECS Fargate Pipelines | Blue/Green Deployments | Grafana Observability",
    category: "automation" as const,
    github: "https://github.com/AmulThantharate/SkyShift",
    demo: "https://github.com/AmulThantharate/SkyShift#readme",
  },
  {
    id: "5",
    title: "pipeguradAi",
    description: "AI-powered CI/CD pipeline security analyzer, optimizer, and DevSecOps assistant built as a VS Code extension with a clean chat interface. Parses and optimizes GitHub Actions, GitLab CI, CircleCI, and AWS CodePipeline files to find security vulnerability vectors and misconfigurations with one-click remediation.",
    tech: ["TypeScript", "VS Code Extension API", "OpenRouter API", "CI/CD Security", "Node.js", "DeepSeek API"],
    metrics: "AI DevSecOps Assistant | VS Code Extension | Multi-Pipeline Security Scan",
    category: "security" as const,
    github: "https://github.com/AmulThantharate/pipeguradAi",
    demo: "https://github.com/AmulThantharate/pipeguradAi#readme",
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    badge: "SAA-C03",
    url: "https://aws.amazon.com/certification",
  },
  {
    name: "AWS Knowledge: Architecting",
    issuer: "Amazon Web Services",
    date: "2024",
    badge: "AWS-ARCH",
    url: "https://aws.amazon.com/certification",
  },
  {
    name: "Pre Security Certificate",
    issuer: "TryHackMe",
    date: "2024",
    badge: "THM-PRESEC",
    url: "https://tryhackme.com",
  },
  {
    name: "DevSecOps Certificate",
    issuer: "TryHackMe",
    date: "2024",
    badge: "THM-DEVSECOPS",
    url: "https://tryhackme.com",
  },
];

export const education = [
  {
    institution: "Sardar Patel University",
    degree: "Bachelor of Technology (B.Tech)",
    period: "08/2019 – 05/2023",
    location: "Gujarat, India",
    details: "Focus on Computer Science, Cloud Systems, and Software Engineering principles.",
  }
];

export const impactMetrics = [
  { label: "Uptime Achieved", value: "99.9", suffix: "%", description: "Production SLA maintained" },
  { label: "Provisioning Speedup", value: "90", suffix: "%", description: "Terraform IaC deployment" },
  { label: "Active Workspaces", value: "12", suffix: "+", description: "Modular modular IaC components" },
  { label: "Cost Reduction", value: "15", suffix: "%", description: "Saved via serverless pipelines" },
];
