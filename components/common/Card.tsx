import { ReactNode } from "react";
import clsx from "clsx";

export const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <article
      className={clsx(
        "bg-surface text-text p-4 rounded shadow hover:shadow-md transition",
        className
      )}
    >
      {children}
    </article>
  );
};
