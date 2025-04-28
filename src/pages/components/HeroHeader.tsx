"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function HeroHeader() {
  return (
    <section id="hero-header" className="theme-1 py-16 md:py-24 lg:py-36">
      <div className="container mx-auto w-full max-w-[1200px] px-4">
        <div className="flex flex-col">
          <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Customer Experience, Reimagined.
              </h1>
              <p className="md:text-md">
              The InMoment platform turns customer conversations into insight, action, and measurable business impact. All in real time.
              </p>
              <div className="mt-6 flex gap-x-4 md:mt-8">
                <Button 
                  title="Button"
                  style={{ backgroundColor: 'var(--color-primary-base)' }}
                >
                  Explore the platform
                </Button>
                <Button title="Button" variant="secondary">
                  Request a demo
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
