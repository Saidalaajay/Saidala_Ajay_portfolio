import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "strong";
  hover?: boolean;
  style?: CSSProperties;
}

const GlassCard = ({ children, className, variant = "default", hover = false, style }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg transition-all duration-300",
        variant === "default" ? "glass" : "glass-strong",
        hover && "hover-lift hover-glow",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;