import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Users, Briefcase, Home, Shield, AlertCircle, GraduationCap, Flag } from "lucide-react"

const categoryData: Record<string, {
  icon: React.ElementType
  title: string
  titleEn: string
  description: string
  articles: Array<{ slug: string; title: string; excerpt: string }>
}> = {
  "visa-spouse": {
    icon: Users,
    title: "فيزا الزوج/الزوجة",
    titleEn: "Spouse Visa",
    description: "معلومات شاملة عن تأشيرة الشريك والانضمام إلى الزوج أو الزوجة في المملكة المتحدة",
    articles: [
      {
        slug: "spouse-visa-requirements",
        title: "متطلبات تأشيرة الزوج",
        excerpt: "دليل شامل للمتطلبات الأساسية للحصول على تأشيرة الزوج في المملكة المتحدة",
      },
      {
        slug: "spouse-visa-income-requirement",
        title: "متطلبات الدخل",
        excerpt: "شرح مفصل لمتطلبات الدخل والحد الأدنى المطلوب",
      },
      {
        slug: "spouse-visa-application-process",
        title: "خطوات التقديم",
        excerpt: "خطوات التقديم على تأشيرة الزوج خطوة بخطوة",
      },
      {
        slug: "spouse-visa-extension",
        title: "تمديد تأشيرة الزوج",
        excerpt: "كيفية تمديد تأشيرة الزوج بعد 2.5 سنوات",
      },
      {
        slug: "spouse-visa-to-ilr",
        title: "من تأشيرة الزوج إلى الإقامة الدائمة",
        excerpt: "الحصول على الإقامة الدائمة بعد 5 سنوات من تأشيرة الزوج",
      },
    ],
  },
  "visa-work": {
    icon: Briefcase,
    title: "فيزا العمل والعامل الماهر",
    titleEn: "Skilled Worker Visa",
    description: "دليل كامل للحصول على تأشيرة العمل والترقيات المهنية في المملكة المتحدة",
    articles: [
      {
        slug: "skilled-worker-visa-overview",
        title: "نظرة عامة على تأشيرة العامل الماهر",
        excerpt: "شرح مفصل لنظام تأشيرة العامل الماهر الجديد",
      },
      {
        slug: "skilled-worker-sponsorship",
        title: "رعاية صاحب العمل",
        excerpt: "كيف تحصل على رعاية من صاحب عمل مرخص",
      },
      {
        slug: "skilled-worker-salary-requirements",
        title: "متطلبات الراتب",
        excerpt: "الحد الأدنى للراتب ومتطلبات سوق العمل",
      },
      {
        slug: "skilled-worker-switching-employer",
        title: "التبديل بين أصحاب العمل",
        excerpt: "كيفية التبديل من صاحب عمل لآخر مع تأشيرة عمل",
      },
    ],
  },
  "visa-family": {
    icon: Home,
    title: "لم الشمل العائلي",
    titleEn: "Family Reunification",
    description: "كيفية إعادة تجميع أفراد العائلة في المملكة المتحدة",
    articles: [
      {
        slug: "family-reunification-overview",
        title: "نظرة عامة على لم الشمل",
        excerpt: "أنواع برامج لم الشمل العائلي",
      },
      {
        slug: "family-reunification-parents",
        title: "إحضار الوالدين",
        excerpt: "متطلبات إحضار الوالدين لل المملكة المتحدة",
      },
      {
        slug: "family-reunification-children",
        title: "إحضار الأطفال",
        excerpt: "حقوق الأطفال في الانضمام إلى الوالدين",
      },
    ],
  },
  "visa-asylum": {
    icon: Shield,
    title: "اللجوء والحماية",
    titleEn: "Asylum & Protection",
    description: "معلومات عن طلبات اللجوء وحماية اللاجئين في المملكة المتحدة",
    articles: [
      {
        slug: "asylum-application-process",
        title: "خطوات طلب اللجوء",
        excerpt: "كيفية تقديم طلب اللجوء في المملكة المتحدة",
      },
      {
        slug: "asylum-interview-preparation",
        title: "الاستعداد للمقابلة",
        excerpt: "نصائح للتحضير لمقابلة اللجوء",
      },
      {
        slug: "asylum-support-and-accommodation",
        title: "الدعم والسكن",
        excerpt: "المساعدة المتاحة أثناء انتظار قرار اللجوء",
      },
      {
        slug: "asylum-appeal-process",
        title: "خطوات الاستئناف",
        excerpt: "كيفية استئناف قرار رفض طلب اللجوء",
      },
    ],
  },
  "immigration-overstay": {
    icon: AlertCircle,
    title: "الإقامة غير الشرعية وحالة الهجرة",
    titleEn: "Overstay & Status",
    description: "معلومات عن الإقامة غير الشرعية والتدابير التصحيحية المتاحة",
    articles: [
      {
        slug: "overstay-consequences",
        title: "عواقب الإقامة غير الشرعية",
        excerpt: "المخاطر والعواقب القانونية للإقامة غير الشرعية",
      },
      {
        slug: "overstay-10-year-route",
        title: "مسار 10 سنوات",
        excerpt: "الإقامة الدائمة بعد 10 سنوات (Long Residence)",
      },
      {
        slug: "overstay-20-year-route",
        title: "مسار 20 سنة",
        excerpt: "المسار البديل للإقامة الدائمة بعد 20 سنة",
      },
    ],
  },
  "visa-student": {
    icon: GraduationCap,
    title: "فيزا الطلاب",
    titleEn: "Student Visa",
    description: "دليل شامل للدراسة في المملكة المتحدة والحصول على تأشيرة طالب",
    articles: [
      {
        slug: "student-visa-requirements",
        title: "متطلبات تأشيرة الطالب",
        excerpt: "المستندات والمتطلبات اللازمة لتأشيرة الطالب",
      },
      {
        slug: "student-visa-cas-number",
        title: "رقم CAS",
        excerpt: "كيفية الحصول على رقم Confirmation of Acceptance for Studies",
      },
      {
        slug: "student-visa-financial-requirements",
        title: "المتطلبات المالية",
        excerpt: "الإثبات المالي المطلوب لتأشيرة الطالب",
      },
      {
        slug: "student-work-restrictions",
        title: "قيود عمل الطالب",
        excerpt: "ال قيود المفروضة على عمل الطلاب أثناء الدراسة",
      },
    ],
  },
  "settlement-ilr": {
    icon: Flag,
    title: "الإقامة الدائمة والجنسية",
    titleEn: "Settlement & ILR",
    description: "الحصول على الإقامة الدائمة (ILR) والجنسية البريطانية",
    articles: [
      {
        slug: "ilr-requirements",
        title: "متطلبات الإقامة الدائمة",
        excerpt: "الشروط الأساسية للحصول على الإقامة الدائمة",
      },
      {
        slug: "ilr-life-in-uk-test",
        title: "اختبار الحياة في المملكة المتحدة",
        excerpt: "كيفية الاستعداد والتدرب على اختبار Life in the UK",
      },
      {
        slug: "ilr-english-requirement",
        title: "متطلبات اللغة الإنجليزية",
        excerpt: "المستوى المطلوب في اللغة الإنجليزية للإقامة الدائمة",
      },
      {
        slug: "british-citizenship",
        title: "الجنسية البريطانية",
        excerpt: "خطوات الحصول على الجنسية البريطانية بعد الإقامة الدائمة",
      },
      {
        slug: "naturalisation-process",
        title: "عملية التجنس",
        excerpt: "دليل شامل لعملية التجنس البريطاني",
      },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({ slug }))
}

export default async function KnowledgeCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categoryData[slug]

  if (!category) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">القسم غير موجود</h1>
        <Link href="/knowledge" className="text-primary hover:underline">
          العودة لقاعدة المعرفة
        </Link>
      </div>
    )
  }

  const Icon = category.icon

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-4">
            <Link href="/knowledge" className="hover:text-white">قاعدة المعرفة</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{category.title}</span>
          </nav>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{category.title}</h1>
              <p className="text-white/80">{category.titleEn}</p>
            </div>
          </div>
          <p className="mt-4 text-white/90 max-w-2xl">{category.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {category.articles.map((article) => (
              <Link key={article.slug} href={`/knowledge/${slug}/${article.slug}`}>
                <Card className="h-full cursor-pointer group hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                    <div className="mt-4">
                      <span className="text-sm text-primary font-medium group-hover:translate-x-[-4px] inline-block transition-transform">
                        اقرأ المقال ←
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              العودة لجميع الأقسام
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
