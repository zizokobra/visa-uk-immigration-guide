import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  variant?: "full" | "icon" | "wordmark"
  className?: string
  light?: boolean
}

export function Logo({ size = "md", variant = "full", className, light = false }: LogoProps) {
  const sizes = {
    sm: { icon: 36, text: "text-sm", subtext: "text-[10px]" },
    md: { icon: 44, text: "text-lg", subtext: "text-xs" },
    lg: { icon: 56, text: "text-xl", subtext: "text-sm" },
  }

  const s = sizes[size]
  const textColor = light ? "text-white" : "text-primary"
  const subColor = light ? "text-secondary" : "text-secondary"

  if (variant === "icon") {
    return (
      <div className={cn("relative shrink-0", className)}>
        <svg
          width={s.icon}
          height={s.icon}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield shape */}
          <path
            d="M24 2L6 10V22C6 34.5 13.8 44.5 24 47C34.2 44.5 42 34.5 42 22V10L24 2Z"
            fill="#0a1628"
            stroke="#c8a951"
            strokeWidth="1.5"
          />
          {/* Inner shield */}
          <path
            d="M24 6L10 12.5V22C10 32.5 16.5 41 24 43.5C31.5 41 38 32.5 38 22V12.5L24 6Z"
            fill="#0a1628"
            stroke="#c8a951"
            strokeWidth="0.75"
            opacity="0.5"
          />
          {/* Scale of justice */}
          <line x1="24" y1="14" x2="24" y2="34" stroke="#c8a951" strokeWidth="1.5" />
          <line x1="16" y1="20" x2="32" y2="20" stroke="#c8a951" strokeWidth="1.5" />
          <path d="M16 20L14 28H18L16 20Z" fill="none" stroke="#c8a951" strokeWidth="1" />
          <path d="M32 20L30 28H34L32 20Z" fill="none" stroke="#c8a951" strokeWidth="1" />
          <circle cx="14" cy="28" r="1.5" fill="#c8a951" opacity="0.7" />
          <circle cx="34" cy="28" r="1.5" fill="#c8a951" opacity="0.7" />
          <line x1="20" y1="14" x2="28" y2="14" stroke="#c8a951" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    )
  }

  if (variant === "wordmark") {
    return (
      <div className={cn("flex items-baseline gap-1", className)}>
        <span className={cn("font-bold tracking-tight", s.text, textColor, "font-[family-name:var(--font-heading)]")}>
          استشارات الهجرة
        </span>
        <span className={cn("text-secondary font-medium", s.subtext)}>
          ®
        </span>
      </div>
    )
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M24 2L6 10V22C6 34.5 13.8 44.5 24 47C34.2 44.5 42 34.5 42 22V10L24 2Z"
          fill="#0a1628"
          stroke="#c8a951"
          strokeWidth="1.5"
        />
        <path
          d="M24 6L10 12.5V22C10 32.5 16.5 41 24 43.5C31.5 41 38 32.5 38 22V12.5L24 6Z"
          fill="#0a1628"
          stroke="#c8a951"
          strokeWidth="0.75"
          opacity="0.5"
        />
        <line x1="24" y1="14" x2="24" y2="34" stroke="#c8a951" strokeWidth="1.5" />
        <line x1="16" y1="20" x2="32" y2="20" stroke="#c8a951" strokeWidth="1.5" />
        <path d="M16 20L14 28H18L16 20Z" fill="none" stroke="#c8a951" strokeWidth="1" />
        <path d="M32 20L30 28H34L32 20Z" fill="none" stroke="#c8a951" strokeWidth="1" />
        <circle cx="14" cy="28" r="1.5" fill="#c8a951" opacity="0.7" />
        <circle cx="34" cy="28" r="1.5" fill="#c8a951" opacity="0.7" />
        <line x1="20" y1="14" x2="28" y2="14" stroke="#c8a951" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col">
        <span className={cn("font-bold leading-tight tracking-tight", s.text, textColor, "font-[family-name:var(--font-heading)]")}>
          استشارات الهجرة
        </span>
        <span className={cn(s.subtext, light ? "text-white/60" : "text-muted-foreground")}>
          Arabic Visa Consultant
        </span>
      </div>
    </div>
  )
}
