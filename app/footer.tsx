const user = {
  name: "sakkke",
  email: "sakkke@sakkke.dev",
};

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <a href="/">sakkke.dev</a>
      </div>
      <p>
        copyright &copy; 2024-present {user.name} &lt;
        <a href={`mailto:${user.email}`}>{user.email}</a>&gt;
      </p>
    </footer>
  );
}
