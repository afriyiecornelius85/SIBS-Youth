"use client";

import { cloneElement, useCallback, useRef, useState } from "react";
import type { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

type RevealElement = ReactElement<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>>;

type RevealProps = {
  children: RevealElement;
  variant?: "up" | "left" | "right";
  stagger?: boolean;
  delay?: number;
};

/** Fades/slides its single child element into view the first time it crosses into the viewport. */
export default function Reveal({ children, variant = "up", stagger = false, delay = 0 }: RevealProps) {
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observeNode = useCallback((node: HTMLElement | null) => {
    observerRef.current?.disconnect();
    observerRef.current = null;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    observerRef.current = observer;
  }, []);

  const className = [
    children.props.className,
    stagger ? "reveal-stagger" : "reveal",
    variant === "left" ? "reveal-left" : variant === "right" ? "reveal-right" : "",
    inView ? "in-view" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const style: CSSProperties = { ...children.props.style };
  if (delay) {
    (style as Record<string, string>)["--reveal-delay"] = `${delay}ms`;
  }

  // cloneElement only forwards this ref for React to attach at commit time; it never
  // dereferences `.current` during render, so the rule's "may read during render" concern
  // doesn't apply to this pattern.
  // eslint-disable-next-line react-hooks/refs
  return cloneElement(children, { ref: observeNode, className, style });
}
