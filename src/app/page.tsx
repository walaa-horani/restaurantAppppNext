import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CrowdFavorites } from "@/components/CrowdFavorites";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Global Grid Pattern for 'Future' Vibe */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <CrowdFavorites />
        <Footer />
      </div>
    </main>
  );
}
