import { ArrowRight } from "lucide-react";

import LaunchChatButton from "./buttons/LaunchChatButton";

export default function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-line bg-panelAlt">
          <div className="mx-auto max-w-3xl px-8 py-14 text-center">
            <span className="rounded-full border border-line bg-panel px-3 py-1 text-xs font-medium text-muted">
              Start Learning Today
            </span>

            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink">
              Your next mentor is just one conversation away.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted">
              Ask coding questions, explore system design, understand AI, prepare
              for interviews, or simply learn something new—anytime, from mentors
              inspired by experienced software educators.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LaunchChatButton className="rounded-full bg-jade px-7 py-3 font-medium text-panel transition hover:scale-105" />

              <a
                href="#personas"
                className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 font-medium text-ink transition-colors hover:bg-panel"
              >
                Meet the Mentors

                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}