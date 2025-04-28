"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { RxChevronRight, RxChevronLeft } from "react-icons/rx";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  icon: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

const features: FeaturesProps[] = [
  {
    icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Icon 1" },
    heading: "Collect",
    description: "Capture voice, chat, and open text across every channel. All inputs are unified into a single stream of signal.",
    buttons: [
      {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    ],
  },
  {
    icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Icon 2" },
    heading: "Understand",
    description: "AI parses emotion, urgency, and key themes. You get clear, structured insight without manual tagging.",
    buttons: [
      {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    ],
  },
  {
    icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Icon 3" },
    heading: "Prioritize",
    description: "Important trends and customers are automatically surfaced. No digging required.",
    buttons: [
      {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    ],
  },
  {
    icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Icon 4" },
    heading: "Act",
    description: "Trigger workflows, alerts, and assignments directly from the insight. Teams stay proactive.",
    buttons: [
      {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    ],
  },
  {
    icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Icon 5" },
    heading: "Measure",
    description: "Track outcomes, resolution speed, and experience improvements. Close the loop with confidence.",
    buttons: [
      {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    ],
  },
];

export function CustomerJourney() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full overflow-x-hidden py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20 w-full max-w-lg">
          <a href="#" className="w-fit">
            <Button
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              title="See the journey in action"
              className="mb-3 md:mb-4 font-semibold"
            >
              See the journey in action
            </Button>
          </a>
          <h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
            How it works from first signal to final action
          </h2>
          <p className="md:text-md">
            InMoment turns raw customer feedback into intelligent action. Here's how the platform moves from input to impact, all in one flow.
          </p>
        </div>
      </div>
      <div className="relative w-full">
        {/* Left Arrow */}
        <button
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-white text-black border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none"
          onClick={() => scrollBy(-350)}
          aria-label="Scroll left"
          type="button"
        >
          <RxChevronLeft size={28} />
        </button>
        {/* Right Arrow */}
        <button
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-white text-black border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none"
          onClick={() => scrollBy(350)}
          aria-label="Scroll right"
          type="button"
        >
          <RxChevronRight size={28} />
        </button>
        <div
          ref={scrollRef}
          className="carousel-scroll flex overflow-x-auto hide-scrollbar gap-6 md:gap-8 px-4 md:px-8 scroll-smooth"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-background-secondary rounded-xl border border-border-primary min-w-[336px] max-w-[336px] snap-start"
            >
              <div className="h-[220px] w-full flex items-center justify-center rounded-t-xl overflow-hidden">
                <img
                  src={feature.icon.src}
                  alt={feature.icon.alt}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col flex-1 justify-between p-6 gap-4">
                <div>
                  <h3 className="font-bold text-lg mb-1">{feature.heading}</h3>
                  <p className="text-base text-muted-foreground whitespace-normal break-words">{feature.description}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    title={feature.buttons[0].title}
                  >
                    {feature.buttons[0].title}
                  </Button>
                  <button className="rounded-full p-2 bg-muted">
                    <RxChevronRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
