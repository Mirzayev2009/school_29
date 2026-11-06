"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gallery } from "@/lib/school-data";
import { ArrowIcon, ArrowUpRightIcon, CloseIcon } from "./icons";

export function PhotoGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const returnFocus = useRef<HTMLButtonElement | null>(null);
  const move = useCallback(
    (direction: number) =>
      setActive(
        (current) => (current + direction + gallery.length) % gallery.length,
      ),
    [],
  );

  function open(index: number, trigger: HTMLButtonElement) {
    setActive(index);
    returnFocus.current = trigger;
    dialog.current?.showModal();
    setIsOpen(true);
  }

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        move(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        move(-1);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, move]);

  return (
    <>
      <div className="gallery-grid">
        {gallery.map((photo, index) => (
          <button
            className={`gallery-photo gallery-photo-${index + 1}`}
            key={photo.label}
            aria-label={`${photo.label} — suratni kattalashtirish`}
            onClick={(event) => open(index, event.currentTarget)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 32vw"
            />
            <span className="gallery-open">
              <ArrowUpRightIcon />
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="gallery-dialog"
        aria-label="Maktab suratlari"
        onClose={() => {
          setIsOpen(false);
          returnFocus.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current.close();
        }}
      >
        {isOpen && (
          <div className="lightbox-content">
            <div className="lightbox-heading">
              <p id="gallery-photo-title">{gallery[active].label}</p>
              <button
                className="icon-button"
                aria-label="Galereyani yopish"
                autoFocus
                onClick={() => dialog.current?.close()}
              >
                <CloseIcon />
              </button>
            </div>
            <div className="lightbox-image">
              <Image
                src={gallery[active].src}
                alt={gallery[active].alt}
                fill
                sizes="90vw"
              />
            </div>
            <div className="lightbox-controls">
              <span aria-live="polite">
                {active + 1} / {gallery.length}
              </span>
              <div>
                <button
                  className="icon-button previous-photo"
                  aria-label="Oldingi surat"
                  onClick={() => move(-1)}
                >
                  <ArrowIcon />
                </button>
                <button
                  className="icon-button"
                  aria-label="Keyingi surat"
                  onClick={() => move(1)}
                >
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
