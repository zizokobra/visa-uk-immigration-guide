"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import {
  Upload,
  FileText,
  Trash2,
  Download,
  File,
  Image,
  Eye,
} from "lucide-react"

interface Document {
  id: string
  file_name: string
  file_url: string
  file_size: number | null
  document_type: string | null
  uploaded_at: string
}

const documentTypes = [
  { value: "passport", label: "جواز سفر" },
  { value: "brp", label: "بطاقة الإقامة (BRP)" },
  { value: "visa", label: "تأشيرة" },
  { value: "utility_bill", label: "فاتورة مرافق" },
  { value: "bank_statement", label: "كشف حساب بنكي" },
  { value: "payslip", label: "كشف راتب" },
  { value: "tenancy_agreement", label: "عقد إيجار" },
  { value: "marriage_certificate", label: "شهادة زواج" },
  { value: "other", label: "أخرى" },
]

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [selectedType, setSelectedType] = useState("")
  const [signedUrls, setSignedUrls] = useState<Record<string, string>>({})
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    loadDocuments()
  }, [])

  async function loadDocuments() {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const { data } = await supabase
        .from("client_documents")
        .select("*")
        .eq("client_id", user.id)
        .order("uploaded_at", { ascending: false })

      setDocuments(data || [])

      const urls: Record<string, string> = {}
      for (const doc of data || []) {
        const filePath = doc.file_url
        const { data: signedData } = await supabase.storage
          .from("client-documents")
          .createSignedUrl(filePath, 3600)
        if (signedData?.signedUrl) {
          urls[doc.id] = signedData.signedUrl
        }
      }
      setSignedUrls(urls)
    }
    setLoading(false)
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 10 * 1024 * 1024) {
      alert("الملف أكبر من 10MB")
      return
    }

    setUploading(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setUploading(false)
      return
    }

    const fileExt = file.name.split(".").pop()
    const fileName = `${user.id}/${Date.now()}.${fileExt}`

    const { error: uploadError } = await supabase.storage
      .from("client-documents")
      .upload(fileName, file)

    if (uploadError) {
      alert("حدث خطأ أثناء رفع الملف")
      setUploading(false)
      return
    }

    await supabase.from("client_documents").insert({
      client_id: user.id,
      file_name: file.name,
      file_url: fileName,
      file_size: file.size,
      document_type: selectedType || null,
    })

    setSelectedType("")
    if (fileInputRef.current) fileInputRef.current.value = ""
    await loadDocuments()
    setUploading(false)
  }

  async function handleDelete(doc: Document) {
    if (!confirm("هل أنت متأكد من حذف هذا الملف؟")) return

    const supabase = createClient()

    await supabase.storage.from("client-documents").remove([doc.file_url])
    await supabase.from("client_documents").delete().eq("id", doc.id)
    await loadDocuments()
  }

  async function getSignedUrl(docId: string, filePath: string) {
    const supabase = createClient()
    const { data } = await supabase.storage
      .from("client-documents")
      .createSignedUrl(filePath, 3600)
    return data?.signedUrl || "#"
  }

  function formatFileSize(bytes: number | null) {
    if (!bytes) return "غير معروف"
    if (bytes < 1024) return bytes + " B"
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB"
    return (bytes / (1024 * 1024)).toFixed(1) + " MB"
  }

  function getFileIcon(fileName: string) {
    const ext = fileName.split(".").pop()?.toLowerCase()
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext || "")) return Image
    return File
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-primary">مستنداتي</h1>
        <p className="text-muted-foreground">ارفع وأدر مستنداتك هنا (محفوظة بشكل خاص وآمن)</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">رفع مستند جديد</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">نوع المستند</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                dir="rtl"
              >
                <option value="">اختر نوع المستند</option>
                {documentTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">الملف</label>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                onChange={handleUpload}
                disabled={uploading}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary file:ml-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-white file:cursor-pointer"
              />
            </div>
            <div className="flex items-end">
              <Button disabled={uploading} className="w-full sm:w-auto">
                {uploading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    جاري الرفع...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    رفع
                  </span>
                )}
              </Button>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            الملفات المقبولة: PDF, JPG, PNG, DOC, DOCX (حد أقصى 10MB)
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">الملفات المرفوعة ({documents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-muted rounded-lg animate-pulse" />
              ))}
            </div>
          ) : documents.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">لا توجد مستندات مرفوعة</p>
              <p className="text-sm text-muted-foreground mt-1">ارفع مستنداتك للبدء</p>
            </div>
          ) : (
            <div className="space-y-3">
              {documents.map((doc) => {
                const FileIcon = getFileIcon(doc.file_name)
                const typeName = documentTypes.find((t) => t.value === doc.document_type)?.label || "غير محدد"
                const url = signedUrls[doc.id]
                return (
                  <div
                    key={doc.id}
                    className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <FileIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{doc.file_name}</p>
                      <p className="text-xs text-muted-foreground">
                        {typeName} • {formatFileSize(doc.file_size)} •{" "}
                        {new Date(doc.uploaded_at).toLocaleDateString("ar-EG")}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {url && (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-primary"
                          title="عرض"
                        >
                          <Eye className="w-5 h-5" />
                        </a>
                      )}
                      {url && (
                        <a
                          href={url}
                          download={doc.file_name}
                          className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-primary"
                          title="تحميل"
                        >
                          <Download className="w-5 h-5" />
                        </a>
                      )}
                      <button
                        onClick={() => handleDelete(doc)}
                        className="p-2 rounded-lg hover:bg-error/10 text-muted-foreground hover:text-error"
                        title="حذف"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
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
