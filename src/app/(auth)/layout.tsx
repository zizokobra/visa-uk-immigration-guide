import Link from "next/link"
import { Logo } from "@/components/logo"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gold-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="16" cy="16" r="1" fill="#c8a951" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gold-dots)" />
          </svg>
        </div>
        <div className="relative text-center text-white p-12">
          <Link href="/" className="inline-block mb-8">
            <Logo size="lg" light className="justify-center [&>div]:mx-auto" />
          </Link>
          <p className="text-xl text-white/80 max-w-md mx-auto leading-relaxed mt-6">
            لوحة التحكم الخاصة بك لعرض المستندات والمواعيد والفواتير
          </p>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-12 h-1 bg-secondary rounded-full" />
            <div className="w-3 h-1 bg-secondary/60 rounded-full" />
            <div className="w-2 h-1 bg-secondary/40 rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8 bg-muted/30">
        <div className="w-full max-w-md">
          <Link href="/" className="lg:hidden flex justify-center mb-8">
            <Logo size="md" />
          </Link>
          {children}
        </div>
      </div>
    </div>
  )
}
