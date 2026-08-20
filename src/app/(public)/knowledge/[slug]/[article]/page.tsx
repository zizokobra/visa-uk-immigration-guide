import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Calendar, Clock, AlertTriangle } from "lucide-react"

const articleContent: Record<string, {
  title: string
  titleEn: string
  category: string
  categorySlug: string
  lastUpdated: string
  readTime: string
  sections: Array<{ subtitle: string; text?: string; items?: string[] }>
}> = {
  "spouse-visa-requirements": {
    title: "متطلبات تأشيرة الزوج",
    titleEn: "Spouse Visa Requirements",
    category: "فيزا الزوج/الزوجة",
    categorySlug: "visa-spouse",
    lastUpdated: "أغسطس 2026",
    readTime: "5 دقائق قراءة",
    sections: [
      {
        subtitle: "نظرة عامة",
        text: "تأشيرة الزوج (Spouse Visa) تتيح للشركاء الانضمام إلى زوجهم أو زوجتهم في المملكة المتحدة. يجب أن يكون الشريك المقيم في المملكة المتحدة مواطناً بريطانياً أو مقيماً دائماً (ILR) أو صاحب حماية.",
      },
      {
        subtitle: "المتطلبات الأساسية",
        items: [
          "علاقة زوجية حقيقية ومستمرة",
          "الشريك في المملكة المتحدة يجب أن يكون مواطناً بريطانياً أو مقيماً دائماً",
          "العمر 18 سنة فأكثر",
          "الإقامة في سكن مناسب",
          "nistest للدعم المالي",
        ],
      },
      {
        subtitle: "متطلبات الدخل",
        text: "الحد الأدنى للدخل هو £18,600 سنوياً. قد يكون هذا أعلى في بعض الحالات، مثل إذا كان لديك أطفال يعيشون في المملكة المتحدة.",
        items: [
          "لا أطفال: £18,600 سنوياً",
          "طفل واحد إضافي: £22,400 سنوياً",
          "طفلان إضافيان: £25,200 سنوياً",
          "كل طفل إضافي: +£2,800 سنوياً",
        ],
      },
      {
        subtitle: "المستندات المطلوبة",
        items: [
          "جواز سفر ساري المفعول",
          "شهادة الزواج",
          "إثبات الدخل (كشف حساب بنكي، payslips)",
          "إثبات السكن (عقد إيجار، mortgage statement)",
          "اختبار IELTS A1 في اللغة الإنجليزية",
          "للرعاية الصحية (IHS)",
        ],
      },
      {
        subtitle: "خطوات التقديم",
        items: [
          "1. جمع جميع المستندات المطلوبة",
          "2. ملء طلب التأشيرة عبر الإنترنت",
          "3. دفع رسوم الطلب و IHS",
          "4. حجز موعد فيمركز التأشيرات",
          "5. تقديم المستندات والبصمات",
          "6. انتظار القرار",
        ],
      },
      {
        subtitle: "مدة المعالجة",
        text: "عادةً ما تستغرق معالجة طلبات تأشيرة الزوج 8-12 أسبوعاً من خارج المملكة المتحدة. يمكنك أيضاً اختيار خدمة التسريع (Priority Service) للمعالجة في 5-7 أيام عمل.",
      },
    ],
  },
  "spouse-visa-income-requirement": {
    title: "متطلبات الدخل لتأشيرة الزوج",
    titleEn: "Income Requirement for Spouse Visa",
    category: "فيزا الزوج/الزوجة",
    categorySlug: "visa-spouse",
    lastUpdated: "أغسطس 2026",
    readTime: "4 دقائق قراءة",
    sections: [
      {
        subtitle: "نظرة عامة",
        text: "متطلب الدخل هو أحد أهم العناصر في طلب تأشيرة الزوج. يجب على الشريك في المملكة المتحدة إثبات أنه يكسب ما يكفي لدعم الزوج والعائلية.",
      },
      {
        subtitle: "الحد الأدنى للدخل",
        items: [
          "لا أطفال: £18,600 سنوياً",
          "طفل واحد إضافي: £22,400 سنوياً",
          "طفلان إضافيان: £25,200 سنوياً",
          "كل طفل إضافي: +£2,800 سنوياً",
        ],
      },
      {
        subtitle: "طرق إثبات الدخل",
        items: [
          "الدخل من التوظيف (6 أشهر على الأقل)",
          "الدخل من العمل الحر (12 شهراً على الأقل)",
          "الادخار (£62,500 أو أكثر)",
          "الدخل من إيجار العقارات",
          "المزايا الحكومية (في بعض الحالات)",
        ],
      },
    ],
  },
  "skilled-worker-visa-overview": {
    title: "نظرة عامة على تأشيرة العامل الماهر",
    titleEn: "Skilled Worker Visa Overview",
    category: "فيزا العمل والعامل الماهر",
    categorySlug: "visa-work",
    lastUpdated: "أغسطس 2026",
    readTime: "6 دقائق قراءة",
    sections: [
      {
        subtitle: "ما هي تأشيرة العامل الماهر؟",
        text: "تأشيرة العامل الماهر (Skilled Worker Visa) هي التأشيرة الرئيسية للعمل في المملكة المتحدة. جاءت ل Replace تأشيرة Tier 2 General القديمة.",
      },
      {
        subtitle: "المتطلبات الأساسية",
        items: [
          "عرض عمل من صاحب عمل مرخص (Licensed Sponsor)",
          "الحد الأدنى للراتب: £26,200 سنوياً أو Market Rate (أيهما أعلى)",
          "مستوى مؤهل أكاديمي: RQF Level 3 أو أعلى",
          "اختبار IELTS B1 في اللغة الإنجليزية",
          "الرصيد المالي: £1,270 لمدة 28 يوماً",
        ],
      },
      {
        subtitle: "أنواع التأشيرة حسب المهارة",
        items: [
          "Skilled Worker: الوظائف ذات المهارة (RQF 3+)",
          "Health and Care Worker: العاملون في مجال الرعاية الصحية",
          "Senior or Specialist Worker: الكبار أو المتخصصون",
          "International Sportsperson: الرياضيون الدوليون",
        ],
      },
    ],
  },
  "asylum-application-process": {
    title: "خطوات طلب اللجوء",
    titleEn: "Asylum Application Process",
    category: "اللجوء والحماية",
    categorySlug: "visa-asylum",
    lastUpdated: "أغسطس 2026",
    readTime: "7 دقائق قراءة",
    sections: [
      {
        subtitle: "ما هو طلب اللجوء؟",
        text: "طلب اللجوء هو طلب تقديم شخص غير قادر على العودة إلى بلده بسبب الخوف من الاضطهاد. المملكة المتحدة ملزمة بقوانين اللجوء الدولية.",
      },
      {
        subtitle: "خطوات التقديم",
        items: [
          "1. تقديم الطلب في أقرب وقت ممكن بعد الوصول",
          "2. مقابلة تسجيل (Screening Interview)",
          "3. ملء نموذج SN1 (getAsylum Application Form)",
          "4. مقابلة اللجوء الكاملة (Substantive Interview)",
          "5. انتظار قرار Home Office",
          "6. إذا تم القبول: حماية/refugee status",
          "7. إذا تم الرفض: حق الاستئناف",
        ],
      },
      {
        subtitle: "الدعم المتاح",
        items: [
          "مساعدة مالية أسبوعية (£49.18 لكل شخص)",
          "سكن مقدم من Home Office",
          "الوصول للرعاية الصحية (NHS)",
          "التعليم للأطفال",
          "الحق في العمل (في بعض الحالات)",
        ],
      },
    ],
  },
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string; article: string }>
}) {
  const { slug, article } = await params
  const articleData = articleContent[article]

  if (!articleData) {
    return (
      <div className="py-16 text-center container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">المقال غير موجود</h1>
        <Link href={`/knowledge/${slug}`} className="text-primary hover:underline">
          العودة للقسم
        </Link>
      </div>
    )
  }

  return (
    <>
      <section className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <Link href="/knowledge" className="hover:text-primary">قاعدة المعرفة</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/knowledge/${articleData.categorySlug}`} className="hover:text-primary">
              {articleData.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{articleData.title}</span>
          </nav>
        </div>
      </section>

      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">{articleData.title}</h1>
            <p className="text-muted-foreground">{articleData.titleEn}</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                آخر تحديث: {articleData.lastUpdated}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {articleData.readTime}
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {articleData.sections.map((section, idx) => (
              <section key={idx} className="mb-8">
                <h2 className="text-xl font-bold text-primary mb-4">{section.subtitle}</h2>
                {section.text && <p className="text-muted-foreground leading-relaxed mb-4">{section.text}</p>}
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 bg-secondary/10 border border-secondary/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">تنبيه مهم</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  هذه المعلومات عامة فقط وقد تتغير. قوانين الهجرة معقدة وتختلف من حالة لأخرى. 
                  للحصول على نصيحة محددة لوضعك، يُنصح بشدة باستشارة متخصصة. تواصل معنا لحجز موعد.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors text-center"
            >
              احجز استشارة حول هذا الموضوع
            </Link>
            <Link
              href={`/knowledge/${articleData.categorySlug}`}
              className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-center"
            >
              العودة لقسم {articleData.category}
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
