import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "default" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export const Button = ({ children, className, variant = "default", ...props }: ButtonProps) => {
  const baseClasses = "px-4 py-2 rounded font-medium transition";

  const variantClasses = clsx({
    "bg-black text-white hover:opacity-90 disabled:opacity-50": variant === "default",
    "border border-neutral-300 text-accent disabled:opacity-50": variant === "outline",
    "bg-transparent text-black text-underline hover:bg-accent/10 disabled:opacity-50": variant === "ghost",
  });

  return (
    <button className={clsx(baseClasses, variantClasses, className)} {...props}>
      {children}
    </button>
  );
};
