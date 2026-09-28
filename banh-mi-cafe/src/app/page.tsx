import { BestSellers } from "@/components/sections/BestSellers";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Order } from "@/components/sections/Order";
import { Pillars } from "@/components/sections/Pillars";
import { Reviews } from "@/components/sections/Reviews";
import { TheSpace } from "@/components/sections/TheSpace";
import { Visit } from "@/components/sections/Visit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Pillars />
      <BestSellers />
      <Reviews />
      <TheSpace />
      <Visit />
      <Order />
    </>
  );
}
