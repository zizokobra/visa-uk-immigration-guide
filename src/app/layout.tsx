import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "استشارات الهجرة العربية | Arabic Visa Consultant",
  description: "استشارات هجرة متخصصة في المملكة المتحدة - فيزا الزوج، فيزا العمل، الإقامة الدائمة | Specialist UK Immigration Consultancy",
  keywords: ["immigration", "visa", "هجرة", "تأشيرة", " UK ", "مملكة متحدة"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
