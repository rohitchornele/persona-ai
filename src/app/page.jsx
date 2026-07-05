import Navbar from "@/src/components/landing/Navbar";
import Hero from "@/src/components/landing/Hero";
import Mentors from "@/src/components/landing/Mentors";
import Features from "@/src/components/landing/Features";
import Faq from "@/src/components/landing/Faq";
import CTA from "@/src/components/landing/CTA";
import Footer from "@/src/components/landing/Footer";

export default function LandingPage({ searchParams }) {
  const authRequired = searchParams?.auth === "required";

  return (
    <main id="top" className="min-h-dvh bg-backdrop">
      <Navbar />

      {authRequired && (
        <p className="border-b border-line bg-coral/10 px-4 py-2 text-center text-sm text-coral">
          Sign in to open the chat — use the &quot;Get Started&quot; button below.
        </p>
      )}

      <Hero />
      <Mentors />
      <Features />
      <Faq />
      <CTA />
      <Footer />
    </main>
  );


}
