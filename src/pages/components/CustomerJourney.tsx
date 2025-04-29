"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useRef, useState, useCallback, useEffect } from "react";
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
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft <= 0);
      setIsAtEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth);
    }
  }, []);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      // Check initial position
      handleScroll();
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
    <section id="section-journey" data-theme="theme-2" className="w-full overflow-x-hidden md:py-24 lg:py-28 bg-[var(--bg-primary)]">
      <div className="container mx-auto max-w-[1200px]">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20 w-full max-w-lg">
          <a href="#" className="w-fit">
            <Button
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              title="See the journey in action"
              className="mb-3 md:mb-4 font-semibold text-accent"
            >
              See the journey in action
            </Button>
          </a>
          <h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl text-text-primary">
            How it works from first signal to final action
          </h2>
          <p className="md:text-md text-text-secondary">
            InMoment turns raw customer feedback into intelligent action. Here's how the platform moves from input to impact, all in one flow.
          </p>
        </div>
      </div>
      <div className="Carousel_root relative Carousel_variant-inset" style={{ "--Carousel-gap": "8px" } as React.CSSProperties}>
        <div 
          className="Carousel_content overflow-x-auto" 
          ref={scrollRef}
          style={{ 
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          } as React.CSSProperties}
        >
          <div className="Carousel_inner flex gap-4">
            <style>
              {`
                .Carousel_variant-inset .Carousel_inner {
                  --edge: calc((100vw - 1200px) / 2);
                  --min-edge: calc(var(--edge) - var(--Carousel-gap));
                  --min-padding: calc(1rem - var(--Carousel-gap));
                }
                .Carousel_variant-inset .Carousel_inner::before,
                .Carousel_variant-inset .Carousel_inner::after {
                  content: "";
                  display: block;
                  min-width: max(var(--min-edge), var(--min-padding));
                  flex-shrink: 0;
                }
                .Carousel_content::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            {features.map((feature, idx) => (
              <div key={idx} className="Carousel_item flex-shrink-0" style={{ width: "336px" }}>
                <div className="flex flex-col bg-background-secondary rounded-xl border border-border-primary h-full">
                  <div className="h-[220px] w-full flex items-center justify-center rounded-t-xl overflow-hidden">
                    <img
                      src={feature.icon.src}
                      alt={feature.icon.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-between p-6 gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-text-primary">{feature.heading}</h3>
                      <p className="text-base text-text-secondary whitespace-normal break-words">{feature.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <Button
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                        title={feature.buttons[0].title}
                        className="text-accent"
                      >
                        {feature.buttons[0].title}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hide-tablet Spacer_root" style={{ "--height": "64px" } as React.CSSProperties} />
        <div className="container mx-auto max-w-[1200px] mt-8">
          <div className="hide-tablet show-js flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              disabled={isAtStart}
              className={`!rounded-round p-4 text-text-primary border border-border-primary shadow-lg hover:bg-muted focus:outline-none ${isAtStart ? 'opacity-40 cursor-not-allowed' : ''}`}
              style={{ backgroundColor: 'var(--color-neutral-darker)' }}
              onClick={() => scrollBy(-350)}
            >
              <RxChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              disabled={isAtEnd}
              className={`!rounded-round p-4 text-text-primary border border-border-primary shadow-lg hover:bg-muted focus:outline-none ${isAtEnd ? 'opacity-40 cursor-not-allowed' : ''}`}
              style={{ backgroundColor: 'var(--color-neutral-darker)' }}
              onClick={() => scrollBy(350)}
            >
              <RxChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
