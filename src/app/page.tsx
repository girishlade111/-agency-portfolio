import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroStats } from "@/components/IntroStats";
import { WorkGrid } from "@/components/WorkGrid";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Impact } from "@/components/Impact";
import { Pricing } from "@/components/Pricing";
import { Testimonial } from "@/components/Testimonial";
import { FAQ } from "@/components/FAQ";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-background relative selection:bg-black selection:text-white">
      <Header />
      <Hero />
      <IntroStats />
      <WorkGrid />
      <Services />
      <Process />
      <Impact />
      <Pricing />
      <Testimonial />
      <FAQ />
      <Blog />
      <Footer />
    </main>
  );
}