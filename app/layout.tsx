import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "박영사 홈페이지 리뉴얼 가오픈 테스트 & EVENT",
  description:
    "박영사 홈페이지 리뉴얼 가오픈 테스트 안내. 10월 8일~18일, 새로워진 사이트를 체험하고 오류 및 개선 의견을 네이버 폼으로 전달해 주세요.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-slate-900 font-sans text-slate-700 antialiased [scrollbar-color:#475569_#1e293b] [scrollbar-width:thin]">
        {children}
      </body>
    </html>
  );
}
