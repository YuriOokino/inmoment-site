"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@relume_io/relume-ui";
import clsx from "clsx";
import { RxChevronRight } from "react-icons/rx";

const useSectionObserver = () => {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActive(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return { active, sectionRefs };
};

export function MainScroll() {
  const { active, sectionRefs } = useSectionObserver();

  const groups = [
    {
      tagline: "Multi-channel Capture",
      heading: "Meet customers where they are",
      description: "Capture input from voice, text, chat, and surveys, unified in real time. No more siloed tools or fragmented data streams.",
      button: "Start Capturing"
    },
    {
      tagline: "Insight Layer",
      heading: "Let the AI do the heavy lifting",
      description: "InMoment surfaces patterns, themes, and predicted priorities automatically. It's not just reporting, it's interpretation.",
      button: "Explore Insights"
    },
    {
      tagline: "Automated Action",
      heading: "Move form insight, to impact",
      description: "GeTrigger workflows, alerts, and assignments as soon as feedback arrives. Your teams can act before the opportunity passes.",
      button: "Boost Efficiency"
    },
    {
      tagline: "Feedback Loop Tracking",
      heading: "See what changed",
      description: "Track yourMeasure outcomes, track resolution times, and monitor improvement over time. Every interaction adds to the system's intelligence.",
      button: "Start Tracking"
    },
  ];

  return (
    <section id="section-main-scroll" className="px-40 py-16">
      <div className="container">
        <div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
          {/* Left side: scrolling text sections */}
          <div className="grid grid-cols-1 gap-12 md:block">
            {groups.map((group, index) => (
              <div
                key={index}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                data-index={index}
                className="md:h-screen flex flex-col justify-center"
              >
                <p className="mb-3 font-semibold md:mb-4">{group.tagline}</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  {group.heading}
                </h2>
                <p className="md:text-md mb-4">
                  {group.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title={group.button} iconRight={<RxChevronRight />}>
                    {group.button}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: images that fade in/out */}
          <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
            {[1, 2, 3, 4].map((_, index) => (
              <img
                key={index}
                src={`https://d22po4pjz3o32e.cloudfront.net/placeholder-image-${index + 1}.svg`}
                alt={`Placeholder ${index + 1}`}
                className={clsx(
                  "absolute w-full rounded-image transition-opacity duration-500",
                  {
                    "opacity-100": active === index,
                    "opacity-0": active !== index,
                  }
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
