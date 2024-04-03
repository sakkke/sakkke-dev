import { ReactNode } from "react";
import ShareButtons from "../components/ShareButtons";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
  created: string;
  updated: string;
  version: string;
}

export default function ToolLayout({
  children,
  title,
  description,
  created,
  updated,
  version,
}: Props) {
  return (
    <>
      <div className="bg-[var(--ctp-macchiato-surface0)] mb-[var(--global-line-height)] pb-[calc(var(--global-space)*2)]">
        <header className="container">
          <h1>{title}</h1>
          <span className="text-[var(--ctp-macchiato-overlay2)]">
            created: {created}
            <br />
            updated: {updated}
            <br />
            version: {version}
          </span>
        </header>
      </div>
      <div className="container">
        <main>
          <p>{description}</p>
          {children}
        </main>
        <hr />
        <ShareButtons />
      </div>
    </>
  );
}
