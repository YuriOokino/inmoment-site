"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export function Stats() {
  return (
    <section
      id="section-stats"
      data-theme="theme-3"
      className="py-16 md:py-24 lg:py-36 bg-[var(--bg-primary)]"
      
    >
      <div className="container mx-auto w-full max-w-[1200px] px-4">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20 w-full max-w-lg">
          <a href="#" className="w-fit">
            <Button
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              title="Button"
              className="mb-3 md:mb-4 font-semibold text-accent"
            >
              Try out how we can help your case
            </Button>
          </a>
          <h3 className="mb-3 text-6xl font-bold md:mb-4 md:text-9xl lg:text-10xl text-text-primary">
            Powerful on its own. Unstoppable together.
          </h3>
          <p className="md:text-md text-text-secondary">
            The new InMoment platform is built from the ground up to handle signal, insight, and action, all in one connected system. These are the core capabilities that power results.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="w-full border-l-2 border-border-primary pl-8">
            <h4 className="text-md leading-[1.4] font-bold text-text-secondary">
              Conversational feedback
            </h4>
            <p className="mb-2 text-10xl leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem] text-accent">
              3x
            </p>
            <p className="text-text-secondary">More customer engagement through voice, chat, and open text. No more survey fatigue.</p>
          </div>
          <div className="w-full border-l-2 border-border-primary pl-8">
            <h4 className="text-md leading-[1.4] font-bold text-text-secondary">
              Predictive Intelligence
            </h4>
            <p className="mb-2 text-10xl leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem] text-accent">
              50%
            </p>
            <p className="text-text-secondary">Faster resolution by predicting priorities before they escalate.</p>
          </div>
          <div className="w-full border-l-2 border-border-primary pl-8">
            <h4 className="text-md leading-[1.4] font-bold text-text-secondary">
              AI(PI) Layer
            </h4>
            <p className="mb-2 text-10xl leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem] text-accent">
              API
            </p>
            <p className="text-text-secondary">Modular AI-powered APIs that integrate with your tools and automate insight delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
