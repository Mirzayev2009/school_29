"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { learning } from "@/lib/school-data";
import { ArrowUpRightIcon } from "./icons";

gsap.registerPlugin(useGSAP);

export function LearningTabs() {
  const [active, setActive] = useState(0);
  const panel = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const selected = learning[active];

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(panel.current, {
        y: 8,
        opacity: 0.4,
        duration: 0.32,
        ease: "power2.out",
      });
    },
    { scope: panel, dependencies: [active], revertOnUpdate: true },
  );

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = (index + 1) % learning.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (index - 1 + learning.length) % learning.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = learning.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="learning-layout">
      <div className="learning-copy">
        <div
          className="learning-tabs"
          role="tablist"
          aria-label="Ta’lim bosqichlari"
          aria-orientation="vertical"
        >
          {learning.map((item, index) => (
            <button
              key={item.id}
              id={`tab-${item.id}`}
              role="tab"
              aria-selected={active === index}
              aria-controls="learning-panel"
              tabIndex={active === index ? 0 : -1}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              onClick={() => setActive(index)}
              onKeyDown={(event) => navigate(event, index)}
            >
              <span>{item.title}</span>
              <span className="tab-range">{item.range}</span>
              <ArrowUpRightIcon />
            </button>
          ))}
        </div>
        <div
          ref={panel}
          className="learning-panel"
          role="tabpanel"
          id="learning-panel"
          aria-labelledby={`tab-${selected.id}`}
          tabIndex={0}
        >
          <p>{selected.description}</p>
          <ul>
            {selected.subjects.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="learning-photo photo-frame">
        <Image
          src="/images/school/classroom-1.png"
          alt="Samarqand shahar 29-maktabining sinf xonasi"
          fill
          sizes="(max-width: 800px) 90vw, 45vw"
        />
      </div>
    </div>
  );
}
