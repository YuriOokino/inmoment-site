import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight, RxDot } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  sections: SectionProps[];
};

export type StructureProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="mb-3 inline-flex items-center gap-2 rounded-[4px] bg-background-secondary px-4 py-2 text-sm font-semibold md:mb-4">
      <RxDot className="text-lg" />
      {children}
    </span>
  );

export const Structure = (props: StructureProps) => {
  const { tagline, heading, description, sections } = {
    ...StructureDefaults,
    ...props,
  };

  
  return (
    <section id="section-structure" className="theme-1 py-16 md:py-24 lg:py-36">
      <div className="container mx-auto w-full max-w-[1200px] px-4">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-2 gap-6 items-start
                        md:grid-cols-2 md:gap-8
                        md:[&>*:nth-child(2n-1)]:transform md:[&>*:nth-child(2n-1)]:translate-y-20">
          {sections.map((section, index) => (
            <div key={index} className="overflow-hidden rounded-[12px] border" style={{ borderColor: 'var(--border-primary)' }}>
              <div className="flex items-center justify-center">
                <img
                  src={section.image.src}
                  className="size-full object-cover"
                  alt={section.image.alt}
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <Tag>{section.tagline}</Tag>
                <h3 className="mt-3 mb-3 text-4xl font-bold leading-[1.2] md:mt-4 md:mb-4 md:text-5xl lg:text-6xl">
                  {section.heading}
                </h3>
                <p>{section.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  {section.buttons.map((button, idx) => (
                    <Button key={idx} {...button}>
                      {button.title}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export const StructureDefaults: Props = {
  tagline: "Try out how we can help your case",
  heading: "A modular platform built for scale, speed, and clarity",
  description: "The InMoment system connects the dots between signal, analysis, and action, with architecture designed for performance and flexibility at every step.",
  sections: [
    {
      tagline: "Input System",
      heading: "Unified Feedback Layer",
      description: "Capture customer input across surveys, voice, messaging, and chat, all routed through a single pipeline.",
      buttons: [
        {
          title: "Explore feedback channels",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
          className: "font-semibold",
        },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 1",
      },
    },
    {
      tagline: "Core Intelligence",
      heading: "AI(PI) Engine",
      description: "Turn raw text into structured insight with LLM-based classification, urgency scoring, and prediction.",
      buttons: [
        {
          title: "See AI in action",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
          className: "font-semibold",
        },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 2",
      },
    },
    {
      tagline: "Output Layer",
      heading: "Insight delivery system",
      description: "Route real-time insights to dashboards, alerts, or your existing tools like Salesforce, Zendesk, or Slack.",
      buttons: [
        {
          title: "View integrations",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
          className: "font-semibold",
        },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 3",
      },
    },
    {
      tagline: "Dev Tools",
      heading: "Open integration framework",
      description: "Easily embed InMoment into your workflows with flexible APIs and enterprise-grade connectors.",
      buttons: [
        {
          title: "Check out our APIs",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
          className: "font-semibold",
        },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 4",
      },
    },
  ],
};
