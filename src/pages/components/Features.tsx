"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Features() {
  return (
    <section id="section-features" className="px-40 py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg pb-24">
          <div>
            <h2 className="text-4xl mb-6 leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Long heading is what you see here in this feature section
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor
              interdum nulla.
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
                Medium length section heading goes here
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="mt-6 md:mt-8">
                <Button
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
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
                Medium length section heading goes here
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="mt-6 md:mt-8">
                <Button
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
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
                Medium length section heading goes here
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="mt-6 md:mt-8">
                <Button
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
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
                Medium length section heading goes here
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="mt-6 md:mt-8">
                <Button
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
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
