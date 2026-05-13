import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import LivePreview from "../components/home/LivePreview";
import HowItWorks from "../components/home/HowItWorks";
import PainReminder from "../components/home/PainReminder";
import Pricing from "../components/home/Pricing";
import FirstCTA from "../components/home/FirstCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ivory text-ink">
      <Hero />
      <PainReminder />
      <HowItWorks />
      <LivePreview />
      <Pricing />
      <TrustBar />
      <FirstCTA />
    </main>
  );
}
