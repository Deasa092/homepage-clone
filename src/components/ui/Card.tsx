import type { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const Card = ({ children, className = "", ...props }: Props) => {
  return (
    <div
      className={`hover:shadow-md hover:border-tokopedia transition border-card flex-col ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
