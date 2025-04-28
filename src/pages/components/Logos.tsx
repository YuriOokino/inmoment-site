"use client";

import React from "react";

export function Logos() {
  return (
    <section id="section-logos" className="theme-2 py-12 md:py-16 lg:py-20 bg-background-primary">
      <div className="container mx-auto w-full max-w-[1200px] px-4">
        <h1 className="mx-auto mb-6 w-full max-w-lg text-center text-base leading-[1.2] font-bold md:mb-8 md:text-md md:leading-[1.2] text-text-primary">
        Join the 3,000 brands that trust InMoment
        </h1>
        <div className="flex flex-col items-center justify-center gap-y-4 pt-4 pb-2 md:pt-2">
          {/* Row 1: 5 logos */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 w-full mb-4">
            <img
              src="./assets/allianz-logo.svg"
              alt="Allianz logo"
              className="h-12 w-auto md:h-8 object-contain max-w-[150px] invert brightness-0"
            />
            <img
              src="./assets/zoom-logo.svg"
              alt="Zoom logo"
              className="h-12 w-auto md:h-8 object-contain max-w-[150px] invert brightness-0"
            />
            <img
              src="./assets/bmw-logo.svg"
              alt="BMW logo"
              className="h-12 w-auto md:h-8 object-contain max-w-[150px] invert brightness-0"
            />
            <img
              src="./assets/BA-logo.svg"
              alt="British Airways logo"
              className="h-12 w-auto md:h-8 object-contain max-w-[150px] invert brightness-0"
            />
            <img
              src="./assets/mediamarkt-logo.svg"
              alt="MediMarkt logo"
              className="h-12 w-auto md:h-8 object-contain max-w-[150px] invert brightness-0"
            />
          </div>
          {/* Row 2: 4 logos */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 w-full">
            <img
              src="./assets/glassdoor-logo.svg"
              alt="Glassdoor logo"
              className="h-12 w-auto md:h-8 object-contain max-w-[150px] invert brightness-0"
            />
            <img
              src="./assets/docusign-logo.svg"
              alt="Docusign logo"
              className="h-12 w-auto md:h-8 object-contain max-w-[150px] invert brightness-0"
            />
            <img
              src="./assets/hootsuite-logo.svg"
              alt="Hootsuite logo"
              className="h-12 w-auto md:h-8 object-contain max-w-[150px] invert brightness-0"
            />
            <img
              src="./assets/footlocker-logo.svg"
              alt="Footlocker logo"
              className="h-12 w-auto md:h-8 object-contain max-w-[150px] invert brightness-0"
            />
            <img
              src="/assets/daiichisankyo-logo.svg"
              alt="Daiichi Sankyo logo"
              className="h-12 w-auto md:h-8 object-contain max-w-[150px] invert brightness-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
