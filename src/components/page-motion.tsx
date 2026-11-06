"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function PageMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({ defaults: { ease: "expo.out" } });
        timeline
          .set(".hero-title-line", { overflow: "hidden" }, 0)
          .from(
            ".hero-title-line > span",
            { yPercent: 103, duration: 1.15, stagger: 0.09 },
            0.05,
          )
          .from(
            ".hero-description",
            { y: 18, opacity: 0.15, duration: 0.85 },
            0.3,
          )
          .from(".hero-photo img", { scale: 1.045, duration: 1.5 }, 0.05)
          .set(".hero-title-line", { clearProps: "overflow" });

        const controls = gsap.utils.toArray<HTMLElement>(
          ".button, .text-link",
          root.current,
        );
        const cleanups = controls.map((control) => {
          const arrow = control.querySelector("svg");
          if (!arrow) return () => {};
          const tween = gsap.to(arrow, {
            x: 3,
            duration: 0.2,
            ease: "power2.out",
            paused: true,
          });
          const enter = () => tween.play();
          const leave = () => tween.reverse();
          control.addEventListener("pointerenter", enter);
          control.addEventListener("pointerleave", leave);
          control.addEventListener("focus", enter);
          control.addEventListener("blur", leave);
          return () => {
            control.removeEventListener("pointerenter", enter);
            control.removeEventListener("pointerleave", leave);
            control.removeEventListener("focus", enter);
            control.removeEventListener("blur", leave);
          };
        });
        return () => cleanups.forEach((cleanup) => cleanup());
      });
      return () => media.revert();
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
