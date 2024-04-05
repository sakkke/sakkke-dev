import { MouseEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function PrimaryButton({ children, onClick }: Props) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
}
