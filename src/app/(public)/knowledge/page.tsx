"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Users, Briefcase, Home, Shield, AlertCircle, GraduationCap, Flag, BookOpen } from "lucide-react"

const categories = [
  {
    icon: Users,
    title: "فيزا الزوج/الزوجة",
    titleEn: "Spouse Visa",
    slug: "visa-spouse",
    description: "معلومات شاملة عن تأشيرة الشريك والانضمام إلى الزوج أو الزوجة في المملكة المتحدة",
    articleCount: 5,
  },
  {
    icon: Briefcase,
    title: "فيزا العمل والعامل الماهر",
    titleEn: "Skilled Worker Visa",
    slug: "visa-work",
    description: "دليل كامل للحصول على تأشيرة العمل والترقيات المهنية في المملكة المتحدة",
    articleCount: 4,
  },
  {
    icon: Home,
    title: "لم الشمل العائلي",
    titleEn: "Family Reunification",
    slug: "visa-family",
    description: "كيفية إعادة تجميع أفراد العائلة في المملكة المتحدة",
    articleCount: 3,
  },
  {
    icon: Shield,
    title: "اللجوء والحماية",
    titleEn: "Asylum & Protection",
    slug: "visa-asylum",
    description: "معلومات عن طلبات اللجوء وحماية اللاجئين في المملكة المتحدة",
    articleCount: 4,
  },
  {
    icon: AlertCircle,
    title: "الإقامة غير الشرعية وحالة الهجرة",
    titleEn: "Overstay & Status",
    slug: "immigration-overstay",
    description: "معلومات عن الإقامة غير الشرعية والتدابير التصحيحية المتاحة",
    articleCount: 3,
  },
  {
    icon: GraduationCap,
    title: "فيزا الطلاب",
    titleEn: "Student Visa",
    slug: "visa-student",
    description: "دليل شامل للدراسة في المملكة المتحدة والحصول على تأشيرة طالب",
    articleCount: 4,
  },
  {
    icon: Flag,
    title: "الإقامة الدائمة والجنسية",
    titleEn: "Settlement & ILR",
    slug: "settlement-ilr",
    description: "الحصول على الإقامة الدائمة (ILR) والجنسية البريطانية",
    articleCount: 5,
  },
]

export default function KnowledgeBasePage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8" />
            <h1 className="text-4xl font-bold">قاعدة المعرفة</h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            معلومات شاملة ومحدثة عن جميع أنواع التأشيرات والإجراءات الهجرائية في المملكة المتحدة
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground text-center">
              اختر الموضوع الذي تريد معرفة المزيد عنه. للمعلومات الأدق حالتك الشخصية، يُنصح باستشارة متخصصة.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.slug} href={`/knowledge/${category.slug}`}>
                <Card className="h-full cursor-pointer group hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <category.icon className="w-6 h-6 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {category.title}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground">{category.titleEn}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-muted px-2 py-1 rounded">
                        {category.articleCount} مقالات
                      </span>
                      <span className="text-sm text-primary font-medium group-hover:translate-x-[-4px] transition-transform">
                        اقرأ المزيد ←
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-muted rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">لم تجد ما تبحث عنه؟</h2>
            <p className="text-muted-foreground mb-6">
              استخدم شات الذكاء الاصطناعي للحصول على إجابة سريعة، أو احجز استشارة مع مستشارنا المتخصص.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  // Trigger chat widget
                  document.dispatchEvent(new CustomEvent('open-chat'))
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
              >
                تحدث مع المستشار الذكي
              </a>
              <a
                href="/book"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                احجز استشارة
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
