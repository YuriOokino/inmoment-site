"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export function Stats() {
  return (
    <section
      id="section-stats"
      className="theme-3 py-16 md:py-24 lg:py-36"
    >
      <div className="container mx-auto w-full max-w-[1200px] px-4">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20 w-full max-w-lg">
          <a href="#" className="w-fit">
            <Button
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              title="Button"
              style={{ color: 'var(--accent-primary)' }}
              className="mb-3 md:mb-4 font-semibold"
            >
              Try out how we can help your case
            </Button>
          </a>
          <h3 className="mb-3 text-6xl font-bold md:mb-4 md:text-9xl lg:text-10xl" style={{ color: 'var(--text-primary)' }}>
            Powerful on its own. Unstoppable together.
          </h3>
          <p className="md:text-md" style={{ color: 'var(--text-secondary)' }}>
            The new InMoment platform is built from the ground up to handle signal, insight, and action, all in one connected system. These are the core capabilities that power results.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="w-full border-l-2 pl-8" style={{ borderColor: 'var(--border-primary)' }}>
            <h4 className="text-md leading-[1.4] font-bold" style={{ color: 'var(--text-secondary)' }}>
              Conversational feedback
            </h4>
            <p className="mb-2 text-10xl leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]" style={{ color: 'var(--accent-primary)' }}>
              3x
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>More customer engagement through voice, chat, and open text. No more survey fatigue.</p>
          </div>
          <div className="w-full border-l-2 pl-8" style={{ borderColor: 'var(--border-primary)' }}>
            <h4 className="text-md leading-[1.4] font-bold" style={{ color: 'var(--text-secondary)' }}>
              Predictive Intelligence
            </h4>
            <p className="mb-2 text-10xl leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]" style={{ color: 'var(--accent-primary)' }}>
              50%
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>Faster resolution by predicting priorities before they escalate.</p>
          </div>
          <div className="w-full border-l-2 pl-8" style={{ borderColor: 'var(--border-primary)' }}>
            <h4 className="text-md leading-[1.4] font-bold" style={{ color: 'var(--text-secondary)' }}>
              AI(PI) Layer
            </h4>
            <p className="mb-2 text-10xl leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]" style={{ color: 'var(--accent-primary)' }}>
              API
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>Modular AI-powered APIs that integrate with your tools and automate insight delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
