"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, Plus } from "lucide-react"

interface Booking {
  id: string
  appointment_date: string | null
  service_type: string | null
  status: string
  notes: string | null
  created_at: string
}

const statusConfig: Record<string, { label: string; icon: React.ElementType; color: string }> = {
  booked: { label: "محجوز", icon: Calendar, color: "text-primary bg-primary/10" },
  completed: { label: "مكتمل", icon: CheckCircle, color: "text-success bg-success/10" },
  cancelled: { label: "ملغي", icon: XCircle, color: "text-error bg-error/10" },
  no_show: { label: "لم يحضر", icon: AlertCircle, color: "text-secondary bg-secondary/10" },
}

const serviceTypes: Record<string, string> = {
  consultation: "استشارة عامة",
  spouse_visa: "فيزا الزوج/الزوجة",
  work_visa: "فيزا العمل",
  asylum: "اللجوء والحماية",
  settlement: "الإقامة الدائمة",
  student_visa: "فيزا الطلاب",
  family: "لم الشمل",
  other: "أخرى",
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all")

  useEffect(() => {
    loadBookings()
  }, [])

  async function loadBookings() {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const { data } = await supabase
        .from("client_bookings")
        .select("*")
        .eq("client_id", user.id)
        .order("appointment_date", { ascending: false, nullsFirst: false })

      setBookings(data || [])
    }
    setLoading(false)
  }

  const now = new Date().toISOString()
  const filteredBookings = bookings.filter((b) => {
    if (filter === "upcoming") return b.status === "booked" && b.appointment_date && b.appointment_date >= now
    if (filter === "past") return b.status === "completed" || b.status === "cancelled" || (b.appointment_date && b.appointment_date < now)
    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary">مواعيدي</h1>
          <p className="text-muted-foreground">عرض وإدارة مواعيدك</p>
        </div>
        <Link href="/book">
          <Button>
            <Plus className="w-5 h-5 ml-2" />
            حجز موعد جديد
          </Button>
        </Link>
      </div>

      <div className="flex gap-2">
        {(["all", "upcoming", "past"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {f === "all" ? "الكل" : f === "upcoming" ? "القادمة" : "السابقة"}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="pt-6">
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-muted rounded-lg animate-pulse" />
              ))}
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {filter === "all"
                  ? "لا توجد مواعيد"
                  : filter === "upcoming"
                  ? "لا توجد مواعيد قادمة"
                  : "لا توجد مواعيد سابقة"}
              </p>
              <Link href="/book" className="mt-4 inline-block">
                <Button variant="outline">احجز موعدك الأول</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredBookings.map((booking) => {
                const status = statusConfig[booking.status] || statusConfig.booked
                const StatusIcon = status.icon
                return (
                  <div
                    key={booking.id}
                    className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${status.color}`}>
                      <StatusIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-medium">
                          {serviceTypes[booking.service_type || ""] || booking.service_type || "استشارة"}
                        </p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${status.color}`}>
                          {status.label}
                        </span>
                      </div>
                      {booking.appointment_date ? (
                        <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4" />
                          {new Date(booking.appointment_date).toLocaleDateString("ar-EG", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      ) : (
                        <p className="text-sm text-muted-foreground mt-1">
                          الموعد غير محدد بعد
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
