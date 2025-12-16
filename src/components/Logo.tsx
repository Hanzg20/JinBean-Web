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
    <svg
      viewBox="0 0 48 48"
      className={cn(sizeClasses[size], className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gold gradient for beans */}
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D76E" />
          <stop offset="50%" stopColor="#D4A535" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        
        {/* Green gradient for pod */}
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        
        {/* Shine effect */}
        <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="50%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Pod shell - curved leaf shape */}
      <path
        d="M6 24C6 14 14 6 24 6C34 6 42 14 42 24C42 34 34 42 24 42C14 42 6 34 6 24Z"
        fill="url(#greenGradient)"
        opacity="0.15"
      />
      
      {/* Pod outer curve */}
      <path
        d="M8 28C10 18 18 10 30 8C36 7 40 10 42 14"
        stroke="url(#greenGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Pod inner curve */}
      <path
        d="M12 32C14 24 20 16 32 14"
        stroke="url(#greenGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      
      {/* Golden beans - three beans in a row */}
      <ellipse
        cx="18"
        cy="26"
        rx="5"
        ry="6"
        fill="url(#goldGradient)"
      />
      <ellipse
        cx="18"
        cy="26"
        rx="3"
        ry="4"
        fill="url(#shineGradient)"
        transform="translate(-1, -1)"
      />
      
      <ellipse
        cx="28"
        cy="24"
        rx="5.5"
        ry="6.5"
        fill="url(#goldGradient)"
      />
      <ellipse
        cx="28"
        cy="24"
        rx="3.5"
        ry="4.5"
        fill="url(#shineGradient)"
        transform="translate(-1, -1)"
      />
      
      <ellipse
        cx="37"
        cy="20"
        rx="4.5"
        ry="5.5"
        fill="url(#goldGradient)"
      />
      <ellipse
        cx="37"
        cy="20"
        rx="3"
        ry="3.5"
        fill="url(#shineGradient)"
        transform="translate(-1, -1)"
      />
      
      {/* Small accent dot */}
      <circle
        cx="40"
        cy="12"
        r="2"
        fill="url(#greenGradient)"
      />
    </svg>
  );
};

export default Logo;
