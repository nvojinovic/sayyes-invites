import { useEffect } from "react";
import WeddingInvitation from "./WeddingInvitation";

/**
 * Entry wrapper for the Ivana & Dimitrije wedding template.
 *
 * Responsibilities:
 * - Overrides the main-app body background with the wedding palette
 *   (scoped via a class on <body> so we don't touch the homepage).
 * - Overrides --color-gold and --color-ivory on the wrapper element so
 *   that Tailwind v4 utility classes pick up the wedding token values
 *   instead of the homepage values (CSS cascade, no class renaming needed).
 * - Restores everything on unmount.
 */
export default function IvanaDimitrijeTemplate() {
  useEffect(() => {
    document.body.classList.add("wedding-root");
    document.body.style.background =
      "radial-gradient(circle at 0% 0%, rgba(168,188,143,0.18), transparent 40%), " +
      "radial-gradient(circle at 100% 0%, rgba(201,169,97,0.10), transparent 45%), " +
      "radial-gradient(circle at 50% 100%, rgba(168,188,143,0.18), transparent 50%), " +
      "#FAF7F2";
    return () => {
      document.body.classList.remove("wedding-root");
      document.body.style.background = "";
    };
  }, []);

  return (
    // Override the two theme tokens that conflict with the homepage palette
    <div
      style={
        {
          "--color-gold": "#C9A961",
          "--color-ivory": "#F5EFE6",
        } as React.CSSProperties
      }
    >
      <WeddingInvitation />
    </div>
  );
}
