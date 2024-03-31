const user = {
  name: "sakkke",
  email: "sakkke@sakkke.dev",
  github: "https://github.com/sakkke",
  zenn: "https://zenn.dev/sakkke",
};

export default function Footer() {
  return (
    <footer>
      <p>
        <a href={user.github}>GitHub</a> | <a href={user.zenn}>Zenn</a>
      </p>
      <p>
        copyright &copy; 2024-present {user.name} &lt;
        <a href={`mailto:${user.email}`}>{user.email}</a>&gt;
      </p>
    </footer>
  );
}
