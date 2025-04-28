import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSection = {
  heading: string;
  description: string;
};

type Props = {
  featureSections: FeatureSection[];
  image: ImageProps;
};

export type IndustriesContentProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const IndustriesContent = (props: IndustriesContentProps) => {
  const { featureSections, image } = {
    ...IndustriesContentDefaults,
    ...props,
  };
  return (
    <section id="industry-tab-content" className="pb-16 md:pb-24 lg:pb-36 pt-0">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 max-w-xs">
            {featureSections.map((section, index) => (
              <div key={index} className="flex self-start">
                <div>
                  <div className="border-l-2 border-black pl-4">
                    <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.heading}</h1>
                  </div>
                  <p className="mb-8 pl-4">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-full flex items-stretch">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const IndustriesContentDefaults: Props = {
  featureSections: [
    {
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
