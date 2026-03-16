import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Insurance from "@/components/sections/Insurance";
import Locations from "@/components/sections/Locations";
import Providers from "@/components/sections/Providers";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Providers />
      <Services />
      <Stats />
      <Locations />
      <Insurance />
      <Testimonials />
      <CTABanner />
    </>
  );
}
