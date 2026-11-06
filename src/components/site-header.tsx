"use client";

import { useEffect, useRef, useState } from "react";
import { navigation, school } from "@/lib/school-data";
import { ArrowUpRightIcon, BookIcon } from "./icons";

export function SchoolMark() {
  return (
    <span className="school-mark">
      <BookIcon />
      <span>
        <strong>{school.name}</strong>
        <span>Bilim bilan kelajak sari</span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const hero = document.getElementById("bosh-sahifa");
    if (!hero) return;
    const headerHeight =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--header-height")
        .trim() || "88px";
    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { rootMargin: `-${headerHeight} 0px 0px 0px`, threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`site-header${overHero ? " is-over-hero" : ""}${open ? " is-menu-open" : ""}`}
    >
      <div className="container header-inner">
        <a
          href="#bosh-sahifa"
          className="logo-link"
          aria-label="29-maktab — bosh sahifa"
          onClick={() => setOpen(false)}
        >
          <SchoolMark />
        </a>
        <nav className="desktop-nav" aria-label="Asosiy navigatsiya">
          {navigation.map((item) => (
            <a className="nav-link" key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="button button-small"
            href="#boglanish"
            onClick={() => setOpen(false)}
          >
            Bog‘lanish <ArrowUpRightIcon />
          </a>
          <button
            ref={button}
            className={`menu-button ${open ? "is-open" : ""}`}
            aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobil navigatsiya"
        hidden={!open}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
            <ArrowUpRightIcon />
          </a>
        ))}
        <a href="#jamoa" onClick={() => setOpen(false)}>
          Bizning ustozlar
          <ArrowUpRightIcon />
        </a>
      </nav>
    </header>
  );
}
