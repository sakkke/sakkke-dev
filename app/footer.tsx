import Link from "next/link";

const user = {
  name: "sakkke",
  email: "sakkke@sakkke.dev",
};

export default function Footer() {
  return (
    <footer className="grid grid-cols-[1fr_1fr_2fr]">
      <div className="container"></div>
      <div className="container"></div>
      <div className="container">
        <nav>
          <h2>information</h2>
          <div className="logo">
            <Link href="/">sakkke.dev</Link>
          </div>
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
            <Link href="https://github.com/sakkke/sakkke-dev">
              view source on GitHub
            </Link>
          </p>
          <p>
            <Link href="https://catppuccin.com/">colors from Catppuccin</Link>
          </p>
        </nav>
      </div>
    </footer>
  );
}
