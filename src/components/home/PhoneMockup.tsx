'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function PhoneMockup() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Subtle scroll-linked parallax. As the hero scrolls past, the phone
  // drifts up slightly and gains a hint of scale — adds life without
  // feeling animated or distracting.
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduce ? [1, 1, 1] : [0.985, 1, 0.985],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastTouchY: number | null = null;

    const scrollIframeBy = (deltaY: number) => {
      const iframe = iframeRef.current;
      if (!iframe?.contentWindow) return false;

      const iframeWindow = iframe.contentWindow;
      const iframeScrollTop = iframeWindow.scrollY || 0;
      const iframeScrollHeight = iframeWindow.document.documentElement.scrollHeight;
      const iframeClientHeight = iframeWindow.innerHeight;
      const maxScroll = Math.max(0, iframeScrollHeight - iframeClientHeight);

      const isAtBottom = iframeScrollTop >= maxScroll - 5;
      const isAtTop = iframeScrollTop <= 0;
      const isScrollingDown = deltaY > 0;
      const isScrollingUp = deltaY < 0;

      if ((isScrollingDown && !isAtBottom) || (isScrollingUp && !isAtTop)) {
        iframeWindow.scrollBy(0, deltaY);
        return true;
      }

      return false;
    };

    const handleWheel = (e: WheelEvent) => {
      if (scrollIframeBy(e.deltaY * 1.9)) {
        e.preventDefault();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      lastTouchY = e.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0]?.clientY;
      if (currentY === undefined || lastTouchY === null) return;

      const deltaY = lastTouchY - currentY;
      lastTouchY = currentY;

      if (scrollIframeBy(deltaY)) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      lastTouchY = null;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  return (
    <motion.div
      ref={parallaxRef}
      style={{ y, scale }}
      className="will-change-transform"
    >
      <div
        ref={containerRef}
        className="relative mx-auto aspect-[9/19] w-[212px] animate-float-slow transform-gpu sm:w-[290px] md:w-[310px] cursor-grab active:cursor-grabbing"
        aria-hidden="true"
      >
        <div className="animate-phone-glow absolute -inset-7 bg-[radial-gradient(closest-side,rgba(201,169,106,0.24),transparent_70%)] blur-2xl sm:-inset-10 sm:bg-[radial-gradient(closest-side,rgba(201,169,106,0.28),transparent_70%)]" />

        <div className="relative h-full w-full overflow-hidden rounded-[44px] bg-gradient-to-b from-[#1a1714] to-[#0d0b09] p-[6px] shadow-[0_30px_80px_-20px_rgba(60,40,15,0.45),0_10px_30px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/30">
          <div className="animate-sheen pointer-events-none absolute inset-y-0 -left-1/2 z-30 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

          {/* live invitation screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-[#FAF7F2]">
            <iframe
              ref={iframeRef}
              src="/ivana-dimitrije?preview=true"
              title="Demo pozivnica — Ivana & Dimitrije"
              tabIndex={-1}
              loading="eager"
              className="phone-iframe"
            />
          </div>
        </div>

        <div className="absolute -right-3 top-24 h-1 w-1 rounded-full bg-gold/70 shadow-[0_0_10px_rgba(180,138,74,0.7)]" />
        <div className="absolute -left-2 bottom-32 h-1.5 w-1.5 rounded-full bg-rose/80 shadow-[0_0_10px_rgba(232,212,207,0.9)]" />
      </div>
    </motion.div>
  );
}
