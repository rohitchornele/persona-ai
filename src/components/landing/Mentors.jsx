import { Sparkles } from 'lucide-react'

import MentorCard from './mentor/MentorCard'
import { MENTORS } from './mentor/mentor-data'

export default function Mentors () {
  return (
    <section id='personas' className='relative overflow-hidden py-24'>
      {/* Background */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute left-0 top-16 h-80 w-80 rounded-full bg-jade/10 blur-3xl' />
        <div className='absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl' />
      </div>

      <div className='mx-auto max-w-5xl px-6'>
        {/* Section Header */}

        <div className='mx-auto max-w-3xl text-center'>
          <span className='inline-flex items-center gap-2 rounded-full border border-line bg-panelAlt px-4 py-2 text-sm font-medium text-muted'>
            <Sparkles size={16} className='text-jade' />
            Meet Your AI Mentors
          </span>

          <h2 className='mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl'>
            Learn from mentors who match
            <span className='text-jade'> your learning style.</span>
          </h2>

          <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted'>
            Every mentor has their own personality, communication style and area
            of expertise. Choose the one that fits your goals and enjoy
            conversations that feel natural, engaging and focused.
          </p>
        </div>

        {/* Mentor Cards */}

        <div className='mt-20 grid gap-8 lg:grid-cols-2'>
          {MENTORS.map(mentor => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>

        {/* Bottom CTA */}

        <div className='mt-20 rounded-3xl border border-line bg-panelAlt/60 p-8 text-center'>
          <h3 className='font-display text-2xl font-semibold text-ink'>
            More mentors are coming soon.
          </h3>

          <p className='mx-auto mt-4 max-w-2xl text-muted'>
            We're continuously adding new AI mentors inspired by experienced
            software engineers and educators, so you'll always have someone to
            learn from—whether you're exploring frontend, backend, DevOps, AI
            engineering or system design.
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-3'>
            {[
              'Backend',
              'Frontend',
              'AI',
              'System Design',
              'DevOps',
              'Career Guidance'
            ].map(item => (
              <span
                key={item}
                className='rounded-full border border-line bg-panel px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-jade hover:text-ink'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
