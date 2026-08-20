import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Logo } from "@/components/logo"

const footerLinks = {
  services: [
    { href: "/services#spouse", label: "فيزا الزوج/الزوجة" },
    { href: "/services#work", label: "فيزا العمل" },
    { href: "/services#family", label: "لم الشمل" },
    { href: "/services#asylum", label: "اللجوء والحماية" },
    { href: "/services#student", label: "فيزا الطلاب" },
    { href: "/services#settlement", label: "الإقامة الدائمة" },
  ],
  company: [
    { href: "/about", label: "من نحن" },
    { href: "/knowledge", label: "قاعدة المعرفة" },
    { href: "/book", label: "احجز موعد" },
    { href: "/contact", label: "تواصل معنا" },
    { href: "/privacy", label: "سياسة الخصوصية" },
    { href: "/terms", label: "الشروط والأحكام" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo size="sm" light />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              استشارات هجرة متخصصة للمتحدثين بالعربية في المملكة المتحدة. نساعدك في جميع إجراءات التأشيرة والإقامة.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <div className="w-2 h-1 bg-secondary/60 rounded-full" />
              <div className="w-1 h-1 bg-secondary/40 rounded-full" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">خدماتنا</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-secondary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">روابط سريعة</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-secondary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-secondary" />
                <span dir="ltr">+44 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:info@arabicvisaconsultant.co.uk" className="hover:text-secondary transition-colors">
                  info@arabicvisaconsultant.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                <span>لندن، المملكة المتحدة<br />London, United Kingdom</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Clock className="w-4 h-4 text-secondary mt-0.5" />
                <span>الأحد - الخميس: 9 صباحاً - 6 مساءً</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2026 استشارات الهجرة العربية. جميع الحقوق محفوظة.
          </p>
          <p className="text-white/40 text-xs">
            Regulatory Information: We are not a firm of solicitors. Immigration advice is provided under OISC registration.
          </p>
        </div>
      </div>
    </footer>
  )
}
