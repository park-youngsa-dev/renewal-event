import { Box } from "lucide-react";

export function EventFooter() {
  return (
    <footer className="space-y-3 border-t border-slate-200 bg-slate-100 px-6 py-8 text-center">
      <div className="flex items-center justify-center gap-2 text-sm font-black text-indigo-600">
        <Box aria-hidden="true" className="h-4 w-4" /> 콘텐츠RnD팀
      </div>
      <p className="text-xs text-slate-500">
        본 가오픈 테스트 이벤트는 내부 임직원 및 테스터를 대상으로 진행됩니다.<br />
        문의 사항은 콘텐츠RnD팀으로 직접 전달해 주시기 바랍니다.
      </p>
      <p className="pt-2 text-[12px] text-slate-400">© 2026 Content R&amp;D Team. All rights reserved.</p>
    </footer>
  );
}
