import { Info } from "lucide-react";
import { EventSection } from "@/components/event-section";
import { testScopes } from "@/lib/event-content";
import { cn } from "@/lib/utils";

export function TestScope() {
  return (
    <EventSection number={2} title="테스트 범위" note="* 가오픈 안내 항목 참고">
      <aside className="space-y-1 rounded-r-xl border-l-4 border-amber-400 bg-amber-50 p-4">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-800 sm:text-sm">
          <Info aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span>가오픈 기간 이용 안내</span>
        </div>
        <p className="text-xs leading-relaxed text-amber-900/80">
          현재 내부 가오픈 상태로 전체 사이트 정보가 100% 업데이트되지는 않았습니다. 본 사이트는 회원가입, 회사소개, 1:1 게시판, 견본신청 등 <strong>기본적인 기능 점검</strong>을 목적으로 합니다.
        </p>
      </aside>
      <ul className="flex flex-wrap gap-3">
        {testScopes.map(({ title, description, note, icon: Icon, fullWidth }, index) => (
          <li key={title} className={cn("group w-full rounded-xl border border-slate-200 bg-white p-4 transition-[border-color,box-shadow] duration-200 hover:border-indigo-300 hover:shadow-md motion-reduce:transition-none", !fullWidth && "sm:w-[calc((100%-0.75rem)/2)]")}>
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600 motion-reduce:transition-none">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </div>
              <div className="min-w-0 space-y-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <h3 className="text-sm font-bold text-slate-800">{index + 1}) {title}</h3>
                  {note && <span className="rounded bg-indigo-100 px-1.5 py-0.5 text-[12px] font-semibold text-indigo-700">{note}</span>}
                </div>
                <p className="text-xs text-slate-500">{description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </EventSection>
  );
}
