import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Single registration point for all GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Responsive + reduced-motion aware animation helper
export const mm = gsap.matchMedia();

// Reduced motion: disable all animations
mm.add(
  {
    prefersReducedMotion: "(prefers-reduced-motion: reduce)",
  },
  (ctx) => {
    const { prefersReducedMotion } = ctx.conditions!;
    if (prefersReducedMotion) {
      gsap.globalTimeline.timeScale(0);
    }
  }
);

// Responsive breakpoints for animation adjustments
mm.add(
  {
    isMobile: "(max-width: 768px)",
    isTablet: "(min-width: 769px) and (max-width: 1024px)",
    isDesktop: "(min-width: 1025px)",
  },
  (ctx) => {
    const { isMobile } = ctx.conditions!;
    // Reduce animation distance on mobile
    gsap.defaults({
      duration: isMobile ? 0.4 : 0.6,
    });
  }
);

export { gsap, ScrollTrigger };
