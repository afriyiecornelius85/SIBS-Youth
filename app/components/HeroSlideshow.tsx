"use client";

import { useEffect, useState } from "react";

type Slide = {
  eyebrow: string;
  heading: string;
  lede: string;
};

const slides: Slide[] = [
  {
    eyebrow: "A SIBS International youth movement",
    heading: "SIBS YOUTH",
    lede: "Preparing young people to lead with character, serve with courage, build useful skills, and create positive change in their communities.",
  },
  {
    eyebrow: "Leadership Labs",
    heading: "Lead With Character",
    lede: "Practical sessions that build confidence, communication, planning, and real responsibility.",
  },
  {
    eyebrow: "Service Projects",
    heading: "Serve With Courage",
    lede: "Community action days where youth teams identify needs and deliver measurable help.",
  },
  {
    eyebrow: "Digital Skills",
    heading: "Build Useful Skills",
    lede: "Hands-on learning in technology, media, and design for a changing world.",
  },
];

const AUTO_ADVANCE_MS = 6000;

export default function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="hero-slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-slide-viewport" aria-live="off">
        {slides.map((slide, index) => (
          <div
            className={index === activeIndex ? "hero-slide active" : "hero-slide"}
            key={slide.heading}
            aria-hidden={index !== activeIndex}
          >
            <p className="eyebrow">{slide.eyebrow}</p>
            <h1>{slide.heading}</h1>
            <p className="hero-lede">{slide.lede}</p>
          </div>
        ))}
      </div>

      <div className="hero-dots" role="group" aria-label="Choose a headline to show">
        {slides.map((slide, index) => (
          <button
            key={slide.heading}
            type="button"
            className={index === activeIndex ? "hero-dot active" : "hero-dot"}
            aria-label={`Show headline ${index + 1} of ${slides.length}: ${slide.heading}`}
            aria-current={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
