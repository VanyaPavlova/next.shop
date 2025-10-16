import Link from "next/link";

interface BackToProps {
  href?: string;          
  text?: string;          
  className?: string;      
}

export const BackTo = ({
  href = "/",
  text = "Back to Products",
  className = "",
}: BackToProps) => (
  <Link
    href={href}
    className={`text-sm text-accent hover:underline font-medium ${className}`}
  >
    ← {text}
  </Link>
);
