"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, CreditCard, Clock, CheckCircle, Phone, Mail } from "lucide-react"
import { useState } from "react"

const benefits = [
  "استشارة مع مستشار هجرة متخصص",
  "تقييم شامل لحالتك",
  "خطة عمل واضحة للخطوات القادمة",
  "إجابات على جميع أسئلتك",
]

const visaTypes = [
  "فيزا الزوج/الزوجة",
  "فيزا العمل (Skilled Worker)",
  "لم شمل العائلة",
  "فيزا الطلاب",
  "الإقامة الدائمة (ILR)",
  "اللجوء والحماية",
  "أخرى",
]

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">احجز موعدك</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            احجز استشارتك مع أحد مستشارينا المتخصصين في الهجرة
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <CardHeader className="bg-muted/50">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    نموذج الحجز
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h2 className="text-2xl font-bold mb-2">شكراً لطلبك!</h2>
                      <p className="text-muted-foreground mb-6">
                        تم استلام نموذج الحجز الخاص بك. سيتواصل معك فريقنا خلال 24 ساعة لتأكيد الموعد.
                      </p>
                      <Button onClick={() => setSubmitted(false)}>
                        حجز موعد آخر
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">الاسم الكامل *</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="أدخل اسمك الكامل"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">البريد الإلكتروني *</label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="example@email.com"
                            dir="ltr"
                            text-align="right"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">رقم الهاتف *</label>
                          <input
                            type="tel"
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="+44 7XXX XXX XXX"
                            dir="ltr"
                            text-align="right"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">نوع التأشيرة *</label>
                          <select
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                          >
                            <option value="">اختر نوع التأشيرة</option>
                            {visaTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">التاريخ المفضل *</label>
                          <input
                            type="date"
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">الوقت المفضل</label>
                          <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
                            <option value="">اختر الوقت</option>
                            <option value="morning">صباحاً (9:00 - 12:00)</option>
                            <option value="afternoon">ظهراً (12:00 - 15:00)</option>
                            <option value="evening">مساءً (15:00 - 18:00)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">رسالتك (اختياري)</label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                          placeholder="أخبرنا المزيد عن حالتك أو أي أسئلة لديك..."
                        />
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                        <p>
                          بالضغط على &quot;إرسال طلب الحجز&quot;، أنت توافق على{" "}
                          <a href="/privacy" className="text-primary underline">سياسة الخصوصية</a>
                          {" "} الخاصة بنا.
                        </p>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        إرسال طلب الحجز
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">ماذا تتوقع من الاستشارة؟</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span className="font-bold">الدفع</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    الاستشارة الأولى مجانية. الدفع مطلوب فقط عند طلب خدمات إضافية.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-bold">مدة الاستشارة</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    الاستشارة تستغرق 30-60 دقيقة حسب نوع الخدمة المطلوبة.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">هل تحتاج مساعدة؟</h3>
                  <p className="text-white/90 text-sm mb-4">
                    تواصل معنا مباشرة إذا واجهت أي مشكلة
                  </p>
                  <div className="space-y-2">
                    <Button variant="secondary" className="w-full" asChild>
                      <a href="tel:+441234567890">
                        <Phone className="w-4 h-4 ml-2" />
                        اتصل بنا
                      </a>
                    </Button>
                    <Button variant="secondary" className="w-full" asChild>
                      <a href="mailto:info@arabicvisaconsultant.co.uk">
                        <Mail className="w-4 h-4 ml-2" />
                        أرسل إيميل
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
