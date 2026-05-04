import Hero from "../components/home/Hero";
import EmotionalIntro from "../components/home/EmotionalIntro";
import TrustBar from "../components/home/TrustBar";
import LivePreview from "../components/home/LivePreview";
import MidCTA from "../components/home/MidCTA";
import HowItWorks from "../components/home/HowItWorks";
import PainReminder from "../components/home/PainReminder";
import Pricing from "../components/home/Pricing";
import FirstCTA from "../components/home/FirstCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-ink overflow-x-hidden">
      <Hero />
      <EmotionalIntro />
      <TrustBar />
      <LivePreview />
      <MidCTA />
      <HowItWorks />
      <PainReminder />
      <Pricing />
      <FirstCTA />
    </main>
  );
}
