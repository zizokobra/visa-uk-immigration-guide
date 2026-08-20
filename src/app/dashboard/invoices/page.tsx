"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { Receipt, CheckCircle, Clock, XCircle, ExternalLink } from "lucide-react"

interface Invoice {
  id: string
  amount: number
  currency: string
  status: string
  description: string | null
  service_type: string | null
  created_at: string
  paid_at: string | null
  stripe_invoice_id: string | null
}

const statusConfig: Record<string, { label: string; icon: React.ElementType; color: string }> = {
  paid: { label: "مدفوعة", icon: CheckCircle, color: "text-success bg-success/10" },
  pending: { label: "معلقة", icon: Clock, color: "text-secondary bg-secondary/10" },
  failed: { label: "فشل الدفع", icon: XCircle, color: "text-error bg-error/10" },
  refunded: { label: "مستردة", icon: Receipt, color: "text-primary bg-primary/10" },
}

const serviceTypes: Record<string, string> = {
  consultation: "استشارة عامة",
  spouse_visa: "فيزا الزوج/الزوجة",
  work_visa: "فيزا العمل",
  asylum: "اللجوء والحماية",
  settlement: "الإقامة الدائمة",
  student_visa: "فيزا الطلاب",
  family: "لم الشمل",
  document_review: "مراجعة مستندات",
  other: "أخرى",
}

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadInvoices()
  }, [])

  async function loadInvoices() {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const { data } = await supabase
        .from("client_invoices")
        .select("*")
        .eq("client_id", user.id)
        .order("created_at", { ascending: false })

      setInvoices(data || [])
    }
    setLoading(false)
  }

  function formatAmount(amount: number, currency: string) {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amount / 100)
  }

  const totalPaid = invoices
    .filter((inv) => inv.status === "paid")
    .reduce((sum, inv) => sum + inv.amount, 0)

  const totalPending = invoices
    .filter((inv) => inv.status === "pending")
    .reduce((sum, inv) => sum + inv.amount, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-primary">فواتيري</h1>
        <p className="text-muted-foreground">عرض سجل الفواتير والمدفوعات</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">إجمالي المدفوعات</p>
            <p className="text-2xl font-bold text-success">{formatAmount(totalPaid, "gbp")}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">المبلغ المعلق</p>
            <p className="text-2xl font-bold text-secondary">{formatAmount(totalPending, "gbp")}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">إجمالي الفواتير</p>
            <p className="text-2xl font-bold text-primary">{invoices.length}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-muted rounded-lg animate-pulse" />
              ))}
            </div>
          ) : invoices.length === 0 ? (
            <div className="text-center py-12">
              <Receipt className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">لا توجد فواتير بعد</p>
            </div>
          ) : (
            <div className="space-y-4">
              {invoices.map((invoice) => {
                const status = statusConfig[invoice.status] || statusConfig.pending
                const StatusIcon = status.icon
                return (
                  <div
                    key={invoice.id}
                    className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${status.color}`}>
                      <StatusIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-medium">
                          {invoice.description || serviceTypes[invoice.service_type || ""] || "فاتورة"}
                        </p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${status.color}`}>
                          {status.label}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {new Date(invoice.created_at).toLocaleDateString("ar-EG", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        {invoice.paid_at && (
                          <span className="mr-2">
                            • تم الدفع:{" "}
                            {new Date(invoice.paid_at).toLocaleDateString("ar-EG")}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-lg">
                        {formatAmount(invoice.amount, invoice.currency)}
                      </p>
                      {invoice.status === "pending" && (
                        <Button size="sm" className="mt-1">
                          ادفع الآن
                        </Button>
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
