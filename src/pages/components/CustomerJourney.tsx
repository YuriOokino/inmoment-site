"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useRef, useState } from "react";
import { RxChevronRight } from "react-icons/rx";
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
    heading: "Feature One",
    description: "Description for feature one.",
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
    heading: "Feature Two",
    description: "Description for feature two.",
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
    heading: "Feature Three",
    description: "Description for feature three.",
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
    heading: "Feature Four",
    description: "Description for feature four.",
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
    heading: "Feature Five",
    description: "Description for feature five.",
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
  const [scrollIndex, setScrollIndex] = useState(0);
  const cardWidth = 320; // px, adjust to match your design
  const visibleCards = 4; // number of cards visible at once

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
    setScrollIndex(index);
  };

  const handlePrev = () => {
    if (scrollIndex > 0) scrollToIndex(scrollIndex - 1);
  };
  const handleNext = () => {
    if (scrollIndex < features.length - visibleCards) scrollToIndex(scrollIndex + 1);
  };

  return (
    <section
      id="section-customer-journey"
      className="px-40 py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20 w-full max-w-lg">
          <a href="#" className="mb-8 md:mb-10 w-fit">
            <Button
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              title="See the journey in action"
            >
              See the journey in action
            </Button>
          </a>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            How it works from first signal to final action
          </h2>
          <p className="md:text-md">
            InMoment turns raw customer feedback into intelligent action. Here's how the platform moves from input to impact, all in one flow.
          </p>
        </div>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex-shrink-0 pr-6 md:pr-8"
                style={{ width: cardWidth }}
              >
                <div className="mb-3 md:mb-4">
                  <img src={feature.icon.src} className="size-12" alt={feature.icon.alt} />
                </div>
                <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{feature.heading}</h1>
                <p>{feature.description}</p>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  {feature.buttons.map((button, idx) => (
                    <Button key={idx} {...button}>
                      {button.title}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={scrollIndex === 0}
              className="size-12 rounded-full border border-black flex items-center justify-center disabled:opacity-30"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              disabled={scrollIndex >= features.length - visibleCards}
              className="size-12 rounded-full border border-black flex items-center justify-center disabled:opacity-30"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
