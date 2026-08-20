import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Database, Lock, Mail, FileText } from "lucide-react"

const sections = [
  {
    icon: Eye,
    title: "المعلومات التي نجمعها",
    content: `نجمع المعلومات التالية عند استخدامك لموقعنا أو خدماتنا:

• معلومات شخصية: الاسم الكامل، البر الإلكتروني، رقم الهاتف، العنوان
• معلومات الهجرة: نوع التأشيرة المطلوبة، حالة التأشيرة الحالية، تاريخ الدخول إلى المملكة المتحدة
• مستندات: النسخ المقدمة من جواز السفر، إثبات العنوان، كشوف الحساب البنكية، وغيرها من المستندات الداعمة
• معلومات الدفع: تفاصيل الفواتير (لا نخزن بيانات البطاقات الائتمانية مباشرة)
• بيانات الاستخدام: عنوان IP، نوع المتصفح، الصفحات التي قمت بزيارتها على موقعنا`,
  },
  {
    icon: Database,
    title: "كيف نستخدم معلوماتك",
    content: `نستخدم معلوماتك للأغراض التالية:

• تقديم الاستشارات الهجرائية وخدمات التأشيرة
• التواصل معك بخصوص طلبك أو مواعيدك
• إعداد المستندات والتقارير اللازمة لطلب التأشيرة
• تحسين خدماتنا وموقعنا الإلكتروني
• الامتثال للقوانين واللوائح المعمول بها
• إرسال تحديثات حول حالة طلبك (بموافقتك)`,
  },
  {
    icon: Shield,
    title: "حماية بياناتك",
    content: `نتخذ إجراءات أمنية صارمة لحماية معلوماتك:

• تشفير البيانات أثناء النقل والتخزين (SSL/TLS)
• وصول محدود للموظفين المخولين فقط
• نسخ احتياطي منتظم وآمن
• مراجعة دورية لإجراءات الأمان
• الامتثال لمعايير حماية البيانات البريطانية والدولية`,
  },
  {
    icon: Lock,
    title: "مشاركة المعلومات",
    content: `قد نشارك معلوماتك مع:

• وزارة الداخلية البريطانية (Home Office) عند تقديم طلبات التأشيرة
• محامون ومستشارون معتمدون يعملون معنا لتقديم خدماتك
• مزودو الخدمات التقنية (استضافة الموقع، نظام إدارة المحتوى)
• الجهات regulators المختصة عند الطلب القانوني

لن نبيع معلوماتك أبداً لأطراف ثالثة لأغراض تسويقية.`,
  },
  {
    icon: FileText,
    title: "حقوقك",
    content: `لديك الحقوق التالية بموجب قانون حماية البيانات (GDPR):

• الحق في الوصول إلى بياناتك الشخصية
• الحق في تصحيح أي معلومات غير دقيقة
• الحق في حذف بياناتك (subject to legal obligations)
• الحق في الاعتراض على معالجة بياناتك
• الحق في نقل بياناتك إلى مزود خدمة آخر
• الحق في سحب الموافقة في أي وقت

لممارسة أي من هذه الحقوق، تواصل معنا على info@arabicvisaconsultant.co.uk`,
  },
  {
    icon: Lock,
    title: "احتفاظ البيانات",
    content: `نحتفظ ببياناتك للمدة التالية:

• بيانات العملاء النشطين: مدة عقد الخدمة + 6 سنوات
• مستندات التأشيرة: حتى 12 شهر بعد اكتمال الخدمة
• سجلات الدفع: 6 سنوات (كما يتطلب القانون)
• بيانات التواصل: حتى طلب الحذف`,
  },
  {
    icon: Mail,
    title: "التواصل معنا",
    content: `إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع بياناتك، يرجى التواصل معنا:

البريد الإلكتروني: info@arabicvisaconsultant.co.uk
الهاتف: +44 123 456 7890
العنوان: لندن، المملكة المتحدة`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">سياسة الخصوصية</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            كيف نجمع ونستخدم ونحمي معلوماتك الشخصية
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
                في استشارات الهجرة العربية (Arabic Visa Consultant)، نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك عند استخدام موقعنا وخدماتنا.
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
