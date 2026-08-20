"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import {
  FileText,
  Calendar,
  Receipt,
  MessageCircle,
  Upload,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

interface Stats {
  documents: number
  bookings: number
  upcomingBookings: number
  invoices: number
  unpaidInvoices: number
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    documents: 0,
    bookings: 0,
    upcomingBookings: 0,
    invoices: 0,
    unpaidInvoices: 0,
  })
  const [userName, setUserName] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadDashboard() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (user) {
        setUserName(user.user_metadata?.full_name || "عميلنا الكريم")

        const [docs, bookings, upcoming, invoices, unpaid] = await Promise.all([
          supabase.from("client_documents").select("id", { count: "exact", head: true }).eq("client_id", user.id),
          supabase.from("client_bookings").select("id", { count: "exact", head: true }).eq("client_id", user.id),
          supabase.from("client_bookings").select("id", { count: "exact", head: true }).eq("client_id", user.id).eq("status", "booked").gte("appointment_date", new Date().toISOString()),
          supabase.from("client_invoices").select("id", { count: "exact", head: true }).eq("client_id", user.id),
          supabase.from("client_invoices").select("id", { count: "exact", head: true }).eq("client_id", user.id).eq("status", "pending"),
        ])

        setStats({
          documents: docs.count || 0,
          bookings: bookings.count || 0,
          upcomingBookings: upcoming.count || 0,
          invoices: invoices.count || 0,
          unpaidInvoices: unpaid.count || 0,
        })
      }
      setLoading(false)
    }
    loadDashboard()
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-primary">مرحباً، {userName}</h1>
        <p className="text-muted-foreground">إليك نظرة عامة على حسابك</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-primary">{stats.documents}</p>
                <p className="text-sm text-muted-foreground">مستندات مرفوعة</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-primary">{stats.upcomingBookings}</p>
                <p className="text-sm text-muted-foreground">مواعيد قادمة</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-primary">{stats.bookings}</p>
                <p className="text-sm text-muted-foreground">إجمالي المواعيد</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-primary">{stats.invoices}</p>
                <p className="text-sm text-muted-foreground">فواتير</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <Receipt className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">إجراءات سريعة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/book" className="block">
              <Button variant="outline" className="w-full justify-start gap-3 h-12">
                <Calendar className="w-5 h-5 text-primary" />
                احجز موعد جديد
              </Button>
            </Link>
            <Link href="/dashboard/documents" className="block">
              <Button variant="outline" className="w-full justify-start gap-3 h-12">
                <Upload className="w-5 h-5 text-primary" />
                رفع مستند جديد
              </Button>
            </Link>
            <a href="#" onClick={(e) => {
              e.preventDefault()
              document.dispatchEvent(new CustomEvent("open-chat"))
            }} className="block">
              <Button variant="outline" className="w-full justify-start gap-3 h-12">
                <MessageCircle className="w-5 h-5 text-primary" />
                تحدث مع المستشار الذكي
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">آخر النشاطات</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 bg-muted rounded-lg animate-pulse" />
                ))}
              </div>
            ) : stats.documents === 0 && stats.bookings === 0 ? (
              <div className="text-center py-8">
                <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">لا توجد نشاطات بعد</p>
                <p className="text-sm text-muted-foreground mt-1">
                  ابدأ برفع مستنداتك أو حجز موعد
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {stats.upcomingBookings > 0 && (
                  <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium text-sm">موعد قادم</p>
                      <p className="text-xs text-muted-foreground">لديك موعد قادم</p>
                    </div>
                  </div>
                )}
                {stats.unpaidInvoices > 0 && (
                  <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                    <Receipt className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-medium text-sm">فواتير معلقة</p>
                      <p className="text-xs text-muted-foreground">لديك فواتير لم تُدفع بعد</p>
                    </div>
                  </div>
                )}
                {stats.documents > 0 && (
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <div>
                      <p className="font-medium text-sm">مستندات مرفوعة</p>
                      <p className="text-xs text-muted-foreground">{stats.documents} مستندات في حسابك</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
