import { ReactNode } from "react";

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
      <header>
        <p className="text-[var(--ctp-macchiato-overlay2)]">
          created: {created}
          <br />
          updated: {updated}
        </p>
      </header>
      <main>{children}</main>
    </>
  );
}
