import LandingHero from "@/features/LandingHero/ui/LandingHero";
import LandingCards from "@/features/LandingCards/ui/LandingCards";
import LandingStats from "@/features/LandingStats/ui/LandingStats";
import LandingFooter from "@/features/LandingFooter/ui/LandingFooter";

export default function Home() {
  return (
    <main className="min-h-[calc(100dvh-75px)]">
      <LandingHero />
      <LandingStats />
      <LandingCards />
      <LandingFooter />
    </main>
  );
}
