"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="container">
      <div className="terminal-nav">
        <header className="terminal-logo">
          <div className="logo terminal-prompt">
            <a href="/" className="no-style">
              sakkke.dev
            </a>
          </div>
        </header>
        <nav className="terminal-menu">
          <ul>
            <li>
              <a
                href="/about"
                className={`menu-item ${pathname === "/about" ? "active" : ""}`}
              >
                about me
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className={`menu-item ${pathname === "/projects" ? "active" : ""}`}
              >
                projects
              </a>
            </li>
            <li>
              <a
                href="/skills"
                className={`menu-item ${pathname === "/skills" ? "active" : ""}`}
              >
                skills
              </a>
            </li>
            <li>
              <a
                href="/experience"
                className={`menu-item ${pathname === "/experience" ? "active" : ""}`}
              >
                experience
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`menu-item ${pathname === "/contact" ? "active" : ""}`}
              >
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
