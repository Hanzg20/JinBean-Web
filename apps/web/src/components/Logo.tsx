import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-14 w-14"
  };

  return (
    <img
      src="/src/assets/logo.png"
      alt="JinBean Logo"
      className={cn(sizeClasses[size], "object-contain", className)}
    />
  );
};

export default Logo;
