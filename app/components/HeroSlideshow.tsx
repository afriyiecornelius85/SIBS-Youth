"use client";

import Link from "next/link";
import { useEffect, useReducer, useState, useSyncExternalStore } from "react";

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

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

type SlideshowState = { activeIndex: number; loadedIndices: Set<number> };
type SlideshowAction = { type: "advance" } | { type: "goto"; index: number };

function withLoaded(activeIndex: number, loadedIndices: Set<number>): SlideshowState {
  const upcoming = (activeIndex + 1) % slides.length;
  if (loadedIndices.has(activeIndex) && loadedIndices.has(upcoming)) {
    return { activeIndex, loadedIndices };
  }
  return { activeIndex, loadedIndices: new Set(loadedIndices).add(activeIndex).add(upcoming) };
}

function slideshowReducer(state: SlideshowState, action: SlideshowAction): SlideshowState {
  const activeIndex =
    action.type === "advance" ? (state.activeIndex + 1) % slides.length : action.index;
  return withLoaded(activeIndex, state.loadedIndices);
}

export default function HeroSlideshow() {
  const [{ activeIndex, loadedIndices }, dispatch] = useReducer(
    slideshowReducer,
    withLoaded(0, new Set()),
  );
  const [hovering, setHovering] = useState(false);
  // null = no explicit user choice yet, so the reduced-motion preference decides.
  const [playOverride, setPlayOverride] = useState<boolean | null>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const playing = playOverride ?? !prefersReducedMotion;
  const paused = hovering || !playing;

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      dispatch({ type: "advance" });
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="hero-slideshow"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="hero-slide-photos" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            className={index === activeIndex ? "hero-slide-photo active" : "hero-slide-photo"}
            key={slide.image}
          >
            {loadedIndices.has(index) ? (
              <img
                src={slide.image}
                alt=""
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="hero-slide-scrim" aria-hidden="true" />

      <button
        type="button"
        className="hero-arrow hero-arrow-prev"
        aria-label="Show previous slide"
        onClick={() => dispatch({ type: "goto", index: (activeIndex - 1 + slides.length) % slides.length })}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button
        type="button"
        className="hero-arrow hero-arrow-next"
        aria-label="Show next slide"
        onClick={() => dispatch({ type: "goto", index: (activeIndex + 1) % slides.length })}
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

        <div className="hero-dots-row">
          <div className="hero-dots" role="group" aria-label="Choose a headline to show">
            {slides.map((slide, index) => (
              <button
                key={slide.heading}
                type="button"
                className={index === activeIndex ? "hero-dot active" : "hero-dot"}
                aria-label={`Show headline ${index + 1} of ${slides.length}: ${slide.heading}`}
                aria-current={index === activeIndex}
                onClick={() => dispatch({ type: "goto", index })}
              />
            ))}
          </div>
          <button
            type="button"
            className="hero-play-toggle"
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            aria-pressed={!playing}
            onClick={() => setPlayOverride(!playing)}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 4l14 8-14 8V4z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
