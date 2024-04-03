const user = {
  name: "sakkke",
  email: "sakkke@sakkke.dev",
};

export default function Footer() {
  return (
    <footer className="pb-[calc(var(--global-space)*2)]">
      <div className="logo">
        <a href="/">sakkke.dev</a>
      </div>
      <span>
        copyright &copy; 2024-present {user.name} &lt;
        <a href={`mailto:${user.email}`}>{user.email}</a>&gt;
      </span>
    </footer>
  );
}
