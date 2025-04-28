import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

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

export type ModularStructureProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="mb-3 bg-background-secondary px-2 py-1 text-sm font-semibold md:mb-4">
      {children}
    </span>
  );

export const ModularStructure = (props: ModularStructureProps) => {
  const { tagline, heading, description, sections } = {
    ...ModularStructureDefaults,
    ...props,
  };

  
  return (
    <section id="section-modular-structure" className="px-40 py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-2 gap-6 items-start
                        md:grid-cols-2 md:gap-8
                        md:[&>*:nth-child(2n-1)]:transform md:[&>*:nth-child(2n-1)]:translate-y-20">
          {sections.map((section, index) => (
            <div key={index} className="border border-border-primary">
              <div className="flex items-center justify-center">
                <img
                  src={section.image.src}
                  className="size-full object-cover"
                  alt={section.image.alt}
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <span className="mb-3 bg-background-secondary px-2 py-1 text-sm font-semibold md:mb-4">
                  {section.tagline}
                </span>
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

export const ModularStructureDefaults: Props = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  sections: [
    {
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      buttons: [
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 1",
      },
    },
    {
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      buttons: [
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 2",
      },
    },
    {
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      buttons: [
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image-landscape.svg",
      },
    },
    {
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      buttons: [
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image-landscape.svg",
      },
    },
  ],
};
