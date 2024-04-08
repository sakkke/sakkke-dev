import Link from "next/link";

const user = {
  name: "sakkke",
  email: "sakkke@sakkke.dev",
};

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 md:grid-cols-[1fr_1fr_2fr] mt-[var(--global-line-height)]">
      <div>
        <nav>
          <h2>projects</h2>
          <ul>
            <li>
              <Link href="/projects">projects</Link>
            </li>
            <li>
              <Link href="/servers">🚧 servers</Link>
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
              <Link href="/blog">🚧 blog</Link>
            </li>
            <li>
              <Link href="/vlog">🚧 vlog</Link>
            </li>
            <li>
              <Link href="/music">🚧 music</Link>
            </li>
            <li>
              <Link href="/videos">🚧 videos</Link>
            </li>
            <li>
              <Link href="/logos">🚧 logos</Link>
            </li>
            <li>
              <Link href="/3d">🚧 3D computer graphics</Link>
            </li>
            <li>
              <Link href="/illustrations">🚧 illustrations</Link>
            </li>
            <li>
              <Link href="/podcast">🚧 podcast</Link>
            </li>
            <li>
              <Link href="/photos">🚧 photos</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h2>games</h2>
          <ul>
            <li>
              <Link href="/games">🚧 games</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h2>sports</h2>
          <ul>
            <li>
              <Link href="/sports">🚧 sports</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h2>cooking</h2>
          <ul>
            <li>
              <Link href="/cooking">🚧 cooking</Link>
            </li>
            <li>
              <Link href="/recipes">🚧 recipes</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
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
              <Link href="/brands">🚧 brands</Link>
            </li>
            <li>
              <Link href="/skills">skills</Link>
            </li>
            <li>
              <Link href="/experience">experience</Link>
            </li>
            <li>
              <Link href="/schedule">🚧 schedule</Link>
            </li>
            <li>
              <Link href="/ai">🚧 AI</Link>
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
        <nav>
          <h2>support me</h2>
          <ul>
            <li>
              <Link href="https://www.buymeacoffee.com/sakkke">
                Buy Me a Coffee
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-span-2 md:col-span-1">
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
