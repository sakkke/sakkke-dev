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
      <header className="container">
        <p className="text-[var(--ctp-macchiato-overlay2)]">
          created: {created}
          <br />
          updated: {updated}
        </p>
      </header>
      <div className="container">
        <main>{children}</main>
        <div className="flex flex-row-reverse">
          <div className="flex gap-2">
            <ShareButtons />
          </div>
        </div>
      </div>
    </>
  );
}
