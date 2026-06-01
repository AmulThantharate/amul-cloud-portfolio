export const personalInfo = {
  name: "Amul Thantharate",
  role: "Cloud & DevOps Engineer",
  experience: "2+ years",
  location: "Pune, Maharashtra",
  email: "amulthantharate@gmail.com",
  github: "https://github.com/AmulThantharate",
  linkedin: "https://linkedin.com/in/amul-thantharate",
  tagline:
    "Architecting resilient, cost-efficient, and secure cloud platforms at scale.",
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
  {
    id: 1,
    timestamp: "02:14:32",
    level: "info" as const,
    message: "Starting EKS cluster health check...",
    prefix: "kubectl",
  },
  {
    id: 2,
    timestamp: "02:14:33",
    level: "success" as const,
    message: "All pods running (128/128)",
    prefix: "kubectl",
  },
  {
    id: 3,
    timestamp: "02:14:34",
    level: "info" as const,
    message: "Checking Terraform state synchronization...",
    prefix: "terraform",
  },
  {
    id: 4,
    timestamp: "02:14:35",
    level: "success" as const,
    message: "State file synced with S3 backend",
    prefix: "terraform",
  },
  {
    id: 5,
    timestamp: "02:14:36",
    level: "info" as const,
    message: "Running security scan on container images...",
    prefix: "trivy",
  },
  {
    id: 6,
    timestamp: "02:14:38",
    level: "success" as const,
    message: "No vulnerabilities found in 24 images",
    prefix: "trivy",
  },
  {
    id: 7,
    timestamp: "02:14:40",
    level: "info" as const,
    message: "ArgoCD sync initiated for production namespace",
    prefix: "argocd",
  },
  {
    id: 8,
    timestamp: "02:14:42",
    level: "success" as const,
    message: "Sync completed: 15 resources updated",
    prefix: "argocd",
  },
  {
    id: 9,
    timestamp: "02:14:45",
    level: "info" as const,
    message: "Prometheus metrics collection: 99.9% success rate",
    prefix: "prometheus",
  },
  {
    id: 10,
    timestamp: "02:14:48",
    level: "info" as const,
    message: "Auto-scaling triggered: 3 new nodes provisioned",
    prefix: "cluster-autoscaler",
  },
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
    role: "Cloud & DevOps Engineer",
    company: "Self-Employed (Freelance & Open-Source)",
    period: "Jan 2026 – Present",
    location: "Remote, India",
    description: [
      "Actively contributing to open-source Kubernetes and DevOps tooling on GitHub, including KubeSentinel AI SRE agent — adding multi-cluster support and enhanced RBAC-aware remediation strategies.",
      "Designing and delivering freelance cloud infrastructure projects for small businesses: provisioning AWS environments (EC2, VPC, S3, IAM), setting up Jenkins CI/CD pipelines, and implementing Terraform-based IaC for repeatable deployments.",
      "Building hands-on lab environments for RHCSA (EX200) exam preparation — covering LVM, SELinux, systemd, networking, and container management on RHEL 9.",
      "Studying and practicing Cisco CCNA 200-301 topics: routing protocols (OSPF, EIGRP), switching (STP, VLANs), network security (ACLs), and WAN technologies.",
      "Continuously expanding cloud-native expertise through advanced Kubernetes labs (CKA-level), Terraform modules, and GitOps workflows with ArgoCD.",
    ],
    tech: [
      "AWS",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "ArgoCD",
      "GitHub Actions",
      "RHEL 9",
      "Python",
      "Golang",
    ],
  },
  {
    id: "2",
    role: "Cloud & DevOps Engineer (Intern)",
    company: "Innovapptive Inc.",
    period: "Aug 2025 – Dec 2025",
    location: "Remote / On-site, India",
    description: [
      "Provisioned secure AWS cloud environments (EC2, VPC, IAM, S3, CloudWatch); refactored IAM roles to eliminate ~40% of over-privileged access across 3 critical microservices using least-privilege principles, improving security audit compliance scores.",
      "Built robust CI/CD automation pipelines using Jenkins, Docker, and Terraform — reducing manual deployment steps by 70% and slashing environment provisioning time from 2 days to under 30 minutes.",
      "Integrated Trivy container scanning and SonarQube SAST into pipelines as automated shift-left security gates, blocking high-severity vulnerabilities before production.",
      "Administered SAP Basis user authorizations and access controls for 50+ enterprise users.",
    ],
    tech: [
      "AWS",
      "EC2",
      "VPC",
      "IAM",
      "S3",
      "CloudWatch",
      "Jenkins",
      "Docker",
      "Terraform",
      "Trivy",
      "SonarQube",
    ],
  },
  {
    id: "3",
    role: "Systems & DevOps Engineer",
    company: "Freelance & Open-Source Contributor",
    period: "Jun 2023 – Jul 2025",
    location: "Remote, India",
    description: [
      "Built, configured, and optimized enterprise Linux (RHEL 8/9) server environments; implemented advanced storage management (LVM, NFS), systemd service administration, and SELinux policies to guarantee 99.9% system uptime.",
      "Designed, simulated, and validated complex Cisco routing and switching configurations (OSPF, STP, VLANs, ACLs, NAT/PAT), translating physical topologies into highly resilient multi-AZ AWS VPC architectures.",
      "Completed 400+ hours of advanced cloud-native labs covering Kubernetes administration, Terraform IaC, container security, and DevSecOps integrations — validated by AWS Certified Solutions Architect – Associate credential.",
    ],
    tech: [
      "RHEL 8/9",
      "Linux",
      "LVM",
      "SELinux",
      "Cisco",
      "OSPF",
      "VLANs",
      "AWS",
      "Kubernetes",
      "Terraform",
      "Docker",
    ],
  },
];

