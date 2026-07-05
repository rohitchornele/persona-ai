// const QUESTIONS = [
//   {
//     q: "Is this connected to a real backend?",
//     a: "Not out of the box — it ships with dummy contacts and a mock sign-in so you can see the whole flow. Swap the data and auth calls for real ones in a couple of clearly marked files.",
//   },
//   {
//     q: "Can I use this for an AI chat product?",
//     a: "Yes — replace the simulated auto-reply with a real API call to your model, ideally with streaming, and keep the rest of the UI as-is.",
//   },
//   {
//     q: "Is the chat route actually protected?",
//     a: "Yes. Next.js middleware checks for a session cookie before /chat routes are allowed to render, and redirects back here otherwise.",
//   },
// ];

// export default function Faq() {
//   return (
//     <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
//       <h2 className="text-center font-display text-2xl font-semibold text-ink sm:text-3xl">
//         Questions, answered
//       </h2>

//       <dl className="mt-10 flex flex-col divide-y divide-line border-y border-line">
//         {QUESTIONS.map(({ q, a }) => (
//           <div key={q} className="py-5">
//             <dt className="font-display font-semibold text-ink">{q}</dt>
//             <dd className="mt-1.5 text-sm text-muted">{a}</dd>
//           </div>
//         ))}
//       </dl>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const QUESTIONS = [
  {
    q: "Are these the real Hitesh Choudhary and Piyush Garg?",
    a: "No. These are AI personas inspired by their public teaching style, communication patterns and areas of expertise. They are designed to provide a familiar learning experience, not to impersonate the real individuals.",
  },
  {
    q: "Will the AI remember my previous conversations?",
    a: "Yes. Your conversations are saved to your account, allowing you to continue learning from where you left off.",
  },
  {
    q: "Can I switch between mentors anytime?",
    a: "Absolutely. Each mentor has an independent conversation history, so you can switch between them whenever you want without losing context.",
  },
  {
    q: "What topics can I ask about?",
    a: "You can ask about programming, web development, backend engineering, AI, system design, DevOps, databases, career guidance and other software engineering topics depending on the mentor.",
  },
  {
    q: "Is my conversation private?",
    a: "Yes. Your chats are linked to your account and are only visible to you.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="py-16"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full border border-line bg-panelAlt px-3 py-1 text-xs font-medium text-muted">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">
            Everything you need to know.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted">
            A few common questions before you start chatting with your AI mentor.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {QUESTIONS.map((item, index) => {
            const open = openIndex === index;

            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-line bg-panel"
              >
                <button
                  onClick={() =>
                    setOpenIndex(open ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-ink">
                    {item.q}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <div className="border-t border-line px-6 py-5">
                    <p className="text-sm leading-7 text-muted">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}