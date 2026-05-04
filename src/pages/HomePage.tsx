import Hero from "../components/home/Hero";
import EmotionalIntro from "../components/home/EmotionalIntro";
import LivePreview from "../components/home/LivePreview";
import MidCTA from "../components/home/MidCTA";
import HowItWorks from "../components/home/HowItWorks";
import FirstCTA from "../components/home/FirstCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-ink overflow-x-hidden">
      <Hero />
      <EmotionalIntro />
      <LivePreview />
      <MidCTA />
      <HowItWorks />
      <FirstCTA />
    </main>
  );
}
