"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="terminal-nav">
      <header className="terminal-logo">
        <div className="logo terminal-prompt">
          <Link href="/" className="no-style">
            sakkke.dev
          </Link>
        </div>
      </header>
      <nav className="terminal-menu">
        <ul>
          <li>
            <Link
              href="/blog"
              className={`menu-item ${pathname === "/blog" ? "active" : ""}`}
            >
              blog
            </Link>
          </li>
          <li>
            <Link
              href="/vlog"
              className={`menu-item ${pathname === "/vlog" ? "active" : ""}`}
            >
              vlog
            </Link>
          </li>
          <li>
            <Link
              href="/music"
              className={`menu-item ${pathname === "/music" ? "active" : ""}`}
            >
              music
            </Link>
          </li>
          <li>
            <Link
              href="/photos"
              className={`menu-item ${pathname === "/photos" ? "active" : ""}`}
            >
              photos
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`menu-item ${pathname === "/about" ? "active" : ""}`}
            >
              about me
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`menu-item ${pathname === "/projects" ? "active" : ""}`}
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              href="/tools"
              className={`menu-item ${pathname === "/tools" ? "active" : ""}`}
            >
              tools
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className={`menu-item ${pathname === "/skills" ? "active" : ""}`}
            >
              skills
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className={`menu-item ${pathname === "/experience" ? "active" : ""}`}
            >
              experience
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`menu-item ${pathname === "/contact" ? "active" : ""}`}
            >
              contact
            </Link>
          </li>
          <li>
            <Link
              href="/social"
              className={`menu-item ${pathname === "/social" ? "active" : ""}`}
            >
              social
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
