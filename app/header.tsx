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
              href="/projects"
              className={`menu-item ${pathname === "/projects" ? "active" : ""}`}
            >
              projects
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
