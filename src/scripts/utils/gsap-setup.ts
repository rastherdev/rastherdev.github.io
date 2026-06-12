import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { TextPlugin } from "gsap/TextPlugin";

// Single registration point for all GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin);

// MatchMedia for responsive + reduced-motion aware animations
export const mm = gsap.matchMedia();

// Reduced motion: simplify animations (don't kill them entirely)
mm.add("(prefers-reduced-motion: reduce)", (ctx) => {
  // Override durations to be instant
  gsap.defaults({ duration: 0, overwrite: true });
});

// Responsive breakpoints for animation adjustments
mm.add(
  {
    isMobile: "(max-width: 768px)",
    isTablet: "(min-width: 769px) and (max-width: 1024px)",
    isDesktop: "(min-width: 1025px)",
  },
  (ctx) => {
    const { isMobile } = ctx.conditions!;
    gsap.defaults({
      duration: isMobile ? 0.4 : 0.6,
    });
  }
);

// Reveal animation helper — from() ensures element's natural CSS state is visible
export function revealFrom(
  target: string | Element,
  vars: gsap.TweenVars = {},
  scrollTriggerVars?: ScrollTrigger.Vars
) {
  return gsap.from(target, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power3.out",
    ...vars,
    scrollTrigger: scrollTriggerVars,
  });
}

export { gsap, ScrollTrigger, ScrollSmoother };

