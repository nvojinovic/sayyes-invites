import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import LivePreview from "../components/home/LivePreview";
import HowItWorks from "../components/home/HowItWorks";
import PainReminder from "../components/home/PainReminder";
import Pricing from "../components/home/Pricing";
import FirstCTA from "../components/home/FirstCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-ink overflow-x-hidden">
      <Hero />
      <PainReminder />
      <LivePreview />
      <TrustBar />
      <HowItWorks />
      <Pricing />
      <FirstCTA />
    </main>
  );
}
