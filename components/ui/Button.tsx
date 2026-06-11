import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
}

const baseClasses =
  "inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-7 font-display text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variantClasses = {
  primary: "bg-accent text-white hover:bg-accent-light",
  secondary: "bg-white text-primary ring-1 ring-slate-200 hover:bg-slate-100",
  ghost: "text-white ring-1 ring-white/30 hover:bg-white/10",
} as const;

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
}
