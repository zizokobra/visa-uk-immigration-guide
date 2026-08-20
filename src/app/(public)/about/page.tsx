import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, Globe, Heart } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "التعاطف",
    description: "نفهم صعوبات الإجراءات الهجرائية ونضع أنفسنا في مكانك",
  },
  {
    icon: Award,
    title: "الاحترافية",
    description: "فريق مؤهل وذو خبرة في قوانين الهجرة البريطانية",
  },
  {
    icon: Users,
    title: "التركيز على العميل",
    description: "نجاحك هو نجاحنا. نوفر لك الوقت والجهد",
  },
  {
    icon: Globe,
    title: "التنوع الثقافي",
    description: "نفهم ثقافات مختلفة ونحترم خلفيات عملائنا المتنوعة",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">من نحن</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            تعرف على فريقنا وقصتنا وقيمنا
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">قصتنا</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  بدأت رحلتنا قبل أكثر من 10 سنوات من شغف حقيقي بمساعدة المتحدثين بالعربية في تحقيق أحلامهم في المملكة المتحدة.
                </p>
                <p>
                  كونا ندرك أن الإجراءات الهجرائية قد تكون معقدة ومرهقة، خاصة لمن لا يتحدث الإنجليزية كلغة أولى. لهذا أسسنا مكتباً يقدم استشارات باللغة العربية وبمعايير عالمية.
                </p>
                <p>
                  اليوم، نفخر بمساعدة مئات العملاء سنوياً في الحصول على تأشيراتهم والإقامة الدائمة والجنسية البريطانية.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-6">إنجازاتنا</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">+500</p>
                  <p className="text-muted-foreground">عميل تم مساعدته</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">95%</p>
                  <p className="text-muted-foreground">نسبة النجاح</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">+10</p>
                  <p className="text-muted-foreground">سنوات الخبرة</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">30+</p>
                  <p className="text-muted-foreground">دولة مصدرية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">قيمنا</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">هل أنت مستعد للبدء؟</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة أولى مجانية. فريقنا جاهز لمساعدتك.
          </p>
          <Button size="lg" asChild>
            <Link href="/book">احجز استشارتك المجانية</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
