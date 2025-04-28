"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import React from "react";

export function Demo() {
  return (
    <section id="demo" className="theme-1 py-16 md:py-24 lg:py-36">
      <div className="container mx-auto w-full max-w-[1200px] px-4">
        <div className="flex flex-col">
          <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              See how InMoment turns feedback into action
              </h1>
              <p className="md:text-md">
              Whether you're collecting conversations or analyzing themes, the InMoment platform keeps your team aligned and your customers understood, all in one view.
              </p>
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
          {/* Layout: side images top left/right, center image large and below */}
          <div className="relative flex flex-col items-center mt-24" style={{minHeight: '600px'}}>
            {/* Side images */}
            <img
              className="hidden sm:block absolute -left-48 -top-24 w-[30vw] max-w-md rounded-image object-cover"
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 1"
            />
            <img
              className="hidden sm:block absolute -right-24 top-16 w-1/4 max-w-xs rounded-image object-cover"
              style={{transform: 'translateY(-50%)'}}
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 3"
            />
            {/* Center image */}
            <img
              className="w-[80vw] max-w-full rounded-image object-cover"
              style={{marginTop: '6rem'}}
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
