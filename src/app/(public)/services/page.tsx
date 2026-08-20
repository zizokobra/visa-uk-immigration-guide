import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Briefcase, Home, Shield, GraduationCap, Flag, Clock, FileText, CheckCircle } from "lucide-react"

const services = [
  {
    id: "spouse",
    icon: Users,
    title: "فيزا الزوج/الزوجة",
    subtitle: "Spouse Visa",
    description: "الحصول على تأشيرة للانضمام إلى شريكك في المملكة المتحدة",
    govUrl: "https://www.gov.uk/uk-family-visa/partner-spouse",
    requirements: [
      "أن يكون الشريك مواطناً بريطانياً أو مقيماً دائماً",
      "إثبات العلاقة الزوجية (شهادة زواج)",
      "متطلبات الدخل (£18,600 سنوياً كحد أدنى)",
      "اختبار اللغة الإنجليزية (IELTS A1)",
      " XCTAssert النموذجي: £1,846 (£1,286 تأشيرة + £560 رسوم رعاية صحية)",
    ],
    timeline: "8-12 أسبوعاً للمعالجة",
  },
  {
    id: "work",
    icon: Briefcase,
    title: "فيزا العمل والعامل الماهر",
    subtitle: "Skilled Worker Visa",
    description: "العمل في المملكة المتحدة مع رعاية من صاحب عمل مرخص",
    govUrl: "https://www.gov.uk/skilled-worker-visa",
    requirements: [
      "عرض عمل من صاحب عمل مرخص (Sponsor Licence Holder)",
      "الحد الأدنى للراتب (£26,200 أو Market Rate أيهما أعلى)",
      "مستوى مؤهل أكاديمي (RQF Level 3+)",
      "اختبار اللغة الإنجليزية (IELTS B1)",
      "الرصيد المالي (£1,270 لمدة 28 يوماً)",
    ],
    timeline: "3-8 أسابيع للمعالجة",
  },
  {
    id: "family",
    icon: Home,
    title: "لم شمل العائلة",
    subtitle: "Family Reunification",
    description: "إعادة تجميع أفراد العائلة في المملكة المتحدة",
    govUrl: "https://www.gov.uk/uk-family-visa",
    requirements: [
      "إثبات العلاقة العائلية (شهادة ميلاد أو زواج)",
      "متطلبات الدخل للمقدم (£18,600+ سنوياً)",
      "متطلبات السكن المناسب",
      "اختبار اللغة الإنجليزية عند الطلب",
    ],
    timeline: "12-24 أسبوعاً للمعالجة",
  },
  {
    id: "asylum",
    icon: Shield,
    title: "اللجوء والحماية",
    subtitle: "Asylum & Protection",
    description: "تقديم طلب اللجوء والحصول على الحماية",
    govUrl: "https://www.gov.uk/claim-asylum",
    requirements: [
      "سبب مشروع للخوف من الاضطهاد",
      "تقديم الطلب في أقرب وقت ممكن بعد الوصول",
      "الشهادة الشخصية والمستندات الداعمة",
      "المساعدة القانونية المتاحة (للأبطال المؤهلين)",
    ],
    timeline: "6 أشهر - بضع سنوات (حسب الحالة)",
  },
  {
    id: "student",
    icon: GraduationCap,
    title: "فيزا الطلاب",
    subtitle: "Student Visa",
    description: "الدراسة في المؤسسات التعليمية المعتمدة في المملكة المتحدة",
    govUrl: "https://www.gov.uk/student-visa",
    requirements: [
      "قبول من مؤسسة مرخصة (Licensed Sponsor)",
      "اختبار اللغة الإنجليزية (IELTS B2 أو ما يعادله)",
      "الإثبات المالي (£1,334 شهرياً في لندن، £1,023 خارج لندن)",
      "شهادة ATAS (بعض المجالات الأكاديمية)",
      "التأمين الصحي (IHS)",
    ],
    timeline: "3-6 أسابيع للمعالجة",
  },
  {
    id: "settlement",
    icon: Flag,
    title: "الإقامة الدائمة (ILR)",
    subtitle: "Indefinite Leave to Remain",
    description: "الحصول على الإقامة الدائمة والجنسية البريطانية",
    govUrl: "https://www.gov.uk/indefinite-leave-to-remain",
    requirements: [
      "الإقامة في المملكة المتحدة لمدة 5 سنوات (عادةً)",
      "اجتياز اختبار الحياة في المملكة المتحدة (Life in the UK)",
      "اختبار اللغة الإنجليزية (IELTS B1 أو ما يعادله)",
      "متطلبات الغياب (لا أكثر من 180 يوماً في كل 12 شهراً)",
      "السجل الجنائي النظيف",
    ],
    timeline: "6 أشهر للمعالجة",
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">خدماتنا</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            نقدم استشارات شاملة في جميع مجالات الهجرة والتأشيرة في المملكة المتحدة
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {services.map((service) => (
              <Card key={service.id} id={service.id} className="scroll-mt-24">
                <CardHeader className="bg-muted/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <h4 className="font-bold mb-3">المتطلبات الرئيسية:</h4>
                      <ul className="space-y-2">
                        {service.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-muted rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-bold">مدة المعالجة: {service.timeline}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        المدة تقريبية وقد تختلف حسب الحالة والمستندات المقدمة.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild>
                          <Link href="/book">احجز استشارة</Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href={service.govUrl} target="_blank" rel="noopener noreferrer">
                            المعلومات الرسمية على GOV.UK ↗
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
