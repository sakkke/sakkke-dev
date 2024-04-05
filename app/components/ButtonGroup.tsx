import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ButtonGroup({ children }: Props) {
  return <div className="btn-group">{children}</div>;
}
