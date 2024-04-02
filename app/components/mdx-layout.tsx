import { ReactNode } from "react";
import ShareButtons from "./ShareButtons";

interface Metadata {
  created: string;
  updated: string;
}

interface Props extends Metadata {
  children: ReactNode;
}

export default function MdxLayout({ children, created, updated }: Props) {
  return (
    <>
      <div className="bg-[var(--ctp-macchiato-surface0)]">
        <header className="container">
          <span className="text-[var(--ctp-macchiato-overlay2)]">
            created: {created}
            <br />
            updated: {updated}
          </span>
        </header>
      </div>
      <div className="container">
        <main>{children}</main>
        <hr />
        <ShareButtons />
      </div>
    </>
  );
}
