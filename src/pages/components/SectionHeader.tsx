"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import React from "react";

export function SectionHeader() {
  return (
    <section id="use-case-header" className="px-40 py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-md">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          A seamless experience across teams, tools, and time.
          </h1>
          <p className="md:text-md">
          The following features work together to help you collect, understand, and act on customer feedback, without the friction of legacy CX systems.
          </p>
          <div className="mt-6 flex gap-x-4 md:mt-8">
                <Button title="Button" iconRight={<RxChevronRight />}>Request a demo</Button>
              </div>
        </div>
      </div>
    </section>
  );
}
