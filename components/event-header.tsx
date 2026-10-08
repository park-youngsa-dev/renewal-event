import { HeaderGlow, RenewalIndicator } from "@/components/event-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { renewalWebsiteUrl } from "@/lib/event-content";

export function EventHeader() {
  return (
    <header className="relative overflow-hidden bg-slate-900 px-6 pb-16 pt-12 text-center text-white">
      <HeaderGlow />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300 shadow-sm backdrop-blur-md sm:text-sm">
          <RenewalIndicator />
          NEW RENEWAL OPEN
        </div>
        <h1 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          홈페이지 리뉴얼 <br className="sm:hidden" />
          <span className="bg-[linear-gradient(135deg,#6366f1_0%,#a855f7_50%,#ec4899_100%)] bg-clip-text text-transparent">가오픈 테스트</span>
        </h1>
        <p className="mx-auto max-w-md text-sm font-light text-slate-400 sm:text-base">
          더 새로워진 사이트 환경을 미리 체험하고,
          <br className="hidden sm:inline" /> 여러분의 소중한 피드백을 전달해 주세요!
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            asChild
            className="group h-auto min-h-14 w-full max-w-md gap-3 whitespace-normal rounded-xl bg-white px-6 py-4 text-base font-extrabold text-indigo-700 shadow-xl shadow-indigo-500/30 ring-4 ring-white/10 transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-indigo-500/40 focus-visible:ring-white focus-visible:ring-offset-slate-900 motion-reduce:transform-none motion-reduce:transition-none sm:text-lg"
          >
            <a href={renewalWebsiteUrl} target="_blank" rel="noopener noreferrer">
              <span>홈페이지 접속하기</span>
              <ArrowUpRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
              <span className="sr-only">(새 탭에서 열림)</span>
            </a>
          </Button>
        </div>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-6 bg-white [clip-path:ellipse(60%_100%_at_50%_100%)]" />
    </header>
  );
}
