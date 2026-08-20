"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/knowledge", label: "قاعدة المعرفة" },
  { href: "/book", label: "احجز موعد" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-secondary/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Logo size="md" light />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+441234567890" className="flex items-center gap-2 text-sm text-white/70 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              <span dir="ltr">+44 123 456 7890</span>
            </a>
            <Button variant="secondary" asChild className="bg-secondary text-primary hover:bg-secondary-light font-bold">
              <Link href="/login">دخول العملاء</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-primary">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg text-white/80 hover:bg-white/10 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-white/10" />
            <a href="tel:+441234567890" className="flex items-center gap-2 px-4 py-3 text-white/70">
              <Phone className="w-4 h-4" />
              <span dir="ltr">+44 123 456 7890</span>
            </a>
            <a href="mailto:info@arabicvisaconsultant.co.uk" className="flex items-center gap-2 px-4 py-3 text-white/70">
              <Mail className="w-4 h-4" />
              info@arabicvisaconsultant.co.uk
            </a>
            <div className="px-4 pt-2">
              <Button asChild className="w-full bg-secondary text-primary hover:bg-secondary-light font-bold">
                <Link href="/login">دخول العملاء</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
