import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, CreditCard, Users, Mail } from "lucide-react"

const sections = [
  {
    icon: FileText,
    title: "قبول الشروط",
    content: `باستخدام موقعنا arabicvisaconsultant.co.uk أو خدماتنا، فإنك توافق على هذه الشروط والأحكام. إذا لم توافق على أي من هذه الشروط، يرجى عدم استخدام موقعنا أو خدماتنا.

تُحق هذه الشروط entre en vigueur من تاريخ آخر تحديث لهذا المستند.`,
  },
  {
    icon: Users,
    title: "تعريف الخدمات",
    content: `نقدم استشارات هجرة متخصصة تشمل:

• استشارات تأشيرة الزوج/الزوجة
• استشارات تأشيرة العمل
• استشارات لم شمل الأسرة
• استشارات تأشيرة الطلاب
• استشارات الإقامة الدائمة والجنسية
• مساعدة في تعبئة الطلبات والمستندات
• التمثيل أمام وزارة الداخلية البريطانية

ملاحظة مهمة: نحن ليسوا شركة محاماة (solicitors firm). خدماتنا تستشارية وتخطيطية.`,
  },
  {
    icon: AlertTriangle,
    title: "حدود المسؤولية",
    content: `يجب أن تدرك أن:

• المعلومات المقدمة على موقعنا هي معلومات عامة فقط وليسها طابع قانوني رسمي
• لا نضمن نتيجة محددة لأي طلب تأشيرة
• قرارات التأشيرة ت depend exclusively on وزارة الداخلية البريطانية (Home Office)
• نن دائماً باستشارة قانونية متخصصة للحالات المعقدة
• لا نتحمل المسؤولية عن أي قرار تأشيرة يصدر عن الحكومة البريطانية
• المعلومات على موقعنا قد تتغير دون إشعار مسبق`,
  },
  {
    icon: CreditCard,
    title: "الدفع والرسوم",
    content: `• رسوم الاستشارة الأولية: مجانية (استشارة تقييمية)
• رسوم الخدمات: يتم الاتفاق عليها مسبقاً كتابياً قبل بدء أي عمل
• الدفع: يجب الدفع وفقاً للجدول الزمني المتفق عليه
•_METHODS: نقبل الدفع بالتحويل البنكي وبطاقات الائتمان
• الاسترداد: يمكن استرداد المبلغ إذا لم تبدأ الخدمة بعد. إذا بدأت الخدمة، يعتمد الاسترداد على النسبة المبنية`,
  },
  {
    icon: Scale,
    title: "ال الملكية الفكرية",
    content: `• جميع المحتويات على موقعنا (نصوص، صور، تصميم) محمية بحقوق الملكية الفكرية
• لا تنسخ أو توزع المحتوى دون إذن كتابي منا
• يمكنك مشاركة روابط صفحات موقعنا
• المستندات المعدة لك هي ملكك الخاص`,
  },
  {
    icon: FileText,
    title: "تعديل الشروط",
    content: `نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ آخر تحديث. يُنصح بمراجعة هذه الشروط بشكل دوري.

استمرارك في استخدام موقعنا بعد التعديلات يشكل موافقتك على الشروط المحدثة.`,
  },
  {
    icon: Mail,
    title: "التواصل",
    content: `إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل معنا:

البريد الإلكتروني: info@arabicvisaconsultant.co.uk
الهاتف: +44 123 456 7890
العنوان: لندن، المملكة المتحدة`,
  },
]

export default function TermsPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">الشروط والأحكام</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            الشروط والأحكام التي تحكم استخدام موقعنا وخدماتنا
          </p>
          <p className="text-white/60 mt-4 text-sm">
            آخر تحديث: يناير 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">
                مرحبًا بك في موقع استشارات الهجرة العربية. تُحدد الشروط والأحكام التالية الحقوق والالتزامات الخاصة بك عند استخدام موقعنا وخدماتنا. يرجى قراءتها بعناية.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {sections.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
