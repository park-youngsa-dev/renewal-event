import { EventBanner } from "@/components/event-banner";
import { EventFooter } from "@/components/event-footer";
import { EventHeader } from "@/components/event-header";
import { TestFeedback } from "@/components/test-feedback";
import { TestSchedule } from "@/components/test-schedule";
import { TestScope } from "@/components/test-scope";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-0 py-0 sm:px-4 sm:py-10">
      <div className="relative w-full max-w-2xl overflow-hidden bg-white text-slate-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] sm:rounded-3xl">
        <EventHeader />
        <main className="space-y-10 px-5 py-6 sm:px-8">
          <EventBanner />
          <TestSchedule />
          <TestScope />
          <TestFeedback />
        </main>
        <EventFooter />
      </div>
    </div>
  );
}
