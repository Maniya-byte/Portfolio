import { Link } from "react-router-dom";
import { Github, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <Link to="/" className="font-display text-lg font-bold">
          Portfolio
        </Link>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
          <Link to="/projects" className="transition-colors hover:text-foreground">Projects</Link>
          <Link to="/about" className="transition-colors hover:text-foreground">About</Link>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="http://www.linkedin.com/in/pasindu-manelka-kandamby"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Maniya-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.credly.com/users/pasindu-kandamby"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="Credly"
          >
            <Globe className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pasindu Kandamby. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
