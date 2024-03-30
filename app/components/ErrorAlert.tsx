import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function ErrorAlert({ children }: Props) {
  return <div className="terminal-alert terminal-alert-error">{children}</div>;
}
