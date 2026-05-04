import { useParams } from "react-router-dom";
import { weddings } from "../data/weddings";

export default function WeddingPage() {
  const { slug } = useParams();
  const wedding = weddings.find((item) => item.slug === slug);

  if (!wedding) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1>Stranica nije pronadena.</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <p>Digitalna pozivnica</p>
      <h1 className="text-4xl font-bold mt-2">{wedding.couple}</h1>
      <p className="mt-4">{wedding.date}</p>
      <p>{wedding.location}</p>
      <p className="mt-6 max-w-md">{wedding.intro}</p>
    </main>
  );
}
