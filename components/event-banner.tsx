import { EventCoffee } from "@/components/event-motion";

export function EventBanner() {
  return (
    <section aria-labelledby="event-title" className="relative overflow-hidden rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-orange-500/10 p-6 shadow-lg sm:p-8">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-amber-400/20 blur-2xl" />
      <div className="absolute right-0 top-0 rounded-bl-xl bg-gradient-to-l from-amber-600 to-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
        SPECIAL EVENT
      </div>
      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <div className="relative shrink-0">
          <div className="flex h-20 w-20 -rotate-3 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-600 to-yellow-400 shadow-xl transition-transform duration-300 hover:rotate-0 motion-reduce:transition-none sm:h-24 sm:w-24">
            <EventCoffee />
          </div>
          <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-2 py-0.5 text-[12px] font-extrabold text-white shadow-lg">TOP 5</span>
        </div>
        <div className="min-w-0 flex-1 space-y-2 text-center sm:text-left">
          <div className="inline-block rounded bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800">
            콘텐츠RnD팀이 쏜다! ☕
          </div>
          <h2 id="event-title" className="text-xl font-black leading-snug text-slate-900 sm:text-2xl">
            &quot;가오픈 테스트 왕을 찾아라!&quot;
          </h2>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
            테스트 기간 동안 많은 오류 사항 및 개선 의견을 전달해 주신 베스트 제보자 <strong className="font-bold text-amber-700 underline">총 5분</strong>께 <span className="font-bold text-slate-800">맛있는 커피 쿠폰</span>을 드립니다!
          </p>
        </div>
      </div>
    </section>
  );
}
