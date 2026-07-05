// export default function Footer() {
//   return (
//     <footer className="border-t border-line px-4 py-8 text-center text-xs text-muted sm:px-6">
//       <p>Chatter — a demo chat UI. Built with Next.js and Tailwind CSS.</p>
//     </footer>
//   );
// }



export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted md:flex-row">
        <div>
          <h3 className="font-semibold text-ink">
            Chatter
          </h3>

          <p className="mt-1">
            Learn, build and grow by chatting with AI mentors inspired by real software educators.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#personas">Personas</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </footer>
  );
}