type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  quote: string;
  logo: ImageProps;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
};

export type QuoteProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Quote = (props: QuoteProps) => {
  const { quote, name, position, companyName } = {
    ...QuoteDefaults,
    ...props,
  };
  return (
    <section id="section-quote" className="px-40 py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          <blockquote className="text-xl font-bold md:text-2xl">{quote}</blockquote>
          <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
            <div className="mb-3 md:mb-4"></div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold">{name}</p>
              <p>
                <span>{position}</span>, <span>{companyName}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const QuoteDefaults: Props = {
  quote:
    "We're building a smarter way to understand your customers, and act on what matters most. We're just getting started.",
  logo: { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo" },
  avatar: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Testimonial avatar",
  },
  name: "Name Surname",
  position: "Position",
  companyName: "Company name",
};
