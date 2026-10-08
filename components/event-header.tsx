import { HeaderGlow, RenewalIndicator } from "@/components/event-motion";

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
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-6 bg-white [clip-path:ellipse(60%_100%_at_50%_100%)]" />
    </header>
  );
}
