"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  eyebrow: string;
  heading: string;
  lede: string;
  image: string;
  imageAlt: string;
};

const slides: Slide[] = [
  {
    eyebrow: "A SIBS International youth movement",
    heading: "SIBS YOUTH",
    lede: "Preparing young people to lead with character, serve with courage, build useful skills, and create positive change in their communities.",
    image: "/hero-intro.jpg",
    imageAlt: "Group of African students standing together outdoors",
  },
  {
    eyebrow: "Leadership Labs",
    heading: "Lead With Character",
    lede: "Practical sessions that build confidence, communication, planning, and real responsibility.",
    image: "/leadership-labs.jpg",
    imageAlt: "Young man speaking into a microphone at a leadership session",
  },
  {
    eyebrow: "Football Academy",
    heading: "Showcase Your Talent",
    lede: "A youth football academy where promising players train, compete, and get seen.",
    image: "/football-academy.jpg",
    imageAlt: "Youth football players training on a dirt pitch",
  },
  {
    eyebrow: "Cape Coast, Ghana",
    heading: "Opening Doors to Opportunity",
    lede: "A commerce and entrepreneurship initiative helping Cape Coast's youth build businesses and futures.",
    image: "/cape-coast.jpg",
    imageAlt: "Scenic view over Cape Coast, Ghana",
  },
  {
    eyebrow: "Digital Skills",
    heading: "Build Useful Skills",
    lede: "Hands-on learning in technology, media, and design for a changing world.",
    image: "/digital-skills.jpg",
    imageAlt: "Young professional working on a laptop in a training room",
  },
  {
    eyebrow: "Service Projects",
    heading: "Serve With Courage",
    lede: "Volunteers showing up for community health outreach days, turning empathy into hands-on service.",
    image: "/health-outreach-team.jpg",
    imageAlt: "SIBS YOUTH volunteers in white coats posing together at a community health outreach event",
  },
  {
    eyebrow: "Service Projects",
    heading: "Create Positive Change",
    lede: "Community action days that bring health screenings, care, and connection directly to the people who need them.",
    image: "/health-outreach-community.jpg",
    imageAlt: "Community members seated under a tent at a SIBS YOUTH health outreach event",
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
      <div className="hero-slide-photos" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            className={index === activeIndex ? "hero-slide-photo active" : "hero-slide-photo"}
            key={slide.image}
          >
            <img src={slide.image} alt="" />
          </div>
        ))}
      </div>
      <div className="hero-slide-scrim" aria-hidden="true" />

      <button
        type="button"
        className="hero-arrow hero-arrow-prev"
        aria-label="Show previous slide"
        onClick={() => setActiveIndex((index) => (index - 1 + slides.length) % slides.length)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button
        type="button"
        className="hero-arrow hero-arrow-next"
        aria-label="Show next slide"
        onClick={() => setActiveIndex((index) => (index + 1) % slides.length)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="hero-overlay">
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

        <div className="hero-actions" aria-label="SIBS YOUTH quick links">
          <Link className="button primary" href="/programs">
            Explore Programs
          </Link>
          <Link className="button secondary" href="/contact">
            Partner With Us
          </Link>
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
    </div>
  );
}
