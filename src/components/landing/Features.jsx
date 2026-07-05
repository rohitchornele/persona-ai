// import { Zap, Moon, MessageCircle } from "lucide-react";

// const FEATURES = [
//   {
//     icon: Zap,
//     title: "Instant by default",
//     desc: "Messages append the moment you hit send — no spinners between you and the conversation.",
//     accent: "jade",
//   },
//   {
//     icon: Moon,
//     title: "Built-in dark mode",
//     desc: "A considered light and dark theme that's remembered across visits, automatically.",
//     accent: "amber",
//   },
//   {
//     icon: MessageCircle,
//     title: "Made to extend",
//     desc: "Swap the dummy data for a real API or model in a single file — every component just takes props.",
//     accent: "indigo",
//   },
// ];

// export default function Features() {
//   return (
//     <section
//       id="features"
//       className="border-t border-line bg-panelAlt/40 py-20"
//     >
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <h2
//           id="how-it-works"
//           className="text-center font-display text-2xl font-semibold text-ink sm:text-3xl"
//         >
//           Everything you need, nothing you don&apos;t
//         </h2>

//         <div className="mt-10 grid gap-6 sm:grid-cols-3">
//           {FEATURES.map(({ icon: Icon, title, desc, accent }) => (
//             <div
//               key={title}
//               className="rounded-2xl border border-line bg-panel p-6"
//             >
//               <span
//                 className={`flex h-10 w-10 items-center justify-center rounded-full bg-${accent}/15 text-${accent}`}
//               >
//                 <Icon size={18} />
//               </span>
//               <h3 className="mt-4 font-display font-semibold text-ink">
//                 {title}
//               </h3>
//               <p className="mt-1.5 text-sm text-muted">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import {
  Brain,
  MessageSquareText,
  History,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    icon: Brain,
    title: "Unique Mentor Personalities",
    description:
      "Every AI mentor has their own communication style, teaching approach and technical expertise.",
  },
  {
    icon: MessageSquareText,
    title: "Natural Conversations",
    description:
      "Ask follow-up questions, discuss projects and learn through conversations that feel natural.",
  },
  {
    icon: History,
    title: "Persistent Chat History",
    description:
      "Resume previous conversations anytime without losing context or progress.",
  },
  {
    icon: Sparkles,
    title: "Learn by Building",
    description:
      "Get practical explanations, project ideas and real-world guidance instead of memorizing theory.",
  },
  {
    icon: Zap,
    title: "Fast AI Responses",
    description:
      "Powered by modern language models for quick, accurate and context-aware answers.",
  },
  {
    icon: ShieldCheck,
    title: "Private Conversations",
    description:
      "Your chats stay associated with your account so you can continue learning anytime.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full border border-line bg-panelAlt px-3 py-1 text-xs font-medium text-muted">
            Why Choose Mentor AI
          </span>

          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">
            Everything you need to keep learning.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted">
            Designed to make learning software engineering feel like chatting
            with a mentor instead of searching through documentation.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-line bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-jade/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-jade/10 text-jade">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}