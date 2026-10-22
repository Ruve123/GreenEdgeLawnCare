"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animates elements marked data-hero (on load), data-reveal (on scroll) and data-parallax (hero bg).
export function Animations() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("[data-hero]", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.15 });

      gsap.fromTo("[data-parallax]", { backgroundPositionY: "30%" }, {
        backgroundPositionY: "70%",
        ease: "none",
        scrollTrigger: { trigger: "[data-parallax]", start: "top top", end: "bottom top", scrub: true },
      });

      gsap.set("[data-reveal]", { y: 40, opacity: 0 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15 }),
      });
    });
    return () => mm.revert();
  }, []);

  return null;
}
