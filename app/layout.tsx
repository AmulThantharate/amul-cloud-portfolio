import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amul Thantharate | Cloud & DevOps Engineer",
  description: "Cloud & DevOps Engineer specializing in AWS, Kubernetes, Terraform, and infrastructure automation. Building production-grade systems that scale.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "Kubernetes", "Terraform", "Infrastructure"],
  authors: [{ name: "Amul Thantharate" }],
  openGraph: {
    title: "Amul Thantharate | Cloud & DevOps Engineer",
    description: "Production-grade infrastructure and DevOps engineering",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className="font-sans antialiased bg-background text-text-primary"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
