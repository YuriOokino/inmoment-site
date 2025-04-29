"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import React from "react";

export function IndustriesHeader () {
  return (
    <section
      id="industries-header"
      className="py-16 md:py-24 lg:py-36 bg-[var(--bg-primary)]"
      data-theme="theme-3"
    >
      <div className="container mx-auto w-full max-w-[1200px] px-4">
        <div className="w-full max-w-md">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Outcomes that matter, tailored by industry.
          </h1>
          <p className="md:text-md">
          Explore how teams in retail, finance, healthcare, and more are using InMoment to surface insight, automate action, and deliver measurable business outcomes. Each use case reflects real applications in real environments.</p>
          <div className="mt-6 flex gap-x-4 md:mt-8">
                <Button 
                  title="Button" 
                  iconRight={<RxChevronRight />}
                  style={{ backgroundColor: 'var(--color-primary-base)' }}
                >
                  Request a demo
                </Button>
              </div>
        </div>
      </div>
    </section>
  );
}
