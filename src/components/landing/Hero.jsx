import Image from 'next/image'
import { Sparkles, ArrowRight, BadgeCheck } from 'lucide-react'

import LaunchChatButton from './buttons/LaunchChatButton'

export default function Hero () {
  return (
    <section className='relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute left-20 top-16 h-72 w-72 rounded-full bg-jade/10 blur-3xl' />
        <div className='absolute right-20 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl' />
      </div>

      <div className='mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-6 lg:py-12'>
        {/* LEFT */}

        <div className='text-center lg:text-left'>
          <div className='mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-panelAlt px-4 py-2 text-sm text-muted lg:mx-0'>
            <Sparkles className='h-4 w-4 text-jade' />
            AI Personas Inspired by Real Software Educators
          </div>

          <h1 className='mt-6 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl'>
            Chat with AI versions of your
            <span className='text-jade'> favorite mentors.</span>
          </h1>

          <p className='mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg lg:mx-0 lg:leading-8'>
            Learn programming, AI, backend engineering, system design and career
            growth through natural conversations with AI mentors inspired by
            experienced software educators.
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start'>
            <LaunchChatButton className='rounded-full bg-jade px-7 py-3 font-semibold text-panel transition hover:scale-105' />

            <a
              href='#personas'
              className='inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-3 font-semibold transition hover:bg-panelAlt'
            >
              Meet the Mentors
              <ArrowRight size={18} />
            </a>
          </div>

          <div className='mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted lg:justify-start'>
            <span className='inline-flex items-center gap-2'>
              <BadgeCheck className='h-4 w-4 text-jade' />
              Web Development
            </span>

            <span className='inline-flex items-center gap-2'>
              <BadgeCheck className='h-4 w-4 text-jade' />
              AI Engineering
            </span>

            <span className='inline-flex items-center gap-2'>
              <BadgeCheck className='h-4 w-4 text-jade' />
              Backend
            </span>

            <span className='inline-flex items-center gap-2'>
              <BadgeCheck className='h-4 w-4 text-jade' />
              Career Guidance
            </span>
          </div>
        </div>

        {/* RIGHT */}

        <div className='relative flex min-h-[760px] items-center justify-center lg:min-h-[560px]'>
          {/* Hitesh */}

          <div className='absolute top-0 w-[300px] rounded-3xl border border-line bg-panel p-5 shadow-2xl transition duration-300 hover:-translate-y-2 lg:left-0 lg:w-72'>
            <span className='inline-flex items-center gap-2 rounded-full bg-jade/10 px-3 py-1 text-xs font-medium text-jade'>
              ● Online
            </span>

            <Image
              src='/mentors/hitesh.jpg'
              alt='Hitesh Choudhary'
              width={120}
              height={120}
              className='mx-auto mt-5 h-24 w-24 rounded-full border-4 border-panelAlt object-cover lg:h-[120px] lg:w-[120px]'
            />

            <h3 className='mt-4 text-center text-xl font-semibold'>
              Hitesh Choudhary
            </h3>

            <p className='text-center text-sm text-muted'>Founder • ChaiCode</p>

            <div className='mt-5 flex flex-wrap justify-center gap-2'>
              <span className='rounded-full bg-panelAlt px-3 py-1 text-xs'>
                React
              </span>

              <span className='rounded-full bg-panelAlt px-3 py-1 text-xs'>
                AI
              </span>

              <span className='rounded-full bg-panelAlt px-3 py-1 text-xs'>
                Career
              </span>
            </div>

            <div className='mt-5 rounded-2xl bg-panelAlt p-3 text-sm italic text-muted'>
              "Haan ji... pehle fundamentals samajhiye 😊"
            </div>
          </div>

          {/* Piyush */}

          <div className='absolute top-[340px] w-[300px] rounded-3xl border border-line bg-panel p-5 shadow-2xl transition duration-300 hover:-translate-y-2 lg:relative lg:top-auto lg:ml-52 lg:mt-32 lg:w-72'>
            <span className='inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400'>
              ● Online
            </span>

            <Image
              src='/mentors/piyush.jpg'
              alt='Piyush Garg'
              width={120}
              height={120}
              className='mx-auto mt-5 h-24 w-24 rounded-full border-4 border-panelAlt object-cover lg:h-[120px] lg:w-[120px]'
            />

            <h3 className='mt-4 text-center text-xl font-semibold'>
              Piyush Garg
            </h3>

            <p className='text-center text-sm text-muted'>
              Backend • AI Engineer
            </p>

            <div className='mt-5 flex flex-wrap justify-center gap-2'>
              <span className='rounded-full bg-panelAlt px-3 py-1 text-xs'>
                Docker
              </span>

              <span className='rounded-full bg-panelAlt px-3 py-1 text-xs'>
                AI
              </span>

              <span className='rounded-full bg-panelAlt px-3 py-1 text-xs'>
                System Design
              </span>
            </div>

            <div className='mt-5 rounded-2xl bg-panelAlt p-3 text-sm italic text-muted'>
              "Let's first understand the architecture."
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
