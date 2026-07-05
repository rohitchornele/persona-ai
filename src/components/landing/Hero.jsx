// import { Zap } from 'lucide-react'

// import LaunchChatButton from './buttons/LaunchChatButton'

// export const HERO_CONTENT = {
//   badge: 'Built for fast, focused conversations',

//   title: 'Conversations that feel as fast as you think.',

//   description:
//     'Chatter is a clean, distraction-free chat workspace with a desktop-app feel — a solid starting point for a support inbox, a team chat, or an AI assistant.',

//   secondaryButton: {
//     text: 'See how it works',
//     href: '#how-it-works'
//   }
// }

// export default function Hero () {
//   return (
//     <section className='mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24'>
//       <div className='mx-auto max-w-2xl text-center'>
//         <span className='inline-flex items-center gap-1.5 rounded-full border border-line bg-panelAlt px-3 py-1 text-xs font-medium text-muted'>
//           <Zap size={13} className='text-jade' />

//           {HERO_CONTENT.badge}
//         </span>

//         <h1 className='mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl'>
//           {HERO_CONTENT.title}
//         </h1>

//         <p className='mt-4 text-base text-muted sm:text-lg'>
//           {HERO_CONTENT.description}
//         </p>

//         <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
//           <LaunchChatButton className='w-full rounded-full bg-jade px-6 py-3 text-sm font-semibold text-panel transition-transform hover:scale-105 sm:w-auto' />

//           <a
//             href={HERO_CONTENT.secondaryButton.href}
//             className='w-full rounded-full border border-line px-6 py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-panelAlt sm:w-auto'
//           >
//             {HERO_CONTENT.secondaryButton.text}
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }









import Image from "next/image";
import { Sparkles, ArrowRight, BadgeCheck } from "lucide-react";

import LaunchChatButton from "./buttons/LaunchChatButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-16 h-72 w-72 rounded-full bg-jade/10 blur-3xl" />
        <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-12 lg:grid-cols-2 lg:items-center">

        {/* LEFT */}

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panelAlt px-4 py-2 text-sm text-muted">
            <Sparkles className="h-4 w-4 text-jade" />
            AI Personas Inspired by Real Software Educators
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-tight text-ink lg:text-6xl">
            Chat with AI versions of your
            <span className="text-jade"> favorite mentors.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Learn programming, AI, backend engineering, system design and career
            growth through natural conversations with AI mentors inspired by
            experienced software educators.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <LaunchChatButton className="rounded-full bg-jade px-7 py-3 font-semibold text-panel transition hover:scale-105" />

            <a
              href="#personas"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 font-semibold transition hover:bg-panelAlt"
            >
              Meet the Mentors
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-muted">

            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-jade" />
              Web Development
            </span>

            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-jade" />
              AI Engineering
            </span>

            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-jade" />
              Backend
            </span>

            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-jade" />
              Career Guidance
            </span>

          </div>
        </div>

        {/* RIGHT */}

        <div className="relative flex items-center justify-center">

          {/* Hitesh */}

          <div className="absolute left-0 top-0 w-72 rounded-3xl border border-line bg-panel p-5 shadow-2xl transition duration-300 hover:-translate-y-2">

            <span className="inline-flex items-center gap-2 rounded-full bg-jade/10 px-3 py-1 text-xs font-medium text-jade">
              ● Online
            </span>

            <Image
              src="/mentors/hitesh.jpg"
              alt="Hitesh Choudhary"
              width={120}
              height={120}
              className="mx-auto mt-5 rounded-full border-4 border-panelAlt"
            />

            <h3 className="mt-4 text-center text-xl font-semibold">
              Hitesh Choudhary
            </h3>

            <p className="text-center text-sm text-muted">
              Founder • ChaiCode
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2">

              <span className="rounded-full bg-panelAlt px-3 py-1 text-xs">
                React
              </span>

              <span className="rounded-full bg-panelAlt px-3 py-1 text-xs">
                AI
              </span>

              <span className="rounded-full bg-panelAlt px-3 py-1 text-xs">
                Career
              </span>

            </div>

            <div className="mt-5 rounded-2xl bg-panelAlt p-3 text-sm italic text-muted">
              "Haan ji... pehle fundamentals samajhiye 😊"
            </div>

          </div>

          {/* Piyush */}

          <div className="relative ml-52 mt-32 w-72 rounded-3xl border border-line bg-panel p-5 shadow-2xl transition duration-300 hover:-translate-y-2">

            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
              ● Online
            </span>

            <Image
              src="/mentors/piyush.jpg"
              alt="Piyush Garg"
              width={120}
              height={120}
              className="mx-auto mt-5 rounded-full border-4 border-panelAlt"
            />

            <h3 className="mt-4 text-center text-xl font-semibold">
              Piyush Garg
            </h3>

            <p className="text-center text-sm text-muted">
              Backend • AI Engineer
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2">

              <span className="rounded-full bg-panelAlt px-3 py-1 text-xs">
                Docker
              </span>

              <span className="rounded-full bg-panelAlt px-3 py-1 text-xs">
                AI
              </span>

              <span className="rounded-full bg-panelAlt px-3 py-1 text-xs">
                System Design
              </span>

            </div>

            <div className="mt-5 rounded-2xl bg-panelAlt p-3 text-sm italic text-muted">
              "Let's first understand the architecture."
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}