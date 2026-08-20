import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Clock, CheckCircle, FileText, Phone } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "فيزا الزوج/الزوجة",
    description: "استشارة شاملة للحصول على تأشيرة الشريك في المملكة المتحدة",
    href: "/services#spouse",
  },
  {
    icon: FileText,
    title: "فيزا العمل والعامل الماهر",
    description: "مساعدة في الحصول على تأشيرة العمل والترقيات المهنية",
    href: "/services#work",
  },
  {
    icon: Shield,
    title: "اللجوء والحماية",
    description: "دعم شامل لطلبات اللجوء وحماية اللاجئين",
    href: "/services#asylum",
  },
  {
    icon: Clock,
    title: "الإقامة الدائمة (ILR)",
    description: "إرشادك نحو الحصول على الإقامة الدائمة والجنسية",
    href: "/services#settlement",
  },
]

const stats = [
  { value: "+500", label: "عميل سعيد" },
  { value: "95%", label: "نسبة النجاح" },
  { value: "+10", label: "سنوات الخبرة" },
  { value: "24/7", label: "دعم متواصل" },
]

export default function HomePage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary to-primary-light text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              استشارات هجرة متخصصة<br />
              <span className="text-secondary">للمتحدثين بالعربية</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              نساعدك في جميع إجراءات الهجرة والتأشيرة في المملكة المتحدة. 
              خبرة تزيد عن 10 سنوات وفريق يتحدث العربية بطلاقة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/book">احجز استشارتك الآن</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/knowledge">قاعدة المعرفة</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">خدماتنا الرئيسية</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نقدم استشارات شاملة في جميع مجالات الهجرة والتأشيرة في المملكة المتحدة
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                <Card className="h-full cursor-pointer group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">هل تحتاج استشارة هجرة؟</h2>
            <p className="text-white/90 mb-8 text-lg">
              تحدث مع مستشارينا المتخصصين اليوم. نقدم استشارة أولى مجانية لتقييم حالةك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/book">احجز مكالمة مجانية</Link>
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10" asChild>
                <a href="tel:+441234567890">
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل بنا الآن
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">لماذا تختارنا؟</h2>
              <div className="space-y-4">
                {[
                  "فريق يتحدث العربية بطلاقة",
                  "خبرة تزيد عن 10 سنوات في الهجرة",
                  "أسعار شفافة وواضحة، لا مفاجآت",
                  "دعم شامل من البداية للنهاية",
                  "معدل نجاح عالٍ في الطلبات",
                  "استشارات عبر الإنترنت وفي المكتب",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8" asChild>
                <Link href="/about">اعرف المزيد عنا</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-4">آراء عملائنا</h3>
              <blockquote className="text-lg leading-relaxed mb-4">
                &ldquo;شكرًا لكم على مساعدتي في الحصول على تأشيرة الزوج. كان الفريق محترفًا ودودًا ومحفّزًا طوال العملية.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold text-primary">م</span>
                </div>
                <div>
                  <p className="font-medium">محمد أحمد</p>
                  <p className="text-sm text-muted-foreground">عميل ناجح - فيزا الزوج</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
