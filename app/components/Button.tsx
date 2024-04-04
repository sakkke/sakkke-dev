import { MouseEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, onClick }: Props) {
  return (
    <button className="btn btn-default" onClick={onClick}>
      {children}
    </button>
  );
}
