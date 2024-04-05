import { ReactNode } from "react";
import ShareButtons from "./ShareButtons";

interface Metadata {
  created: string;
  title: string;
  updated: string;
}

interface Props extends Metadata {
  children: ReactNode;
}

export default function MdxLayout({
  children,
  created,
  title,
  updated,
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
          </span>
        </header>
      </div>
      <div>
        <div className="container h-full">
          <main>{children}</main>
          <hr />
          <ShareButtons />
        </div>
      </div>
    </>
  );
}
