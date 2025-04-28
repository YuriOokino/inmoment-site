"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Audiences() {
  return (
    <section
      id="section-audiences"
      className="theme-2 py-16 md:py-24 lg:py-36"
    >
      <div className="container mx-auto w-full max-w-[1200px] px-4">
        <div className="w-full max-w-lg pb-24">
          <div>
            <h2 className="text-4xl mb-6 leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              CX isn't owned by one team. So we built a platform for all of them.
            </h2>
          </div>
          <div>
            <p className="md:text-md">
            From frontline support to product strategy, customer experience is shaped by decisions across your entire organization. Whether you're resolving issues, prioritizing roadmaps, or measuring impact, InMoment is the system that connects the dots.
            </p>
          </div>
        </div>
        <div className="mb-24 flex justify-center">
          <img
            className="w-full"
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            alt="Full width placeholder image"
          />
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                CX Teams
              </h3>
              <p>
              Track and improve experience across every channel.
              </p>
              <div className="mt-6 md:mt-8">
                <Button
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="font-semibold"
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Product Leaders
              </h3>
              <p>
              Identify friction and launch improvements faster.
              </p>
              <div className="mt-6 md:mt-8">
                <Button
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="font-semibold"
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Support Ops
              </h3>
              <p>
              Surface urgent issues before escalation.
              </p>
              <div className="mt-6 md:mt-8">
                <Button
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="font-semibold"
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Executives
              </h3>
              <p>
              Get clear ROI metrics and predictive retention trends.
              </p>
              <div className="mt-6 md:mt-8">
                <Button
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="font-semibold"
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
