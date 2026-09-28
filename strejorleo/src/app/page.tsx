import { ClosingCta } from "@/components/sections/ClosingCta";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Location } from "@/components/sections/Location";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { Occasions } from "@/components/sections/Occasions";
import { SocialSection } from "@/components/sections/SocialSection";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Occasions />
      <MenuPreview />
      <Experience />
      <Location />
      <Testimonials />
      <SocialSection />
      <ClosingCta />
    </>
  );
}
