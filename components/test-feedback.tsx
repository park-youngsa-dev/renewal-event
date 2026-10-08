import { ArrowRight, Check, ListChecks, LockKeyhole } from "lucide-react";
import { EventSection } from "@/components/event-section";
import { Button } from "@/components/ui/button";
import { feedbackCheckpoints, feedbackFormUrl } from "@/lib/event-content";
import { cn } from "@/lib/utils";

export function TestFeedback() {
  return (
    <EventSection number={3} title="의견 수렴 및 주요 체크 포인트">
      <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
          사이트 이용 중 불편하신 사항이나 발견하신 오류는 실시간으로 작성하여 보내주세요! <strong>네이버 폼을 통해 간단하게 접수 가능합니다.</strong>
        </p>
        <div className="space-y-2.5 rounded-xl border border-slate-200/80 bg-white p-4">
          <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600">
            <ListChecks aria-hidden="true" className="h-4 w-4" /> 주요 제보 대상 (예시)
          </h3>
          <ul className="flex flex-wrap gap-2 text-xs text-slate-700">
            {feedbackCheckpoints.map(({ title, description, fullWidth }) => (
              <li key={title} className={cn("flex w-full items-center gap-2 rounded p-1.5 hover:bg-slate-50", !fullWidth && "sm:w-[calc((100%-0.5rem)/2)]")}>
                <Check aria-hidden="true" className="h-3 w-3 shrink-0 text-indigo-500" />
                <span><strong>{title}:</strong> {description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-2 text-center">
          <Button asChild className="group flex h-auto w-full gap-3 whitespace-normal rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-emerald-600/30 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-600/50 focus-visible:ring-emerald-600 motion-reduce:transform-none motion-reduce:transition-none sm:text-lg">
            <a href={feedbackFormUrl} target="_blank" rel="noopener noreferrer" aria-describedby="naver-login-note">
              <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-black">N</span>
              <span>네이버 폼으로 의견 제보하기</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />
              <span className="sr-only">(새 탭에서 열림)</span>
            </a>
          </Button>
          <p id="naver-login-note" className="mt-2 text-[13px] text-slate-400">
            <LockKeyhole aria-hidden="true" className="mr-1 inline-block h-2.5 w-2.5" />
            네이버 로그인해주세요. 그래야 이미지 첨부 기능 사용 가능합니다.
          </p>
        </div>
      </div>
    </EventSection>
  );
}
