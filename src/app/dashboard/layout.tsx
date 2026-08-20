"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { createClient } from "@/lib/supabase/client"
import {
  LayoutDashboard,
  FileText,
  Calendar,
  Receipt,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  MessageCircle,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

const sidebarLinks = [
  { href: "/dashboard", label: "لوحة التحكم", icon: LayoutDashboard },
  { href: "/dashboard/documents", label: "مستنداتي", icon: FileText },
  { href: "/dashboard/bookings", label: "مواعيدي", icon: Calendar },
  { href: "/dashboard/invoices", label: "فواتيري", icon: Receipt },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)

  const handleLogout = async () => {
    setLoggingOut(true)
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  return (
    <div className="min-h-screen flex bg-muted/30">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-72 bg-white border-l border-border">
        <div className="p-6 border-b border-border">
          <Link href="/dashboard" className="flex items-center">
            <Logo size="sm" />
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href || 
              (link.href !== "/dashboard" && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "bg-secondary text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                <link.icon className="w-5 h-5" />
                <span className="font-medium">{link.label}</span>
                {isActive && <ChevronLeft className="w-4 h-4 mr-auto" />}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          <a
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>تحدث مع المستشار الذكي</span>
          </a>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-error hover:bg-error/10 transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            <span>{loggingOut ? "جاري الخروج..." : "تسجيل الخروج"}</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <Link href="/dashboard" className="flex items-center">
                <Logo size="sm" />
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-lg hover:bg-muted">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="p-4 space-y-1">
              {sidebarLinks.map((link) => {
                const isActive = pathname === link.href || 
                  (link.href !== "/dashboard" && pathname.startsWith(link.href))
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-secondary text-primary"
                      : "text-foreground hover:bg-muted"
                    )}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                )
              })}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border space-y-2">
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-error hover:bg-error/10 transition-colors w-full"
              >
                <LogOut className="w-5 h-5" />
                <span>{loggingOut ? "جاري الخروج..." : "تسجيل الخروج"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-border px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-muted"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/dashboard" className="flex items-center gap-2">
            <Logo size="sm" variant="icon" />
            <span className="font-bold text-primary text-sm">لوحة التحكم</span>
          </Link>
          <div className="w-10" />
        </header>

        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
