import { useReducedMotion, type Variants } from "framer-motion";

/**
 * Shared motion primitives for homepage scroll-reveal animations.
 *
 * Design intent: slow, restrained, premium. Subtle fade-up with optional
 * blur. Honors `prefers-reduced-motion` by collapsing all transforms to a
 * short opacity fade.
 */

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Viewport config used by every `whileInView` / `useInView` call. */
export const VIEWPORT_ONCE = {
  once: true,
  margin: "-60px",
  amount: 0.2,
} as const;

/**
 * Returns reveal variants that automatically adapt to the user's
 * reduced-motion preference. Use with `initial="hidden" animate="show"`
 * (or `whileInView="show"`).
 */
export function useRevealVariants() {
  const reduce = useReducedMotion();

  const fadeUp: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.25 } },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: EASE },
        },
      };

  const fadeUpBlur: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.25 } },
      }
    : {
        hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.9, ease: EASE },
        },
      };

  const fadeIn: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.25 } },
      }
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { duration: 1.1, ease: EASE },
        },
      };

  /** Parent that orchestrates staggered children. */
  const container = (opts?: { stagger?: number; delay?: number }): Variants => ({
    hidden: {},
    show: {
      transition: {
        delayChildren: reduce ? 0 : opts?.delay ?? 0.05,
        staggerChildren: reduce ? 0 : opts?.stagger ?? 0.12,
      },
    },
  });

  /** Message-bubble entrance (slight slide from left + scale). */
  const bubble: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.25 } },
      }
    : {
        hidden: { opacity: 0, x: -14, scale: 0.96 },
        show: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { duration: 0.55, ease: EASE },
        },
      };

  return { fadeUp, fadeUpBlur, fadeIn, container, bubble, reduce };
}
