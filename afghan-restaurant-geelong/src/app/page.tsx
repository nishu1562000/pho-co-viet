import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { Hero } from "@/components/sections/Hero";
import { KnownFor } from "@/components/sections/KnownFor";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { PraiseStrip } from "@/components/sections/PraiseStrip";
import { Reviews } from "@/components/sections/Reviews";
import { TakeawayBanner } from "@/components/sections/TakeawayBanner";
import { Visit } from "@/components/sections/Visit";
import { FloatingCall } from "@/components/ui/FloatingCall";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-full bg-pomegranate px-5 py-3 font-semibold text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <PraiseStrip />
        <KnownFor />
        <MenuPreview />
        <TakeawayBanner />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <FloatingCall />
      <RevealObserver />
    </>
  );
}
