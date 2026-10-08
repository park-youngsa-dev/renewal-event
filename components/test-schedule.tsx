import { CalendarCheck } from "lucide-react";
import { EventSection } from "@/components/event-section";

export function TestSchedule() {
  return (
    <EventSection number={1} title="테스트 일정" className="space-y-3">
      <div className="flex items-center justify-between gap-4 rounded-xl border border-indigo-100 bg-indigo-50/60 p-4 sm:p-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md">
            <CalendarCheck aria-hidden="true" className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-indigo-600">
              테스트 진행 기간
            </p>
            <p className="text-base font-black text-slate-800 sm:text-lg">
              <time dateTime="2026-10-08">10월 12일(월)</time> ~{" "}
              <time dateTime="2026-10-18">10월 18일(일)</time>{" "}
              <span className="text-xs font-normal text-slate-500">
                (11일간)
              </span>
            </p>
          </div>
        </div>
      </div>
    </EventSection>
  );
}
