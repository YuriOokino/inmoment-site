import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import React from "react";

export function FeaturesHeader({ theme = "theme-1"}) {
  return (
    <section
      id="features-header"
      className={`${theme} py-16 md:py-24 lg:py-36`}
    >
      <div className="container mx-auto w-full max-w-[1200px] px-4">
        <div className="w-full max-w-md">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          A seamless experience across teams, tools, and time.
          </h1>
          <p className="md:text-md">
          The following features work together to help you collect, understand, and act on customer feedback, without the friction of legacy CX systems.
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
    </section>
  );
}
