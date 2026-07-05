import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function MentorCard({ mentor }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-2 hover:border-jade/40 hover:shadow-[0_25px_80px_rgba(16,185,129,0.12)]">
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-jade/10 blur-3xl transition-all duration-500 group-hover:bg-jade/20" />

      {/* Online Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-line bg-panelAlt px-3 py-1 text-xs font-medium text-muted">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        {mentor.online ? "Online" : "Offline"}
      </div>

<div className="flex items-center justify-center gap-10">
      {/* Avatar */}
      <div className="relative z-10 mt-6 flex justify-center">
        <div className="rounded-full bg-panelAlt p-1 shadow-lg transition-transform duration-300 group-hover:scale-105 ">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="h-28 w-28 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <div className="relative z-10 mt-6 text-center">
        <h3 className="font-display text-2xl font-semibold text-ink">
          {mentor.name}
        </h3>

        <p className="mt-1 text-sm text-muted">
          {mentor.title}
        </p>
      </div>
      </div>

      {/* Description */}
      <p className="relative z-10 mt-5 text-center text-sm leading-7 text-muted">
        {mentor.description}
      </p>

      {/* Quote */}
      <div className="relative z-10 mt-6 rounded-2xl border border-line bg-panelAlt p-4">
        <p className="text-sm italic text-muted">
          "{mentor.quote}"
        </p>
      </div>

      {/* Specialties */}
      <div className="relative z-10 mt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
          Specialties
        </p>

        <div className="flex flex-wrap gap-2">
          {mentor.specialties.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-line bg-panelAlt px-3 py-1 text-xs font-medium text-ink transition group-hover:border-jade/40"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="relative z-10 mt-6 gap-4 flex items-center justify-center">
        {mentor.highlights.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-sm text-muted"
          >
            <CheckCircle2
              size={16}
              className="text-jade"
            />

            {item}
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link href="/chat"
        className="relative z-10 mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-jade px-5 py-3 font-medium text-panel transition-all duration-300 hover:scale-[1.02]"
      >
        {mentor.buttonText}

        <ArrowRight size={18} />
      </Link>
    </div>
  );
}