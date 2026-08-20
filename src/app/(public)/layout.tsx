import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AIChat } from "@/components/ai-chat"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <AIChat />
    </>
  )
}
