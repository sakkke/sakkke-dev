import Link from "next/link";

const user = {
  name: "sakkke",
  email: "sakkke@sakkke.dev",
};

export default function Footer() {
  return (
    <footer className="grid grid-cols-[1fr_1fr_2fr] mt-[var(--global-line-height)]">
      <div className="container">
        <nav>
          <h2>projects</h2>
          <ul>
            <li>
              <Link href="/projects">projects</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h2>tools</h2>
          <ul>
            <li>
              <Link href="/tools">tools</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h2>media</h2>
          <ul>
            <li>
              <Link href="/blog">blog</Link>
            </li>
            <li>
              <Link href="/vlog">vlog</Link>
            </li>
            <li>
              <Link href="/music">music</Link>
            </li>
            <li>
              <Link href="/videos">videos</Link>
            </li>
            <li>
              <Link href="/illustrations">illustrations</Link>
            </li>
            <li>
              <Link href="/photos">photos</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <nav>
          <h2>contact</h2>
          <ul>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h2>personal</h2>
          <ul>
            <li>
              <Link href="/about">about me</Link>
            </li>
            <li>
              <Link href="/skills">skills</Link>
            </li>
            <li>
              <Link href="/experience">experience</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h2>social</h2>
          <ul>
            <li>
              <Link href="/social">social</Link>
            </li>
            <li>
              <Link href="/community">community</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <nav>
          <h2>information</h2>
          <p>
            <strong>
              <Link href="/">sakkke.dev</Link>
            </strong>
          </p>
          <p>
            <Link href="https://github.com/sakkke/sakkke-dev">
              view source on GitHub
            </Link>
          </p>
          <p>
            copyright &copy; 2024-present {user.name} &lt;
            <Link href={`mailto:${user.email}`}>{user.email}</Link>&gt;
          </p>
        </nav>
        <nav>
          <h2>credits</h2>
          <p>
            <Link href="https://vercel.com/">powered by Vercel</Link>
          </p>
          <p>
            <Link href="https://catppuccin.com/">colors from Catppuccin</Link>
          </p>
        </nav>
      </div>
    </footer>
  );
}