export const projects = [
  {
    id: "1",
    title: "MineOps",
    description:
      "Production-grade Minecraft server orchestration platform. Features automated deployment of high-availability clusters using Terraform for AWS resources (EKS, EFS, ElastiCache), Helm for Kubernetes packaging, and self-healing StatefulSets with Prometheus-Grafana telemetry.",
    tech: [
      "Terraform",
      "AWS (EKS/EFS)",
      "Kubernetes",
      "Docker",
      "Helm",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
    metrics: "EKS Cluster | HA StatefulSets | CI/CD Automations",
    category: "infrastructure" as const,
    github: "https://github.com/AmulThantharate/MineOps",
    demo: "https://github.com/AmulThantharate/MineOps#readme",
  },
  {
    id: "2",
    title: "KubeSentinel",
    description:
      "Autonomous Kubernetes SRE agent built on Model Context Protocol (MCP). Integrates LLMs with Kubernetes APIs to observe node pressures, auto-diagnose Pod crash loops, and execute remediation workflows (PDB-aware node scaling, container restarts) with zero manual overhead.",
    tech: [
      "Python",
      "Model Context Protocol",
      "Groq/Gemini API",
      "Kubernetes API",
      "Prometheus",
      "Docker",
      "SRE Runbooks",
    ],
    metrics: "AI-Powered Diagnostics | Autonomous Remediation | SRE Automation",
    category: "monitoring" as const,
    github: "https://github.com/AmulThantharate/k8s-sre-agent",
    demo: "https://github.com/AmulThantharate/k8s-sre-agent#readme",
  },
  {
    id: "3",
    title: "SkyShift",
    description:
      "Secure multi-environment ECS Fargate CI/CD pipeline built with Terraform (IaC). Implements a complete DevOps lifecycle featuring integrated Bandit SAST scanning, container vulnerability security gates (AWS Lambda), and automated blue/green ECS deployments (AWS CodeDeploy) with unified Grafana observability.",
    tech: [
      "Terraform",
      "AWS (ECS/ECR/CodePipeline)",
      "Docker",
      "Lambda",
      "Grafana",
      "Bandit SAST",
      "AWS CodeDeploy",
    ],
    metrics:
      "Secure ECS Fargate Pipelines | Blue/Green Deployments | Grafana Observability",
    category: "automation" as const,
    github: "https://github.com/AmulThantharate/SkyShift",
    demo: "https://github.com/AmulThantharate/SkyShift#readme",
  },
  {
    id: "4",
    title: "pipeguradAi",
    description:
      "AI-powered CI/CD pipeline security analyzer, optimizer, and DevSecOps assistant built as a VS Code extension with a clean chat interface. Parses and optimizes GitHub Actions, GitLab CI, CircleCI, and AWS CodePipeline files to find security vulnerability vectors and misconfigurations with one-click remediation.",
    tech: [
      "TypeScript",
      "VS Code Extension API",
      "OpenRouter API",
      "CI/CD Security",
      "Node.js",
      "DeepSeek API",
    ],
    metrics:
      "AI DevSecOps Assistant | VS Code Extension | Multi-Pipeline Security Scan",
    category: "security" as const,
    github: "https://github.com/AmulThantharate/pipeguradAi",
    demo: "https://github.com/AmulThantharate/pipeguradAi#readme",
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    badge: "SAA-C03",
    status: "earned" as const,
    url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  },
  {
    name: "AWS Knowledge: Architecting",
    issuer: "Amazon Web Services",
    date: "2024",
    badge: "AWS-ARCH",
    status: "earned" as const,
    url: "https://aws.amazon.com/certification",
  },
  {
    name: "Red Hat Certified System Administrator (RHCSA – EX200)",
    issuer: "Red Hat",
    date: "2026",
    badge: "RHCSA",
    status: "in-progress" as const,
    url: "https://www.redhat.com/en/services/certification/rhcsa",
  },
  {
    name: "Cisco Certified Network Associate (CCNA 200-301)",
    issuer: "Cisco",
    date: "2026",
    badge: "CCNA",
    status: "in-progress" as const,
    url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
  },
];

export const education = [
  {
    institution: "Sardar Patel University, Balaghat",
    degree:
      "Bachelor of Engineering in Computer Science & Engineering (B.E. CSE)",
    period: "2019 – 2023",
    location: "Balaghat, Madhya Pradesh, India",
    details:
      "CGPA: 7.5/10. Focused on Computer Science fundamentals, networking, and software engineering principles.",
  },
];

export const impactMetrics = [
  {
    label: "Uptime Achieved",
    value: "99.9",
    suffix: "%",
    description: "Production SLA maintained",
  },
  {
    label: "Provisioning Speedup",
    value: "90",
    suffix: "%",
    description: "Terraform IaC deployment",
  },
  {
    label: "Active Workspaces",
    value: "12",
    suffix: "+",
    description: "Modular modular IaC components",
  },
  {
    label: "Cost Reduction",
    value: "15",
    suffix: "%",
    description: "Saved via serverless pipelines",
  },
];
