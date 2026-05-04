import { useEffect, type CSSProperties } from "react";
import App from "./App";

export default function IvanaDimitrijeSite() {
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
    <div
      style={
        {
          "--color-gold": "#C9A961",
          "--color-ivory": "#F5EFE6",
        } as CSSProperties
      }
    >
      <App />
    </div>
  );
}
