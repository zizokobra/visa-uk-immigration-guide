"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic will be added
    alert("شكراً لرسالتكم. سنتواصل معكم قريباً.")
  }

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا بأي طريقة تناسبك
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>أرسل لنا رسالة</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          dir="rtl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          dir="ltr"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          dir="ltr"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">الموضوع</label>
                        <select
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          dir="rtl"
                        >
                          <option value="">اختر الموضوع</option>
                          <option value="spouse">فيزا الزوج/الزوجة</option>
                          <option value="work">فيزا العمل</option>
                          <option value="family">لم الشمل</option>
                          <option value="asylum">اللجوء والحماية</option>
                          <option value="student">فيزا الطلاب</option>
                          <option value="settlement">الإقامة الدائمة</option>
                          <option value="other">أخرى</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">رسالتك</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        dir="rtl"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <MessageCircle className="w-5 h-5 ml-2" />
                      إرسال الرسالة
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <a href="tel:+441234567890" className="flex items-center gap-3 hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">الهاتف</p>
                        <p className="text-sm text-muted-foreground" dir="ltr">+44 123 456 7890</p>
                      </div>
                    </a>
                    <a href="mailto:info@arabicvisaconsultant.co.uk" className="flex items-center gap-3 hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">البريد الإلكتروني</p>
                        <p className="text-sm text-muted-foreground">info@arabicvisaconsultant.co.uk</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">العنوان</p>
                        <p className="text-sm text-muted-foreground">لندن، المملكة المتحدة</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">ساعات العمل</p>
                        <p className="text-sm text-muted-foreground">الأحد - الخميس: 9 صباحاً - 6 مساءً</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">استشارة مجانية</h3>
                  <p className="text-white/90 text-sm mb-4">
                    هل تحتاج استشارة سريعة؟ اتصل بنا الآن للحصول على استشارة أولى مجانية.
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <a href="tel:+441234567890">
                      <Phone className="w-4 h-4 ml-2" />
                      اتصل الآن
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
